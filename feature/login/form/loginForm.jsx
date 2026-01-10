"use client";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { loginFormSchema } from "@/feature/login/schema/loginFormSchema";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import axiosInstance from "@/server/axios/axios";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Spinner } from "@/components/ui/spinner";
const { Button } = require("@/components/ui/button");
const { Input } = require("@/components/ui/input");

const LoginForm = () => {
    const [loginResponse, setLoginResponse] = useState(undefined);
    const navigate = useRouter();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(loginFormSchema),
        mode: "onChange",
    });

    //login mutation
    const loginUser = useMutation({
        mutationFn: (authenticatedUser) => {
            return axiosInstance.post("/login", authenticatedUser);
        },

        onSuccess: (response) => {
            setLoginResponse(response);
            localStorage.setItem("authToken", response?.data?.token);
        },
    });

    //onsubmit
    const onSubmit = (data) => {
        console.log(data, "data");
        loginUser.mutate(data);
    };

    useEffect(() => {
        console.log(loginResponse?.status, "status");
        if (loginResponse?.status === 200) {
            navigate.push("/home");
        }
    }, [loginResponse, navigate]);

    console.log(loginUser);

    return (
        <div className="w-80 gap-2 flex flex-wrap flex-col">
            <form className="gap-2 flex flex-col" onSubmit={handleSubmit(onSubmit)} noValidate>
                <h1 className="text-2xl font-extrabold tracking-tight text-balance">Log In</h1>
                <Input name="email" type="email" placeholder="Email" {...register("email")} />
                {errors.email && <p className="text-sm text-red-500">{errors.email?.message}</p>}
                <Input name="password" type="password" placeholder="Password" {...register("password")} />
                {errors.email && <p className="text-sm text-red-500">{errors.password?.message}</p>}
                <Button className="w-full" disabled={loginUser?.isPending}>
                    {loginUser?.isPending && <Spinner />}
                    Login
                </Button>
            </form>
        </div>
    );
};

export default LoginForm;

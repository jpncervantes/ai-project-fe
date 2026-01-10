"use client";

import { CalendarPicker } from "@/components/datepicker";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Spinner } from "@/components/ui/spinner";
import { useRegister } from "@/server/mutations/authMutations";
import { format } from "date-fns";
import { useState } from "react";
import { useForm } from "react-hook-form";

const RegistrationForm = () => {
    const [date, setDate] = useState();
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
    } = useForm();

    const { registerUser } = useRegister();

    const setBirthdayValue = (value) => {
        setDate(value);
        setValue("birthday", value);
    };

    const onSubmit = (data) => {
        if (data.birthday instanceof Date && !isNaN(data.birthday)) {
            data.birthday = format(data.birthday, "yyyy-MM-dd");
        }

        //combine name
        const payload = {
            name: data.firstName + " " + data.middleName + " " + data.lastName,
            birthday: data.birthday,
            email: data.email,
            password: data.password,
            password_confirmation: data.passwordConfirmation,
        };
        registerUser.mutate(payload);
    };

    return (
        <>
            <form className="gap-2 flex flex-col" onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col gap-2">
                    <span className="text-sm text-gray-500 font-semibold">Please enter your details.</span>
                    <Input {...register("firstName")} placeholder="First Name" />
                    <Input {...register("lastName")} placeholder="Last Name" />
                    <Input {...register("middleName")} placeholder="Middle Name" />
                    <CalendarPicker {...register("birthday")} onChange={(value) => setBirthdayValue(value)} date={date} />
                </div>
                <div className="flex flex-col gap-2">
                    <span className="text-sm text-gray-500 font-semibold">Secure your account.</span>
                    <Input {...register("email")} placeholder="Email" />
                    <Input {...register("password")} placeholder="Password" />
                    <Input {...register("passwordConfirmation")} placeholder="Password Confirmation" />
                </div>
                <Button disabled={registerUser?.isPending}>
                    {registerUser?.isPending && <Spinner />}
                    Submit
                </Button>
            </form>
        </>
    );
};
export default RegistrationForm;

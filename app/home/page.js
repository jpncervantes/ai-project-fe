"use client";
import axiosInstance, { getCsrfCookie } from "@/server/axios/axios";
import ProtectedRoute from "@/lib/protectedRoute";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import ChatBot from "@/feature/homepage/chatbot/chatbot";

const HomePage = () => {
    const handleClick = () => {
        refetchTestApi();
    };

    const { data, refetch: refetchTestApi } = useQuery({
        queryKey: ["test"],
        queryFn: async () => {
            const response = await axiosInstance.get("/test-api");
            return response.data;
        },
        enabled: false,
    });
    return (
        <ProtectedRoute>
            <div className="h-screen relative flex">
                <h1 className="text-4xl font-extrabold tracking-tight text-balance absolute p-4 w-full">ai app</h1>
                <div className="flex w-full h-full items-center justify-center">
                    <ChatBot />
                </div>
            </div>
        </ProtectedRoute>
    );
};

export default HomePage;

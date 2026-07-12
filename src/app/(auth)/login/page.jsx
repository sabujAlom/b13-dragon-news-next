"use client";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [isShowPassword, setIsShowPassword] = useState(false)

  const handleLoginFunc = async (data) => {
    console.log(data);

    const { data:res, error } = await authClient.signIn.email({
      email: data.email, // required
      password: data.password, // required
      rememberMe: true,
      callbackURL: "/",
    });
    
    console.log(res, error)
  };

  

  return (
    <div className="container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100">
      <div className="p-4 rounded-xl bg-white">
        <h1 className="font-bold text-3xl text-center mb-6">
          Login your account
        </h1>

        <form className="space-y-4" onSubmit={handleSubmit(handleLoginFunc)}>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Email address</legend>
            <input
              type="email"
              className="input"
              {...register("email", { required: "Email field is required" })}
              placeholder="Type here email"
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </fieldset>

          <fieldset className="fieldset relative">
            <legend className="fieldset-legend">Password</legend>
            <input
              type={isShowPassword? "text" : "password" }
              className="input"
              {...register("password", {
                required: "Password field is required",
              })}
              placeholder="Type here password"
            />
            <span className="absolute right-2 top-4.5"  onClick={()=>setIsShowPassword(!isShowPassword)}>
             {isShowPassword ? <FaEye/>: <FaEyeSlash/>} 
            </span>
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </fieldset>

          <button className="btn w-full bg-slate-800 text-white">Loging</button>
        </form>

        <p className="mt-4">
          Don't have an account?{" "}
          <Link href={"/register"} className="text-blue-500">
            Register
          </Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default LoginPage;

"use client"
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

const RegisterPage = () => {
    const {register,
    handleSubmit, 
    watch,
    formState: { errors }} = useForm();

   const handleRegisterFunc = (data) =>{

      console.log(data)
      
      const {email, name, photo, password} = data;
      console.log(name, photo)
   }




  return (
    <div className="container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100">
      <div className="p-4 rounded-xl bg-white">
        <h1 className="font-bold text-3xl text-center mb-6">Register your account</h1>

        <form className="space-y-4" onSubmit={handleSubmit(handleRegisterFunc)}>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Name</legend>
            <input type="text" className="input" 
            {...register("name", {required: "Name field is required"})}
            placeholder="Type here name" />
            {errors.name && <p className="text-red-500">{errors.name.message}</p>}
          </fieldset>

          <fieldset className="fieldset">
            <legend className="fieldset-legend">Photo URL</legend>
            <input type="text"
            className="input"
            {...register("photo", { required: "Photo URL field is required" })}
            placeholder="Type here photo" />
            {errors.photo && <p className="text-red-500">{errors.photo.message}</p>}
          </fieldset>

          <fieldset className="fieldset">
            <legend className="fieldset-legend">Email</legend>
            <input type="email"
            className="input"
            {...register("email", { required: "Email field is required" })}
            placeholder="Type here email" />
            {errors.email && <p className="text-red-500">{errors.email.message}</p>}
          </fieldset>

          <fieldset className="fieldset">
            <legend className="fieldset-legend">Password</legend>
            <input type="password"
            className="input"
            {...register("password", { required: "Password field is required" })}
            placeholder="Type here password" />
            {errors.password && <p className="text-red-500">{errors.password.message}</p>}
          </fieldset>

          <button className="btn w-full bg-slate-800 text-white">Register</button>
        </form>

        <p className="mt-4">Don't have an account? <Link href={"/register"} className="text-blue-500">Register</Link> </p>
      </div>
    </div>
  );
};

export default RegisterPage;

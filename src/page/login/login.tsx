// // import React, { useState } from "react"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent } from "@/components/ui/card"
// import { InputField } from "@/components/custom/index"
// import LogInIcon from "@/assets/images/LoginIcon.svg"

// const LoginPage = () => {
// 	// const [formData, setFormData] = useState({
// 	// 	userName: "",
// 	// 	password: ""
// 	// });
// 	// const handleChange = () => {
// 	// 	setFormData({ ...formData, [name]: value })
// 	// }
// 	return (
// 		<div className="min-h-screen w-full flex items-center justify-center bg-slate-50 p-4">
// 			<Card className="w-full h-full overflow-hidden rounded-3xl shadow-[0_0_40px_rgba(8,_112,_184,_0.07)]">
// 				<CardContent className="p-0">
// 					<div className="grid grid-cols-2 h-full">
// 						{/* Left side - Illustration */}
// 						<div className="p-12 flex items-center justify-center bg-white">
// 							<div className="w-full h-full flex items-center justify-center">
// 								<img src={LogInIcon} alt="Login Icon" className="max-w-full max-h-full object-contain" />
// 							</div>
// 						</div>

// 						{/* Right side - Login Form */}
// 						<div className="p-12 flex flex-col justify-center">
// 							<div className="w-full max-w-sm mx-auto space-y-8">
// 								<div className="space-y-2">
// 									<h1 className="text-3xl font-semibold tracking-tight">
// 										Log<span className="text-blue-500">in</span>
// 									</h1>
// 								</div>
// 								<form className="space-y-6">
// 									<div className="space-y-2">
// 										<InputField
// 											htmlFor="username"
// 											labelClassName="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
// 											label={"Username"}
// 											id={"username"}
// 											placeholder="Enter your Name Here"
// 											required={true}
// 											type="text"
// 											inputClassName="h-12 px-4 rounded-md border border-gray-300"
// 										/>
// 									</div>
// 									<div className="space-y-2">
// 										<InputField
// 											htmlFor="password"
// 											labelClassName="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
// 											label={"Password"}
// 											id={"password"}
// 											placeholder="Enter Password Here"
// 											required={true}
// 											type="password"
// 											inputClassName="h-12 px-4 rounded-md border border-gray-300"
// 										/>
// 									</div>
// 									<div className="flex items-center justify-between pt-2">
// 										<a
// 											href="#"
// 											className="text-sm text-blue-500 hover:text-blue-600"
// 										>
// 											Forgot Password?
// 										</a>
// 										<Button
// 											type="submit"
// 											className="bg-blue-500 hover:bg-blue-600 h-12 px-6 rounded-md"
// 										>
// 											Login
// 										</Button>
// 									</div>
// 								</form>
// 							</div>
// 						</div>
// 					</div>
// 				</CardContent>
// 			</Card>
// 		</div>
// 	)
// }

// export default LoginPage;

import { Card, CardContent } from "@/components/ui/card";
import { InputField } from "@/components/custom/index";
import LogInIcon from "@/assets/images/LoginIcon.svg";
import { useNavigate } from "react-router-dom"; // Import useNavigate
// import { useAuth } from "@/context/AuthContext";
import { Controller, useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { signin } from "@/zustand/login/action"

const schema = z.object({
	email: z.string({ required_error: "User Name is required" }),
	password: z.string({ required_error: "Password is required" }),
});

const LoginPage = () => {
	const navigation = useNavigate()
	const { control, handleSubmit, formState: { errors, }, trigger } = useForm({
		resolver: zodResolver(schema),
		mode: "onChange", // Validate on every change
		reValidateMode: "onChange",
	})

	const onSubmit = async (data: any) => {
		console.log(data)
		try {
			// Call the signin function with form data
			const response = await signin(data);
			console.log('response', response);
			if (response?.status) {
				alert(response?.message)
				navigation("/")
			}

		} catch (err) {

		}
	}

	return (
		<div className="min-h-screen w-full flex items-center justify-center bg-slate-50 p-4">
			<Card className="w-full h-full overflow-hidden rounded-3xl shadow-[0_0_40px_rgba(8,_112,_184,_0.07)]">
				<CardContent className="p-0">
					<div className="grid grid-cols-2 h-full">
						{/* Left side - Illustration */}
						<div className="p-12 flex items-center justify-center bg-white">
							<div className="w-full h-full flex items-center justify-center">
								<img
									src={LogInIcon}
									alt="Login Icon"
									className="max-w-full max-h-full object-contain"
								/>
							</div>
						</div>

						{/* Right side - Login Form */}
						<div className="p-12 flex flex-col justify-center">
							<div className="w-full max-w-sm mx-auto space-y-8">
								<div className="space-y-2">
									<h1 className="text-3xl font-semibold tracking-tight">
										Log<span className="text-blue-500">in</span>
									</h1>
								</div>
								<form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
									<div className="space-y-2">
										<Controller
											name="email"
											control={control}
											render={({ field }) => (
												<InputField
													{...field}
													onChange={(e) => {
														field.onChange(e); // Update the field value
														trigger("email"); // Manually trigger validation
													}}
													htmlFor="email"
													labelClassName="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
													label={"Username"}
													id={"email"}
													placeholder="Enter your Name Here"
													isRequired={true}
													type="text"
													inputClassName="h-12 px-4 rounded-md border border-gray-300"
													error={errors.email?.message?.toString()}
												/>
											)}
										/>
									</div>
									<div className="space-y-2">
										<Controller
											name="password"
											control={control}
											render={({ field }) => (
												<InputField
													{...field}
													htmlFor="password"
													labelClassName="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
													label={"Password"}
													id={"password"}
													placeholder="Enter your Name Here"
													isRequired={true}
													type="password"
													inputClassName="h-12 px-4 rounded-md border border-gray-300"
													error={errors.password?.message?.toString()}
												/>
											)}
										/>
									</div>
									<div className="flex items-center justify-between pt-2">
										<a
											href="#"
											className="text-sm text-blue-500 hover:text-blue-600"
										>
											Forgot Password?
										</a>
										<button
											type="submit"
											onClick={() => trigger()} // Validate all fields
											className="bg-blue-500 hover:bg-blue-600 h-12 px-6 rounded-md"
										>
											Login
										</button>
									</div>
								</form>
							</div>
						</div>
					</div>
				</CardContent>
			</Card>
		</div>
	);
};

export default LoginPage;





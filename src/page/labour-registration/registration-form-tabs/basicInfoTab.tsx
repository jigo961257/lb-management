// updated zod which is not correct

// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import { UserCircle2, ArrowRight } from 'lucide-react'
// import InputField from "@/components/custom/InputField"
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import { z } from "zod";

// // 1. Define Zod Schema
// const schema = z.object({
//   firstName: z.string({
//     required_error: "This field is required",
//   }),
//   middleName: z.string({
//     required_error: "This field is required",
//   }),
//   lastName: z.string({
//     required_error: "This field is required",
//   }),
//   nameAsPerAadhar: z.string({
//     required_error: "This field is required",
//   }),
//   dob: z.string({
//     required_error: "This field is required",
//   }),
//   gender: z.enum(["male", "female", "other"], { required_error: "This field is required" }),
//   maritalStatus: z.enum(["single", "married"], { required_error: "This field is required" }),
//   mobileNumber: z
//     .string()
//     .regex(/^\d{10}$/, "Mobile Number must be 10 digits")
//     .nonempty("This field is required"),
//   presentAddress: z.string({
//     required_error: "This field is required",
//   }),
//   permanentAddress: z.string({
//     required_error: "This field is required",
//   }),
//   aadhar: z
//     .string()
//     .regex(/^\d{12}$/, "Aadhar Number must be 12 digits")
//     .nonempty("Aadhar Card Number is required"),
// });

// // 2. TypeScript Type from Zod Schema
// type FormData = z.infer<typeof schema>;


// export default function BasicInfoTab() {

//   const {
//     register,
//     handleSubmit,
//     // control,
//     formState: { errors },
//   } = useForm<FormData>({
//     resolver: zodResolver(schema),
//     defaultValues: {
//       firstName: "",
//       middleName: "",
//       lastName: "",
//       nameAsPerAadhar: "",
//       dob: "",
//       // gender: "",
//       // maritalStatus: "",
//       mobileNumber: "",
//       presentAddress: "",
//       permanentAddress: "",
//       aadhar: "",
//       // Additional fields
//       fatherName: "",
//       husbandName: "",
//       bloodGroup: "",
//       email: "",
//       emergencyContact: "",
//       nearestPoliceStation: "",
//       knownLanguages: "",
//       religion: "",
//       covidVaccination: "",
//       pan: "",
//       dateOfJoining: "",
//       reference: "",
//       relationWithReference: "",
//       referenceContact: "",
//       bankAccount: "",
//       accountHolder: "",
//       bankName: "",
//       ifsc: "",
//       branchName: "",
//     }
//     // mode: "onChange", // Validation runs as the user types
//   });

//   // 4. Submit Handler
//   const onSubmit = (data: any) => {
//     // alert()
//     // setFormData(data);
//     console.log("Form Data:", data);
//   };
//   console.log('errors', errors);

//   return (
//     <div className="min-h-screen">
//       <div className="container mx-auto py-6 space-y-6">
//         <form onSubmit={handleSubmit(onSubmit)}>
//           <div className="space-y-6">
//             {/* Personal Information */}
//             <Card className="rounded-lg border border-gray-200 shadow-sm">
//               <CardHeader className="bg-gray-50 border-b border-gray-200">
//                 <CardTitle>1. Personal Information</CardTitle>
//               </CardHeader>
//               <CardContent className="p-6">
//                 <div className="grid gap-6">
//                   {/* Employee Details Row */}
//                   <div className="flex flex-wrap gap-4">
//                     <div className="flex gap-2 items-center">
//                       <span className="text-sm font-medium">Employee Code:</span>
//                       <span className="text-sm font-semibold text-blue-600">ABC12345789</span>
//                     </div>
//                     <div className="flex gap-2 items-center">
//                       <span className="text-sm font-medium">Card Number:</span>
//                       <span className="text-sm text-gray-500">Enter Card No.</span>
//                     </div>
//                   </div>

//                   {/* Profile Picture */}
//                   <div className="flex justify-center">
//                     <div className="relative">
//                       <Avatar className="h-32 w-32">
//                         <AvatarFallback>
//                           <UserCircle2 className="h-20 w-20" />
//                         </AvatarFallback>
//                         <AvatarImage src="" />
//                       </Avatar>
//                       <Button size="sm" className="absolute bottom-0 right-0 rounded-full">
//                         Edit
//                       </Button>
//                     </div>
//                   </div>

//                   {/* Form Grid */}
//                   <div className="grid sm:grid-cols-3 gap-4">
//                     <div className="flex flex-col space-y-2">
//                       <InputField
//                         htmlFor="firstName"
//                         label="First Name"
//                         id="firstName"
//                         placeholder="Enter your first name"
//                         // onChange={(e) => {
//                         //   console.log('e.target.value', e.target.value);

//                         //   setFormData((prevData) => ({
//                         //     ...prevData,
//                         //     firstName: e.target.value,
//                         //   }));
//                         // }}
//                         {...register("firstName")}
//                         error={errors.firstName?.message}
//                       />
//                       {/* {errors.firstName && (
//                         <p className="text-red-500 text-sm">{errors.firstName.message}</p>
//                       )} */}
//                     </div>
//                     <div className="flex flex-col space-y-2">
//                       <InputField
//                         htmlFor="middleName"
//                         label="Middle Name"
//                         id="middleName"
//                         placeholder="Enter your middle name"
//                         {...register("middleName")}
//                       />
//                       {errors.middleName && (
//                         <p className="text-red-500 text-sm">{errors.middleName.message}</p>
//                       )}
//                     </div>
//                     <div className="flex flex-col space-y-2">
//                       <InputField
//                         htmlFor="lastName"
//                         label="Last Name"
//                         id="lastName"
//                         placeholder="Enter your last name"
//                         {...register("lastName")}
//                       />
//                       {errors.lastName && (
//                         <p className="text-red-500 text-sm">{errors.lastName.message}</p>
//                       )}
//                     </div>
//                     <div className="flex flex-col space-y-2">
//                       <InputField
//                         htmlFor="nameAsPerAadhar"
//                         label="Name as per Aadhar"
//                         id="nameAsPerAadhar"
//                         placeholder="Enter name as per Aadhar"
//                         {...register("nameAsPerAadhar")}
//                       />
//                       {errors.nameAsPerAadhar && (
//                         <p className="text-red-500 text-sm">{errors.nameAsPerAadhar.message}</p>
//                       )}
//                     </div>
//                     <div className="space-y-2">
//                       <label className="text-sm font-medium leading-none">
//                         Gender<span className="text-red-500">*</span>
//                       </label>
//                       <Select>
//                         <SelectTrigger className="h-10">
//                           <SelectValue placeholder="Select gender" />
//                         </SelectTrigger>
//                         <SelectContent>
//                           <SelectItem value="male">Male</SelectItem>
//                           <SelectItem value="female">Female</SelectItem>
//                           <SelectItem value="other">Other</SelectItem>
//                         </SelectContent>
//                       </Select>
//                       {errors.gender && (
//                         <p className="text-red-500 text-sm">{errors.gender.message}</p>
//                       )}
//                     </div>
//                     <div className="flex flex-col space-y-2">
//                       <InputField
//                         htmlFor="dob"
//                         label="DOB"
//                         id="dob"
//                         type="date"
//                       />
//                       {errors.dob && (
//                         <p className="text-red-500 text-sm">{errors.dob.message}</p>
//                       )}
//                     </div>
//                     <div className="space-y-2">
//                       <label className="text-sm font-medium leading-none">
//                         Marital Status<span className="text-red-500">*</span>
//                       </label>
//                       <Select>
//                         <SelectTrigger className="h-10">
//                           <SelectValue placeholder="Select status" />
//                         </SelectTrigger>
//                         <SelectContent>
//                           <SelectItem value="single">Single</SelectItem>
//                           <SelectItem value="married">Married</SelectItem>
//                         </SelectContent>
//                       </Select>
//                     </div>
//                     <div className="flex flex-col space-y-2">
//                       <InputField
//                         htmlFor="fatherName"
//                         label="Father Name"
//                         id="fatherName"
//                         placeholder="Enter father's name"
//                       />
//                     </div>
//                     <div className="flex flex-col space-y-2">
//                       <InputField
//                         htmlFor="husbandName"
//                         label="Husband Name"
//                         id="fatherName"
//                         placeholder="Enter hasband's name"
//                       />
//                     </div>
//                     <div className="space-y-2">
//                       <label className="text-sm font-medium leading-none">Blood Group</label>
//                       <Select>
//                         <SelectTrigger className="h-10">
//                           <SelectValue placeholder="Select blood group" />
//                         </SelectTrigger>
//                         <SelectContent>
//                           <SelectItem value="a+">A+</SelectItem>
//                           <SelectItem value="b+">B+</SelectItem>
//                           <SelectItem value="o+">O+</SelectItem>
//                         </SelectContent>
//                       </Select>
//                     </div>
//                     <div className="flex flex-col space-y-2">
//                       <InputField
//                         htmlFor="mobileNumber"
//                         label="Mobile Number"
//                         id="mobileNumber"
//                         placeholder="Enter mobile number"
//                         type="tel"
//                       />
//                     </div>
//                     <div className="flex flex-col space-y-2">
//                       <InputField
//                         htmlFor="email"
//                         label="Email Address"
//                         id="email"
//                         placeholder="Enter your email address"
//                         type="email"
//                       />
//                     </div>
//                     <div className="flex flex-col space-y-2">
//                       <InputField
//                         htmlFor="emergencyContact"
//                         label="Emergency Contact Number"
//                         id="emergencyContact"
//                         placeholder="Enter emergency contact number"
//                         type="tel"
//                       />
//                     </div>
//                     <div className="flex flex-col space-y-2">
//                       <InputField
//                         htmlFor="presentAddress"
//                         label="Present Address"
//                         id="presentAddress"
//                         placeholder="Enter your present address"
//                         {...register("presentAddress")}
//                       />
//                       {errors.presentAddress && (
//                         <p className="text-red-500 text-sm">{errors.presentAddress.message}</p>
//                       )}
//                     </div>
//                     <div className="flex flex-col space-y-2">
//                       <InputField
//                         htmlFor="permanentAddress"
//                         label="Permanent Address"
//                         id="permanentAddress"
//                         placeholder="Enter your permanent address"
//                       />
//                     </div>
//                     <div className="flex flex-col space-y-2">
//                       <InputField
//                         htmlFor="nearestPoliceStation"
//                         label="Nearest Police Station(Hometown)"
//                         id="nearestPoliceStation"
//                         placeholder="Enter Nearest Police Station here"
//                       />
//                     </div>
//                     <div className="space-y-2">
//                       <label className="text-sm font-medium leading-none">Known Languages</label>
//                       <Select>
//                         <SelectTrigger className="h-10">
//                           <SelectValue placeholder="Select languages" />
//                         </SelectTrigger>
//                         <SelectContent>
//                           <SelectItem value="english">English</SelectItem>
//                           <SelectItem value="hindi">Hindi</SelectItem>
//                         </SelectContent>
//                       </Select>
//                     </div>
//                     <div className="space-y-2">
//                       <label className="text-sm font-medium leading-none">Religion/Cast</label>
//                       <Select>
//                         <SelectTrigger className="h-10">
//                           <SelectValue placeholder="Select" />
//                         </SelectTrigger>
//                         <SelectContent>
//                           <SelectItem value="hindu">Hindu</SelectItem>
//                           <SelectItem value="christian">Christian</SelectItem>
//                         </SelectContent>
//                       </Select>
//                     </div>
//                     <div className="space-y-2">
//                       <label className="text-sm font-medium leading-none">COVID Vaccination</label>
//                       <div className="flex items-center gap-2">
//                         {/* <Switch id="covid" />
//                                             <label htmlFor="covid" className="text-sm">Yes</label> */}
//                       </div>
//                     </div>
//                     <div className="flex flex-col space-y-2">
//                       <InputField
//                         htmlFor="aadhar"
//                         label="Aadhar Card Number"
//                         id="aadhar"
//                         placeholder="Enter Aadhar card number"
//                         {...register("aadhar")}
//                       />
//                       {errors.aadhar && (
//                         <p className="text-red-500 text-sm">{errors.aadhar.message}</p>
//                       )}
//                     </div>
//                     <div className="flex flex-col space-y-2">
//                       <InputField
//                         htmlFor="pan"
//                         label="PAN Card Number"
//                         id="pan"
//                         placeholder="Enter PAN card number"
//                       />
//                     </div>
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>

//             {/* Professional Details */}
//             <Card className="rounded-lg border border-gray-200 shadow-sm">
//               <CardHeader className="bg-gray-50 border-b border-gray-200">
//                 <CardTitle>2. Professional Details</CardTitle>
//               </CardHeader>
//               <CardContent className="p-6">
//                 <div className="grid sm:grid-cols-3 gap-4">
//                   <div className="flex flex-col space-y-2">
//                     <InputField
//                       htmlFor="dateOfJoining"
//                       label="Date of Joining"
//                       id="dateOfJoining"
//                       type="date"
//                     />
//                   </div>
//                   <div className="flex flex-col space-y-2">
//                     <InputField
//                       htmlFor="reference"
//                       label="Reference"
//                       id="reference"
//                       placeholder="Enter reference details"
//                     />
//                   </div>
//                   <div className="flex flex-col space-y-2">
//                     <InputField
//                       htmlFor="relationwithReference"
//                       label="Relation With Reference"
//                       id="relationwithReference"
//                       placeholder="Enter your Relation Here"
//                     />
//                   </div>
//                   <div className="flex flex-col space-y-2">
//                     <InputField
//                       htmlFor="referenceContact"
//                       label="Reference Contact Number"
//                       id="referenceContact"
//                       placeholder="Enter reference contact number"
//                       type="tel"
//                     />
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>

//             {/* Bank Details */}
//             <Card className="rounded-lg border border-gray-200 shadow-sm">
//               <CardHeader className="bg-gray-50 border-b border-gray-200">
//                 <CardTitle>3. Bank Details</CardTitle>
//               </CardHeader>
//               <CardContent className="p-6">
//                 <div className="grid sm:grid-cols-3 gap-4">
//                   <div className="flex flex-col space-y-2">
//                     <InputField
//                       htmlFor="bankAccount"
//                       label="Bank Account Number"
//                       id="bankAccount"
//                       placeholder="Enter bank account number"
//                     />
//                   </div>
//                   <div className="flex flex-col space-y-2">
//                     <InputField
//                       htmlFor="accountHolder"
//                       label="Account Holder Name"
//                       id="accountHolder"
//                       placeholder="Enter account holder name"
//                     />
//                   </div>
//                   <div className="flex flex-col space-y-2">
//                     <InputField
//                       htmlFor="bankName"
//                       label="Bank Name"
//                       id="bankName"
//                       placeholder="Enter bank name"
//                     />
//                   </div>
//                   <div className="flex flex-col space-y-2">
//                     <InputField
//                       htmlFor="ifsc"
//                       label="IFSC Code"
//                       id="ifsc"
//                       placeholder="Enter IFSC code"
//                     />
//                   </div>
//                   <div className="flex flex-col space-y-2">
//                     <InputField
//                       htmlFor="branchName"
//                       label="Branch Name"
//                       id="branchName"
//                       placeholder="Enter branch name"
//                     />
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>

//             {/* Navigation Buttons */}
//             <div className="flex justify-end">
//               <Button className="gap-2 px-6" type="submit">
//                 Next
//                 <ArrowRight className="h-4 w-4" />
//               </Button>
//             </div>
//           </div>
//         </form>
//       </div>
//     </div>
//   )
// }

// 'use client'

// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
// import { UserCircle2, ArrowRight } from 'lucide-react'
// import InputField from "@/components/custom/InputField"
// import { zodResolver } from "@hookform/resolvers/zod"
// import { useForm, Controller } from "react-hook-form"
// import { z } from "zod"

// // Zod schema (unchanged)
// const schema = z.object({
//   firstName: z.string().min(1, { message: "First name is required" }),
//   lastName: z.string().min(1, { message: "Last name is required" }),
//   nameAsPerAadhar: z.string().min(1, { message: "Name as per Aadhar is required" }),
//   dob: z.string().min(1, { message: "Date of birth is required" }),
//   gender: z.string().min(1, { message: "Gender is required" }),
//   maritalStatus: z.string().min(1, { message: "Marital status is required" }),
//   mobileNumber: z.string().min(10, { message: "Mobile number must be at least 10 digits" }),
//   presentAddress: z.string(),
//   permanentAddress: z.string(),
//   aadhar: z.string(),
// })

// type FormData = z.infer<typeof schema>

// export default function BasicInfoTab() {
//   const {
//     register,
//     handleSubmit,
//     control,
//     formState: { errors },
//   } = useForm<FormData>({
//     resolver: zodResolver(schema),
//     defaultValues: {
//       firstName: '',
//       middleName: '',
//       lastName: '',
//       nameAsPerAadhar: '',
//       dob: '',
//       gender: undefined,
//       maritalStatus: undefined,
//       mobileNumber: '',
//       presentAddress: '',
//       permanentAddress: '',
//       aadhar: '',
//     },
//   })

//   const onSubmit = (data: FormData) => {
//     alert("Form submitted")
//     console.log("Form Data:", data)
//   }

//   return (
//     <div className="min-h-screen">
//       <div className="container mx-auto py-6 space-y-6">
//         <form onSubmit={handleSubmit(onSubmit)}>
//           <div className="space-y-6">
//             {/* Personal Information */}
//             <Card className="rounded-lg border border-gray-200 shadow-sm">
//               <CardHeader className="bg-gray-50 border-b border-gray-200">
//                 <CardTitle>1. Personal Information</CardTitle>
//               </CardHeader>
//               <CardContent className="p-6">
//                 <div className="grid gap-6">
//                   {/* Employee Details Row */}
//                   <div className="flex flex-wrap gap-4">
//                     <div className="flex gap-2 items-center">
//                       <span className="text-sm font-medium">Employee Code:</span>
//                       <span className="text-sm font-semibold text-blue-600">ABC12345789</span>
//                     </div>
//                     <div className="flex gap-2 items-center">
//                       <span className="text-sm font-medium">Card Number:</span>
//                       <span className="text-sm text-gray-500">Enter Card No.</span>
//                     </div>
//                   </div>

//                   {/* Profile Picture */}
//                   <div className="flex justify-center">
//                     <div className="relative">
//                       <Avatar className="h-32 w-32">
//                         <AvatarFallback>
//                           <UserCircle2 className="h-20 w-20" />
//                         </AvatarFallback>
//                         <AvatarImage src="" />
//                       </Avatar>
//                       <Button size="sm" className="absolute bottom-0 right-0 rounded-full">
//                         Edit
//                       </Button>
//                     </div>
//                   </div>

//                   {/* Form Grid */}
//                   <div className="grid sm:grid-cols-3 gap-4">
//                     <InputField
//                       htmlFor="firstName"
//                       label="First Name"
//                       placeholder="Enter your first name"
//                       {...register("firstName")}
//                       error={errors.firstName?.message}
//                     />
//                     <InputField
//                       htmlFor="middleName"
//                       label="Middle Name"
//                       placeholder="Enter your middle name"
//                       {...register("middleName")}
//                       error={errors.middleName?.message}
//                     />
//                     <InputField
//                       htmlFor="lastName"
//                       label="Last Name"
//                       placeholder="Enter your last name"
//                       {...register("lastName")}
//                       error={errors.lastName?.message}
//                     />
//                     <InputField
//                       htmlFor="nameAsPerAadhar"
//                       label="Name as per Aadhar"
//                       placeholder="Enter name as per Aadhar"
//                       {...register("nameAsPerAadhar")}
//                       error={errors.nameAsPerAadhar?.message}
//                     />
//                     <div className="space-y-2">
//                       <label className="text-sm font-medium leading-none">
//                         Gender<span className="text-red-500">*</span>
//                       </label>
//                       <Controller
//                         name="gender"
//                         control={control}
//                         render={({ field }) => (
//                           <Select onValueChange={field.onChange} value={field.value}>
//                             <SelectTrigger className="h-10">
//                               <SelectValue placeholder="Select gender" />
//                             </SelectTrigger>
//                             <SelectContent>
//                               <SelectItem value="male">Male</SelectItem>
//                               <SelectItem value="female">Female</SelectItem>
//                               <SelectItem value="other">Other</SelectItem>
//                             </SelectContent>
//                           </Select>
//                         )}
//                       />
//                       {errors.gender && (
//                         <p className="text-red-500 text-sm">{errors.gender.message}</p>
//                       )}
//                     </div>
//                     <InputField
//                       htmlFor="dob"
//                       label="DOB"
//                       type="date"
//                       {...register("dob")}
//                       error={errors.dob?.message}
//                     />
//                     <div className="space-y-2">
//                       <label className="text-sm font-medium leading-none">
//                         Marital Status<span className="text-red-500">*</span>
//                       </label>
//                       <Controller
//                         name="maritalStatus"
//                         control={control}
//                         render={({ field }) => (
//                           <Select onValueChange={field.onChange} value={field.value}>
//                             <SelectTrigger className="h-10">
//                               <SelectValue placeholder="Select status" />
//                             </SelectTrigger>
//                             <SelectContent>
//                               <SelectItem value="single">Single</SelectItem>
//                               <SelectItem value="married">Married</SelectItem>
//                             </SelectContent>
//                           </Select>
//                         )}
//                       />
//                       {errors.maritalStatus && (
//                         <p className="text-red-500 text-sm">{errors.maritalStatus.message}</p>
//                       )}
//                     </div>
//                     <InputField
//                       htmlFor="mobileNumber"
//                       label="Mobile Number"
//                       placeholder="Enter mobile number"
//                       {...register("mobileNumber")}
//                       error={errors.mobileNumber?.message}
//                     />
//                     <InputField
//                       htmlFor="presentAddress"
//                       label="Present Address"
//                       placeholder="Enter present address"
//                       {...register("presentAddress")}
//                       error={errors.presentAddress?.message}
//                     />
//                     <InputField
//                       htmlFor="permanentAddress"
//                       label="Permanent Address"
//                       placeholder="Enter permanent address"
//                       {...register("permanentAddress")}
//                       error={errors.permanentAddress?.message}
//                     />
//                     <InputField
//                       htmlFor="aadhar"
//                       label="Aadhar Card Number"
//                       placeholder="Enter Aadhar card number"
//                       {...register("aadhar")}
//                       error={errors.aadhar?.message}
//                     />
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>

//             {/* Navigation Buttons */}
//             <div className="flex justify-end">
//               <Button className="gap-2 px-6" type="submit">
//                 Next
//                 <ArrowRight className="h-4 w-4" />
//               </Button>
//             </div>
//           </div>
//         </form>
//       </div>
//     </div>
//   )
// }

import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { UserCircle2, ArrowRight } from "lucide-react";
import InputField from "@/components/custom/InputField";

export default function BasicInfoTab({ setActiveTab }: any) {
  // State to store the form data
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    nameAsPerAadhar: "",
    dob: "",
    gender: "",
    maritalStatus: "",
    mobileNumber: "",
    presentAddress: "",
    permanentAddress: "",
    aadhar: "",
    fatherName: "",
    husbandName: "",
    bloodGroup: "",
    email: "",
    emergencyContact: "",
    nearestPoliceStation: "",
    knownLanguages: "",
    religion: "",
    covidVaccination: "",
    pan: "",
    dateOfJoining: "",
    reference: "",
    relationWithReference: "",
    referenceContact: "",
    bankAccount: "",
    accountHolder: "",
    bankName: "",
    ifsc: "",
    branchName: "",
  });

  // Manual change handler for each input field
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data submitted:", formData);
    setActiveTab("nominee-details")
  };

  return (
    <div className="min-h-screen">
      <div className="container mx-auto py-6 space-y-6">
        <form onSubmit={handleSubmit}>
          <div className="space-y-6">
            {/* Personal Information */}
            <Card className="rounded-lg border border-gray-200 shadow-sm">
              <CardHeader className="bg-gray-50 border-b border-gray-200">
                <CardTitle>1. Personal Information</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid gap-6">
                  {/* Employee Details Row */}
                  <div className="flex flex-wrap gap-4">
                    <div className="flex gap-2 items-center">
                      <span className="text-sm font-medium">Employee Code:</span>
                      <span className="text-sm font-semibold text-blue-600">ABC12345789</span>
                    </div>
                    <div className="flex gap-2 items-center">
                      <span className="text-sm font-medium">Card Number:</span>
                      <span className="text-sm text-gray-500">Enter Card No.</span>
                    </div>
                  </div>

                  {/* Profile Picture */}
                  <div className="flex justify-center">
                    <div className="relative">
                      <Avatar className="h-32 w-32">
                        <AvatarFallback>
                          <UserCircle2 className="h-20 w-20" />
                        </AvatarFallback>
                        <AvatarImage src="" />
                      </Avatar>
                      <Button size="sm" className="absolute bottom-0 right-0 rounded-full">
                        Edit
                      </Button>
                    </div>
                  </div>

                  {/* Form Grid */}
                  <div className="grid sm:grid-cols-3 gap-4">
                    <div className="flex flex-col space-y-2">
                      <InputField
                        htmlFor="firstName"
                        label="First Name"
                        id="firstName"
                        name="firstName"
                        placeholder="Enter your first name"
                        value={formData.firstName}
                        onChange={handleChange}
                        required={true}
                      />
                    </div>
                    <div className="flex flex-col space-y-2">
                      <InputField
                        htmlFor="middleName"
                        label="Middle Name"
                        id="middleName"
                        name="middleName"
                        placeholder="Enter your middle name"
                        value={formData.middleName}
                        onChange={handleChange}
                        required={true}
                      />
                    </div>
                    <div className="flex flex-col space-y-2">
                      <InputField
                        htmlFor="lastName"
                        label="Last Name"
                        id="lastName"
                        name="lastName"
                        placeholder="Enter your last name"
                        value={formData.lastName}
                        onChange={handleChange}
                        required={true}
                      />
                    </div>
                    <div className="flex flex-col space-y-2">
                      <InputField
                        htmlFor="nameAsPerAadhar"
                        label="Name as per Aadhar"
                        id="nameAsPerAadhar"
                        name="nameAsPerAadhar"
                        placeholder="Enter name as per Aadhar"
                        value={formData.nameAsPerAadhar}
                        onChange={handleChange}
                        required={true}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium leading-none">
                        Gender
                      </label>
                      <select
                        value={formData.gender}
                        onChange={handleChange}
                        name="gender"
                        className=" h-10 border rounded"
                      >
                        <option value="" disabled>
                          Select status
                        </option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="female">Other</option>
                      </select>
                      {/* <Select
                        value={formData.gender}
                        onChange={handleChange}
                        name="gender"
                      >
                        <SelectTrigger className="h-10">
                          <SelectValue placeholder="Select gender" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="male">Male</SelectItem>
                          <SelectItem value="female">Female</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select> */}
                    </div>
                    <div className="flex flex-col space-y-2">
                      <InputField
                        htmlFor="dob"
                        label="DOB"
                        id="dob"
                        name="dob"
                        type="date"
                        value={formData.dob}
                        onChange={handleChange}
                        required={true}
                      />
                    </div>
                    <div className="space-y-2 grid">
                      <label className="text-sm font-medium leading-none">
                        Marital Status
                      </label>
                      {/* <Select
                        value={formData.maritalStatus}
                        // onChange={handleChange}
                        name="maritalStatus"
                      >
                        <SelectTrigger className="h-10">
                          <SelectValue placeholder="Select status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="single">Single</SelectItem>
                          <SelectItem value="married">Married</SelectItem>
                        </SelectContent>
                      </Select> */}
                      <select
                        value={formData.maritalStatus}
                        onChange={handleChange}
                        name="maritalStatus"
                        className=" h-10 border rounded"
                      >
                        <option value="" disabled>
                          Select status
                        </option>
                        <option value="single">Single</option>
                        <option value="married">Married</option>
                      </select>
                    </div>
                    <div className="flex flex-col space-y-2">
                      <InputField
                        htmlFor="fatherName"
                        label="Father Name"
                        id="fatherName"
                        name="fatherName"
                        placeholder="Enter father's name"
                        value={formData.fatherName}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="flex flex-col space-y-2">
                      <InputField
                        htmlFor="husbandName"
                        label="Husband Name"
                        id="husbandName"
                        name="husbandName"
                        placeholder="Enter husband's name"
                        value={formData.husbandName}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="space-y-2 grid">
                      <label className="text-sm font-medium leading-none">
                        Blood Group
                      </label>
                      <select
                        value={formData.bloodGroup}
                        onChange={handleChange}
                        name="bloodGroup"
                        className=" h-10 border rounded"
                      >
                        <option value="" disabled>
                          Select status
                        </option>
                        <option value="a">A+</option>
                        <option value="b">B+</option>
                        <option value="o">O+</option>
                      </select>
                      {/* <Select
                        value={formData.bloodGroup}
                        onChange={handleChange}
                        name="bloodGroup"
                      >
                        <SelectTrigger className="h-10">
                          <SelectValue placeholder="Select blood group" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="a+">A+</SelectItem>
                          <SelectItem value="b+">B+</SelectItem>
                          <SelectItem value="o+">O+</SelectItem>
                        </SelectContent>
                      </Select> */}
                    </div>
                    <div className="flex flex-col space-y-2">
                      <InputField
                        htmlFor="mobileNumber"
                        label="Mobile Number"
                        id="mobileNumber"
                        name="mobileNumber"
                        placeholder="Enter mobile number"
                        value={formData.mobileNumber}
                        onChange={handleChange}
                        type="tel"
                        required={true}
                      />
                    </div>
                    <div className="flex flex-col space-y-2">
                      <InputField
                        htmlFor="email"
                        label="Email Address"
                        id="email"
                        name="email"
                        placeholder="Enter your email address"
                        value={formData.email}
                        onChange={handleChange}
                        type="email"
                      />
                    </div>
                    <div className="flex flex-col space-y-2">
                      <InputField
                        htmlFor="emergencyContact"
                        label="Emergency Contact Number"
                        id="emergencyContact"
                        name="emergencyContact"
                        placeholder="Enter emergency contact number"
                        value={formData.emergencyContact}
                        onChange={handleChange}
                        type="tel"
                      />
                    </div>
                    <div className="flex flex-col space-y-2">
                      <InputField
                        htmlFor="presentAddress"
                        label="Present Address"
                        id="presentAddress"
                        name="presentAddress"
                        placeholder="Enter your present address"
                        value={formData.presentAddress}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="flex flex-col space-y-2">
                      <InputField
                        htmlFor="permanentAddress"
                        label="Permanent Address"
                        id="permanentAddress"
                        name="permanentAddress"
                        placeholder="Enter your permanent address"
                        value={formData.permanentAddress}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="flex flex-col space-y-2">
                      <InputField
                        htmlFor="nearestPoliceStation"
                        label="Nearest Police Station (Hometown)"
                        id="nearestPoliceStation"
                        name="nearestPoliceStation"
                        placeholder="Enter nearest police station"
                        value={formData.nearestPoliceStation}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium leading-none">
                        Known Languages
                      </label>
                      <select
                        value={formData.knownLanguages}
                        onChange={handleChange}
                        name="knownLanguages"
                        className=" h-10 border rounded"
                      >
                        <option value="" disabled>
                          Select status
                        </option>
                        <option value="english">English</option>
                        <option value="hindi">Hindi</option>
                      </select>
                      {/* <Select
                        value={formData.knownLanguages}
                        onChange={handleChange}
                        name="knownLanguages"
                      >
                        <SelectTrigger className="h-10">
                          <SelectValue placeholder="Select languages" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="english">English</SelectItem>
                          <SelectItem value="hindi">Hindi</SelectItem>
                        </SelectContent>
                      </Select> */}
                    </div>
                    <div className="space-y-2 grid">
                      <label className="text-sm font-medium leading-none">
                        Religion/Caste
                      </label>
                      <select
                        value={formData.religion}
                        onChange={handleChange}
                        name="religion"
                        className=" h-10 border rounded"
                      >
                        <option value="" disabled>
                          Select Religion
                        </option>
                        <option value="hindu">Hindu</option>
                        <option value="christian">Christian</option>
                      </select>
                      {/* will implement this */}
                      {/* <Select
                        value={formData.religion}
                        onChange={handleChange}
                        name="religion"
                      >
                        <SelectTrigger className="h-10">
                          <SelectValue placeholder="Select religion" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="hindu">Hindu</SelectItem>
                          <SelectItem value="christian">Christian</SelectItem>
                        </SelectContent>
                      </Select> */}
                    </div>
                    <div className="flex flex-col space-y-2">
                      <InputField
                        htmlFor="aadhar"
                        label="Aadhar Card Number"
                        id="aadhar"
                        name="aadhar"
                        placeholder="Enter Aadhar card number"
                        value={formData.aadhar}
                        onChange={handleChange}
                        type="text"
                        required={true}
                      />
                    </div>
                    <div className="flex flex-col space-y-2">
                      <InputField
                        htmlFor="pan"
                        label="PAN Card Number"
                        id="pan"
                        name="pan"
                        placeholder="Enter PAN card number"
                        value={formData.pan}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Professional Details */}
            <Card className="rounded-lg border border-gray-200 shadow-sm">
              <CardHeader className="bg-gray-50 border-b border-gray-200">
                <CardTitle>2. Professional Details</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid sm:grid-cols-3 gap-4">
                  <div className="flex flex-col space-y-2">
                    <InputField
                      htmlFor="dateOfJoining"
                      label="Date of Joining"
                      id="dateOfJoining"
                      name="dateOfJoining"
                      value={formData.dateOfJoining}
                      onChange={handleChange}
                      type="date"
                    />
                  </div>
                  <div className="flex flex-col space-y-2">
                    <InputField
                      htmlFor="reference"
                      label="Reference"
                      id="reference"
                      name="reference"
                      placeholder="Enter reference details"
                      value={formData.reference}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="flex flex-col space-y-2">
                    <InputField
                      htmlFor="relationWithReference"
                      label="Relation With Reference"
                      id="relationWithReference"
                      name="relationWithReference"
                      placeholder="Enter your relation"
                      value={formData.relationWithReference}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="flex flex-col space-y-2">
                    <InputField
                      htmlFor="referenceContact"
                      label="Reference Contact Number"
                      id="referenceContact"
                      name="referenceContact"
                      placeholder="Enter reference contact number"
                      value={formData.referenceContact}
                      onChange={handleChange}
                      type="tel"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Bank Details */}
            <Card className="rounded-lg border border-gray-200 shadow-sm">
              <CardHeader className="bg-gray-50 border-b border-gray-200">
                <CardTitle>3. Bank Details</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid sm:grid-cols-3 gap-4">
                  <div className="flex flex-col space-y-2">
                    <InputField
                      htmlFor="bankAccount"
                      label="Bank Account Number"
                      id="bankAccount"
                      name="bankAccount"
                      placeholder="Enter bank account number"
                      value={formData.bankAccount}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="flex flex-col space-y-2">
                    <InputField
                      htmlFor="accountHolder"
                      label="Account Holder Name"
                      id="accountHolder"
                      name="accountHolder"
                      placeholder="Enter account holder name"
                      value={formData.accountHolder}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="flex flex-col space-y-2">
                    <InputField
                      htmlFor="bankName"
                      label="Bank Name"
                      id="bankName"
                      name="bankName"
                      placeholder="Enter bank name"
                      value={formData.bankName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="flex flex-col space-y-2">
                    <InputField
                      htmlFor="ifsc"
                      label="IFSC Code"
                      id="ifsc"
                      name="ifsc"
                      placeholder="Enter IFSC code"
                      value={formData.ifsc}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="flex flex-col space-y-2">
                    <InputField
                      htmlFor="branchName"
                      label="Branch Name"
                      id="branchName"
                      name="branchName"
                      placeholder="Enter branch name"
                      value={formData.branchName}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Submit Button */}
            <div className="flex justify-end">
              <Button className="gap-2 px-6" type="submit">
                Next
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}



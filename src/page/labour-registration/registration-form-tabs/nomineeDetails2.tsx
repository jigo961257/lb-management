// import { InputField } from '@/components/custom'
// import { ArrowLeft, ArrowRight, Minus, UserPlus } from 'lucide-react'
// import { useState } from 'react'
// import { useDropzone } from 'react-dropzone';
// import { Controller, useForm } from "react-hook-form"
// import { useNavigate } from 'react-router-dom'
// import { z } from "zod"
// import { zodResolver } from "@hookform/resolvers/zod"

// type NomineeCardType = {
//     showMinus?: boolean;
//     nomineeNumber: number;
//     onMinusClick?: (index: number) => void;
// }

// interface DocumentType {
//     file: File;
//     preview: string;
// }

// const schema = z.object({
//     // name: z.string({ required_error: "Name is required" }),
//     name: z.string().optional(),
//     aadhar: z.string({ required_error: "Aadhar number is required" }),
//     dob: z.string({ required_error: "DOB is required" }),
//     nomineePercentage: z.string({ required_error: "Nominee percentage is required" }),
//     address: z.string({ required_error: "Address is required" }),
// })

// const NomineeDetails2 = ({ setActiveTab }: { setActiveTab: React.Dispatch<React.SetStateAction<string>> }) => {


//     const [nominee, setNominee] = useState([0])
//     const { control, handleSubmit, formState: { errors, }, setValue, getValues } = useForm({
//         resolver: zodResolver(schema)
//     })

//     const onSubmit = (data: any) => {
//         console.log(data)
//         alert("save data succesfully")
//         setActiveTab("documents")
//     }

//     const NomineeCard = ({ showMinus = true, nomineeNumber, onMinusClick }: NomineeCardType) => {

//         const [selectedFile, setSelectedFile] = useState<DocumentType | null>(null);

//         const onDrop = (acceptedFiles: File[]) => {
//             if (acceptedFiles[0]) {
//                 const file = acceptedFiles[0];
//                 setSelectedFile({
//                     file,
//                     preview: URL.createObjectURL(file)
//                 });
//             }
//         }

//         const { getRootProps, getInputProps, } = useDropzone({
//             onDrop,
//             accept: {
//                 'image/*': ['.jpeg', '.jpg', '.png']
//             },
//             maxSize: 2 * 1024 * 1024 // 2MB
//         })

//         return (
//             <div className='mt-10 rounded-md border border-gray-200 shadow-point-shadow bg-white p-6'>
//                 <section className="flex items-center justify-between">
//                     <section className="bg-gradient-to-r from-[#4594FF13] to-[#F5F5F526] rounded-full h-[50px] flex items-center justify-center w-1/4">
//                         {nomineeNumber + 1 || 1}. Personal Information
//                     </section>
//                     {showMinus ?
//                         <button className="bg-[#67A7FD30] text-white px-2 py-2 rounded-md shadow-point-shadow"
//                             onClick={() => {
//                                 onMinusClick && onMinusClick(nomineeNumber)
//                             }}
//                         >
//                             <Minus className="h-5 w-5 text-[#0060EF]" />
//                         </button>
//                         : null}
//                 </section>
//                 <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-5'>
//                     <section {...getRootProps()} className='row-span-4'>
//                         <input {...getInputProps()} />
//                         <section className="bg-white p-4 rounded-xl shadow-point-shadow h-full justify-center flex items-center">
//                             {selectedFile ? (
//                                 <div className="w-full h-full flex items-center justify-center">
//                                     <img
//                                         src={selectedFile.preview}
//                                         alt={selectedFile.file.name}
//                                         className="h-36 w-36 object-cover rounded-lg"
//                                     />
//                                 </div>
//                             ) : (
//                                 <svg width="227" height="226" viewBox="0 0 227 226" fill="none" xmlns="http://www.w3.org/2000/svg">
//                                     <g clip-path="url(#clip0_915_1522)">
//                                         <path d="M7.43682 147.312C26.4382 205.535 89.4797 237.513 147.965 218.593C154.036 216.579 159.926 214.061 165.573 211.064C165.609 211.052 165.573 210.993 165.599 210.971C166.272 210.535 166.783 209.892 167.054 209.141C167.325 208.389 167.341 207.569 167.1 206.807C166.794 205.874 166.129 205.1 165.251 204.654C164.372 204.209 163.352 204.129 162.414 204.433C162.305 204.486 162.2 204.546 162.098 204.612L162.049 204.559C156.801 207.352 151.323 209.692 145.674 211.554C91.0026 229.24 32.2818 199.452 14.5189 145.023C-3.24393 90.595 26.6793 32.1254 81.3452 14.4414C136.011 -3.24257 194.734 26.5449 212.498 80.9757C224.369 117.35 214.865 155.467 190.986 182.06C190.968 182.065 190.966 182.092 190.949 182.103C190.887 182.174 190.829 182.249 190.766 182.317C190.294 182.792 189.962 183.386 189.805 184.035C189.647 184.685 189.671 185.364 189.874 186.001C190.179 186.934 190.844 187.708 191.722 188.153C192.6 188.599 193.619 188.679 194.557 188.376C195.28 188.125 195.904 187.651 196.341 187.024L196.396 187.071C222.037 158.539 232.273 117.634 219.562 78.6849C200.562 20.4641 137.528 -11.5164 79.0425 7.40313C20.5571 26.3227 -11.5654 89.0856 7.43682 147.312Z" fill="#67A7FD" />
//                                         <path d="M113.501 127.183C136.073 127.183 154.442 145.785 154.442 168.636H161.985C161.985 141.57 140.236 119.546 113.501 119.546C86.7668 119.546 65.0146 141.57 65.0146 168.636H72.5578C72.5578 145.779 90.9155 127.183 113.501 127.183Z" fill="#67A7FD" />
//                                         <path d="M65.0146 167.818C65.0146 168.903 65.4476 169.944 66.2181 170.711C66.9887 171.478 68.0338 171.909 69.1236 171.909C70.2133 171.909 71.2584 171.478 72.029 170.711C72.7996 169.944 73.2325 168.903 73.2325 167.818C73.2325 166.733 72.7996 165.693 72.029 164.925C71.2584 164.158 70.2133 163.727 69.1236 163.727C68.0338 163.727 66.9887 164.158 66.2181 164.925C65.4476 165.693 65.0146 166.733 65.0146 167.818Z" fill="#67A7FD" />
//                                         <path d="M153.767 167.818C153.767 168.903 154.2 169.944 154.971 170.711C155.741 171.478 156.786 171.909 157.876 171.909C158.966 171.909 160.011 171.478 160.782 170.711C161.552 169.944 161.985 168.903 161.985 167.818C161.985 166.733 161.552 165.693 160.782 164.925C160.011 164.158 158.966 163.727 157.876 163.727C156.786 163.727 155.741 164.158 154.971 164.925C154.2 165.693 153.767 166.733 153.767 167.818Z" fill="#67A7FD" />
//                                         <path d="M99.7361 115.828C105.13 121.352 112.446 124.455 120.074 124.455C127.702 124.455 135.018 121.352 140.412 115.828C145.806 110.304 148.837 102.812 148.837 95.0007C148.837 87.189 145.806 79.6972 140.412 74.1735C137.741 71.4384 134.571 69.2688 131.081 67.7886C127.591 66.3084 123.851 65.5465 120.074 65.5465C112.446 65.5465 105.13 68.6497 99.7361 74.1735C97.0652 76.9085 94.9466 80.1555 93.5012 83.7291C92.0557 87.3026 91.3118 91.1327 91.3118 95.0007C91.3118 102.812 94.3421 110.304 99.7361 115.828Z" fill="#BAD4FF" />
//                                         <path d="M113.499 127.728C93.1086 127.728 76.5198 111.212 76.5198 90.9099C76.5198 70.6074 93.1086 54.0921 113.499 54.0921C133.889 54.0921 150.48 70.6101 150.48 90.9099C150.48 111.21 133.891 127.728 113.499 127.728ZM113.499 61.5232C107.66 61.5232 101.952 63.2469 97.0979 66.4764C92.2432 69.7058 88.4596 74.296 86.2253 79.6664C83.9911 85.0367 83.4067 90.9461 84.5459 96.6472C85.6852 102.348 88.497 107.585 92.6257 111.695C96.7544 115.805 102.015 118.604 107.741 119.738C113.468 120.871 119.403 120.289 124.797 118.064C130.191 115.839 134.802 112.072 138.045 107.238C141.288 102.405 143.019 96.7227 143.019 90.9099C143.009 83.1184 139.896 75.6488 134.362 70.1397C128.828 64.6305 121.325 61.5318 113.499 61.5232Z" fill="#67A7FD" />
//                                         <g filter="url(#filter0_d_915_1522)">
//                                             <rect x="162.713" y="171.908" width="46.0198" height="45.8177" rx="13" fill="white" shape-rendering="crispEdges" />
//                                             <path d="M176.348 204.147L175.636 203.909C175.544 204.184 175.619 204.488 175.829 204.689C176.038 204.89 176.345 204.952 176.616 204.848L176.348 204.147ZM179.579 197.821L179.05 197.29L179.05 197.29L179.579 197.821ZM178.383 199.096L177.786 198.643L178.383 199.096ZM177.164 201.711L176.452 201.473L176.452 201.473L177.164 201.711ZM177.775 200.076L177.104 199.741L177.775 200.076ZM182.347 200.931L181.818 200.399L181.818 200.399L182.347 200.931ZM181.198 202.006L180.739 201.412L181.198 202.006ZM178.869 203.181L179.138 203.881L178.869 203.181ZM180.323 202.572L179.969 201.91L180.323 202.572ZM194.301 189.037L194.83 189.569L194.83 189.569L194.301 189.037ZM191.355 186.105L191.884 186.637L191.884 186.637L191.355 186.105ZM181.069 197.085C181.069 196.671 180.733 196.335 180.319 196.335C179.905 196.335 179.569 196.671 179.569 197.085H181.069ZM180.319 200.001H179.569C179.569 200.415 179.905 200.751 180.319 200.751V200.001ZM183.282 200.751C183.696 200.751 184.032 200.415 184.032 200.001C184.032 199.586 183.696 199.251 183.282 199.251V200.751ZM193.772 188.506L181.818 200.399L182.876 201.463L194.83 189.569L193.772 188.506ZM180.108 198.353L191.884 186.637L190.826 185.574L179.05 197.29L180.108 198.353ZM178.601 202.481L176.079 203.447L176.616 204.848L179.138 203.881L178.601 202.481ZM177.059 204.386L177.875 201.949L176.452 201.473L175.636 203.909L177.059 204.386ZM179.05 197.29C178.442 197.895 178.087 198.246 177.786 198.643L178.981 199.55C179.204 199.255 179.472 198.987 180.108 198.353L179.05 197.29ZM177.875 201.949C178.16 201.099 178.281 200.742 178.446 200.411L177.104 199.741C176.881 200.187 176.725 200.661 176.452 201.473L177.875 201.949ZM177.786 198.643C177.525 198.988 177.296 199.355 177.104 199.741L178.446 200.411C178.597 200.108 178.776 199.82 178.981 199.55L177.786 198.643ZM181.818 200.399C181.246 200.969 181.003 201.208 180.739 201.412L181.656 202.599C182.012 202.325 182.329 202.007 182.876 201.463L181.818 200.399ZM179.138 203.881C179.86 203.605 180.28 203.445 180.677 203.233L179.969 201.91C179.675 202.068 179.356 202.191 178.601 202.481L179.138 203.881ZM180.739 201.412C180.497 201.599 180.24 201.766 179.969 201.91L180.677 203.233C181.02 203.05 181.348 202.837 181.656 202.599L180.739 201.412ZM193.772 186.637C194.291 187.153 194.291 187.989 193.772 188.506L194.83 189.569C195.939 188.466 195.939 186.677 194.83 185.574L193.772 186.637ZM194.83 185.574C193.724 184.473 191.932 184.473 190.826 185.574L191.884 186.637C192.405 186.118 193.251 186.118 193.772 186.637L194.83 185.574ZM179.569 197.085V200.001H181.069V197.085H179.569ZM180.319 200.751H183.282V199.251H180.319V200.751Z" fill="#67A7FD" />
//                                         </g>
//                                     </g>
//                                     <defs>
//                                         <filter id="filter0_d_915_1522" x="159.713" y="169.908" width="54.0198" height="53.8177" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
//                                             <feFlood flood-opacity="0" result="BackgroundImageFix" />
//                                             <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
//                                             <feOffset dx="1" dy="2" />
//                                             <feGaussianBlur stdDeviation="2" />
//                                             <feComposite in2="hardAlpha" operator="out" />
//                                             <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
//                                             <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_915_1522" />
//                                             <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_915_1522" result="shape" />
//                                         </filter>
//                                         <clipPath id="clip0_915_1522">
//                                             <rect width="227" height="226" fill="white" />
//                                         </clipPath>
//                                     </defs>
//                                 </svg>
//                             )}
//                         </section>
//                     </section>
//                     <Controller
//                         name={`name${nomineeNumber}`}
//                         control={control}
//                         render={({ field }) => (
//                             <InputField
//                                 {...field}
//                                 htmlFor={`name${nomineeNumber}`}
//                                 label="Name"
//                                 placeholder="Enter Name Here"
//                                 type='text'
//                                 inputFiledType='input'
//                                 isRequired={true}
//                             // error={errors.name?.message?.toString()}
//                             />
//                         )}
//                     />
//                     <Controller
//                         name="aadhar"
//                         control={control}
//                         render={({ field }) => (
//                             <InputField
//                                 {...field}
//                                 htmlFor="aadhar"
//                                 label="Aadhar Card Number"
//                                 placeholder="Enter Aadhar Number Here"
//                                 type='text'
//                                 inputFiledType='input'
//                                 isRequired={true}
//                                 error={errors.aadhar?.message?.toString()}
//                             />
//                         )}
//                     />
//                     <Controller
//                         name="dob"
//                         control={control}
//                         render={({ field }) => (
//                             <InputField
//                                 {...field}
//                                 htmlFor="dob"
//                                 label="DOB"
//                                 id="dob"
//                                 placeholder="DD/MM/YYYY"
//                                 type='date'
//                                 inputFiledType='input'
//                                 isRequired={true}
//                                 error={errors.dob?.message?.toString()}
//                             />
//                         )}
//                     />
//                     <Controller
//                         name="nomineePercentage"
//                         control={control}
//                         render={({ field }) => (
//                             <InputField
//                                 {...field}
//                                 htmlFor="nomineePercentage"
//                                 label="Nominee Percentage"
//                                 id="nomineePercentage"
//                                 placeholder="DD/MM/YYYY"
//                                 type='text'
//                                 inputFiledType='input'
//                                 isRequired={true}
//                                 error={errors.nomineePercentage?.message?.toString()}
//                             />
//                         )}
//                     />
//                     <Controller
//                         name="address"
//                         control={control}
//                         render={({ field }) => (
//                             <InputField
//                                 {...field}
//                                 htmlFor="address"
//                                 label="Address"
//                                 id="address"
//                                 placeholder="Enter Address Here"
//                                 type='text'
//                                 inputFiledType='input'
//                                 isRequired={true}
//                                 error={errors.address?.message?.toString()}
//                                 belowComponent={
//                                     <section className='flex gap-2 flex-col ml-2'>
//                                         <div className="flex items-center gap-2">
//                                             <input type="checkbox" id="sameAsPresent" className="" onChange={(e) => {
//                                                 if (e.target.checked) {
//                                                     // setValue('parmentAddress', getValues('presentAddress'))
//                                                 }
//                                             }} />
//                                             <label htmlFor="sameAsPresent" className='text-xs'>As same Present address</label>
//                                         </div>
//                                         <div className="flex items-center gap-2">
//                                             <input type="checkbox" id="sameAsParmanet" className="" onChange={(e) => {
//                                                 if (e.target.checked) {
//                                                     // setValue('parmentAddress', getValues('presentAddress'))
//                                                 }
//                                             }} />
//                                             <label htmlFor="sameAsParmanet" className='text-xs'>As same permanent address</label>
//                                         </div>
//                                     </section>
//                                 }
//                             />
//                         )}
//                     />
//                     <Controller
//                         name="relation"
//                         control={control}
//                         render={({ field }) => (
//                             <InputField
//                                 {...field}
//                                 htmlFor="relation"
//                                 label="Relation With Nominee"
//                                 id="relation"
//                                 name="relation"
//                                 placeholder="Enter Relation Here"
//                                 options={['Father', 'Mother', 'Son', 'Daughter', 'Wife', 'Husband']}
//                                 inputFiledType='select'
//                             />
//                         )}
//                     />
//                 </div>
//             </div>
//         )
//     }

//     return (
//         <form onSubmit={handleSubmit(onSubmit)} className="px-10">
//             <button className="flex items-center gap-2"
//                 onClick={() => setActiveTab('basic-info')}
//             >
//                 <ArrowLeft className="h-5 w-5" />
//                 <h2 className="text-sm font-semibold">Back</h2>
//             </button>

//             {nominee.map((_, index) => (
//                 <NomineeCard key={index} nomineeNumber={index}
//                     onMinusClick={(index) => {
//                         const newNominee = nominee.filter((_, i) => i !== index)
//                         setNominee(newNominee)
//                     }}
//                     showMinus={index !== 0}
//                 />
//             ))}
//             <section className='mt-5 flex justify-center items-center'>
//                 <button className="bg-[#2F80ED0D] text-[#2F80ED] px-4 py-2 rounded-full shadow-point-shadow border-[1px] border-[#2F80ED80] flex items-center gap-2"
//                     onClick={() => {
//                         setNominee([...nominee, 0])
//                     }}
//                 >
//                     <span className='font-semibold'>Add Another Nominee</span>
//                     <span>
//                         <UserPlus className="h-5 w-5 text-[#2F80ED]" />
//                     </span>
//                 </button>
//             </section>
//             <section className='flex items-center justify-between w-full mt-5'>

//                 <section className='flex items-center gap-2'>
//                     <ArrowLeft className='h-5 w-5 text-blue-500' />
//                     <button type="button" className="text-blue-500 rounded">Save & Go to Main</button>
//                 </section>
//                 <button type="submit" className='flex items-center py-2 px-4 bg-[#3FA8350D] gap-2 text-[#3FA835]'>
//                     {/* className=" text-[#3FA835] rounded">Next</button> */}
//                     Next
//                     <ArrowRight className='h-5 w-5 text-[#3FA835]' />
//                 </button>
//             </section>
//         </form>
//     )
// }

// export default NomineeDetails2

import { InputField } from '@/components/custom'
import { ArrowLeft, ArrowRight, Minus, UserPlus } from 'lucide-react'
import { useState } from 'react'
import { useDropzone } from 'react-dropzone';
import { Controller, useFieldArray, useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

type NomineeCardType = {
    index: number;
    showMinus: boolean;
    onMinusClick: (index: number) => void;
}

interface DocumentType {
    file: File;
    preview: string;
}

const nomineeSchema = z.object({
    name: z.string().min(1, "Name is required"),
    aadharNumber: z.string().min(1, "Aadhar number is required"),
    dob: z.string().min(1, "DOB is required"),
    nomineePercentage: z.string().min(1, "Nominee percentage is required"),
    address: z.string().min(1, "Address is required"),
    relationwithnominee: z.string().optional(),

    //     dob: z.string({ required_error: "DOB is required" }),
    //     nomineePercentage: z.string({ required_error: "Nominee percentage is required" }),
    //     address: z.string({ required_error: "Address is required" }),
})

const schema = z.object({
    nominees: z.array(nomineeSchema)
})

type FormData = z.infer<typeof schema>;

const NomineeDetails2 = ({ setActiveTab, formData, setFormData }: { setActiveTab: React.Dispatch<React.SetStateAction<string>> }) => {
    const { control, handleSubmit, formState: { errors } } = useForm<FormData>({
        resolver: zodResolver(schema),
        defaultValues: {
            nominees: [{ name: '', aadharNumber: '', dob: '', nomineePercentage: '', address: '', relationwithnominee: '' }]
        }
    })

    const { fields, append, remove } = useFieldArray({
        control,
        name: "nominees"
    });

    const onSubmit = (data: FormData) => {
        console.log(data)
        setFormData({
            nomineeDetails: data?.nominees
            , ...formData
        })
        setActiveTab("documents")
    }

    const NomineeCard = ({ index, showMinus, onMinusClick }: NomineeCardType) => {
        const [selectedFile, setSelectedFile] = useState<DocumentType | null>(null);

        const onDrop = (acceptedFiles: File[]) => {
            if (acceptedFiles[0]) {
                const file = acceptedFiles[0];
                setSelectedFile({
                    file,
                    preview: URL.createObjectURL(file)
                });
            }
        }

        const { getRootProps, getInputProps } = useDropzone({
            onDrop,
            accept: {
                'image/*': ['.jpeg', '.jpg', '.png']
            },
            maxSize: 2 * 1024 * 1024 // 2MB
        })

        return (
            <div className='mt-10 rounded-md border border-gray-200 shadow-point-shadow bg-white p-6'>
                <section className="flex items-center justify-between">
                    <section className="bg-gradient-to-r from-[#4594FF13] to-[#F5F5F526] rounded-full h-[50px] flex items-center justify-center w-1/4">
                        {index + 1}. Personal Information
                    </section>
                    {showMinus && (
                        <button
                            type="button"
                            className="bg-[#67A7FD30] text-white px-2 py-2 rounded-md shadow-point-shadow"
                            onClick={() => onMinusClick(index)}
                        >
                            <Minus className="h-5 w-5 text-[#0060EF]" />
                        </button>
                    )}
                </section>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-5'>
                    <section {...getRootProps()} className='row-span-4'>
                        <input {...getInputProps()} />
                        <section className="bg-white p-4 rounded-xl shadow-point-shadow h-full justify-center flex items-center">
                            {selectedFile ? (
                                <div className="w-full h-full flex items-center justify-center">
                                    <img
                                        src={selectedFile.preview}
                                        alt={selectedFile.file.name}
                                        className="h-36 w-36 object-cover rounded-lg"
                                    />
                                </div>
                            ) : (
                                <svg width="227" height="226" viewBox="0 0 227 226" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    {/* SVG content */}
                                </svg>
                            )}
                        </section>
                    </section>
                    <Controller
                        name={`nominees.${index}.name`}
                        control={control}
                        render={({ field }) => (
                            <InputField
                                {...field}
                                htmlFor={`nominees.${index}.name`}
                                label="Name"
                                id={`nominees.${index}.name`}
                                placeholder="Enter Name Here"
                                type='text'
                                inputFiledType='input'
                                isRequired={true}
                                error={errors.nominees?.[index]?.name?.message}
                            />
                        )}
                    />
                    <Controller
                        name={`nominees.${index}.aadharNumber`}
                        control={control}
                        render={({ field }) => (
                            <InputField
                                {...field}
                                htmlFor="aadharNumber"
                                label="Aadhar Card Number"
                                id={`nominees.${index}.aadharNumber`}
                                placeholder="Enter Aadhar Number Here"
                                type='text'
                                inputFiledType='input'
                                isRequired={true}
                                error={errors.nominees?.[index]?.aadharNumber?.message}
                            />
                        )}
                    />
                    <Controller
                        name={`nominees.${index}.dob`}
                        control={control}
                        render={({ field }) => (
                            <InputField
                                {...field}
                                htmlFor={`nominees.${index}.dob`}
                                name={`nominees.${index}.dob`}
                                label="DOB"
                                placeholder="DD/MM/YYYY"
                                id={`nominees.${index}.dob`}
                                type='date'
                                inputFiledType='input'
                                isRequired={true}
                                error={errors.nominees?.[index]?.dob?.message}
                            />
                        )}
                    />
                    <Controller
                        name={`nominees.${index}.nomineePercentage`}
                        control={control}
                        render={({ field }) => (
                            <InputField
                                {...field}
                                htmlFor={`nominees.${index}.nomineePercentage`}
                                name={`nominees.${index}.nomineePercentage`}
                                label="Nominee Percentage"
                                placeholder="Enter Percentage"
                                id={`nominees.${index}.nomineePercentage`}
                                type='text'
                                inputFiledType='input'
                                isRequired={true}
                                error={errors.nominees?.[index]?.nomineePercentage?.message}
                            />
                        )}
                    />
                    <Controller
                        name={`nominees.${index}.address`}
                        control={control}
                        render={({ field }) => (
                            <InputField
                                {...field}
                                htmlFor={`nominees.${index}.address`}
                                id={`nominees.${index}.address`}
                                label="Address"
                                placeholder="Enter Address here"
                                type='text'
                                inputFiledType='input'
                                isRequired={true}
                                error={errors.nominees?.[index]?.address?.message}
                                belowComponent={
                                    <section className='flex gap-2 flex-col ml-2'>
                                        <div className="flex items-center gap-2">
                                            <input type="checkbox" id={`sameAsPresent${index}`} className="" />
                                            <label htmlFor={`sameAsPresent${index}`} className='text-xs'>As same Present address</label>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <input type="checkbox" id={`sameAsPermanent${index}`} className="" />
                                            <label htmlFor={`sameAsPermanent${index}`} className='text-xs'>As same permanent address</label>
                                        </div>
                                    </section>
                                }
                            />
                        )}
                    />
                    <Controller
                        name={`nominees.${index}.relationwithnominee`}
                        control={control}
                        render={({ field }) => (
                            <InputField
                                {...field}
                                htmlFor={`nominees.${index}.relationwithnominee`}
                                label="Relation With Nominee"
                                placeholder="Enter Relation Here"
                                id={`nominees.${index}.relationwithnominee`}
                                type='text'
                                isRequired={true}
                                options={['Father', 'Mother', 'Son', 'Daughter', 'Wife', 'Husband']}
                                inputFiledType='select'
                                error={errors.nominees?.[index]?.relationwithnominee?.message}
                            />
                        )}
                    />
                </div>
            </div>
        )
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="px-10">
            <button type="button" className="flex items-center gap-2" onClick={() => setActiveTab('basic-info')}>
                <ArrowLeft className="h-5 w-5" />
                <h2 className="text-sm font-semibold">Back</h2>
            </button>

            {fields.map((field, index) => (
                <NomineeCard
                    key={field.id}
                    index={index}
                    showMinus={index !== 0}
                    onMinusClick={() => remove(index)}
                />
            ))}

            <section className='mt-5 flex justify-center items-center'>
                <button
                    type="button"
                    className="bg-[#2F80ED0D] text-[#2F80ED] px-4 py-2 rounded-full shadow-point-shadow border-[1px] border-[#2F80ED80] flex items-center gap-2"
                    onClick={() => append({ name: '', aadharNumber: '', dob: '', nomineePercentage: '', address: '', relationwithnominee: '' })}
                >
                    <span className='font-semibold'>Add Another Nominee</span>
                    <span>
                        <UserPlus className="h-5 w-5 text-[#2F80ED]" />
                    </span>
                </button>
            </section>

            <section className='flex items-center justify-between w-full mt-5'>
                <section className='flex items-center gap-2'>
                    <ArrowLeft className='h-5 w-5 text-blue-500' />
                    <button type="button" className="text-blue-500 rounded">Save & Go to Main</button>
                </section>
                <button type="submit" className='flex items-center py-2 px-4 bg-[#3FA8350D] gap-2 text-[#3FA835]'>
                    Next
                    <ArrowRight className='h-5 w-5 text-[#3FA835]' />
                </button>
            </section>
        </form>
    )
}

export default NomineeDetails2


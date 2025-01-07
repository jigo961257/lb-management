import { InputField } from '@/components/custom'
import FormContainer from '@/components/FormContainer'
import { ArrowLeft, SaveIcon } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Controller, useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

// Define the schema
const schema = z.object({
    occupation: z.string().optional(),
    natureOfWork: z.enum(['plumbing', 'housekeeping', 'electrician'], { required_error: "Nature of Work is required" }),
    category: z.enum(['semi-skilled', 'skilled', 'unskilled'], { required_error: "Category is required" }),
    department: z.string().optional(),
    dateOfLeaving: z.string().optional(),
    previousOrganizationName: z.string().optional(),
    dateOfExitPreviousEmployer: z.string().optional(),
    reasonOfLeave: z.string().optional(),
    workExperience: z.string().optional(),
    providedFundNumber: z.string().optional(),
    universalAccountNumber: z.string().optional(),
    employeeStateInsurance: z.string().optional(),
});



const WorkDetailsTab2 = ({ setActiveTab, formData, setFormData }: { setActiveTab: React.Dispatch<React.SetStateAction<string>> }) => {

    const navigation = useNavigate()

    const { control, handleSubmit, formState: { errors, }, setValue, getValues } = useForm({
        resolver: zodResolver(schema)
    })


    const onSubmit = (data: any) => {
        console.log(data)
        alert("save data succesfully")
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center gap-2">
            <button className="flex items-center gap-2"
                onClick={() => setActiveTab('documents')}
            >
                <ArrowLeft className="h-5 w-5" />
                <h2 className="text-sm font-semibold">Back</h2>
            </button>
            <FormContainer title='1. Work Details' className='mt-10'
                mainContainerStyle='mt-5 rounded-lg border border-gray-200 shadow-point-shadow bg-white w-full p-6 flex flex-col'
            >
                <Controller
                    name="occupation"
                    control={control}
                    render={({ field }) => (
                        <InputField
                            {...field}
                            htmlFor="occupation"
                            label="Occupation"
                            type='text'
                            defaultValue={'male'}
                            inputFiledType='select'
                            options={['plumbing', 'housekeeping', 'electrician']}
                            defaultChecked={getValues("occupation")}
                        />
                    )}
                />
                <Controller
                    name="natureOfWork"
                    control={control}
                    render={({ field }) => (
                        <InputField
                            {...field}
                            htmlFor="natureOfWork"
                            label="Nature of Work"
                            type='text'
                            isRequired={true}
                            defaultValue=""
                            inputFiledType='select'
                            options={['plumbing', 'housekeeping', 'electrician']}
                            defaultChecked={getValues("natureOfWork")}
                            error={errors.natureOfWork?.message?.toString()}
                        />
                    )}
                />
                <Controller
                    name="category"
                    control={control}
                    render={({ field }) => (
                        <InputField
                            {...field}
                            htmlFor="category"
                            label="Category"
                            type='text'
                            isRequired={true}
                            defaultValue=""
                            inputFiledType='select'
                            options={['semi-skilled', 'skilled', 'unskilled']}
                            defaultChecked={getValues("category")}
                            error={errors.category?.message?.toString()}
                        />
                    )}
                />
                <Controller
                    name="department"
                    control={control}
                    render={({ field }) => (
                        <InputField
                            {...field}
                            htmlFor="department"
                            label="Department"
                            id="department"
                            type="text"
                            inputFiledType='input'

                        />
                    )}
                />
                <Controller
                    name="dateOfLeaving"
                    control={control}
                    render={({ field }) => (
                        <InputField
                            {...field}
                            htmlFor="dateOfLeaving"
                            label="Date of Leaving"
                            id="dateOfLeaving"
                            type="date"
                            inputFiledType='input'
                            readOnly
                        />
                    )}
                />
            </FormContainer>

            <FormContainer title='2. Previous Work History' className='mt-10'
                mainContainerStyle='mt-5 rounded-lg border border-gray-200 shadow-point-shadow bg-white w-full p-6 flex flex-col'
            >
                <Controller
                    name="previousOrganizationName"
                    control={control}
                    render={({ field }) => (
                        <InputField
                            {...field}
                            htmlFor="previousOrganizationName"
                            label="Previous Organization Name"
                            id="previousOrganizationName"
                            name="previousOrganizationName"
                            type="text"
                            inputFiledType='input'
                        />
                    )}
                />
                <Controller
                    name="dateOfExitPreviousEmployer"
                    control={control}
                    render={({ field }) => (
                        <InputField
                            {...field}
                            htmlFor="dateOfExitPreviousEmployer"
                            label="Date of Exit Previous Employer"
                            id="dateOfExitPreviousEmployer"
                            type="date"
                            inputFiledType='input'

                        />
                    )}
                />
                <Controller
                    name="reasonOfLeave"
                    control={control}
                    render={({ field }) => (
                        <InputField
                            {...field}
                            htmlFor="reasonOfLeave"
                            label="Reason of Leave"
                            id="reasonOfLeave"
                            name="reasonOfLeave"
                            type="text"
                            inputFiledType='input'
                        />
                    )}
                />
                <Controller
                    name="workExperience"
                    control={control}
                    render={({ field }) => (
                        <InputField
                            {...field}
                            htmlFor="workExperience"
                            label="Work Experience"
                            id="workExperience"
                            name="workExperience"
                            type="text"
                            inputFiledType='input'
                        />
                    )}
                />
                <Controller
                    name="providedFundNumber"
                    control={control}
                    render={({ field }) => (
                        <InputField
                            {...field}
                            htmlFor="providedFundNumber"
                            label="Provident Fund Number"
                            id="providedFundNumber"
                            type="text"
                            inputFiledType='input'
                        />
                    )}
                />
                <Controller
                    name="universalAccountNumber"
                    control={control}
                    render={({ field }) => (
                        <InputField
                            {...field}
                            htmlFor="universalAccountNumber"
                            label="Universal Account Number (UAN)"
                            id="universalAccountNumber"
                            name="universalAccountNumber"
                            type="text"
                            inputFiledType='input'
                        />
                    )}
                />
                <Controller
                    name="employeeStateInsurance"
                    control={control}
                    render={({ field }) => (
                        <InputField
                            {...field}
                            htmlFor="employeeStateInsurance"
                            label="Employee State Insurance (ESIC Number)"
                            id="employeeStateInsurance"
                            name="employeeStateInsurance"
                            type="text"
                            inputFiledType='input'
                        />
                    )}
                />
            </FormContainer>

            <section className='mt-10 flex justify-end '>
                <button type="submit" className='flex items-center gap-3 bg-[#3FA8350D] rounded-full px-5 py-2 text-[#3FA835]'
                // onClick={() => {
                //     alert('Labour Registration Form Submitted Successfully')
                //     navigation('/')
                // }}
                >
                    <SaveIcon className='h-5 w-5 ' />
                    Save
                </button>
            </section>
        </form>
    )
}

export default WorkDetailsTab2
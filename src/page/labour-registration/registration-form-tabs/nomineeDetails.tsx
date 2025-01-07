// import { useState } from 'react'
// import { ArrowLeft } from 'lucide-react'
// import { Button } from "@/components/ui/button"
// import { Card, CardContent } from "@/components/ui/card"
// import { Checkbox } from "@/components/ui/checkbox"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"
// import {
//     Select,
//     SelectContent,
//     SelectItem,
//     SelectTrigger,
//     SelectValue,
// } from "@/components/ui/select"

// const NomineeSection = ({ index, onRemove, isRemovable }: any) => {
//     return (
//         <Card className="mx-auto mb-6">
//             <CardContent className="p-4 sm:p-6">
//                 <div className="mb-4 sm:mb-6 flex items-center justify-between">
//                     <h2 className="text-base sm:text-lg font-semibold">{index + 1}. Nominee Details</h2>
//                     {isRemovable && (
//                         <Button
//                             onClick={() => onRemove(index)}
//                             variant="ghost"
//                             size="icon"
//                             className="rounded-full h-8 w-8 bg-blue-50 text-blue-500"
//                         >
//                             -
//                         </Button>
//                     )}
//                 </div>

//                 <div className="grid gap-4 sm:gap-6 lg:grid-cols-[200px,1fr]">
//                     {/* Profile Photo Section */}
//                     <div className="relative w-40 sm:w-48 lg:w-full mx-auto lg:mx-0">
//                         <div className="aspect-square overflow-hidden rounded-lg bg-gray-100">
//                             <img
//                                 src="/api/placeholder/200/200"
//                                 alt="Nominee photo"
//                                 className="h-full w-full object-cover"
//                             />
//                         </div>
//                         <Button
//                             size="icon"
//                             variant="outline"
//                             className="absolute bottom-2 right-2 h-8 w-8 rounded-full bg-white"
//                         >
//                             <svg
//                                 className="h-4 w-4"
//                                 fill="none"
//                                 stroke="currentColor"
//                                 viewBox="0 0 24 24"
//                             >
//                                 <path
//                                     strokeLinecap="round"
//                                     strokeLinejoin="round"
//                                     strokeWidth="2"
//                                     d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
//                                 />
//                             </svg>
//                         </Button>
//                     </div>

//                     {/* Form Fields */}
//                     <div className="grid gap-4">
//                         <div className="grid gap-4 sm:grid-cols-2">
//                             <div className="space-y-2">
//                                 <Label htmlFor={`name-${index}`}>
//                                     Name<span className="text-red-500">*</span>
//                                 </Label>
//                                 <Input
//                                     id={`name-${index}`}
//                                     placeholder="Enter Name Here"
//                                     className="h-10 sm:h-12"
//                                     required
//                                 />
//                             </div>
//                             <div className="space-y-2">
//                                 <Label htmlFor={`aadhar-${index}`}>
//                                     Aadhar Card Number<span className="text-red-500">*</span>
//                                 </Label>
//                                 <Input
//                                     id={`aadhar-${index}`}
//                                     placeholder="Enter Aadhar Number Here"
//                                     className="h-10 sm:h-12"
//                                     required
//                                 />
//                             </div>
//                         </div>

//                         <div className="grid gap-4 sm:grid-cols-2">
//                             <div className="space-y-2">
//                                 <Label>
//                                     DOB<span className="text-red-500">*</span>
//                                 </Label>
//                                 <Select>
//                                     <SelectTrigger className="h-10 sm:h-12">
//                                         <SelectValue placeholder="DD/MM/YYYY" />
//                                     </SelectTrigger>
//                                     <SelectContent>
//                                         <SelectItem value="date">DD/MM/YYYY</SelectItem>
//                                     </SelectContent>
//                                 </Select>
//                             </div>
//                             <div className="space-y-2">
//                                 <Label>
//                                     Nominee Percentage<span className="text-red-500">*</span>
//                                 </Label>
//                                 <Select>
//                                     <SelectTrigger className="h-10 sm:h-12">
//                                         <SelectValue placeholder="Enter Percentage Here" />
//                                     </SelectTrigger>
//                                     <SelectContent>
//                                         <SelectItem value="100">100%</SelectItem>
//                                         <SelectItem value="75">75%</SelectItem>
//                                         <SelectItem value="50">50%</SelectItem>
//                                         <SelectItem value="25">25%</SelectItem>
//                                     </SelectContent>
//                                 </Select>
//                             </div>
//                         </div>

//                         <div className="space-y-2">
//                             <Label htmlFor={`address-${index}`}>
//                                 Address<span className="text-red-500">*</span>
//                             </Label>
//                             <Input
//                                 id={`address-${index}`}
//                                 placeholder="Enter Address Here"
//                                 className="h-10 sm:h-12"
//                                 required
//                             />
//                         </div>

//                         <div className="space-y-2">
//                             <Label>
//                                 Relation With Nominee<span className="text-red-500">*</span>
//                             </Label>
//                             <Select>
//                                 <SelectTrigger className="h-10 sm:h-12">
//                                     <SelectValue placeholder="Select Relation" />
//                                 </SelectTrigger>
//                                 <SelectContent>
//                                     <SelectItem value="spouse">Spouse</SelectItem>
//                                     <SelectItem value="child">Child</SelectItem>
//                                     <SelectItem value="parent">Parent</SelectItem>
//                                     <SelectItem value="sibling">Sibling</SelectItem>
//                                 </SelectContent>
//                             </Select>
//                         </div>

//                         <div className="space-y-3 pt-2">
//                             <div className="flex items-center space-x-2">
//                                 <Checkbox id={`major-${index}`} />
//                                 <Label
//                                     htmlFor={`major-${index}`}
//                                     className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
//                                 >
//                                     Is minor require details
//                                 </Label>
//                             </div>
//                             <div className="flex items-center space-x-2">
//                                 <Checkbox id={`participant-${index}`} />
//                                 <Label
//                                     htmlFor={`participant-${index}`}
//                                     className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
//                                 >
//                                     Is same participant enabled
//                                 </Label>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </CardContent>
//         </Card>
//     )
// }

// export default function NomineeDetailsTab({ setActiveTab }: any) {
//     const [nominees, setNominees] = useState([0])

//     const addNominee = () => {
//         setNominees([...nominees, nominees.length])
//     }

//     const removeNominee = (indexToRemove: any) => {
//         setNominees(nominees.filter((_, index) => index !== indexToRemove))
//     }

//     return (
//         <div className="min-h-screen p-4 sm:p-6 w-full max-w-[1200px] mx-auto">
//             <div className="mb-4 sm:mb-6">
//                 <Button variant="ghost" size="sm" className="text-blue-500 hover:text-blue-600">
//                     <ArrowLeft className="mr-2 h-4 w-4" />
//                     Back
//                 </Button>
//             </div>

//             {nominees.map((_, index) => (
//                 <NomineeSection
//                     key={index}
//                     index={index}
//                     onRemove={removeNominee}
//                     isRemovable={nominees.length > 1}
//                 />
//             ))}

//             <div className="mt-4 sm:mt-6 text-center">
//                 <Button
//                     onClick={addNominee}
//                     variant="outline"
//                     className="w-full sm:w-auto bg-blue-50 text-blue-500 border-blue-100"
//                 >
//                     Add Another Nominee
//                 </Button>
//             </div>

//             <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row items-center gap-4 sm:justify-between">
//                 <Button
//                     variant="outline"
//                     className="w-full sm:w-auto text-blue-500 border-blue-500 hover:bg-blue-50"
//                 >
//                     Save & Go to Main
//                 </Button>
//                 <Button className="w-full sm:w-auto bg-blue-500 hover:bg-blue-600 text-white">
//                     Next
//                 </Button>
//             </div>
//         </div>
//     )
// }

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
// import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const NomineeSection = ({ index, onRemove, isRemovable, formData, onChange }: any) => {
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        onChange(index, name, value)
    }

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target
        onChange(index, name, value)
    }

    return (
        <Card className="mx-auto mb-6">
            <CardContent className="p-4 sm:p-6">
                <div className="mb-4 sm:mb-6 flex items-center justify-between">
                    <h2 className="text-base sm:text-lg font-semibold">{index + 1}. Nominee Details</h2>
                    {isRemovable && (
                        <Button
                            onClick={() => onRemove(index)}
                            variant="ghost"
                            size="icon"
                            className="rounded-full h-8 w-8 bg-blue-50 text-blue-500"
                        >
                            -
                        </Button>
                    )}
                </div>

                <div className="grid gap-4 sm:gap-6 lg:grid-cols-[200px,1fr]">
                    <div className="relative w-40 sm:w-48 lg:w-full mx-auto lg:mx-0">
                        <div className="aspect-square overflow-hidden rounded-lg bg-gray-100">
                            <img
                                src="/api/placeholder/200/200"
                                alt="Nominee photo"
                                className="h-full w-full object-cover"
                            />
                        </div>
                        <Button
                            size="icon"
                            variant="outline"
                            className="absolute bottom-2 right-2 h-8 w-8 rounded-full bg-white"
                        >
                            <svg
                                className="h-4 w-4"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                                />
                            </svg>
                        </Button>
                    </div>

                    <div className="grid gap-4">
                        <div className="grid gap-4 sm:grid-cols-2">
                            <div className="space-y-2">
                                <Label htmlFor={`name-${index}`}>
                                    Name<span className="text-red-500">*</span>
                                </Label>
                                <Input
                                    id={`name-${index}`}
                                    name="name"
                                    value={formData[index]?.name || ''}
                                    placeholder="Enter Name Here"
                                    className="h-10 sm:h-12"
                                    required
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor={`aadhar-${index}`}>
                                    Aadhar Card Number<span className="text-red-500">*</span>
                                </Label>
                                <Input
                                    id={`aadhar-${index}`}
                                    name="aadhar"
                                    value={formData[index]?.aadhar || ''}
                                    placeholder="Enter Aadhar Number Here"
                                    className="h-10 sm:h-12"
                                    required
                                    onChange={handleInputChange}
                                />
                            </div>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-2">
                            <div className="space-y-2">
                                <InputField
                                    htmlFor="dob"
                                    label="DOB"
                                    id="dob"
                                    name="dob"
                                    type="date"
                                    value={formData.dob}
                                    onChange={handleInputChange}
                                    required={true}
                                />
                            </div>
                            <div className="space-y-2">
                                <Label>
                                    Nominee Percentage<span className="text-red-500">*</span>
                                </Label>
                                <select
                                    value={formData.nomineePercentage}
                                    onChange={handleSelectChange}
                                    name="nomineePercentage"
                                    className=" h-10 border rounded"
                                >
                                    <option value="" disabled>
                                        Enter Percentage Here
                                    </option>
                                    <option value="100">100%</option>
                                    <option value="75">75%</option>
                                    <option value="50">50%</option>
                                    <option value="25">25%</option>
                                </select>
                                {/* <Select name="nomineePercentage" onChange={handleSelectChange}>
                                    <SelectTrigger className="h-10 sm:h-12">
                                        <SelectValue placeholder="Enter Percentage Here" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="100">100%</SelectItem>
                                        <SelectItem value="75">75%</SelectItem>
                                        <SelectItem value="50">50%</SelectItem>
                                        <SelectItem value="25">25%</SelectItem>
                                    </SelectContent>
                                </Select> */}
                                <select
                                    value={formData.bloodGroup}
                                    onChange={handleSelectChange}
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
                            </div>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor={`address-${index}`}>
                                Address<span className="text-red-500">*</span>
                            </Label>
                            <Input
                                id={`address-${index}`}
                                name="address"
                                value={formData[index]?.address || ''}
                                placeholder="Enter Address Here"
                                className="h-10 sm:h-12"
                                required
                                onChange={handleInputChange}
                            />
                        </div>

                        <div className="space-y-2">
                            <Label>
                                Relation With Nominee<span className="text-red-500">*</span>
                            </Label>
                            <select
                                value={formData.relation}
                                onChange={handleSelectChange}
                                name="relation"
                                className=" h-10 border rounded"
                            >
                                <option value="" disabled>
                                    Select Relation
                                </option>
                                <option value="spouse">Spouse</option>
                                <option value="child">Child</option>
                                <option value="parent">Parent</option>
                                <option value="sibling">Sibling</option>
                            </select>
                            {/* <Select name="relation" onChange={handleSelectChange as unknown as (value: string) => void} >
                                <SelectTrigger className="h-10 sm:h-12">
                                    <SelectValue placeholder="Select Relation" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="spouse">Spouse</SelectItem>
                                    <SelectItem value="child">Child</SelectItem>
                                    <SelectItem value="parent">Parent</SelectItem>
                                    <SelectItem value="sibling">Sibling</SelectItem>
                                </SelectContent>
                            </Select> */}
                        </div>

                        <div className="space-y-3 pt-2">
                            <div className="flex items-center space-x-2">
                                <Checkbox id={`major-${index}`} />
                                <Label
                                    htmlFor={`major-${index}`}
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                    Is minor require details
                                </Label>
                            </div>
                            <div className="flex items-center space-x-2">
                                <Checkbox id={`participant-${index}`} />
                                <Label
                                    htmlFor={`participant-${index}`}
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                    Is same participant enabled
                                </Label>
                            </div>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}

import { useState } from 'react'
// import { Button } from "@/components/ui/button"
import { ArrowLeft } from 'lucide-react'
import { InputField } from "@/components/custom"
// import NomineeSection from './' // Assuming this is the component you have

const NomineeDetailsTab = ({ setActiveTab }: any) => {
    const [nominees, setNominees] = useState([0])
    const [formData, setFormData] = useState<any>([])

    const addNominee = () => {
        setNominees([...nominees, nominees.length])
    }

    const removeNominee = (indexToRemove: number) => {
        setNominees(nominees.filter((_, index) => index !== indexToRemove))
    }

    const handleChange = (index: number, name: string, value: string) => {
        const updatedData = [...formData]
        updatedData[index] = { ...updatedData[index], [name]: value }
        setFormData(updatedData)
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log('Form Submitted:', formData)

        // You can handle the submission logic here (e.g., API call)
        setActiveTab("documents")
    }

    return (
        <form onSubmit={handleSubmit} className="min-h-screen p-4 sm:p-6 w-full max-w-[1200px] mx-auto">
            <div className="mb-4 sm:mb-6">
                <Button variant="ghost" size="sm" className="text-blue-500 hover:text-blue-600">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back
                </Button>
            </div>

            {nominees.map((_, index) => (
                <NomineeSection
                    key={index}
                    index={index}
                    onRemove={removeNominee}
                    isRemovable={nominees.length > 1}
                    formData={formData}
                    onChange={handleChange}
                />
            ))}

            <div className="mt-4 sm:mt-6 text-center">
                <Button
                    onClick={addNominee}
                    variant="outline"
                    className="w-full sm:w-auto bg-blue-50 text-blue-500 border-blue-100"
                >
                    Add Another Nominee
                </Button>
            </div>

            <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row items-center gap-4 sm:justify-between">
                <Button
                    variant="outline"
                    className="w-full sm:w-auto text-blue-500 border-blue-500 hover:bg-blue-50"
                >
                    Save & Go to Main
                </Button>
                <Button className="w-full sm:w-auto bg-blue-500 hover:bg-blue-600 text-white" type="submit">
                    Next
                </Button>
            </div>
        </form>
    )
}

export default NomineeDetailsTab

// 'use client'

// import { ArrowLeft } from 'lucide-react'
// import { Button } from "@/components/ui/button"
// import { Card, CardContent } from "@/components/ui/card"
// import {
//     Select,
//     SelectContent,
//     SelectItem,
//     SelectTrigger,
//     SelectValue,
// } from "@/components/ui/select"
// import InputField from "@/components/custom/InputField"

// export default function WorkDetailsTb() {
//     return (
//         <div className="flex min-h-screen">
//             <div className="mb-6">
//                 <Button variant="ghost" size="sm" className="text-blue-500 hover:text-blue-600">
//                     <ArrowLeft className="mr-2 h-4 w-4" />
//                     Back
//                 </Button>
//             </div>

//             <div className="mx-auto">
//                 {/* Work Details Section */}
//                 <Card className="bg-white shadow-sm">
//                     <CardContent className="p-6">
//                         <h2 className="text-lg font-semibold mb-6">1. Work Details</h2>
//                         <div className="grid gap-6">
//                             <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                                 <div className="space-y-2">
//                                     <InputField
//                                         htmlFor="occupation"
//                                         label="Occupation"
//                                         id="occupation"
//                                         placeholder="Select Occupation"
//                                         required={true}
//                                     />
//                                 </div>
//                                 <div className="space-y-2">
//                                     <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
//                                         Nature of Work<span className="text-red-500">*</span>
//                                     </label>
//                                     <Select>
//                                         <SelectTrigger className="h-12">
//                                             <SelectValue placeholder="Select Nature of Work" />
//                                         </SelectTrigger>
//                                         <SelectContent>
//                                             <SelectItem value="full-time">Full Time</SelectItem>
//                                             <SelectItem value="part-time">Part Time</SelectItem>
//                                             <SelectItem value="contract">Contract</SelectItem>
//                                         </SelectContent>
//                                     </Select>
//                                 </div>
//                                 <div className="space-y-2">
//                                     <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
//                                         Category<span className="text-red-500">*</span>
//                                     </label>
//                                     <Select>
//                                         <SelectTrigger className="h-12">
//                                             <SelectValue placeholder="Select Category" />
//                                         </SelectTrigger>
//                                         <SelectContent>
//                                             <SelectItem value="skilled">Skilled</SelectItem>
//                                             <SelectItem value="semi-skilled">Semi-Skilled</SelectItem>
//                                             <SelectItem value="unskilled">Unskilled</SelectItem>
//                                         </SelectContent>
//                                     </Select>
//                                 </div>
//                             </div>
//                             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                                 <div className="space-y-2">
//                                     <InputField
//                                         htmlFor="department"
//                                         label="Department"
//                                         id="department"
//                                         placeholder="Enter Department Here"
//                                         required={true}
//                                     />
//                                 </div>
//                                 <div className="space-y-2">
//                                     <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
//                                         Date of Leaving
//                                     </label>
//                                     <Select>
//                                         <SelectTrigger className="h-12">
//                                             <SelectValue placeholder="DD/MM/YYYY" />
//                                         </SelectTrigger>
//                                         <SelectContent>
//                                             <SelectItem value="date">DD/MM/YYYY</SelectItem>
//                                         </SelectContent>
//                                     </Select>
//                                 </div>
//                             </div>
//                         </div>
//                     </CardContent>
//                 </Card>

//                 {/* Previous Work History Section */}
//                 <Card className="bg-white shadow-sm">
//                     <CardContent className="p-6">
//                         <h2 className="text-lg font-semibold mb-6">2. Previous Work History</h2>
//                         <div className="grid gap-6">
//                             <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                                 <div className="space-y-2">
//                                     <InputField
//                                         htmlFor="previous-org"
//                                         label="Previous Organization Name"
//                                         id="previous-org"
//                                         placeholder="Enter Organization Name Here"
//                                         required={false}
//                                     />
//                                 </div>
//                                 <div className="space-y-2">
//                                     <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
//                                         Date of Last Previous Employer
//                                     </label>
//                                     <Select>
//                                         <SelectTrigger className="h-12">
//                                             <SelectValue placeholder="DD/MM/YYYY" />
//                                         </SelectTrigger>
//                                         <SelectContent>
//                                             <SelectItem value="date">DD/MM/YYYY</SelectItem>
//                                         </SelectContent>
//                                     </Select>
//                                 </div>
//                                 <div className="space-y-2">
//                                     <InputField
//                                         htmlFor="reason"
//                                         label="Reason of Leave"
//                                         id="reason"
//                                         placeholder="Enter Reason Here"
//                                         required={false}
//                                     />
//                                 </div>
//                             </div>
//                             <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                                 <div className="space-y-2">
//                                     <InputField
//                                         htmlFor="experience"
//                                         label="Work Experience"
//                                         id="experience"
//                                         placeholder="Enter Experience Here"
//                                         required={false}
//                                     />
//                                 </div>
//                                 <div className="space-y-2">
//                                     <InputField
//                                         htmlFor="pf-number"
//                                         label="Provident Fund Number"
//                                         id="pf-number"
//                                         placeholder="Enter PF Number Here"
//                                         required={false}
//                                     />
//                                 </div>
//                                 <div className="space-y-2">
//                                     <InputField
//                                         htmlFor="uan"
//                                         label="Universal Account Number (UAN)"
//                                         id="uan"
//                                         placeholder="Enter UAN Number Here"
//                                         required={false}
//                                     />
//                                 </div>
//                             </div>
//                             <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//                                 <div className="space-y-2">
//                                     <InputField
//                                         htmlFor="esi"
//                                         label="Employee State Insurance (ESI Number)"
//                                         id="esi"
//                                         placeholder="Enter ESI Number Here"
//                                         required={false}
//                                     />
//                                 </div>
//                             </div>
//                         </div>
//                     </CardContent>
//                 </Card>

//                 <div className="flex justify-end">
//                     <Button className="bg-green-500 hover:bg-green-600 text-white">
//                         Save
//                     </Button>
//                 </div>
//             </div>
//         </div>
//     )
// }

'use client'

import { useState } from 'react'
import { ArrowLeft } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import InputField from "@/components/custom/InputField"

export default function WorkDetailsTb() {
    // Form state to handle form data
    const [formData, setFormData] = useState({
        occupation: '',
        natureOfWork: '',
        category: '',
        department: '',
        dateOfLeaving: '',
        previousOrg: '',
        dateOfLastPreviousEmployer: '',
        reasonOfLeave: '',
        workExperience: '',
        pfNumber: '',
        uan: '',
        esi: ''
    })

    // Handle form input change
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { id, value } = e.target
        setFormData(prevState => ({
            ...prevState,
            [id]: value
        }))
    }

    // Handle form submission
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log('Form Data:', formData)
        // You can replace the above line with an actual API call or other logic
    }

    return (
        <div className="flex min-h-screen">
            <div className="mb-6">
                <Button variant="ghost" size="sm" className="text-blue-500 hover:text-blue-600">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back
                </Button>
            </div>

            <div className="mx-auto">
                <form onSubmit={handleSubmit}>
                    {/* Work Details Section */}
                    <Card className="bg-white shadow-sm">
                        <CardContent className="p-6">
                            <h2 className="text-lg font-semibold mb-6">1. Work Details</h2>
                            <div className="grid gap-6">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <div className="space-y-2">
                                        <InputField
                                            htmlFor="occupation"
                                            label="Occupation"
                                            id="occupation"
                                            value={formData.occupation}
                                            placeholder="Select Occupation"
                                            required={true}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                            Nature of Work<span className="text-red-500">*</span>
                                        </label>
                                        <Select
                                            // id="natureOfWork"
                                            value={formData.natureOfWork}
                                            onValueChange={value => setFormData({ ...formData, natureOfWork: value })}
                                        >
                                            <SelectTrigger className="h-12">
                                                <SelectValue placeholder="Select Nature of Work" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="full-time">Full Time</SelectItem>
                                                <SelectItem value="part-time">Part Time</SelectItem>
                                                <SelectItem value="contract">Contract</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                            Category<span className="text-red-500">*</span>
                                        </label>
                                        <Select
                                            // id="category"
                                            value={formData.category}
                                            onValueChange={value => setFormData({ ...formData, category: value })}
                                        >
                                            <SelectTrigger className="h-12">
                                                <SelectValue placeholder="Select Category" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="skilled">Skilled</SelectItem>
                                                <SelectItem value="semi-skilled">Semi-Skilled</SelectItem>
                                                <SelectItem value="unskilled">Unskilled</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <InputField
                                            htmlFor="department"
                                            label="Department"
                                            id="department"
                                            value={formData.department}
                                            placeholder="Enter Department Here"
                                            required={true}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                            Date of Leaving
                                        </label>
                                        <Select
                                            // id="dateOfLeaving"
                                            value={formData.dateOfLeaving}
                                            onValueChange={value => setFormData({ ...formData, dateOfLeaving: value })}
                                        >
                                            <SelectTrigger className="h-12">
                                                <SelectValue placeholder="DD/MM/YYYY" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="date">DD/MM/YYYY</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Previous Work History Section */}
                    <Card className="bg-white shadow-sm">
                        <CardContent className="p-6">
                            <h2 className="text-lg font-semibold mb-6">2. Previous Work History</h2>
                            <div className="grid gap-6">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <div className="space-y-2">
                                        <InputField
                                            htmlFor="previous-org"
                                            label="Previous Organization Name"
                                            id="previous-org"
                                            value={formData.previousOrg}
                                            placeholder="Enter Organization Name Here"
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                            Date of Last Previous Employer
                                        </label>
                                        <Select
                                            // id="dateOfLastPreviousEmployer"
                                            value={formData.dateOfLastPreviousEmployer}
                                            onValueChange={value => setFormData({ ...formData, dateOfLastPreviousEmployer: value })}
                                        >
                                            <SelectTrigger className="h-12">
                                                <SelectValue placeholder="DD/MM/YYYY" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="date">DD/MM/YYYY</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="space-y-2">
                                        <InputField
                                            htmlFor="reason"
                                            label="Reason of Leave"
                                            id="reason"
                                            value={formData.reasonOfLeave}
                                            placeholder="Enter Reason Here"
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <div className="space-y-2">
                                        <InputField
                                            htmlFor="experience"
                                            label="Work Experience"
                                            id="experience"
                                            value={formData.workExperience}
                                            placeholder="Enter Experience Here"
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <InputField
                                            htmlFor="pf-number"
                                            label="Provident Fund Number"
                                            id="pf-number"
                                            value={formData.pfNumber}
                                            placeholder="Enter PF Number Here"
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <InputField
                                            htmlFor="uan"
                                            label="Universal Account Number (UAN)"
                                            id="uan"
                                            value={formData.uan}
                                            placeholder="Enter UAN Number Here"
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    <div className="space-y-2">
                                        <InputField
                                            htmlFor="esi"
                                            label="Employee State Insurance (ESI Number)"
                                            id="esi"
                                            value={formData.esi}
                                            placeholder="Enter ESI Number Here"
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <div className="flex justify-end">
                        <Button className="bg-green-500 hover:bg-green-600 text-white" type="submit">
                            Save
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}



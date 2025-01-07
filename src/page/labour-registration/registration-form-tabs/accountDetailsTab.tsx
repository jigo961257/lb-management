import React from "react";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input"; // Assuming you have an Input component
import { Button } from "@/components/ui/button"; // Assuming you have a Button component

// Form data interface
interface AccountFormInputs {
	bankAccountNumber: string;
	accountHolderName: string;
	ifsCode: string;
	reference?: string; // Optional
	relationWithReference?: string; // Optional
	referenceContactNumber?: string; // Optional
}

interface AccountDetailsTabProps {
	setActiveTab: React.Dispatch<React.SetStateAction<string>>; // Define the type for setActiveTab
}

const AccountDetailsTab: React.FC<AccountDetailsTabProps> = ({ setActiveTab }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
		trigger,
		clearErrors,
	} = useForm<AccountFormInputs>();

	const onSubmit = (data: AccountFormInputs) => {
		console.log("Form Data: ", data);
		setActiveTab("nomineeDetails");
	};

	const handleNext = async () => {
		const result = await trigger(); // Trigger validation
		if (result) {
			// Only submit if validation passes
			handleSubmit(onSubmit)(); // Call onSubmit if valid
		}
	};

	const handleSave = async () => {
		const isValid = await trigger(); // Trigger validation
		if (isValid) {
			console.log("Data is valid. Saving data...");
			// Add your save logic here
		} else {
			console.log("Form is invalid. Cannot save data.");
		}
	};

	return (
		<div className="p-6 bg-white rounded-lg shadow-md">
			<form onSubmit={handleSubmit(onSubmit)}>
				{/* Form Fields */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{/* Bank Account Number */}
					<div className="mb-4">
						<label className="block text-sm font-medium text-gray-700" htmlFor="bankAccountNumber">
							Bank Account Number<span className="text-red-500">*</span>
						</label>
						<Input
							id="bankAccountNumber"
							placeholder="Enter Account Number Here"
							{...register("bankAccountNumber", {
								required: "Bank Account Number is required",
								onChange: () => clearErrors("bankAccountNumber"),
							})}
						/>
						{errors.bankAccountNumber && (
							<p className="text-red-500 text-sm">{errors.bankAccountNumber.message}</p>
						)}
					</div>

					{/* Account Holder Name */}
					<div className="mb-4">
						<label className="block text-sm font-medium text-gray-700" htmlFor="accountHolderName">
							Account Holder Name<span className="text-red-500">*</span>
						</label>
						<Input
							id="accountHolderName"
							placeholder="Enter Holder Name Here"
							{...register("accountHolderName", {
								required: "Account Holder Name is required",
								onChange: () => clearErrors("accountHolderName"),
							})}
						/>
						{errors.accountHolderName && (
							<p className="text-red-500 text-sm">{errors.accountHolderName.message}</p>
						)}
					</div>

					{/* IFS Code */}
					<div className="mb-4">
						<label className="block text-sm font-medium text-gray-700" htmlFor="ifsCode">
							IFS Code<span className="text-red-500">*</span>
						</label>
						<Input
							id="ifsCode"
							placeholder="Enter IFS Code Here"
							{...register("ifsCode", {
								required: "IFS Code is required",
								onChange: () => clearErrors("ifsCode"),
							})}
						/>
						{errors.ifsCode && (
							<p className="text-red-500 text-sm">{errors.ifsCode.message}</p>
						)}
					</div>

					{/* Reference */}
					<div className="mb-4">
						<label className="block text-sm font-medium text-gray-700" htmlFor="reference">
							Reference
						</label>
						<Input
							id="reference"
							placeholder="Enter Reference Here"
							{...register("reference", {
								onChange: () => clearErrors("reference"),
							})}
						/>
					</div>

					{/* Relation With Reference */}
					<div className="mb-4">
						<label className="block text-sm font-medium text-gray-700" htmlFor="relationWithReference">
							Relation With Reference
						</label>
						<Input
							id="relationWithReference"
							placeholder="Enter Relation Here"
							{...register("relationWithReference", {
								onChange: () => clearErrors("relationWithReference"),
							})}
						/>
					</div>

					{/* Reference Contact Number */}
					<div className="mb-4">
						<label className="block text-sm font-medium text-gray-700" htmlFor="referenceContactNumber">
							Reference Contact Number
						</label>
						<Input
							id="referenceContactNumber"
							placeholder="Enter Contact Number Here"
							{...register("referenceContactNumber", {
								onChange: () => clearErrors("referenceContactNumber"),
							})}
						/>
					</div>
				</div>

				{/* Buttons */}
				<div className="flex justify-between mt-6">
					<Button type="button" onClick={handleSave} className="bg-gray-300 hover:bg-gray-400 text-gray-800">
						← Save & Go to Main
					</Button>
					<div>
						<Button type="button" onClick={() => setActiveTab("documents")} className="bg-gray-300 hover:bg-gray-400 text-gray-800 mr-2">
							← Back
						</Button>
						<Button type="button" onClick={handleNext} className="bg-blue-500 hover:bg-blue-600 text-white">
							Next →
						</Button>
					</div>
				</div>
			</form>
		</div>
	);
};

export default AccountDetailsTab;

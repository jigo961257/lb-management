import { ClipboardIcon, FileTextIcon, GearIcon, PersonIcon } from '@radix-ui/react-icons';
import * as Tabs from '@radix-ui/react-tabs';
import { useState } from 'react';
import BasicInfoTab2 from './registration-form-tabs/basicInfoTab2';
import DocumentsTab2 from './registration-form-tabs/documentsTab2';
import NomineeDetails2 from './registration-form-tabs/nomineeDetails2';
import WorkDetailsTab2 from './registration-form-tabs/workDetailsTab2';

const LabourRegistration = () => {
	const [activeTab, setActiveTab] = useState("basic-info");
	const [formData, setFormData] = useState({})
	console.log('formData', formData);

	return (
		<div className="flex h-screen">
			<Tabs.Root value={activeTab} onValueChange={setActiveTab} defaultValue="basic-info" className="flex h-screen w-full">
				{/* Sidebar Container */}
				<div className="w-72 bg-gray-50 border-r border-gray-200 flex-shrink-0">
					{/* Header Section */}
					<div className="flex flex-col items-center justify-center py-8 border-b border-gray-200">
						<div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
							<PersonIcon className="w-8 h-8 text-blue-500" />
						</div>
						<h2 className="mt-3 font-bold text-gray-700">Add Member</h2>
						<p className="text-sm text-gray-500">Fill out the Form</p>
					</div>

					{/* Tabs List */}
					<Tabs.List className="flex flex-col p-4 space-y-4">
						<Tabs.Trigger
							value="basic-info"
							className="flex items-center space-x-3 p-3 rounded-md text-gray-600 hover:bg-blue-100 hover:text-blue-500 data-[state=active]:bg-blue-500 data-[state=active]:text-white"
						>
							<PersonIcon className="w-5 h-5" />
							<span className="font-medium">Basic Info</span>
						</Tabs.Trigger>
						<Tabs.Trigger
							value="nominee-details"
							className="flex items-center space-x-3 p-3 rounded-md text-gray-600 hover:bg-blue-100 hover:text-blue-500 data-[state=active]:bg-blue-500 data-[state=active]:text-white"
						>
							<FileTextIcon className="w-5 h-5" />
							<span className="font-medium">Nominee Details</span>
						</Tabs.Trigger>
						<Tabs.Trigger
							value="documents"
							className="flex items-center space-x-3 p-3 rounded-md text-gray-600 hover:bg-blue-100 hover:text-blue-500 data-[state=active]:bg-blue-500 data-[state=active]:text-white"
						>
							<ClipboardIcon className="w-5 h-5" />
							<span className="font-medium">Documents</span>
						</Tabs.Trigger>
						<Tabs.Trigger
							value="work-details"
							className="flex items-center space-x-3 p-3 rounded-md text-gray-600 hover:bg-blue-100 hover:text-blue-500 data-[state=active]:bg-blue-500 data-[state=active]:text-white"
						>
							<GearIcon className="w-5 h-5" />
							<span className="font-medium">Work Details</span>
						</Tabs.Trigger>
					</Tabs.List>
				</div>

				{/* Tabs Content */}
				<div className="flex-1 my-2 overflow-y-scroll bg-white rounded-lg shadow-lg p-4
				[&::-webkit-scrollbar]:w-2
				[&::-webkit-scrollbar-track]:rounded-full
				[&::-webkit-scrollbar-track]:bg-gray-100
				[&::-webkit-scrollbar-thumb]:rounded-full
				[&::-webkit-scrollbar-thumb]:bg-gray-300
				">
					<Tabs.Content value="basic-info">
						{/* <BasicInfoTab setActiveTab={setActiveTab} /> */}
						<BasicInfoTab2 setActiveTab={setActiveTab} formData={formData} setFormData={setFormData} />
					</Tabs.Content>
					<Tabs.Content value="nominee-details">
						{/* <NomineeDetailsTab setActiveTab={setActiveTab} /> */}
						<NomineeDetails2 setActiveTab={setActiveTab} formData={formData} setFormData={setFormData} />
					</Tabs.Content>
					<Tabs.Content value="documents">
						<DocumentsTab2 setActiveTab={setActiveTab} />
					</Tabs.Content>
					<Tabs.Content value="work-details">
						{/* <WorkDetailsTab /> */}
						<WorkDetailsTab2 setActiveTab={setActiveTab} formData={formData} setFormData={setFormData} />
					</Tabs.Content>
				</div>
			</Tabs.Root>
		</div>
	)
}

export default LabourRegistration;

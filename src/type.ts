export type SidebarItem = {
    title: string;
    path: string;
    icon?: React.ComponentType;
}

export type BasicInfoTab2Props = {
    fistName: string;
    lastName: string;
    middleName?: string;
    email?: string;
    nameAsPerAadhar?: string;
    dob?: Date;
    gender: string;
    maritalStatus: string;
    mobileNumber: number;
    presentAddress: string;
    permanentAddress?: string;
    addhar: number;
    fatherName?: string;
    husbandName?: string;
    bloodGroup?: string;
    emergencyContact?: number;
    nearestPoliceStation?: string;
    knownLangueges?: string;
    religion?: string;
    covidVaccination?: boolean;
    pan: string;
    dateOfJoining: Date;
    referenace?: string;
    bancAccount: number;
    ifsc: string;
    branchName: string;
}
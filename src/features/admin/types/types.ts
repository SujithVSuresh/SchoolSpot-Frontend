export interface SignupProgressPropType {
    progress: () => void
}

export interface AdminSignupFormType {
    email: string;
    password: string;
    confirmPassword?: string;
}

export interface AdminSigninFormType {
    email: string;
    password: string;
}

export interface OTPFormType {
    otp: number;
    email: string;
}

export interface UserStoreType {
    _id?: string;
    email: string;
    role: "admin" | "student" | "teacher" | "";
    status: "active" | "blocked" | "deleted" | "";
    accessToken: string | null;
    profilePicture?: string;
    createdAt?: string
}

export interface SchoolProfileType {
    _id?:string;
    schoolName: string;
    email: string;
    phoneNumber: string;
    regNumber: string;
    yearEstablished: number;
    principalName: string;
    websiteUrl: string;
    totalStudents: number;
    totalTeachers: number;
    board: string;
    city: string;
    state: string;
    country: string;
    postalCode: string;
}


export interface StudentProfileType {
    _id?: string;
    fullName: string;
    profilePhoto: string;
    gender: "male" | "female";
    dob: string;
    address: string;
    fatherName: string;
    motherName: string
    contactNumber: string;
    class: string;
    section: string;
    userId?: string;
    schoolId?: string;
    createdAt?: Date;
    updatedAt?: Date;
}

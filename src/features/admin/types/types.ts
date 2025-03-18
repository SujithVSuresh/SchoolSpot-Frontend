export interface SignupProgressPropType {
    progress: () => void
}

export interface UserSignupFormType {
    email: string;
    password: string;
    confirmPassword?: string;
    role?: "admin" | "student" | "teacher";
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
    status: "active" | "blocked" | "deleted" | "inactive" | "";
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
    profilePhoto: FileList | string;
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


export interface StudentDataResponseType {
    _id?: string;
    fullName: string;
    class: string;
    section: string;
    profilePhoto: string;
    schoolId?: string;
    user: {
        _id: string
        email: string,
        status: "active" | "inactive" | "deleted" | "blocked";
    }

}

export interface StudentUserProfileType extends StudentProfileType, UserSignupFormType {}


export interface TeacherProfileType {
    fullName: string;
    phoneNumber: string;
    subjectSpecialized: string;
    qualification: string;
    experience: number;
    profilePhoto: FileList;
    userId?: string;
    schoolId?: string;
    createdAt?: Date;
    updatedAt?: Date;
  }


  export interface TeacherUserProfileType extends TeacherProfileType, UserSignupFormType {}


  export interface TeacherDataResponseType {
    _id?: string;
    fullName: string;
    subjectSpecialized: string;
    qualification: string;
    profilePhoto: string;
    schoolId?: string;
    user: {
        _id: string
        email: string,
        status: "active" | "inactive" | "deleted" | "blocked";
    }
}


   
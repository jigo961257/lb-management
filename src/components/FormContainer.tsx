import React, { ReactNode } from "react";

interface FormContainerProps {
    title: string;
    children: ReactNode;
    className?: string; // Optional className prop
    mainContainerStyle?: string; // Optional mainContainerStyle prop
}

const FormContainer: React.FC<FormContainerProps> = ({ title, children, className, mainContainerStyle }) => {
    return (
        <div className={`flex-1 p-2 ${mainContainerStyle || ''}`}>
            <section className="flex items-center justify-between">
                <section className="bg-gradient-to-r from-[#4594FF13] to-[#F5F5F526] rounded-full h-[50px] flex items-center justify-center w-auto px-4">
                    {title}
                </section>
            </section>
            <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-5 ${className || ''}`}>{children}</div>
        </div>
    );
}

export default FormContainer
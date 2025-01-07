// import React from "react"
// import { Input } from "@/components/ui/input"

// const InputField = ({ htmlFor, labelClassName, label, id, placeholder, required, type, inputClassName, onChange }: InputFieldProps) => {
//     return (
//         <>
//             <label
//                 htmlFor={htmlFor}
//                 className={labelClassName}
//             >
//                 {label}{required && <span className="text-red-500">*</span>}
//             </label>
//             <Input
//                 id={id}
//                 placeholder={placeholder}
//                 required={required}
//                 type={type}
//                 className={inputClassName}
//                 onChange={onChange}
//             />
//         </>
//     )
// };

// export default InputField;

import React, { forwardRef } from "react"
import { Input } from "@/components/ui/input"

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
    htmlFor: string
    label: string
    error?: string
    labelClassName?: string;
    inputClassName?: string;
    inputFiledType?: "select" | "input" | "textarea" | "radio" | "checkbox";
    options?: string[];
    placeholder?: string;
    radioOptions?: string[];
    belowComponent?: React.ReactNode;
    isRequired?: boolean;
}

const InputField = forwardRef<HTMLInputElement, InputFieldProps>(
    ({ htmlFor, label, error, labelClassName, inputFiledType = "input", placeholder, options, radioOptions, belowComponent, ...props }, ref) => {
        if (inputFiledType === "select" && options?.length === 0) {
            throw new Error("Options are required for select input field")
        }
        return (
            <div className="flex flex-col space-y-2">
                <label htmlFor={htmlFor} className={labelClassName ? labelClassName : "text-sm font-medium leading-none"}>
                    {label}
                    {props.isRequired && <span className="text-red-500 ml-0.5">*</span>}
                </label>
                {inputFiledType && inputFiledType === "input" && <Input ref={ref} id={htmlFor} {...props} />}
                {inputFiledType && inputFiledType === "select" &&
                    <select {...props as React.SelectHTMLAttributes<HTMLSelectElement>}
                        name="gender"
                        className=" h-10 border rounded"
                        defaultValue=""
                    >
                        <option value="" disabled>
                            {placeholder || "Select an option"}
                        </option>
                        {options?.map((option, index) => (
                            <option key={index} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                }
                {inputFiledType && inputFiledType === "textarea" && <Input ref={ref} id={htmlFor} {...props} />}
                {inputFiledType && inputFiledType === "radio" &&
                    <div className="flex items-center space-x-2 justify-center">
                        {radioOptions?.map((option, index) => (
                            <div key={index} className="flex items-center space-x-2">
                                <Input ref={ref} id={option} name={htmlFor} value={option} placeholder={placeholder} {...props} />
                                <label htmlFor={option}>{option}</label>
                            </div>
                        ))}
                    </div>
                }
                {belowComponent && belowComponent}
                {error && <p className="text-red-500 text-sm">{error}</p>}
            </div>
        )
    }
)
InputField.displayName = "InputField"

export default InputField



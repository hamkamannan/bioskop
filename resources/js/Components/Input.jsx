import React, { useEffect, useRef } from "react";
import PropType from "prop-types";

Input.propTypes = {
    type: PropType.oneOf(["text", "email", "password", "number", "file"]),
    name: PropType.string,
    value: PropType.oneOfType([PropType.string, PropType.number]),
    defaultValue: PropType.oneOfType([PropType.string, PropType.number]),
    className: PropType.string,
    variant: PropType.oneOf(["primary", "error", "primary-outline"]),
    autoComplete: PropType.string,
    required: PropType.bool,
    isFocused: PropType.bool,
    handleChange: PropType.func,
    placeholder: PropType.string,
    isError: PropType.bool,
};

export default function Input({
    type = "text",
    name,
    value,
    defaultValue,
    className,
    variant = "primary",
    autoComplete,
    required,
    isFocused,
    handleChange,
    placeholder,
    isError,
}) {
    const input = useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <div className="flex flex-col items-start">
            <input
                type={type}
                name={name}
                value={value}
                defaultValue={defaultValue}
                className={`rounded-2xl bg-form-bg py-[13px] px-7 w-full ${
                    isError && "input-error"
                } input-${variant} ${className}`}
                ref={input}
                autoComplete={autoComplete}
                required={required}
                onChange={(e) => handleChange(e)}
                placeholder={placeholder}
            />
        </div>
    );
}

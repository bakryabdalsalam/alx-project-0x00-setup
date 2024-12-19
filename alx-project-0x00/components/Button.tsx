import React from "react";

interface ButtonProps {
  title: string;
  size: "small" | "medium" | "large";
  shape: "rounded-sm" | "rounded-md" | "rounded-full";
}

const Button: React.FC<ButtonProps> = ({ title, size, shape }) => {
  return (
    <button
      className={`px-4 py-2 ${size} ${shape} bg-blue-500 text-white`}
    >
      {title}
    </button>
  );
};

export default Button;

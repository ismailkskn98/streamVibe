import React from "react";

type ButtonProps = {
  onClick: () => void;
  icon: React.ReactNode;
  className?: string;
};

const Button = ({ onClick, icon, className }: ButtonProps) => {
  return (
    <div onClick={onClick} className={className}>
      {icon}
    </div>
  );
};

export default Button;

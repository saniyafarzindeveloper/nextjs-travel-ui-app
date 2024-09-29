import Image from "next/image";
import React from "react";

type ButtonProps = {
  type: "button" | "submit";
  variant: string
  icon?: string;
  title: string;
};

export default function Button({ type, variant, icon, title }: ButtonProps) {
  return (
    <button className={`flexCenter gap-3 rounded-full border ${variant}`} type={type}>
      {icon && <Image src={icon} alt={title} width={25} height={25} />}
      <label className="bold-16 whitespace-nowrap">{title}</label>
    </button>
  );
}

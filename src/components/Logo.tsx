import { Image } from "antd";

import logo from "@/assets/icons/logo.svg";

interface LogoProps {
  width?: number;
  height?: number;
  className?: string;
}

export const Logo = ({ width, height, className }: LogoProps) => {
  return (
    <Image
      alt="Waretech Logo"
      src={logo}
      width={width}
      height={height}
      className={className}
      preview={false}
    />
  );
};

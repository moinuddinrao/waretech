import { Button, ButtonProps } from "antd";

const PrimaryButton = (props: ButtonProps) => {
  return (
    <Button
      {...props}
      htmlType={props?.htmlType}
      onClick={props?.onClick}
      className={`w-fit !border-none !bg-[#3A5BFF] hover:!bg-[#324cca] text-white hover:!text-white rounded-md shadow-none ${props?.className}`}
    >
      {props.children}
    </Button>
  );
};

export default PrimaryButton;

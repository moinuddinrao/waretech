import { Button, ButtonProps } from "antd";

const PrimaryButton = (props: ButtonProps) => {
  return (
    <Button
      {...props}
      htmlType={props?.htmlType}
      onClick={props?.onClick}
      className={`w-fit font-medium px-8 py-4 !border-none !bg-[#3A5BFF] hover:!bg-[#324cca] !text-white rounded-lg ${props?.className}`}
    >
      {props.children}
    </Button>
  );
};

export default PrimaryButton;

import { Button, ButtonProps } from "antd";

const SecondaryButton = (props: ButtonProps) => {
  return (
    <Button
      {...props}
      type="default"
      htmlType={props?.htmlType}
      onClick={props?.onClick}
      className={`w-fit font-medium px-4 py-4 rounded-md shadow-none ${props?.className}`}
    >
      {props.children}
    </Button>
  );
};

export default SecondaryButton;

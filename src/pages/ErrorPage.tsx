import { Result } from "antd";
import { useNavigate } from "react-router-dom";

import { PrimaryButton } from "@/components/Buttons";

export const ErrorPage = () => {
  const navigate = useNavigate();

  const handleBackToPreviousPage = () => {
    navigate(-1);
  };

  return (
    <div>
      <Result
        status="404"
        title="Error 404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <PrimaryButton onClick={handleBackToPreviousPage}>
            Go Back
          </PrimaryButton>
        }
      />
    </div>
  );
};

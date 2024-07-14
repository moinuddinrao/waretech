import { useNavigate } from "react-router-dom";

import { Layout, Input } from "antd";
import { UserOutlined, SettingFilled, BellFilled } from "@ant-design/icons";

import { ROUTES } from "@/common/routes";
import { BreadCrumb } from "@/components/BreadCrumb";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <Layout.Header className="!z-10 !sticky !top-0 !w-full !h-fit !p-0 !py-3 lg:!py-5 flex flex-col lg:flex-row lg:justify-between lg:items-center gap-3 lg:gap-5 bg-light">
      <BreadCrumb />
      <div className="flex gap-2 lg:gap-5 items-center">
        <Input
          size="small"
          placeholder="Search here"
          className="w-full !border-green !rounded-lg !bg-transparent"
        />
        <UserOutlined
          className="!text-base shadow-lg text-white bg-green hover:bg-blue p-[3px] rounded-full cursor-pointer"
          onClick={() => navigate(ROUTES.profile)}
        />
        <SettingFilled
          className="text-xl text-green hover:text-blue cursor-pointer"
          onClick={() => navigate(ROUTES.settings)}
        />
        <BellFilled className="text-xl text-green hover:text-blue cursor-pointer" />
      </div>
    </Layout.Header>
  );
};

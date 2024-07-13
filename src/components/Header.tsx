import { useNavigate } from "react-router-dom";

import { Layout, Avatar, Input } from "antd";
import { UserOutlined, SettingFilled, BellFilled } from "@ant-design/icons";

import { ROUTES } from "@/common/routes";
import { BreadCrumb } from "@/components/BreadCrumb";

export const Header = () => {
  const navigate = useNavigate();

  return (
    <Layout.Header className="!z-10 !sticky !top-0 !w-full h-[10vh] p-0 flex justify-between items-center bg-light">
      <BreadCrumb />
      <div className="flex gap-5 items-center">
        <Input
          placeholder="Search here"
          className="w-40 !border-green !rounded-lg !bg-transparent"
        />
        <Avatar
          icon={<UserOutlined />}
          className="shadow-lg bg-green hover:bg-blue w-5 h-5 cursor-pointer"
          onClick={() => navigate(ROUTES.profile)}
        />
        <SettingFilled className="text-xl text-green hover:text-blue cursor-pointer" />
        <BellFilled className="text-xl text-green hover:text-blue cursor-pointer" />
      </div>
    </Layout.Header>
  );
};

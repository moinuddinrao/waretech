import { Outlet } from "react-router-dom";
import { Layout as AntdLayout, Space } from "antd";

import { Sidebar } from "@/components/Sidebar";
import { Header } from "@/components/Header";

export const Layout = () => {
  return (
    <Space direction="vertical" className="w-full h-full min-h-screen">
      <AntdLayout>
        <Sidebar />
        <AntdLayout className="w-full h-full bg-light px-3 lg:px-5">
          <Header />
          <AntdLayout.Content className="w-full h-full lg:min-h-[93vh] pb-3 lg:pb-5">
            <Outlet />
          </AntdLayout.Content>
        </AntdLayout>
      </AntdLayout>
    </Space>
  );
};

import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { Layout, Menu as AntdMenu, Image } from "antd";

import {
  RightOutlined,
  LeftOutlined,
  AppstoreOutlined,
  DownOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";

import { Logo } from "@/components/Logo";

import { ROUTES } from "@/common/routes";

import profile from "@/assets/images/profile.png";

import { styles } from "@/styles";

type MenuItem = Required<MenuProps>["items"][number];

const dashboardItems: MenuItem[] = [
  {
    label: "Dashboards",
    icon: <AppstoreOutlined className="!text-xl !text-white" />,
    key: ROUTES.dashboards,
    children: [
      {
        label: "Maintenance Menu",
        icon: <AppstoreOutlined className="!text-xl !text-white" />,
        key: ROUTES.maintenance,
      },
      {
        label: "Product Management",
        icon: <AppstoreOutlined className="!text-xl !text-white" />,
        key: ROUTES.productManagement,
      },
      {
        label: "Purchasing",
        icon: <AppstoreOutlined className="!text-xl !text-white" />,
        key: ROUTES.purchasing,
      },
      {
        label: "Reporting",
        icon: <AppstoreOutlined className="!text-xl !text-white" />,
        key: ROUTES.reporting,
      },
      {
        label: "EQSI",
        icon: <AppstoreOutlined className="!text-xl !text-white" />,
        key: ROUTES.eqsi,
      },
    ],
  },
];

const pagesItems: MenuItem[] = [
  {
    label: "Customers",
    icon: <AppstoreOutlined className="!text-xl !text-white" />,
    key: ROUTES.customers,
  },
  {
    label: "Suppliers",
    icon: <AppstoreOutlined className="!text-xl !text-white" />,
    key: ROUTES.suppliers,
  },
  {
    label: "Users / roles",
    icon: <AppstoreOutlined className="!text-xl !text-white" />,
    key: ROUTES.userRoles,
  },
];

const quickLinksItems: MenuItem[] = [
  {
    label: "AI Tool",
    icon: <AppstoreOutlined className="!text-xl !text-white" />,
    key: ROUTES.aiTool,
  },
  {
    label: "EQS Link",
    icon: <AppstoreOutlined className="!text-xl !text-white" />,
    key: ROUTES.eqsLink,
  },
  {
    label: "A N Other",
    icon: <AppstoreOutlined className="!text-xl !text-white" />,
    key: ROUTES.anOther,
  },
];

export const Sidebar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [collapsed, setCollapsed] = useState(true);

  const handleMenuClick = ({ key }: { key: string }) => {
    navigate(key);
  };

  return (
    <Layout.Sider
      theme="light"
      width={collapsed ? 75 : 250}
      className="!z-20 !fixed !top-0 !left-0 !h-screen !max-h-screen !shadow-lg !bg-dark"
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      trigger={
        collapsed ? (
          <RightOutlined className="!text-white !text-lg" />
        ) : (
          <LeftOutlined className="!text-white !text-lg" />
        )
      }
    >
      <div className="w-full h-full flex flex-col gap-3 p-3">
        <div
          className={`flex items-center my-1 gap-2 lg:gap-3 ${
            collapsed ? "justify-center" : "justify-start"
          }`}
        >
          <Logo className="!w-6 lg:!w-8" />
          {!collapsed && (
            <h3 className={`${styles.heading3} text-white`}>Waretech</h3>
          )}
        </div>

        <hr className={styles.line} />

        <div
          className={`flex items-center my-1 gap-2 lg:gap-3 ${
            collapsed ? "justify-center" : "justify-start"
          }`}
        >
          <Image
            src={profile}
            alt="Profile"
            preview={false}
            className="rounded-full"
          />
          {!collapsed && (
            <div className="w-full flex justify-between gap-2 lg:gap-3">
              <p className="text-white">Tayah Betambeau</p>
              <DownOutlined className="!text-white !text-xs mr-4" />
            </div>
          )}
        </div>

        <hr className={styles.line} />

        {/* Menu items */}
        <div className={`${styles.label}`}>
          <AntdMenu
            className="text-left text-md !border-r-0 flex flex-col"
            mode="inline"
            inlineIndent={16}
            items={dashboardItems}
            defaultSelectedKeys={[pathname]}
            onClick={handleMenuClick}
          />
        </div>

        <hr className={styles.line} />

        <h5 className={`${styles.heading5} text-white`}>PAGES</h5>
        <div className={`${styles.label}`}>
          <AntdMenu
            className="text-left text-md !border-r-0 flex flex-col"
            inlineIndent={16}
            items={pagesItems}
            defaultSelectedKeys={[pathname]}
            onClick={handleMenuClick}
          />
        </div>

        <hr className={styles.line} />

        <h5 className={`${styles.heading5} text-white`}>QUICK LINKS</h5>
        <div className={`${styles.label}`}>
          <AntdMenu
            className="text-left text-md !border-r-0 flex flex-col"
            inlineIndent={16}
            items={quickLinksItems}
            defaultSelectedKeys={[pathname]}
            onClick={handleMenuClick}
          />
        </div>
      </div>
    </Layout.Sider>
  );
};

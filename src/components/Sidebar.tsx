import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { Layout, Menu as AntdMenu } from "antd";

import {
  RightOutlined,
  LeftOutlined,
  AppstoreOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";

import { Logo } from "@/components/Logo";

import { ROUTES } from "@/common/routes";

import { styles } from "@/styles";

type MenuItem = Required<MenuProps>["items"][number];

export const Sidebar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const [collapsed, setCollapsed] = useState(false);

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

  const handleMenuClick = ({ key }: { key: string }) => {
    navigate(key);
  };

  return (
    <Layout.Sider
      theme="light"
      width={250}
      className="!sticky !top-0 !left-0 !h-screen !shadow-lg !bg-dark"
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
        <div className="flex justify-center my-1 gap-3">
          <Logo width={30} />
          {!collapsed && (
            <p className={`${styles.heading4} text-white`}>Waretech</p>
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

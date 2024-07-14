import { Card, Progress, Input, Tabs } from "antd";
import type { TabsProps } from "antd";
import {
  SearchOutlined,
  DownloadOutlined,
  PlusOutlined,
} from "@ant-design/icons";

import { Overview } from "./Overview";

import { PrimaryButton } from "@/components/Buttons";

import { styles } from "@/styles";

// Define the CardProps interface
interface CardProps {
  key: string;
  title: string;
  subTitle: string;
  value: string;
  percent: number;
  color: string;
}

// Define the cards data
const cardsItems: CardProps[] = [
  {
    key: "totalCustomersWeek",
    title: "Total Customers",
    subTitle: "Week comparison",
    value: "1.345",
    percent: 80,
    color: "#5E81F4",
  },
  {
    key: "totalSuppliersMonth",
    title: "Total Suppliers",
    subTitle: "Month comparison",
    value: "3.82",
    percent: 60,
    color: "#F4BE5E",
  },
  {
    key: "totalUsersWeek",
    title: "Total Users",
    subTitle: "Week comparison",
    value: "£4690",
    percent: 20,
    color: "#FF808B",
  },
  {
    key: "totalUsersMonth",
    title: "Total Users",
    subTitle: "Month comparison",
    value: "£3820",
    percent: 70,
    color: "#7CE7AC",
  },
];

// Define the ConversionHistoryProps interface
interface ConversionHistoryProps {
  progress1: number;
  progress2: number;
}

// Define the conversion history data
const conversionHistory: ConversionHistoryProps[] = [
  {
    progress1: 50,
    progress2: 30,
  },
  {
    progress1: 70,
    progress2: 20,
  },
  {
    progress1: 80,
    progress2: 55,
  },
  {
    progress1: 50,
    progress2: 60,
  },
  {
    progress1: 70,
    progress2: 30,
  },
];

// Define the tabs data
const tabsItems: TabsProps["items"] = [
  {
    key: "1",
    label: "Overview",
    children: <Overview />,
  },
  {
    key: "2",
    label: "Contacts/Addresses",
    children: "Content of Contacts/Addresses",
  },
  {
    key: "3",
    label: "Financials",
    children: "Content of Financials",
  },
  {
    key: "4",
    label: "E-Commerce",
    children: "Content of E-Commerce",
  },
];

export const CustomerMaintenance = () => {
  return (
    <div className={styles.section}>
      <h1 className={styles.heading1}>Customer Maintenance</h1>

      <div className="flex gap-5">
        {/* Left Sidebar */}
        <div className={`w-[25%] ${styles.box}`}>
          {/* Company Info */}
          <div className="flex gap-2">
            <div className="w-10 h-10 bg-black text-white text-2xl leading-10 font-medium text-center rounded-md">
              W
            </div>
            <div className="flex flex-col gap-1">
              <h5 className={styles.heading5}>Waretech</h5>
              <p className="text-xs text-lightText">HDM Solar</p>
            </div>
          </div>

          <hr className="w-full h-[2px] text-line" />

          {/* Maintenance Breakdown */}
          <div>
            <h4 className={styles.heading4}>Maintenance Breakdown</h4>
            <p className="text-lightText">
              Add, Edit, Delete any of your Entities
            </p>
          </div>

          {/* Statistics Cards */}
          <div className="flex flex-col gap-2">
            {cardsItems.map((item) => (
              <Card
                key={item.key}
                className="w-full p-3 border-none rounded-lg bg-card"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <h5 className={`${styles.heading5} text-black`}>
                      {item.title}
                    </h5>
                    <p className="text-lightText">{item.subTitle}</p>
                  </div>
                  <h5 className={`${styles.heading5} text-black`}>
                    {item.value}
                  </h5>
                </div>
                <Progress
                  showInfo={false}
                  percent={item.percent}
                  strokeColor={item.color}
                />
              </Card>
            ))}
          </div>

          {/* Conversion History */}
          <div className="w-full p-3 border-none rounded-lg bg-card">
            <h4 className={styles.heading4}>Conversion History</h4>
            <p className="text-lightText">Week to week performance</p>
            <div className="flex flex-col gap-5 mt-5">
              {conversionHistory.map((item, index) => (
                <div key={index} className="flex flex-col gap-1">
                  <Progress
                    showInfo={false}
                    percent={item.progress1}
                    strokeColor="#5E81F4"
                  />
                  <Progress
                    showInfo={false}
                    percent={item.progress2}
                    strokeColor="#7CE7AC"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className={`w-[75%] ${styles.section}`}>
          {/* Search and Actions */}
          <div className="flex gap-5">
            <Input
              placeholder="Search Maintenance..."
              prefix={<SearchOutlined />}
              className="w-full"
            />
            <PrimaryButton
              type="primary"
              icon={<DownloadOutlined />}
              className="!bg-opacity-20 !text-[#3A5BFF]"
            >
              Export
            </PrimaryButton>
            <PrimaryButton type="primary" icon={<PlusOutlined />}>
              Add New
            </PrimaryButton>
          </div>

          {/* Tabs Section */}
          <div className={`${styles.box} rounded-lg`}>
            <h4 className={styles.heading4}>Renewa Ltd</h4>
            <Tabs defaultActiveKey="1" items={tabsItems} />
          </div>
        </div>
      </div>
    </div>
  );
};

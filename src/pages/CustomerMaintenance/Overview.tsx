import { Form, Input, Image } from "antd";
import { DownloadOutlined, SaveOutlined } from "@ant-design/icons";

import { SecondaryButton } from "@/components/Buttons";

import renewa from "@/assets/images/Renewa.png";

import { styles } from "@/styles";

// Define the OverviewProps interface
interface OverviewProps {
  name: string;
  label: string;
  placeholder: string;
}

// Define the overview data
const overviewItems: OverviewProps[] = [
  {
    name: "customerName",
    label: "Customer Name",
    placeholder: "Enter Customer Name",
  },
  {
    name: "customerAccountID",
    label: "Customer Account ID",
    placeholder: "Enter Customer Account ID",
  },
  {
    name: "customerTermsGroup",
    label: "Customer Terms Group",
    placeholder: "Enter Customer Terms Group",
  },
  {
    name: "paymentTerms",
    label: "Payment Terms",
    placeholder: "Enter Payment Terms",
  },
  {
    name: "creditLimit",
    label: "Credit Limit",
    placeholder: "Enter Credit Limit",
  },
  {
    name: "customerRep",
    label: "Customer Rep",
    placeholder: "Enter Customer Rep",
  },
  {
    name: "contactName",
    label: "Contact Name",
    placeholder: "Enter Contact Name",
  },
  {
    name: "contactNumber",
    label: "Contact Number",
    placeholder: "Enter Contact Number",
  },
  {
    name: "address",
    label: "Address",
    placeholder: "Enter Address",
  },
  {
    name: "postcode",
    label: "Postcode",
    placeholder: "Enter Postcode",
  },
];

// Define the initial values for the form fields
const initialValues = {
  customerName: "Renewa Ltd",
  customerAccountID: "456567",
  customerTermsGroup: "BUY1",
  paymentTerms: "45 Days",
  creditLimit: "3 Days",
  customerRep: "Steve H",
  contactName: "EcoFlow",
  contactNumber: "0333 455 6777",
  address: "123 Any Road, London",
  postcode: "L3 4TH",
};

// Define the statistics data
const statistics = [
  { label: "Total Orders YTD", value: 40 },
  { label: "Value of Orders YTD", value: "£157,365" },
  { label: "Total Orders LYTD", value: 15 },
  { label: "Value of Orders LYTD", value: "£23,405" },
];

export const Overview = () => {
  const [form] = Form.useForm();

  // Handle the form submission
  const handleSubmit = async () => {
    // Validate the form fields
    await form.validateFields();
  };

  // Helper function to render form items
  const renderFormItems = (items: OverviewProps[]) =>
    items.map((item) => (
      <Form.Item
        key={item.name}
        name={item.name}
        label={
          <label className={`${styles.label} !w-60 text-left`}>
            {item.label}
          </label>
        }
        className="m-0 [&_label]:after:!content-[none]"
      >
        <Input className="!w-fit" placeholder={item.placeholder} />
      </Form.Item>
    ));

  return (
    <Form
      form={form}
      name="overview"
      size="small"
      onFinish={handleSubmit}
      initialValues={initialValues}
      className="flex flex-col gap-5 p-5"
    >
      <div className="flex justify-between gap-10">
        {/* Form Fields */}
        <div className="flex flex-col gap-5">
          {/* Primary Details */}
          <div className="flex flex-col gap-5">
            <h5 className={styles.heading5}>Primary Details</h5>
            {renderFormItems(overviewItems.slice(0, 6))}
          </div>

          {/* Contact Details */}
          <div className="flex flex-col gap-5">
            <h5 className={styles.heading5}>Contact Details</h5>
            {renderFormItems(overviewItems.slice(6, 8))}
          </div>

          {/* Customer Address */}
          <div className="flex flex-col gap-5">
            <h5 className={styles.heading5}>Customer Address</h5>
            {renderFormItems(overviewItems.slice(8))}
          </div>
        </div>

        {/* Overview Details */}
        <div className="w-[30%] flex flex-col items-center gap-5">
          <div className="flex p-2 border-[1px] border-dashed border-gray">
            <Image
              src={renewa}
              alt="Renewa Ltd"
              width={100}
              height={100}
              preview={false}
            />
          </div>
          {/* Statistics Card */}
          <div className="flex flex-col gap-5 p-5 rounded-lg border-2 border-line">
            {statistics.map((stat, index) => (
              <div key={index} className="grid grid-cols-3 gap-5">
                <p className="text-lightText col-span-2">{stat.label}</p>
                <p className="font-medium text-gray">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-end gap-2">
        <SecondaryButton
          type="default"
          icon={<SaveOutlined />}
          className="rounded-md"
        >
          Save
        </SecondaryButton>
        <SecondaryButton
          type="default"
          icon={<DownloadOutlined />}
          className="rounded-md"
        >
          Download
        </SecondaryButton>
        <SecondaryButton type="default" className="rounded-md">
          Cancel
        </SecondaryButton>
      </div>
    </Form>
  );
};

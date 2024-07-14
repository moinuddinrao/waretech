import { useLocation, Link } from "react-router-dom";

import { Breadcrumb } from "antd";
import { HomeFilled } from "@ant-design/icons";

const processName = (name: string): string => {
  return name
    .split("-") // Split the string by hyphens
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize the first letter of each word
    .join(" "); // Join the words with spaces
};

export const BreadCrumb = () => {
  const { pathname } = useLocation();

  // Split the pathname by "/" and filter out any empty strings
  const pathnames = pathname.split("/").filter((item) => item);

  const items = [
    {
      title: <HomeFilled className="!text-lg text-green" />,
    },
    ...pathnames.map((name, index) => {
      const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
      const isLast = index === pathnames.length - 1;
      return isLast
        ? {
            title: processName(name),
            key: name,
            className: "!text-blue",
          }
        : {
            title: (
              <Link
                to={routeTo}
                className="hover:!bg-transparent !text-green hover:!text-blue"
              >
                {processName(name)}
              </Link>
            ),
            key: name,
          };
    }),
  ];

  return <Breadcrumb separator="/" items={items} />;
};

import { AxiosError } from "axios";
import { UndefinedInitialDataOptions } from "@tanstack/react-query";

import { endpoints, GET } from "@/utils/api.service";

export interface CustomerGetResponse {
  ReactCustomer: {
    ACCNO: string;
    NAME: string;
    ADDRESS: string[];
    AREA: string;
    REP: string;
    "CREDIT.LIMIT": string;
    FAX: string;
    PHONE: string;
    "LAST.YEAR": string;
    SALES: string[];
  }[];
}

export const getCustomer = (): UndefinedInitialDataOptions<
  CustomerGetResponse | undefined
> => {
  return {
    queryKey: endpoints.customer.get.cacheKey,
    queryFn: () =>
      GET<CustomerGetResponse>(endpoints.customer.get.url)
        .then(({ data }) => data)
        .catch(
          (error: AxiosError<CustomerGetResponse>) => error.response?.data
        ),
  };
};

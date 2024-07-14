import { App as AntdApp, ConfigProvider } from "antd";

import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { queryClient } from "@/utils/react-query.service";

import { Router } from "./Router";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <AntdApp>
        <ConfigProvider
          theme={{
            token: {
              borderRadius: 0,
            },
          }}
        >
          <Router />
        </ConfigProvider>
      </AntdApp>
    </QueryClientProvider>
  );
}

export default App;

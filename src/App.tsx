import { App as AntdApp, ConfigProvider } from "antd";

import { Router } from "./Router";

function App() {
  return (
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
  );
}

export default App;

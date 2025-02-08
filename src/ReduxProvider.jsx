"use client"; // ✅ Required for Redux in Next.js

import { Provider } from "react-redux";
import StoreToolkit from "./ReduxToolkit/Store"; // Adjust the path

export default function ReduxProvider({ children }) {
  return <Provider store={StoreToolkit}>{children}</Provider>;
}

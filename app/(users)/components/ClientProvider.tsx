"use client";

import { ReactNode } from "react";
import Navbar from "./Navbar";
import { Provider } from "react-redux";
import { store } from "../store";
import Sidebar from "./Sidebar";

export default function ClientProvider({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <Provider store={store}>
      <div>
        <Navbar />
        <Sidebar />
        {children}
      </div>
    </Provider>
  );
}

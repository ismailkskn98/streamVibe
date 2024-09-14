"use client";
import React from "react";
import { makeStore } from "@/store";
import { Provider } from "react-redux";

const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  return <Provider store={makeStore()}>{children}</Provider>;
};

export default StoreProvider;

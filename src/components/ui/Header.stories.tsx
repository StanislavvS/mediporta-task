import React from "react";

import { Meta } from "@storybook/react";
import Header from "./Header";

const sampleText = "Stack overflow tag page";

export default {
  title: "Atoms/Header",
  component: Header,
  args: {
    children: sampleText,
  },
} as Meta;

export const _Header = ({ children }: React.PropsWithChildren) => {
  return <Header>{children}</Header>;
};

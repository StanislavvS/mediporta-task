import React, { ComponentProps, useState } from "react";

import { StoryFn, Meta } from "@storybook/react";

import NumericInput from "./NumericInput";
import {
  QueriesContextProvider,
  QueryTags,
} from "../../context/QueriesContextProvider";

export default {
  title: "Molecules/NumericInput",
  component: NumericInput,
  args: {
    id: "numeric",
    label: "Select page size",
    max: 100,
    min: 1,
  },
} as Meta;

const Template: StoryFn<ComponentProps<typeof NumericInput>> = (args) => {
  const [queries, setQueries] = useState<QueryTags>({
    order: "desc",
    page: 1,
    pageSize: 30,
    sortBy: "popular",
    total: 750,
  });

  return (
    <QueriesContextProvider value={{ queries, setQueries }}>
      <NumericInput {...args} />
    </QueriesContextProvider>
  );
};

export const Default = Template.bind({});
Default.args = {
  id: "numeric",
  label: "Select page size",
  max: 100,
  min: 1,
};

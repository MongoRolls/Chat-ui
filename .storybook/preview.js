import React from "react";
import { addDecorator, addParameters } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import theme from "../src/theme";

import "story.css";
export const Decorator = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  ),
];

export const Parameters = {
  options: {
    showRoots: true,
  },
};

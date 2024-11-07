const fontFamily = {
  title: ["var(--z-font-sans)", "Montserrat"],
  content: ["var(--z-font-content)", "Montserrat"],
};

const borderRadius = {
  "z-box": "var(--z-radius-box)",
  "z-button": "var(--z-radius-button)",
  "z-button-rounded": "var(--z-radius-button-rounded)",
};

const colors = {
  background: "rgb(var(--z-color-background) / <alpha-value>)",
  "base-content": "rgb(var(--z-color-base-content) / <alpha-value>)",

  primary: "rgb(var(--z-color-primary) / <alpha-value>)",
  "primary-content": "rgb(var(--z-color-primary-content) / <alpha-value>)",

  secondary: "rgb(var(--z-color-secondary) / <alpha-value>)",
  "secondary-content": "rgb(var(--z-color-secondary-content) / <alpha-value>)",

  terciary: "rgb(var(--z-color-terciary) / <alpha-value>)",
  "terciary-content": "rgb(var(--z-color-terciary-content) / <alpha-value>)",

  accent: "rgb(var(--z-color-accent) / <alpha-value>)",
  "accent-content": "rgb(var(--z-color-accent-content) / <alpha-value>)",

  info: "rgb(var(--z-color-info) / <alpha-value>)",
  success: "rgb(var(--z-color-success) / <alpha-value>)",
  warning: "rgb(var(--z-color-warning) / <alpha-value>)",
  error: "rgb(var(--z-color-error) / <alpha-value>)",
};

export const THEME = {
  fontFamily,
  spacing: {
    // '128': '32rem',
    // '144': '36rem',
  },
  borderRadius,
  colors,
};

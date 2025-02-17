import { DefaultTheme } from "styled-components";

const darkTheme: DefaultTheme = {
  name: "dark",
  spacing: (num) => num * 8,
  colors: {
    background: "#171C20",
    text: {
      contrast: "#fafafa",
      secondary: "rgba(250,250,250,0.5)"
    }
  },
  fontWeight: {
    thin: 100,
    medium: 400,
    bold: 700,
  },
  font: {
    title: "Poppins, sans-serif",
    text: "Open sans, sans-serif",
  }
};

export default darkTheme;

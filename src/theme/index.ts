// // import { extendTheme } from "@chakra-ui/react";
// // import {CardTheme} from "@components/design/Card";
// import * as overrides from "@theme/override";

// const colors = {
//   brand: {
//     green: "#42E794",
//     darkGreen: "#1E7B75",
//     red: "#FF4658",
//     orange: "#FF6105",
//     lightBlue: "#2ab8ff",
//     darkBlue: "#1467FF",
//     blue: "#2AB8FF",
//     purple: "#630CB2",
//     yellow: "#fff95e"
//   },
//   blue: {500: "#2ab8ff", 600: "#1467FF"},
//   yellow: {100: "#fff95e"},
//   red: {100: "#ff4658"},
//   pink: {100: "#e748b9" }
// }
// export const theme = extendTheme({ 
//   colors,
//   components: {
//     Card: CardTheme,
//     ...overrides
//   }
// })

// src/theme/index.ts
import { MantineThemeOverride } from '@mantine/core';

export const theme: MantineThemeOverride = {
  fontFamily: 'Inter, sans-serif',
  primaryColor: 'brand',
  colors: {
    brand: [
      "#e6f9f2", // lightest
      "#bff2dc",
      "#99ebc7",
      "#73e3b1",
      "#4ddc9b",
      "#42E794", // base brand green
      "#1E7B75", // dark green
      "#16856a",
      "#0f6b56",
      "#07413a"  // darkest
    ]
  },
  components: {
    Button: { defaultProps: { radius: 'xl' } },
    Card: { defaultProps: { radius: 'md', shadow: 'sm' } },
    TextInput: { defaultProps: { radius: 'md' } },
    Select: { defaultProps: { radius: 'md' } },
  }
};

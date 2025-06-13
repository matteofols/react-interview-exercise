
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
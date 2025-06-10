// import React from 'react';
// import { Box, useStyleConfig } from "@chakra-ui/react"

// export const CardTheme = {
//     // The styles all Cards have in common
//     baseStyle: {
//       display: "flex",
//       flexDirection: "column",
//       alignItems: "center",
//       gap: 6,
//     },
//     // Two variants: rounded and smooth
//     variants: {
//       rounded: {
//         padding: 8,
//         borderRadius: "40px",
//         boxShadow: "xl",
//         border: "2px solid"
//       },
//       smooth: {
//         padding: 6,
//         borderRadius: "base",
//         boxShadow: "md",
//       },
//     },
//     // The default variant value
//     defaultProps: {
//       variant: "smooth",
//     },
// }

// export const Card:React.FC<{variant:string, borderColor?:string}>  = ({variant, children, borderColor, ...rest}) => {
//   const styles = useStyleConfig("Card", { variant })
//   // Pass the computed styles into the `__css` prop
//   return (
//     <Box className="cs-card" __css={styles} borderColor={borderColor} {...rest} >
//       {children}
//     </Box>
//   )
// }

import React from "react";
import { Paper, PaperProps } from "@mantine/core";

interface CustomCardProps extends PaperProps {
  variant?: "rounded" | "smooth";
  borderColor?: string;
}

export const Card: React.FC<CustomCardProps> = ({
  children,
  variant = "smooth",
  borderColor,
  ...rest
}) => {
  const styles = {
    rounded: {
      padding: 32,
      borderRadius: 40,
      boxShadow: "xl",
      border: "2px solid",
      borderColor: borderColor || "#ccc",
    },
    smooth: {
      padding: 24,
      borderRadius: "8px",
      boxShadow: "md",
    },
  };

  return (
    <Paper
      className="cs-card"
      style={styles[variant]}
      {...rest}
    >
      {children}
    </Paper>
  );
};

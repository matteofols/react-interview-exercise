import React, { ReactNode } from "react";
import { Box } from "@mantine/core";
import Logo from "../header_logo.png";
import Glob from "./design/Glob";

interface HeaderProps {
  children?: ReactNode;
}

const Header: React.FC<HeaderProps> = ({ children }) => {
  return (
    <>
      <Box
        style={{
          position: "absolute",
          width: "100vw",
          height: "100%",
          overflow: "hidden",
          minHeight: "100vh",
        }}
      >
        <Glob
          size={["60%", "60%"]}
          speed={30}
          globSizes={[[60, 65], [70, 80], [30, 75]]}
          left="0%"
          top="10%"
          opacity={0.5}
          color="#2da397"
        />
        <Glob size={["600px", "600px"]} left="-50px" top="-20px" color="#2da397" />
      </Box>

      <Box
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          width: "100vw",
          height: "80px",
        }}
      >
        <a href="https://characterstrong.com">
          <img className="header-img" src={Logo} alt="CharacterStrong Logo" />
        </a>
        {children}
      </Box>
    </>
  );
};

export default Header;

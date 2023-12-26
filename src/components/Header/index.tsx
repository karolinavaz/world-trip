import { Flex, Spacer } from "@chakra-ui/react";
import Image from "next/image";
import logo from "../../../public/illustrations/Logo.png";

export function Header() {
  return (
    <Flex py={6} alignItems={"center"} justifyContent={"center"}>
      <Image alt="Logo" src={logo} />
    </Flex>
  );
}

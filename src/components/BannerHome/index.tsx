import { Box, Container, Flex, Heading, Text } from "@chakra-ui/react";
import Image from "next/image";
import background from "../../../public/illustrations/Background.png";
import airplane from "../../../public/illustrations/Airplane.png";

export function BannerHome() {
  return (
    <Flex
      color="white"
      position={"relative"}
      justifyContent={"space-between"}
      minH={335}
    >
      <Image objectFit="cover" layout="fill" src={background} alt={"back"} />
      <Container maxW='container.xl' zIndex={10} display={"flex"} justifyContent={'center'} flexDirection={"column"}>
        <Box maxW={'30vw'} verticalAlign={'middle'} >
          <Heading fontWeight={'medium'}>
            5 Continentes, infinitas possibilidades.
          </Heading>
          <Text mt={4}>
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.
          </Text>
        </Box>
        <Box
          zIndex={10}
          minW={"25vw"}
          position={"absolute"}
          bottom={"-5vh"}
          right={"2vw"}
        >
          <Image
            alt="Logo"
            src={airplane}
            objectFit="cover"
            objectPosition="absolute"
          />
        </Box>
      </Container>
    </Flex>
  );
}

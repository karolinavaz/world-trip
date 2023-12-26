"use client";
import { Container, Flex, Heading, Image, Text } from "@chakra-ui/react";

interface SlideItem {
    image: string,
    title: string,
    text: string
}

export default ({ image, text, title}:SlideItem) => {
  return (
        <Flex
          color="white"
          position={"relative"}
          justifyContent={"space-between"}
          maxH={450}
        >
          <Image
            objectFit="cover"
            src={image}
            alt={"back"}
            filter={'brightness(50%)'}
          />
          <Container
            maxW="container.xl"
            zIndex={10}
            display={"flex"}
            justifyContent={"center"}
            flexDirection={"column"}
            position={"absolute"}
            height={"100%"}
            alignItems={"center"}
          >
            <Heading fontWeight={"bold"} fontSize={'5xl'}>{title}</Heading>
            <Text mt={4} fontWeight={"bold"} fontSize={'2xl'} color={"#DADADA"}>{text}</Text>
          </Container>
        </Flex>
  );
};

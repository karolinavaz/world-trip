import { Container, Flex, Image, Text } from "@chakra-ui/react";

type SVG = {
  src: string;
  height: number;
  width: number;
  blurWidth: number;
  blurHeight: number;
};

interface ItemTravelTypeProps {
  image: SVG;
  text: string;
}

export function ItemTravelType({ image, text }: ItemTravelTypeProps) {
  return (
    <Flex direction="column" align="center">
      <Image boxSize="85px" objectFit="cover" src={image?.src} alt={text} />
      <Text fontSize="24px" color={'#47585B'} fontWeight={'medium'} mt={4}>{text}</Text>
    </Flex>
  );
}

import { Box, Center, Container, Divider, Heading } from "@chakra-ui/react";
import { Header } from "@/components/Header";
import { BannerHome } from "@/components/BannerHome";
import { TravelTypes } from "@/components/TravelTypes";
import ContinentsSlide from "@/components/ContinentsSlide";

export default function Home() {
  return (
    <Box p={0} pb={20}>
      <Header />
      <BannerHome />
      <TravelTypes />
      <Center>
        <Divider borderColor={"#47585B"} width={"10vw"} borderWidth={"2px"} />
      </Center>
      <Center my={8} flexDirection={'column'}> 
        <Heading fontWeight={"medium"}>Vamos nessa?</Heading>
        <Heading fontWeight={"medium"}>Então escolha seu continente</Heading>
      </Center>
      <Container maxW="container.xl">
      <ContinentsSlide />
      </Container>
    </Box>
  );
}

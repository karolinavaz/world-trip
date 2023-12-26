import { Container, SimpleGrid } from "@chakra-ui/react";
import { ItemTravelType } from "./ItemTravelType";
import cocktail from "../../../public/icons/cocktail.svg";
import earth from "../../../public/icons/earth.svg";
import building from "../../../public/icons/building.svg";
import surf from "../../../public/icons/surf.svg";
import museum from "../../../public/icons/museum.svg";

export function TravelTypes() {
  return (
    <Container maxW="container.xl" my={12}>
      <SimpleGrid columns={5}>
        <ItemTravelType image={cocktail} text="vida noturna" />
        <ItemTravelType image={surf} text="praia" />
        <ItemTravelType image={building} text="moderno" />
        <ItemTravelType image={museum} text="clássico" />
        <ItemTravelType image={earth} text="e mais..." />
      </SimpleGrid>
    </Container>
  );
}

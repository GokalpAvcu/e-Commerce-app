import { Box, Image, Button } from "@chakra-ui/react";

import { Link } from "react-router-dom";

function Card() {
  return (
    <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p="3">
      <Link to="#/">
        <Image src="https://baconmockup.com/640/360" alt="product"></Image>
        <Box p="6">
          <Box d="plex" alignItems="baseline">
            12/2/2022
          </Box>
          <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight">
            Macbook Pro
          </Box>
          <Box>100 TL</Box>
        </Box>
      </Link>

      <Button colorScheme="pink">Add to basket</Button>
    </Box>
  );
}

export default Card;

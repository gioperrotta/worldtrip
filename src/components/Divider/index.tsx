import React from "react";
import { Box } from "@chakra-ui/react";

export function Divider() {
  return (
    <Box
      w={["60px", "90px"]}
      h="2px"
      mx="auto"
      bg="gray.700"
      my={["10", "20"]}
    />
  );
}
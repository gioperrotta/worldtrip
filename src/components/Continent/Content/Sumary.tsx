
import { Flex, Heading, Icon, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent,  PopoverTrigger, Text } from "@chakra-ui/react";
import { RiFileInfoLine } from "react-icons/ri";

interface SumaryProps {
  indicator : number;
  description: string;
  popoverCities?: string[];
}

export function Sumary({ indicator, description, popoverCities }:SumaryProps) {
  return (
      <Flex direction="column" justify="center" align={["flex-start", "flex-start", "center"]}>
        <Heading fontSize={["2xl", "5xl"]} color="yellow.400" fontWeight="500">
          {indicator}
        </Heading>
        <Text fontSize={["md", "xl"]} fontWeight="500" color="gray.700" >
          {description}
          { popoverCities && (
          <Popover>
            <PopoverTrigger>
              <span>
                <Icon
                  as={RiFileInfoLine}
                  w={["10px", "16px"]}
                  h={["10px", "16px"]}
                  ml="1"
                  color="gray.400"
                  cursor="pointer" 
                />
              </span>
            </PopoverTrigger>
            <PopoverContent bg="gray.700" color="yellow.400">
              <PopoverArrow bg="gray.700" />
              <PopoverCloseButton/>
              <PopoverBody fontWeight="400" fontSize="lg">
                {popoverCities.map((city, i) => (
                  <span key={i}>{city}, </span>
                ))}
               </PopoverBody>
            </PopoverContent>
          </Popover>

          )}
        </Text>
      </Flex>
  );
}
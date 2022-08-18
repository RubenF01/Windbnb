import { Stay } from "../../types/types";
import { HStack, Image, Badge, Flex, Text } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

const Stay = (props: Stay) => {
  return (
    <Flex flexDirection="column" w="395px">
      <Image
        src={props.photo}
        alt={props.title}
        w="full"
        h="269px"
        objectFit="cover"
        borderRadius={20}
      />
      <Flex justify="space-between" alignItems="center">
        <HStack w="full" paddingTop="20px">
          {props.superHost && (
            <Badge
              variant="outline"
              color="brand.600"
              fontSize="12px"
              borderRadius={20}
              py="6px"
              px="9px"
            >
              SUPER HOST
            </Badge>
          )}
          <Text fontWeight="medium" color="#828282">
            {props.type} {props.beds && <> . {props.beds} beds</>}
          </Text>
        </HStack>
        <HStack>
          <StarIcon color="brand.500" />
          <Text>{props.rating}</Text>
        </HStack>
      </Flex>
      <Text paddingTop="12px" fontWeight="semibold" color="brand.700">
        {props.title}
      </Text>
    </Flex>
  );
};

export default Stay;

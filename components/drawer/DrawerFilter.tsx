import { useEffect } from "react";
import { DrawerFilter } from "../../types/types";
import Location from "../../public/location.svg";
import { useStore } from "../../store";
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Box,
  Button,
  Text,
  HStack,
  VStack,
  Heading,
  IconButton,
} from "@chakra-ui/react";

import { SearchIcon, AddIcon, MinusIcon } from "@chakra-ui/icons";

const DrawerFilter = (props: DrawerFilter) => {
  const activeFilter = useStore((state) => state.activeFilter);
  const changeFilter = useStore((state) => state.changeFilter);
  const stays = useStore((state) => state.stays);
  const addAdult = useStore((state) => state.addAdult);
  const removeAdult = useStore((state) => state.removeAdult);
  const addChild = useStore((state) => state.addChild);
  const removeChild = useStore((state) => state.removeChild);
  const adultCount = useStore((state) => state.adultCount);
  const childCount = useStore((state) => state.childCount);

  const cities = [...new Set(stays.map((stay) => stay.city))];

  return (
    <Drawer isOpen={props.isOpen} onClose={props.onClose} placement="top">
      <DrawerOverlay />
      <DrawerContent>
        <DrawerBody>
          <Flex maxW={1250} mx="auto" align="flex-start" py="93px">
            <Box>
              <Box
                onClick={() => changeFilter("location")}
                border={activeFilter === "location" ? "1px" : "none"}
                w="426px"
                pl="26px"
                borderRadius="xl"
                cursor="pointer"
                fontSize="9px"
                fontWeight={800}
                py="10px"
              >
                LOCATION <br />
                <Box as="span" fontSize="14px" fontWeight={400}>
                  Helsinki, Finland
                </Box>
              </Box>

              <VStack
                pl="26px"
                pt="41px"
                spacing="34px"
                align="start"
                display={activeFilter === "location" ? "block" : "none"}
              >
                {cities.map((city, index) => (
                  <HStack key={index} cursor="pointer">
                    <Location fill="#4F4F4F" width="19px" />
                    <Text>{city}, Finland</Text>
                  </HStack>
                ))}
              </VStack>
            </Box>

            <Box>
              <Box
                onClick={() => changeFilter("guests")}
                border={activeFilter === "guests" ? "1px" : "none"}
                w="426px"
                pl="26px"
                borderRadius="xl"
                cursor="pointer"
                fontSize="9px"
                fontWeight={800}
                py="10px"
                ml="3px"
              >
                GUESTS <br />
                <Box as="span" fontSize="14px" fontWeight={400}>
                  Add guests
                </Box>
              </Box>
              <VStack
                pl="26px"
                pt="41px"
                spacing="34px"
                align="start"
                display={activeFilter === "guests" ? "block" : "none"}
              >
                <VStack align="start">
                  <Heading fontSize="14px">Adults</Heading>
                  <Text fontSize="14px">Ages 13 or above</Text>
                  <HStack spacing="15px">
                    <IconButton
                      onClick={removeAdult}
                      aria-label="subtract"
                      border="1px"
                      icon={<MinusIcon />}
                      size="xs"
                      variant="ghost"
                    />
                    <Text cursor="default">{adultCount}</Text>
                    <IconButton
                      onClick={addAdult}
                      aria-label="add"
                      border="1px"
                      icon={<AddIcon />}
                      size="xs"
                      variant="ghost"
                    />
                  </HStack>
                </VStack>

                <VStack align="start">
                  <Heading fontSize="14px">Children</Heading>
                  <Text fontSize="14px">Ages 2-12</Text>
                  <HStack spacing="15px">
                    <IconButton
                      onClick={removeChild}
                      aria-label="subtract"
                      border="1px"
                      icon={<MinusIcon />}
                      size="xs"
                      variant="ghost"
                    />
                    <Text cursor="default">{childCount}</Text>
                    <IconButton
                      onClick={addChild}
                      aria-label="add"
                      border="1px"
                      icon={<AddIcon />}
                      size="xs"
                      variant="ghost"
                    />
                  </HStack>
                </VStack>
              </VStack>
            </Box>

            <Button
              h="48px"
              colorScheme="button"
              ml="140px"
              mt="3px"
              leftIcon={<SearchIcon />}
            >
              Search
            </Button>
          </Flex>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default DrawerFilter;

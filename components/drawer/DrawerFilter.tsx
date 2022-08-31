import { DrawerFilter } from "../../types/types";
import Location from "../../public/location.svg";
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
  return (
    <Drawer isOpen={props.isOpen} onClose={props.onClose} placement="top">
      <DrawerOverlay />
      <DrawerContent>
        <DrawerBody>
          <Flex maxW={1250} mx="auto" align="flex-start" py="93px">
            <Box>
              <Box
                border="1px"
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

              <VStack pl="26px" pt="41px" spacing="34px" align="start">
                <HStack>
                  <Location fill="#4F4F4F" width="19px" />
                  <Text>Helsinki, Finland</Text>
                </HStack>
                <HStack>
                  <Location fill="#4F4F4F" width="19px" />
                  <Text>Turku, Finland</Text>
                </HStack>
                <HStack>
                  <Location fill="#4F4F4F" width="19px" />
                  <Text>Oulu, Finland</Text>
                </HStack>
                <HStack>
                  <Location fill="#4F4F4F" width="19px" />
                  <Text>Vaasa, Finland</Text>
                </HStack>
              </VStack>
            </Box>

            <Box>
              <Box
                border="1px"
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
              <VStack pl="26px" pt="41px" spacing="34px" align="start">
                <VStack align="start">
                  <Heading fontSize="14px">Adults</Heading>
                  <Text fontSize="14px">Ages 13 or above</Text>
                  <HStack spacing="15px">
                    <IconButton
                      aria-label="subtract"
                      border="1px"
                      icon={<MinusIcon />}
                      size="xs"
                      variant="ghost"
                    />
                    <Text>0</Text>
                    <IconButton
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
                      aria-label="subtract"
                      border="1px"
                      icon={<MinusIcon />}
                      size="xs"
                      variant="ghost"
                    />
                    <Text>0</Text>
                    <IconButton
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

import type { NextPage } from "next";
import Head from "next/head";
import NavBar from "../components/nav/NavBar";
import Stay from "../components/stay/Stay";
import Footer from "../components/footer/Footer";
import DrawerFilter from "../components/drawer/DrawerFilter";
import { useEffect } from "react";
import { useStore } from "../store";

import {
  Flex,
  Heading,
  Text,
  SimpleGrid,
  useDisclosure,
  Box
} from "@chakra-ui/react";

const Home: NextPage = () => {
  const stays = useStore(state => state.stays);
  const filteredStays = useStore((state) => state.filteredStays);
  const setFilteredStays = useStore((state) => state.setFilteredStays);
  const { isOpen, onOpen, onClose } = useDisclosure();


  useEffect(() => {
    setFilteredStays(stays);
  }, []);

  const stayCount = filteredStays.length;

  return (
    <Box>
      <Head>
        <title>Windbnb</title>
        <meta name="description" content="Created by Rubén Frías" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box as="main">
        <NavBar onOpen={onOpen} />
        <Flex
          maxW={1250}
          m="auto"
          marginTop={85}
          alignItems="center"
          justify="space-between"
        >
          <Heading as="h1" fontSize="24px" cursor="default">
            Stays in Finland
          </Heading>
          <Text
            fontSize="14px"
            color="#4F4F4F"
            fontWeight="medium"
            cursor="default"
          >
            {stayCount > 12 ? "12+" : stayCount} {stayCount > 1 ? "stays" : "stay"}
          </Text>
        </Flex>
        <SimpleGrid
          columns={3}
          maxW={1250}
          m="auto"
          spacing="40px"
          paddingTop="32px"
        >
          {filteredStays.map((stay, index) => (
            <Stay key={index} {...stay} />
          ))}
        </SimpleGrid>
        <Footer />
        <DrawerFilter isOpen={isOpen} onClose={onClose} />
      </Box>
    </Box>
  );
};

export default Home;

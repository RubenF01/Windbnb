import { Flex, Button, IconButton, ButtonGroup } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import Logo from "../../public/logo.svg";

const NavBar = () => {
  return (
    <Flex
      maxW={1250}
      m="auto"
      paddingTop={49}
      justify="space-between"
      alignItems="center"
    >
      <Logo />
      <ButtonGroup colorScheme="whiteAlpha">
        <Button color="black" fontSize="14px">
          Helsinki, Finland
        </Button>
        <Button color="black" fontSize="14px">
          Add guests
        </Button>
        <IconButton
          aria-label="Search Stays"
          icon={<SearchIcon color="brand.500" />}
        />
      </ButtonGroup>
    </Flex>
  );
};

export default NavBar;

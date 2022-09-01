import { Flex, Button, IconButton, ButtonGroup } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import Logo from "../../public/logo.svg";
import { useStore } from "../../store";

type NavBarProps = {
  onOpen: () => void;
};

const NavBar = (props: NavBarProps) => {
  const changeFilter = useStore((state) => state.changeFilter);

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
        <Button
          color="black"
          fontSize="14px"
          onClick={() => {
            props.onOpen();
            changeFilter("location");
          }}
        >
          Helsinki, Finland
        </Button>
        <Button
          color="black"
          fontSize="14px"
          onClick={() => {
            props.onOpen();
            changeFilter("guests");
          }}
        >
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

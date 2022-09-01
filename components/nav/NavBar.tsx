import { Flex, Button, IconButton, ButtonGroup } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import Logo from "../../public/logo.svg";
import { useStore } from "../../store";

type NavBarProps = {
  onOpen: () => void;
};

const NavBar = (props: NavBarProps) => {
  const childCount = useStore((state) => state.childCount);
  const adultCount = useStore((state) => state.adultCount);
  const selectedCity = useStore((state) => state.selectedCity);
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
      <ButtonGroup
        colorScheme="whiteAlpha"
        shadow="base"
        borderRadius="xl"
        py="5px"
      >
        <Button
          borderRight="1px"
          borderRightRadius="none"
          borderColor="separator"
          color="black"
          fontSize="14px"
          onClick={() => {
            props.onOpen();
            changeFilter("location");
          }}
        >
          {selectedCity !== "" ? `${selectedCity}, Finland` : "Finland"}
        </Button>
        <Button
          borderRight="1px"
          borderRightRadius="none"
          borderColor="separator"
          color="black"
          fontSize="14px"
          onClick={() => {
            props.onOpen();
            changeFilter("guests");
          }}
        >
          {adultCount || childCount
            ? `${adultCount + childCount} guest${
                adultCount + childCount > 1 ? "s" : ""
              }`
            : "Add guests"}
        </Button>
        <IconButton
          onClick={() => {
            props.onOpen();
            changeFilter("location");
          }}
          aria-label="Search Stays"
          icon={<SearchIcon color="brand.500" />}
        />
      </ButtonGroup>
    </Flex>
  );
};

export default NavBar;

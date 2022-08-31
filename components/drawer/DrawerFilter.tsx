import { DrawerFilter } from "../../types/types";
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
} from "@chakra-ui/react";

const DrawerFilter = (props: DrawerFilter) => {
  return (
    <Drawer isOpen={props.isOpen} onClose={props.onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerBody></DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default DrawerFilter;

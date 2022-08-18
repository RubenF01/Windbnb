import { Text, Link } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Text align="center" mt="101px" pb="26px">
      created by{" "}
      <Link
        textDecoration="underline"
        href="https://rubenfrias.com/"
        target="_blank"
      >
        Rubén Frías
      </Link>{" "}
      - devChallenges.io
    </Text>
  );
};

export default Footer;

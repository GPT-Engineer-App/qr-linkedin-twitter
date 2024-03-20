import { Box, VStack, HStack, Link, Image, Text } from "@chakra-ui/react";
import { FaLinkedin, FaTwitter } from "react-icons/fa";

const Index = () => {
  return (
    <Box bg="black" minH="100vh" color="white" p={8}>
      <HStack spacing={8} alignItems="center" justifyContent="center" h="100vh">
        <VStack spacing={4} alignItems="flex-start">
          <Link href="https://linkedin.com/in/antonosika" isExternal>
            <HStack>
              <FaLinkedin />
              <Text>linkedin.com/in/antonosika</Text>
            </HStack>
          </Link>
          <Link href="https://x.com/antonosika" isExternal>
            <HStack>
              <FaTwitter />
              <Text>x.com/antonosika</Text>
            </HStack>
          </Link>
        </VStack>
        <Image src="https://i.imgur.com/PHgUd9u.png" alt="QR Code" boxSize="300px" />
      </HStack>
    </Box>
  );
};

export default Index;

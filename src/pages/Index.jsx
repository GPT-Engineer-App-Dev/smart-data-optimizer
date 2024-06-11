import { Box, Flex, Input, Text, VStack } from "@chakra-ui/react";

const Index = () => {
  return (
    <Flex direction="column" height="100vh">
      {/* Navbar */}
      <Box bg="blue.500" color="white" p={4}>
        <Text fontSize="xl">Navbar</Text>
      </Box>

      <Flex flex="1">
        {/* Chat Section */}
        <Box bg="gray.100" width="30%" p={4}>
          <Text fontSize="lg" mb={4}>Chat</Text>
          {/* Chat content goes here */}
        </Box>

        <Flex direction="column" flex="1" p={4}>
          {/* URL Bar */}
          <Box mb={4}>
            <Input placeholder="URL bar of preview" />
          </Box>

          {/* Preview Section */}
          <Box bg="gray.200" flex="1" p={4}>
            <Text fontSize="lg">Preview</Text>
            {/* Preview content goes here */}
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Index;
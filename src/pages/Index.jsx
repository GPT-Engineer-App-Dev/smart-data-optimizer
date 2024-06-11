import { useState } from "react";
import { Box, Flex, Input, Text, VStack, HStack, Button } from "@chakra-ui/react";

const Index = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleSendMessage = () => {
    if (inputValue.trim() !== "") {
      setMessages([...messages, { text: inputValue, type: "sent" }]);
      setInputValue("");
    }
  };

  return (
    <Flex direction="column" height="100vh">
      {/* Navbar */}
      <Box bg="blue.500" color="white" p={4}>
        <Text fontSize="xl">Navbar</Text>
      </Box>

      <Flex flex="1" direction="row">
        {/* Chat Section */}
        <Box bg="gray.100" width="30%" p={4} display="flex" flexDirection="column" height="100%">
          <Text fontSize="lg" mb={4}>Chat</Text>
          <VStack spacing={4} align="stretch" flex="1" overflowY="auto" height="calc(100vh - 200px)">
            <Box bg="white" p={4} borderRadius="md" boxShadow="md" flex="1" overflowY="auto">
              {messages.map((msg, index) => (
                <Box key={index} bg={msg.type === "sent" ? "blue.100" : "gray.200"} p={2} borderRadius="md" mb={2}>
                  <Text>{msg.text}</Text>
                </Box>
              ))}
            </Box>
          </VStack>
          <HStack mt={4} p={2} bg="white" borderRadius="md" boxShadow="md" position="sticky" bottom="0" width="100%">
            <Input
              placeholder="Type your message..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === "Enter") {
                  handleSendMessage();
                }
              }}
            />
            <Button onClick={handleSendMessage}>Send</Button>
          </HStack>
        </Box>

        <Flex direction="column" flex="1" p={4} bg="white">
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
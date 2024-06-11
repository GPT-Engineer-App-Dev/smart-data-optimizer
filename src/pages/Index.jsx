import { useState } from "react";
import { Button, Input, Box, Flex, Text, VStack } from "@chakra-ui/react";

const Index = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (input.trim() !== "") {
      setMessages([...messages, { text: input, sender: "user" }]);
      setInput("");
    }
  };

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
          <VStack spacing={4} align="stretch">
            {messages.map((msg, index) => (
              <Box key={index} alignSelf={msg.sender === "user" ? "flex-end" : "flex-start"} bg={msg.sender === "user" ? "blue.100" : "gray.200"} p={2} borderRadius="md">
                <Text>{msg.text}</Text>
              </Box>
            ))}
          </VStack>
          <Flex mt={4}>
            <Input
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => {
                if (e.key === "Enter") sendMessage();
              }}
            />
            <Button ml={2} onClick={sendMessage}>Send</Button>
          </Flex>
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
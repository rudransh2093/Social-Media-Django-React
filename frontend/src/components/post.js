import { VStack, Text, HStack,Flex, Box } from '@chakra-ui/react'
import React from 'react'
//import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
const Post = ({ username, description, formatted_date, like_count }) => (
    <VStack w="400px" h="400px" border="1px solid" borderColor="gray.400" borderRadius="8px" spacing={0} align="stretch">
      <HStack w="100%" p="10px 20px" bg="gray.50" borderBottom="1px solid" borderColor="gray.300" borderTopRadius="8px" justifyContent="space-between">
        <Text fontWeight="bold">{username}</Text>
      </HStack>
  
      <Flex flex="1" w="100%" p="20px" justify="center" align="center">
        <Text textAlign="center">{description}</Text>
      </Flex>
  
      <HStack w="100%" p="10px 20px" bg="gray.50" borderTop="1px solid" borderColor="gray.400" borderBottomRadius="8px" justify="space-between">
        <HStack>
          <Box>
            <FaRegHeart />
          </Box>
          <Text>{like_count}</Text>
        </HStack>
        <Text>{formatted_date}</Text>
      </HStack>
    </VStack>
  );
  

export default Post
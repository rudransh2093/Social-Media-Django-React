import { Flex, Text, HStack } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom";
import { IoPersonOutline } from "react-icons/io5";

const Navbar = () => {

  const nav = useNavigate();

  const handleFunction = (route) => {
    nav(`/${route}`)
  }

  return (
    <Flex w='100vw' h='90px' bg='blue.600' justifyContent='center' alignItems='center'>
      <HStack w='90%' justifyContent='space-between' color='white'>
      <Text fontSize='24px' fontWeight='bold'>socialhub</Text>
      </HStack>
      <HStack>
        <Text onClick={(route) => handleFunction('rudu')} fontSize='24px' fontWeight='bold' color='white'>
          <IoPersonOutline size = '22px' />
        </Text>
      </HStack>
    </Flex>
  )
}

export default Navbar
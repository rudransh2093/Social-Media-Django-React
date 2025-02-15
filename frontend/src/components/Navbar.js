import { Flex, Text, HStack } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom";
import { IoPersonOutline } from "react-icons/io5";
import { IoMdAddCircleOutline } from "react-icons/io";
import { FaHouse } from "react-icons/fa6";

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
      <HStack color="white" spacing={4} gap='10px'>
        <Text onClick={() => handleFunction('rudvstheworld')}>
          <IoPersonOutline size="24px" />
        </Text>
        <HStack as="span" spacing={2} onClick={() => handleFunction('create/post')}>
          <IoMdAddCircleOutline size='24px' />
        </HStack>
        <Text onClick={() => handleFunction('')}>
          <FaHouse size="24px" />
        </Text>
      </HStack>
    </Flex>
  )
}

export default Navbar
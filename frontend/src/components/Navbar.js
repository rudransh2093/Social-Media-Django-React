import { Flex, Text, HStack } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { IoPersonOutline } from "react-icons/io5";
import { IoMdAddCircleOutline } from "react-icons/io";
import { FaHouse } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";

const Navbar = () => {
  const nav = useNavigate();

  const handleFunction = (route) => {
    nav(`/${route}`);
  };

  const handleNavigateUser = () => {
    const userData = localStorage.getItem('userData');
    if (userData) {
      const username = JSON.parse(userData)['username'];
      nav(`/${username}`);
      window.location.reload();
    }
  };

  return (
    <Flex w="100vw" h="90px" bg="blue.600" justifyContent="center" alignItems="center">
      <HStack w="90%" justifyContent="space-between" color="white">
        <Text fontSize="24px" fontWeight="bold">socialhub</Text>
        <HStack color="white" spacing={4} gap="15px">
          <Text onClick={handleNavigateUser} cursor="pointer">
            <IoPersonOutline size="24px" />
          </Text>
          <Text onClick={() => handleFunction('create/post')} cursor="pointer">
            <IoMdAddCircleOutline size="24px" />
          </Text>
          <Text onClick={() => handleFunction('')} cursor="pointer">
            <FaHouse size="24px" />
          </Text>
          <Text onClick={() => handleFunction('search')} cursor="pointer">
            <IoSearch size="24px" />
          </Text>
          <Text onClick={(route) => handleFunction('settings')}><IoMdSettings size='20px' /></Text>
        </HStack>
      </HStack>
    </Flex>
  );
};

export default Navbar;

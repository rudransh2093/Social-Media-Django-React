import { VStack, Flex,  Text,  FormControl, Input, Button, FormLabel, Heading } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom";
import { useState} from "react"
import { useAuth } from "../contexts/useAuth";

const Login = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();
    const { auth_login }= useAuth();


    const handleLogin = () =>{
        auth_login(username, password)
    }

    const handleNav = () => {
        navigate('/register')
    }

    return(
        <Flex w='100%' h='calc(100vh - 90px)' justifyContent='center' alignItems='center'>
            <VStack alignItems='start' w='95%' maxW='400px' gap='30px'>
            <FormControl>
                <Heading>Login</Heading>
                <FormLabel htmlFor='username'>Username</FormLabel>
                <Input onChange={(e) => setUsername(e.target.value)} bg='white' type='text' />
            </FormControl>
            <FormControl>
                <FormLabel htmlFor='password'>Password</FormLabel>
                <Input onChange={(e) => setPassword(e.target.value)} bg='white' type='password' />
            </FormControl>
            <VStack w='100%' alignItems='start'>
                    <Button onClick={handleLogin} w='100%' colorScheme="green" fontSize='18px'>Login</Button>
                    <Text 
                        onClick={handleNav} 
                        fontSize='14px' 
                        color='black' 
                        _hover={{ color: 'blue.500', textDecoration: 'underline' }} 
                        cursor='pointer' 
                        textAlign="center"
                    >
                        Don't have an account? <Text as="span" fontWeight="bold">Sign up</Text>
                    </Text>
            </VStack>
            </VStack>
        </Flex>
    )
}

export default Login
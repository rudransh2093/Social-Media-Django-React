import { VStack, Flex,  Text,  FormControl, Input, Button, FormLabel, Heading } from "@chakra-ui/react"
import { login } from "../api/endpoints"
import { useNavigate } from "react-router-dom";
import { useState} from "react"

const Login = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();


    const handleLogin = async() =>{
       const data =  await login(username, password)
       if (data.success){
         navigate(`/${username}`)
       }else {
        alert('invalid username or password!')
       }
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
                    <Text onClick={handleNav} fontSize='14px' color='gray.500'>Don't have an account? Sign up</Text>
            </VStack>
            </VStack>
        </Flex>
    )
}

export default Login
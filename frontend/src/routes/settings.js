import { VStack, Flex,  Input, Button,  Heading, FormLabel, FormControl } from "@chakra-ui/react";
import { useState } from "react";
import { update_user,logout } from "../api/endpoints";
import { useNavigate } from "react-router-dom";

const Settings = () => {

    const storage = JSON.parse(localStorage.getItem('userData'))
    const [username, setUsername] = useState(storage ? storage.username : '')
    const [email, setEmail] = useState(storage ? storage.email : '')
    const [firstName, setFirstName] = useState(storage ? storage.first_name : '')
    const [lastName, setLastName] = useState(storage ? storage.last_name : '')
    const [bio, setBio] = useState(storage ? storage.bio : '')
    const [profileImage, setProfileImage] = useState(storage ? storage.profile_image : '')

    const nav = useNavigate();

    const handleUpdate = async () => {
        try {
            const formData = new FormData();
            formData.append("username", username);
            formData.append("email", email);
            formData.append("first_name", firstName);
            formData.append("last_name", lastName);
            formData.append("bio", bio);
            
            // Append profile image only if a new one is selected
            if (profileImage) {
                formData.append("profile_image", profileImage);
            }
    
            await update_user(formData);
            
            localStorage.setItem("userData", JSON.stringify({
                "username": username, "email": email,
                "first_name": firstName, "last_name": lastName, "bio": bio
            }));
    
            alert('Successfully updated!');
        } catch {
            alert('Error updating details');
        }
    };

    const handleLogout = async () => {
        try {
            await logout();
            nav('/login')
        } catch {
            alert ('error logging out')
        }
    }

    return (
        <Flex w='100%' justifyContent='center' pt='50px'>
          <VStack w='95%' maxW='500px' alignItems='start' gap='20px'>
            <Heading>Settings</Heading>
            <VStack w='100%' alignItems='start' gap='10px'>
              <FormControl>
                <FormLabel >Profile Picture</FormLabel>
                <input onChange={(e) => setProfileImage(e.target.files[0])} bg='white' type='file' />
              </FormControl>
              <FormControl>
                <FormLabel>Username</FormLabel>
                <Input onChange={(e) => setUsername(e.target.value)} value={username} bg='white' type='text' />
              </FormControl>
              <FormControl>
                <FormLabel>Email</FormLabel>
                <Input onChange={(e) => setEmail(e.target.value)} value={email} bg='white' type='email' />
              </FormControl>
              <FormControl>
                <FormLabel>First Name</FormLabel>
                <Input onChange={(e) => setFirstName(e.target.value)} value={firstName} bg='white' type='text' />
              </FormControl>
              <FormControl>
                <FormLabel>Last Name</FormLabel>
                <Input onChange={(e) => setLastName(e.target.value)} value={lastName} bg='white' type='text' />
              </FormControl>
              <FormControl>
                <FormLabel>Bio</FormLabel>
                <Input onChange={(e) => setBio(e.target.value)} value={bio} bg='white' type='text' />
              </FormControl>
            </VStack>
            <Button  onClick={handleUpdate} w='100%' colorScheme="blue" mt='10px'>save changes</Button>
            <Button onClick={handleLogout} colorScheme="red">logout</Button>
          </VStack>
          
        </Flex>
    )
}

export default Settings
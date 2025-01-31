import { Box, Text, Flex, VStack, Heading, HStack, Image, Button } from "@chakra-ui/react"
import { useEffect, useState } from "react";
import { get_user_profile_data } from "../api/endpoints";
import { SERVER_URL } from "../Constants/constants";
const UserProfile = () =>{

    const get_username_from_url = () => {
        const url_split = window.location.pathname.split('/');
        return url_split[url_split.length-1]
    }

    const [username, setUsername] = useState(get_username_from_url())

    useEffect(() => {
        setUsername(get_username_from_url(username));
    }, [username]);
    
    
    return(
        <Flex w='100%' justifyContent='center'>
            <VStack w='75%'>
                <Box w='100%' mt='40px'>
                    <UserDetails username= {username} />
                </Box>
            </VStack>
        </Flex>
    )
}

const UserDetails = ({username}) => {

  const [Loading, setLoading] = useState(true)
  const [Bio, setBio] = useState('')
  const [profileImage, setProfileImage] = useState('')
  const [followerCount, setFollowerCount] = useState(0)
  const [followingCount, setFollowingCount] = useState(0)


  useEffect(() => {

      const fetchData = async () => {
        try{
            const data = await get_user_profile_data(username);
            setBio(data.bio)
            setProfileImage(data.profile_image)
            setFollowerCount(data.follower_count)
            setFollowingCount(data.following_count)
        }catch {
          console.log('error')
        } finally{
          setLoading(false)
        }

      }
      fetchData()
      
  }, [username])

    return(
        <VStack w='100%' alignItems='start' gap='20px'>
          <Heading fontSize='25px'>@{username}</Heading>
          <HStack gap='20px'>
            <Box boxSize='150px' border='2px solid' borderColor='gray.700' bg='white' borderRadius='full' overflow='hidden'>
                <Image src={Loading ? '' : `${SERVER_URL}${profileImage}`} boxSize='100%' objectFit='cover' />
            </Box>
            <VStack>
              <HStack gap='20px' fontSize='18px'>
                <VStack>
                  <Text>Followers</Text>
                  <Text>{Loading ? '-' : followerCount}</Text>
                </VStack>
                <VStack>
                  <Text>Following</Text>
                  <Text>{Loading ? '-' : followingCount}</Text>
                </VStack>
              </HStack>
              <Button w='100%'>Edit Profile</Button>
            </VStack>
          </HStack>
          <Text fontSize='18px'>{Loading ? '-' : Bio}</Text>
        </VStack>
      );
      
}

export default UserProfile


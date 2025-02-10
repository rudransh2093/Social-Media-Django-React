import { Box, Text, Flex, VStack, Heading, HStack, Image, Button , Spacer } from "@chakra-ui/react"
import { useEffect, useState } from "react";
import { get_user_profile_data,get_users_posts, toggleFollow } from "../api/endpoints";
import { SERVER_URL } from "../Constants/constants";

import Post from "../components/post";
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
                <Box w='100%' mt='30px'>
                    <UserPosts username={username}/>
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

  const [isOurProfile, setIsOurProfile] = useState(false)
  const [following, setFollowing] = useState(false)

  const handleToggleFollow = async () => {
    const data = await toggleFollow(username);
    if (data.now_following) {
        setFollowerCount(followerCount+1)
        setFollowing(true)
    } else {
        setFollowerCount(followerCount-1)
        setFollowing(false)
    }
    console.log("Fetching data for:", username);
    console.log("API Endpoint:", `${SERVER_URL}/profile/${username}`);

  }

  useEffect(() => {

      const fetchData = async () => {
        try{
            const data = await get_user_profile_data(username);
            setBio(data.bio)
            setProfileImage(data.profile_image)
            setFollowerCount(data.follower_count)
            setFollowingCount(data.following_count)

            setIsOurProfile(data.is_our_profile)
            setFollowing(data.following)
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
                {
                  Loading ?
                      <Spacer />
                  :
                    isOurProfile ?
                      <Button w='100%'>Edit Profile</Button>
                    :
                    <Button onClick={handleToggleFollow} colorScheme= 'blue' w='100%'>{following ? 'Unfollow' : 'Follow'}</Button>
              }
              
            </VStack>
          </HStack>
          <Text fontSize='18px'>{Loading ? '-' : Bio}</Text>
        </VStack>
      );
      
}

const UserPosts = ({username}) => {

  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {

      const fetchPosts = async () => {
          try {
              const posts = await get_users_posts(username)
              setPosts(posts)
          } catch {
              alert('error getting users posts')
          } finally {
              setLoading(false)
          }
      }
      fetchPosts()

  }, [])

  return (
      <Flex w='100%' wrap='wrap' gap='30px' pb='50px'>
          {loading ?
              <Text>Loading...</Text>
          :
              posts.map((post) => {
                return <Post key={post.id} username={post.username} description={post.description} formatted_date={post.formatted_date} liked={post.liked} like_count={post.like_count} />
              })
          }
      </Flex>
  )
}

export default UserProfile


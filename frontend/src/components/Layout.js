import { Box,  VStack } from "@chakra-ui/react"
import Navbar from "./Navbar"
const Layout = ({children}) => {
  return (
    <VStack w='100vw' minH= '100vw' bg='#FCFCFC'>
        <Navbar/>
        <Box w='100%'>
            {children}
        </Box>
        
    </VStack>
  )
}

export default Layout
import {Flex, Box} from "@chakra-ui/react"
import {Link} from "react-router-dom"
const Navbar = () => {

    return (
        <>
            <Flex w="100%" justifyContent="center" p="20px" bgColor="teal">
                <Box p="5px">
                    <Link to="/">HOME</Link>
                </Box>
                <Box p="5px">
                    <Link to="/create">ADD GAME</Link>
                </Box>
            </Flex>
        </>
    )
}

export default Navbar
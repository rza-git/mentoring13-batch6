import {useState, useEffect} from "react"
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer
} from '@chakra-ui/react'
import { getGames } from "./fetch/games"


const Home = () => {

    const [games, setGames] = useState([])

    const fetchGames = async () => {
        try {
            const data = await getGames();
            setGames(data)
        } catch(err) {
            console.log(err);
        }
    }

    useEffect(() => {
        fetchGames();
    }, [])

    return (
        <>
            <TableContainer>
                <Table variant='striped' colorScheme='teal'>
                    <Thead>
                        <Tr>
                            <Th>Title</Th>
                            <Th>Categories</Th>
                            <Th>Platforms</Th>
                            <Th>Year</Th>
                            <Th>Image</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                       {games.map((game, idx) => {
                            return(
                                <Tr key={idx}>
                                    <Td>{game.title}</Td>
                                    <Td>{game.categories}</Td>
                                    <Td>{game.platforms}</Td>
                                    <Td>{game.year}</Td>
                                    <Td>{game.imageUrl}</Td>
                                </Tr>
                            )
                       })}
                    </Tbody>
                </Table>
            </TableContainer>
        </>
    )
}

export default Home
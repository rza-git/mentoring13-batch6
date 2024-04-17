import {useState} from "react"
import { Flex, Stack, Input, Button} from "@chakra-ui/react";
import {
    uploadImage,
    createGames
} from "./fetch/games.js"

const Create = () => {

    const [title, setTitle] = useState("")
    const [categories, setCategories] = useState("")
    const [platforms, setPlatforms] = useState("")
    const [year, setYear] = useState("")
    const [imageUrl, setImageUrl] = useState("")

    const handleSubmit = async () => {
        try {
            console.log(imageUrl)
            const payload = {
                title,
                categories,
                platforms,
                year,
                imageUrl
            }

            await createGames(payload)
        } catch(err) {
            console.log(err)
        }
        

        
    }

    const handleImage = async (e) => {
        try {
           
            const file = e.target.files[0];
            const form = new FormData();

            form.append('image', file)
            const response = await uploadImage(form)
            console.log(response)
            setImageUrl(response)
        } catch(err) {
            console.log(err)
        }


    }
    return (
        <Flex p={2} justifyContent="center">
            <Stack>
                <Input placeholder="title" onChange={(e) => setTitle(e.target.value)}/>
                <Input placeholder="categories" onChange={(e) => setCategories(e.target.value)}/>
                <Input placeholder="platforms" onChange={(e) => setPlatforms(e.target.value)}/>
                <Input placeholder="year" onChange={(e) => setYear(e.target.value)}/>
                <Input type="file" placeholder="image" onChange={handleImage}/>
                <Button onClick={handleSubmit}>Submit</Button>
            </Stack>
        </Flex>
    )
}

export default Create;
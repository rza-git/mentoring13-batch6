import {useState} from "react"
import {
    Box,
    AbsoluteCenter,
    Input,
    Stack,
    Button
} from '@chakra-ui/react'
import {login} from "./fetch/auth.js"
import Swal from 'sweetalert2'


const Auth = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")


    const handleSubmit = async () => {
        try {
            await login({email, password})
            
        } catch(err) {
            const {response} = err;
            console.log(response, "<<<<")
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: response.data.name
              });
        }
    }


    return (
        <Box h='100%'>
            <AbsoluteCenter>
                <Stack>
                    <Input placeholder="Enter Email" onChange={(e) => setEmail(e.target.value)}/>
                    <Input placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)}/>
                    <Button onClick={handleSubmit}>Submit</Button>
                </Stack>
            </AbsoluteCenter>
        </Box>
    )
}

export default Auth;

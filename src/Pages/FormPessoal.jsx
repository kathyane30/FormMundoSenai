import * as C from "@chakra-ui/react"
import { useState } from "react"

const FormPessoal = () => {
    const [gender, setGender] = useState("")

    return (
        <C.VStack spacing={5} align="stretch">
            <h1>Pessoal</h1>

            <C.Input type="text" placeholder="Nome"/>
            <C.Input type="text" placeholder="CPF"/>
            <C.Input type="email" placeholder="E-mail"/>

            <C.RadioGroup value={gender} onChange={setGender}>
                <C.Stack direction="row" spacing={4}>
                    <C.Radio value="H">H</C.Radio>
                    <C.Radio value="M">M</C.Radio>
                </C.Stack>
            </C.RadioGroup>
        </C.VStack>
    )
}

export default FormPessoal
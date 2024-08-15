import * as C from "@chakra-ui/react"
import { Checkbox, CheckboxGroup } from '@chakra-ui/react'

const FormProjeto=() => {
    return(
        <C.VStack >
            <h1>Projeto</h1>
            <C.Input type="text" placeholder="Projeto"/>
            <C.Input type="text" placeholder="Área"/>
            <C.Input type="text" placeholder="Coordenador/Professor"/>
            <Checkbox defaultChecked>CETCC</Checkbox>
            <Checkbox defaultChecked>CETIC</Checkbox>
            <Checkbox defaultChecked>CETAFAJU</Checkbox>
            <Checkbox defaultChecked>CETAFEST</Checkbox>

        </C.VStack>
    )
}


export default FormProjeto
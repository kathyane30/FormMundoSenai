import * as C from "@chakra-ui/react"
import { Checkbox } from '@chakra-ui/react'

const FormProjeto = () => {
    return (
        <C.VStack spacing={4} align="start">
            <C.Text fontSize="2xl" fontWeight="bold" mb={4}>
                Formulário de Projeto
            </C.Text>
            <C.Input type="text" placeholder="Projeto" mb={4} />
            <C.Input type="text" placeholder="Área" mb={4} />
            <C.Input type="text" placeholder="Coordenador/Professor" mb={4} />
            
            <C.Stack spacing={2} align="start">
                <Checkbox>CETCC</Checkbox>
                <Checkbox>CETIC</Checkbox>
                <Checkbox>CETAFAJU</Checkbox>
                <Checkbox>CETAFEST</Checkbox>
            </C.Stack>
        </C.VStack>
    )
}

export default FormProjeto

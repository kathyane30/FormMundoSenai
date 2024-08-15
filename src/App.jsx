import * as C from "@chakra-ui/react"
import { useState } from "react"
import Step from "./components/Steps.jsx"
import FormPessoal from "./Pages/FormPessoal.jsx"
import FormEndereco from "./Pages/FormEndereco.jsx"
import FormProjeto from "./Pages/FormProjeto.jsx"

function App() { 
  const [step, setStep] = useState(1);
  const Steps = [1, 2, 3];

  const getStep = () => {
    switch(step){
      case 1: 
        return <FormPessoal/>
      case 2: 
        return <FormEndereco/>
      case 3:
        return <FormProjeto/>
      default:
        return <FormPessoal/>
    }
  }

  return (
    <C.Flex h="100vh" align="center" justify="center">
      <C.Center maxW={500} w="100%" py={10} px={4} flexDirection="column" border="2px solid #4CAF50" borderRadius="10px">
        <C.HStack spacing={4}>
          {Steps.map((item) => (
            <Step key={item} index={item} active={step === item}/>
          ))}
        </C.HStack>

        <C.Divider my={4} borderColor="black.400" />

        <C.Box w="80%">
          {getStep()}
        </C.Box>

        <C.HStack mt={4} spacing={10}>
          <C.Button 
            bg="green.200" 
            onClick={() => step !== 1 && setStep(step - 1)} 
            isDisabled={step === 1} // Corrigido de 'disable' para 'isDisabled'
          >
            Voltar
          </C.Button>

          <C.Button 
            bg="pink" 
            onClick={() => step !== 3 ? setStep(step + 1) : alert('Enviar form')} // Apenas um exemplo para a ação de "Enviar"
          >
            {step === 3 ? "Enviar" : "Próximo"}
          </C.Button>
        </C.HStack>
      </C.Center>
    </C.Flex>
  );
}

export default App;

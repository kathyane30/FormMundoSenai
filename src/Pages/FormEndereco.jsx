import * as C from "@chakra-ui/react";

const FormEndereco = () => {
    return (
        <C.VStack spacing={5} align="start">
            {/* Título */}
            <C.Text fontSize="2xl" fontWeight="bold" mb={4}>
                Formulário de Endereço
            </C.Text>

            {/* Campos de entrada */}
            <C.Input type="text" placeholder="CEP" />
            <C.Input type="text" placeholder="Bairro" />
            <C.Input type="text" placeholder="Cidade" />

            {/* Seletor para UF */}
            <C.Select placeholder="Selecione a UF">
                <option value="AC">AC - Acre</option>
                <option value="AL">AL - Alagoas</option>
                <option value="AP">AP - Amapá</option>
                <option value="AM">AM - Amazonas</option>
                <option value="BA">BA - Bahia</option>
                <option value="CE">CE - Ceará</option>
                <option value="DF">DF - Distrito Federal</option>
                <option value="ES">ES - Espírito Santo</option>
                <option value="GO">GO - Goiás</option>
                <option value="MA">MA - Maranhão</option>
                <option value="MT">MT - Mato Grosso</option>
                <option value="MS">MS - Mato Grosso do Sul</option>
                <option value="MG">MG - Minas Gerais</option>
                <option value="PA">PA - Pará</option>
                <option value="PB">PB - Paraíba</option>
                <option value="PR">PR - Paraná</option>
                <option value="PE">PE - Pernambuco</option>
                <option value="PI">PI - Piauí</option>
                <option value="RJ">RJ - Rio de Janeiro</option>
                <option value="RN">RN - Rio Grande do Norte</option>
                <option value="RS">RS - Rio Grande do Sul</option>
                <option value="RO">RO - Rondônia</option>
                <option value="RR">RR - Roraima</option>
                <option value="SC">SC - Santa Catarina</option>
                <option value="SP">SP - São Paulo</option>
                <option value="SE">SE - Sergipe</option>
                <option value="TO">TO - Tocantins</option>
            </C.Select>
        </C.VStack>
    );
};

export default FormEndereco

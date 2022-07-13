import { useState } from "react";
import { Text, View, Alert, TouchableOpacity, TextInput,StyleSheet } from "react-native";

import { alterarFrutas, deletarFrutas } from './ModelFrutas';


export default function AlterarFruta() {


    const [idp, setIdp] = useState('');
    const [frutap, setFruta] = useState('');
    const [valorp, setValor] = useState('');
    const [fotop, setfoto] = useState('');


    async function alterar() {
        const resultado = await alterarFrutas(idp, frutap, valorp, fotop);

        if (resultado == 'sucesso') {
            Alert.alert(' Fruta alterada com seucesso ');
        } else {
            Alert.alert('Erro ao cadastrar fruta');
        }

    }

    async function deletar() {
        const resultado = await deletarFrutas(idp, frutap, valorp, fotop);

        if (resultado == 'sucesso') {
            Alert.alert(' Fruta deletada com seucesso ');
        } else {
            Alert.alert('Erro ao cadastrar fruta');
        }

    
    }

    return (
        <View style={estilo.container}>
            <TextInput
                value={idp}
                placeholder="Digite o Código da Fruta "
                onChangeText={setIdp}

            />

            <TextInput
                value={frutap}
                placeholder="Digite o nome da Fruta "
                onChangeText={setFruta}

            />

            <TextInput
                value={valorp}
                placeholder="Digite o valor da Fruta "
                onChangeText={setValor}

            />

            <TextInput
                value={fotop}
                placeholder="Digite o Código da Fruta "
                onChangeText={setfoto}

            />

            <TouchableOpacity style={estilo.botaoCadastrar} onPress={alterar}>
                <Text style={estilo.textoBotaoAlterar}>alterar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={estilo.botaoCadastrar} onPress={deletar}>
                <Text style={estilo.textoBotaoDeletar}>Deletar</Text>
            </TouchableOpacity>

        </View>


    )


}

const estilo = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e9c46a',
        alignItems: 'center',
        justifyContent: 'center',
    },

    botao: {
        backgroundColor: "#f4a261",
        marginTop: 15,
        padding: 10,
        borderRadius: 15,
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center'
    }
});
import { useState } from "react";
import { Text, View, Alert, TouchableOpacity, TextInput, StyleSheet } from "react-native-web";

import { salvarNovaFruta } from './ModelFrutas';


export default function CadastrarFrutas(navigation) {


    const [idp, setIdp] = useState('');
    const [frutap, setFrutap] = useState('');
    const [valorp, setValorp] = useState('');
    const [fotop, setfotop] = useState('');


   async function Cadastro() {
        const resultado = await salvarNovaFruta(idp, frutap, valorp, fotop);

        if (resultado == 'sucesso') {
            Alert.alert(' Fruta cadastrada com seucesso ');
            navigation.goBack();
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
                onChangeText={setFrutap}

            />

            <TextInput
                value={valorp}
                placeholder="Digite o valor da Fruta "
                onChangeText={setValorp}

            />

            <TextInput
                value={fotop}
                placeholder="Digite o Código da Fruta "
                onChangeText={setfotop}

            />

            <TouchableOpacity style={estilo.botaoCadastrar} onPress={Cadastro}>
                <Text style={estilo.textoBotaoCadastart}>Cadastrar</Text>
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

    botaoCadastrar: {
        backgroundColor: "#f4a261",
        marginTop: 15,
        padding: 10,
        borderRadius: 15,
        width: '80%',
        justifyContent: 'center',
        alignItems: 'center'
    }
});
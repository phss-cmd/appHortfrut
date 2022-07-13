import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { buscarTodasFrutas } from './ModelFrutas';
import { Navigation, useNavigation } from '@react-navigation/native';

export default function ListarFrutas({navigation}) {

  const [dadosFruta, setdadosFrutas] = useState([]);
  

  useEffect(async () => {
    const resp = await buscarTodasFrutas()
    setdadosFrutas(resp);
  }, []);




  return (
    <View style={estilo.container}>

      <Text style={estilo.titulo}>Lista de Frutas</Text>
      <TouchableOpacity style={estilo.botaoCadFruta} onPress={()=> navigation.navigate('Cadastrar')} >
        <Text style={estilo.botaoTextoCadFruta}>Cadastrar Fruta</Text>
        </TouchableOpacity> 

      <FlatList
        data={dadosFruta}
        keyExtractor={dadosFruta => dadosFruta.id}
        renderItem={({ item }) =>
          <TouchableOpacity>
            <View style={estilo.grupoFrutas}>

              <Text style={estilo.textoBotaoFruta}>{item.fruta}</Text>
              <Text style={estilo.textoBotaoValor}>{item.valor}</Text>

            </View>
          </TouchableOpacity>

        }
      />

      <StatusBar style="auto" />
    </View>
  );

}


  const estilo = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#e9c46a',

    },
    titulo: {
      fontSize: 30,
      color: "#2a9d8f",
      textAlign: 'center',
      justifyContent: 'center',
      marginVertical: 20
    },
    grupoFrutas: {
      backgroundColor: '#2a9d8f',
      margin: 15,
      padding: 5,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
    },
    textoBotaoFruta: {
      fontSize: 20
    },
    textoBotaoValor: {
      fontSize: 20
    },

    botaoCadFruta:{
      margin: 15,
      padding: 5,
      borderRadius: 10,
      borderRadius: 10,
    }


  });







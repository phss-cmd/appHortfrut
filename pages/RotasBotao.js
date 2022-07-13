import react from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


const navBotao = createStackNavigator();

import ListarFrutas from './Frutas/ListarFrutas';
import CadastrarFrutas from './Frutas/CadastrarFrutas';
import  AlterarFrutas  from './Frutas/AlterarFrutas';

export default function RotasTab(){
    return(
        <navBotao.Navigator>
            <navBotao.Screen name="Listar" component={ListarFrutas} options={{headerShown:false}} />
            <navBotao.Screen name="Cadastrar" component={CadastrarFrutas} options={{headerShown:false}} />
            <navBotao.Screen name="Alterar" component={AlterarFrutas} options={{headerShown:false}} />
        </navBotao.Navigator>
    )
}
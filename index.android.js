// Imports
import React from 'react';
import { Text, AppRegistry, View, Image, TouchableOpacity, Alert } from 'react-native';

// Formatações
const Estilos = {
  principal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  botao: {
    backgroundColor: '#538530',
    paddingVertical: 10,
    paddingHorizontal: 40,
    marginTop: 20
  },
  textoBotao: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  }
};

const gerarNovaFrase = () => {
  var numeroAleatorio = Math.random();
  numeroAleatorio = Math.floor(numeroAleatorio * 5);

  var frases = Array();
  frases[0] = 'A persistência é o caminho do êxito.';
  frases[1] = 'O que não provoca minha morte faz com que eu fique mais forte.';
  frases[2] = 'Pedras no caminho? Eu guardo todas. Um dia vou construir um castelo.';
  frases[3] = 'O que me preocupa não é o grito dos maus. É o silêncio dos bons.';
  frases[4] = 'O insucesso é apenas uma oportunidade para recomeçar com mais inteligência.';
  var fraseEscolhida = frases[numeroAleatorio];

  Alert.alert(fraseEscolhida);
};

// Criar Componente
const App = () => {

  const { principal, botao, textoBotao } = Estilos;

  return (
    <View style={principal}>

      <Image source={require ('./imgs/logo.png')} />

      <TouchableOpacity style={botao} onPress={gerarNovaFrase}>
        <Text style={textoBotao}>Nova Frase</Text>
      </TouchableOpacity>
    </View>
  );
};

// Renderizar para dispositivo
AppRegistry.registerComponent('Phrases-of-the-day', () => App);

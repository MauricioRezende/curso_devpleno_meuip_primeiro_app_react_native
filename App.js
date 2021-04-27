import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, Image } from 'react-native';

import logo from './assets/logo.png'

export default function App() {
  const [ip, setIp] = useState('')
  const findMyIp = async () => {
    setIp('Descobrindo IP...')
    const ipData = await fetch('http://httpbin.org/ip')
    const data = await ipData.json() 
    setIp(data.origin)
  }

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Image source={logo}/>
        <Text style={styles.ip}>{ip}</Text>
        <Button title='Descobrir meu IP!' onPress={findMyIp}/>
      </View>
      <View style={styles.footer}>
        <Text style={styles.made}>
          Feito por José Mauricio!!!
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#2F2336',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ip: {
    color: 'white',
    paddingTop: 20,
    paddingBottom: 20,
  },
  footer: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  made: {
    color: 'white',
    textAlign: 'center',
  }

})
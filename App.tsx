import { StatusBar } from 'expo-status-bar';
import { Keyboard, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import { BatSinalButton } from './src/components/BatSinalButton';
import { BatLogo } from './src/components/BatLogo';
import { useState } from 'react';
import { BatTextInput } from './src/components/BatTextInput';
import { BatTextArea } from './src/components/BatTextArea';

export default function App() {
  const [activated,setActivated] = useState(false)
  const [name,setName] = useState('')
  const [telephone,setTelephone] = useState('')
  const [address,setAddress] = useState('')
  const [description,setDescription] = useState('')

  const handleBatButtonPress = () => {
    setActivated(true)
  }
  const handleBatFormButtonPress = () => {
    setName('')
    setTelephone('')
    setAddress('')
    setDescription('')
    setActivated(false)
  }
  const handleChangeName = (e: any) => {
    setName(e)
  }
  const handleChangeTelephone = (e: any) => {
    setTelephone(e)
  }
  const handleChangeAddress = (e: any) => {
    setAddress(e)
  }
  const handleChangeDescription = (e: any) => {
    setDescription(e)
  }

  if (activated) {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View style={styles.container}>
          <BatTextInput placeholder="Name" onChange={handleChangeName} value={name} />
          <BatTextInput placeholder="Telephone" onChange={handleChangeTelephone} value={telephone} type='phone-pad' />
          <BatTextInput placeholder="Address" onChange={handleChangeAddress} value={address} />
          <BatTextArea placeholder="Description" onChange={handleChangeDescription} value={description} numberOfLines={5} />
          <BatSinalButton onPress={handleBatFormButtonPress} text='Send signal' />
          <StatusBar style="auto" />
        </View>
      </TouchableWithoutFeedback>
    )
  }

  return (
    <View style={styles.container}>
      <BatLogo />
      <BatSinalButton onPress={handleBatButtonPress} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 28
  },
});

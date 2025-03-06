import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { AuthStyles as styles } from '../styles/AuthStyles'; 
import { isEmpty } from 'lodash';
import { useNavigation } from '@react-navigation/native';

export default function CreateAccount() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const navigation = useNavigation(); 

  const handleRegister = () => {
    if (isEmpty(email) || isEmpty(password) || isEmpty(confirmPassword)) {
      setError("Todos los campos son obligatorios");
      return;
    }
    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden");
      return;
    }

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        console.log("Usuario registrado con éxito");
        navigation.navigate("Login"); 
      })
      .catch((error) => {
        console.log("Error al registrar usuario: ", error.message);
        setError("Error al registrar usuario, intente con otro correo.");
      });
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/5/54/Logo-utez.png' }} style={styles.image} />
        
        <View style={styles.form}>
          <Text style={styles.label}>Usuario</Text>
          <TextInput placeholder="Ingrese su usuario" style={styles.input} onChangeText={setEmail} />
          
          <Text style={styles.label}>Contraseña</Text>
          <TextInput placeholder="Ingrese su contraseña" style={styles.input} secureTextEntry onChangeText={setPassword} />
          
          <Text style={styles.label}>Repetir contraseña</Text>
          <TextInput placeholder="Confirme su contraseña" style={styles.input} secureTextEntry onChangeText={setConfirmPassword} />
          
          {error ? <Text style={styles.error}>{error}</Text> : null}
          
          <TouchableOpacity style={styles.button} onPress={handleRegister}>
            <Text style={styles.buttonText}>Crear cuenta</Text>
          </TouchableOpacity>
          
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={styles.link}>Ya tengo cuenta</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { AuthStyles as styles } from '../styles/AuthStyles'; 
import { isEmpty } from 'lodash';
import { useNavigation } from '@react-navigation/native';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigation = useNavigation(); 

  const handleLogin = () => {
    if (isEmpty(email) || isEmpty(password)) {
      setError("El correo y la contraseña son obligatorios");
      return;
    } else {
      setError(""); 
      const auth = getAuth();
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          console.log("Iniciando sesión: ", userCredential.user);
          navigation.navigate("HomeScreen");
        })
        .catch((error) => {
          console.log("Error en login: ", error.code); 
          if (error.code === "auth/invalid-credential") {
            setError("Correo o contraseña incorrectos");
          } else if (error.code === "auth/user-not-found") {
            setError("El usuario no existe");
          } else {
            setError("Error desconocido. Intente de nuevo.");
          }
        });
    }
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
          
          {error ? <Text style={styles.error}>{error}</Text> : null}

          <TouchableOpacity style={styles.button} onPress={handleLogin}>
            <Text style={styles.buttonText}>Iniciar sesión</Text>
          </TouchableOpacity>
          
          <TouchableOpacity onPress={() => navigation.navigate("CreateAccount")}>
            <Text style={styles.link}>Crear cuenta</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

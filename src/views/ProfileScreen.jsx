import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import { getAuth, signOut } from 'firebase/auth';
import { app } from '../config/utils/firabaseConnection';

const ProfileScreen = () => {
  const [user, setUser] = useState(null);
  const auth = getAuth(app);

  useEffect(() => {
    setUser(auth.currentUser);
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {user ? (
        <>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{user.displayName || 'Usuario'}</Text>
          <Text>{user.email}</Text>
          <Text style={{ marginTop: 10, fontStyle: 'italic', color: 'gray' }}>Bienvenido a tu perfil</Text>
          <Text style={{ marginTop: 20, fontSize: 16 }}>Disfruta de tu experiencia de compra</Text>
        </>
      ) : (
        <Text>No hay usuario autenticado</Text>
      )}
    </View>
  );
};

export default ProfileScreen;

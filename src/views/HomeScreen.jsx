import React, { useEffect, useState } from "react";
import { View, FlatList, Image, Text, ActivityIndicator, StyleSheet } from "react-native";
import { Card } from "react-native-paper";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { app } from "../config/utils/firabaseConnection";

const HomeScreen = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      const db = getFirestore(app);
      const productsCollection = collection(db, "product");
      const productsSnapshot = await getDocs(productsCollection);
      const productList = productsSnapshot.docs.map((doc) => doc.data());
      setProducts(productList);
      setLoading(false);
    };
    fetchProducts();
  }, []);

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" style={styles.loader} />;
  }

  return (
    <View style={styles.container}>
      {/* 🔹 TITULO BONITO */}
      <Text style={styles.header}>TIENDA UTEZ</Text>

      <FlatList
        data={products}
        numColumns={2}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Card style={styles.card}>
            <Image source={{ uri: item.image[0] }} style={styles.image} />
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.price}>${item.price}</Text>
          </Card>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50, // Ajusta la distancia desde arriba
    backgroundColor: "#f8f8f8",
  },
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
    color: "#4abfa4",
  },
  card: {
    margin: 10,
    padding: 10,
    flex: 1,
    backgroundColor: "white",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  image: {
    width: "100%",
    height: 150,
    borderRadius: 10,
  },
  title: {
    fontWeight: "bold",
    marginTop: 5,
  },
  price: {
    color: "gray",
  },
});

export default HomeScreen;

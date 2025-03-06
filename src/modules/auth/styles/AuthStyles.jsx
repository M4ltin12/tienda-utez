import { StyleSheet } from 'react-native';

export const AuthStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center',
    },
    card: {
      width: '100%',  
      minHeight: '65%', 
      backgroundColor: 'white',
      padding: 35,  
      borderRadius: 25,  
      shadowColor: "#000",
      shadowOffset: { width: 4, height: 4 },
      shadowOpacity: 0.2,
      shadowRadius: 4,
      elevation: 6,
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
      width: 250, 
      height: 130
    ,
      marginBottom: 20,
    },
    form: {
      width: '100%',  
    },
    label: {
      fontSize: 16,
      fontWeight: 'bold',
      marginBottom: 5,
      marginLeft: 5,
    },
    input: {
      height: 50,
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 10,
      paddingLeft: 10,
      marginBottom: 15,
    },
    button: {
      backgroundColor: '#4abfa4',
      padding: 12,
      borderRadius: 10,
      width: '95%', 
      alignItems: 'center',
      marginTop: 20,
      alignSelf: 'center',
    },
    buttonText: {
      color: 'white',
      fontSize: 18,
    },
    link: {
      color: '#4abfa4',
      marginTop: 20,
      textDecorationLine: 'underline',
      fontSize: 16,
      alignSelf: 'center',
    },
    error: {
      color: 'red',
      marginBottom: 10,
      fontSize: 14,
      alignSelf: 'center',
    },
  });
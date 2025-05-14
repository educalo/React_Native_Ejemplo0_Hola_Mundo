//StatusBar: Maneja la barra de estado del dispositivo
import { StatusBar } from 'expo-status-bar';

//StyleSheet, Text, View: Son componentes esenciales de React Native. Text muestra texto, View agrupa elementos y StyleSheet define estilos.
//TouchableOpacity: Un botón que, al presionarse, ejecuta la función mostrarMensaje.
import { StyleSheet, Text, View, TouchableOpacity, Button, Alert, Platform } from 'react-native';

//App es el componente principal de la aplicación.
//View envuelve el contenido con estilos definidos en styles.container.
//Text se usa para mostrar "Hola Mundo".
//StatusBar ajusta el estilo de la barra de estado automáticamente.


//Esta función determina el mensaje mostrado dependiendo del sistema operativo:
//Si la app se ejecuta en la web (Platform.OS === 'web'), usa alert().
//Si es en Android, usa Alert.alert(), que es más propio del sistema.
export default function App() {
  const mostrarMensaje = () => {
    if (Platform.OS === 'web') {
      alert("Hola Mundo otra vez en la Web");
    } else {
      Alert.alert("Hola Mundo otra vez en Android");
    }
  };

  return (
  <View style={styles.container}>
    <Text>Hola Mundo</Text>
    <TouchableOpacity style={styles.boton} onPress={mostrarMensaje}>
      <Text style={styles.textoBoton}>Presiona aquí</Text>
    </TouchableOpacity>
    <StatusBar style="auto" />
  </View>
  );
}


//Definición de container
//flex: 1: Hace que el componente ocupe toda la pantalla.
//backgroundColor: '#fff': Fondo blanco.
//alignItems: 'center': Centra elementos horizontalmente.
//justifyContent: 'center': Centra elementos verticalmente.


//Definicion de boton
//marginTop: 20: Añade separación arriba.
//padding: 10: Espacio interno del botón.
//backgroundColor: '#007AFF': Color azul estándar de iOS.
//borderRadius: 5: Bordes redondeados.

//Definicon de estilo textoBoton:
//color: 'white': Texto en blanco.
//fontSize: 16: Tamaño del texto.
//fontWeight: 'bold': Texto en negrita.

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  boton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#007AFF',
    borderRadius: 5,
  },
  textoBoton: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
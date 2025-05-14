EJEMPLO APLICACIÓN SENCILLA QUE SE PUEDE EJECUTAR EN LA WEB Y APP MOVIL ANDROID MANEJA DOS PLATAFORMAS WEB Y ANDROID

SI LO DESCARGO DESDE GITHUB

1.- npm install

2.- npx expo start

SI LO CREO DE CERO

1.-npm install -g expo-cli

2.-expo init mi-proyecto -> elegir proyecto blank

3.-npx expo start o npx expo start --clear

4.- Utilizar la app expo go para escanear el qr generado y que aparezca en tu móvil


5.- Para instalar la opción web: npx expo install react-native-web

6.-npx expo install @expo/metro-runtime


DEPENDECIAS PARA EL EJEMPLO DE TAREAS

Navegación entre ventanas
npm install @react-navigation/native

Installing dependencies into an Expo managed Project:

npx expo install react-native-screens react-native-safe-area-context

npm install @react-navigation/native-stack


Menu inferior con iconos:

npm install @react-navigation material-bottom-tabs react-navigate-paper react-native-vector-icons


PARA INSTALAR DEPENDENCIAS DEL PROYECTO
npm install

PARA EJECUTAR NUESTRO PROYECTO EN LA WEB
npx expo start --web

EXPORTAR
Esto generará archivos estáticos que puedes subir a servicios como Netlify, Vercel o GitHub Pages.
npx expo export:web

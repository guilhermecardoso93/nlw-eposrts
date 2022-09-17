import { StatusBar } from "react-native";
import { useRef } from 'react'
import {
  useFonts,
  Inter_400Regular,
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_900Black,
} from "@expo-google-fonts/inter";
import { Subscription } from 'expo-modules-core'
import { Background } from "./src/components/Background";
import { Loading } from "./src/components/Loading";
import { AppRoutes } from "./src/routes/app.routes";
import { NavigationContainer } from "@react-navigation/native";

import  './src/services/notificationsConfig'
import { getPushNotificationToken } from './src/services/getPushNotificationToken'

const getNofificationListerner = useRef<Subscription>()

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_900Black,
  });

  return (
    <NavigationContainer>
      <Background>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
        {fontsLoaded ? <AppRoutes /> : <Loading />}
      </Background>
    </NavigationContainer>
  );
}

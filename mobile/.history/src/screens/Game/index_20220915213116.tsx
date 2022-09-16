import { SafeAreaView } from "react-native-safe-area-context";
import { Background } from "../../components/Background";
import { useRoute } from '@react-navigation/native'

import { styles } from "./styles";

export function Game() {
  return (
    <Background>
      <SafeAreaView style={styles.container}></SafeAreaView>
    </Background>
  );
}

import { SafeAreaView } from "react-native-safe-area-context";
import { Background } from "../../components/Background";
import { useRoute } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import { styles } from "./styles";
import { GameParams } from "../../@types/navigation";
import { Image, TouchableOpacity, View } from "react-native";
import { THEME } from "../../theme";

import logoImg from "../../assets/logo-nlw-esports.png";
import { Heading } from "../../components/Heading";
import { DuoInfo } from "../DuoInfo";

export function DuoCard() {
  const route = useRoute();
  const game = route.params as GameParams;
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  return (
      <View style={styles.container}>
        <DuoInfo
          label='Nome'
          value='Guilherme'
        />
      </View>
  );
}

import { SafeAreaView } from "react-native-safe-area-context";
import { Background } from "../../components/Background";
import { useRoute } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";

import { styles } from "./styles";
import { GameParams } from "../../@types/navigation";
import { Image, TouchableOpacity, View } from "react-native";
import { THEME } from "../../theme";

import logoImg from "../../assets/logo-nlw-esports.png";
import { Heading } from "../../components/Heading";

export function Game() {
  const route = useRoute();
  const game = route.params as GameParams;

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity>
            <Entypo
              name="chevron-thin-left"
              size={20}
              color={THEME.COLORS.CAPTION_300}
            />
          </TouchableOpacity>
          <Image source={logoImg} style={styles.logo} />
          <View style={styles.right}/>
        </View>
        <Heading 
          title="Encontre seu duo."
          subtitle="Selecione o game que deseje jogar..."
        />
      </SafeAreaView>
    </Background>
  );
}

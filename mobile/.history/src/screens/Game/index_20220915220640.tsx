import { SafeAreaView } from "react-native-safe-area-context";
import { Background } from "../../components/Background";
import { useRoute } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";

import { styles } from "./styles";
import { GameParams } from "../../@types/navigation";
import { TouchableOpacity, View } from "react-native";
import { THEME } from "../../theme";

import logoImg from "../../assets/logo-nlw-esports.png";

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
        </View>
      </SafeAreaView>
    </Background>
  );
}
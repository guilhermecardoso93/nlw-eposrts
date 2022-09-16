import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";

import { GameParams } from "../../@types/navigation";
import { DuoInfo } from "../DuoInfo";

import { styles } from "./styles";

export function DuoCard() {
  return (
    <View style={styles.container}>
      <DuoInfo label="Nome" value="Guilherme" />
      <DuoInfo label="Nome" value="Guilherme" />
      <DuoInfo label="Nome" value="Guilherme" />
      <DuoInfo label="Nome" value="Guilherme" colorValue="green" />
    </View>
  );
}

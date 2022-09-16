import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";

import { DuoInfo } from "../DuoInfo";

import { styles } from "./styles";

export interface DuoCardProps {
  id: string;
  name: string;
  weekDays: string[];
  useVoiceChannel: boolean;
  yearsPlaying: number;
  hourStart: string;
  hourEnd: string;
}

interface Props {
  data: DuoCardProps;
}


export function DuoCard({data} : Props) {
  return (
    <View style={styles.container}>
      <DuoInfo label="Nome" value="Guilherme" />
      <DuoInfo label="Nome" value="Guilherme" />
      <DuoInfo label="Nome" value="Guilherme" />
      <DuoInfo label="Nome" value="Guilherme" colorValue="green" />
    </View>
  );
}

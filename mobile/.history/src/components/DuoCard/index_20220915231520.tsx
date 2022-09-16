import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";
import { View } from "react-native";
import { THEME } from "../../theme";

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

export function DuoCard({ data }: Props) {
  return (
    <View style={styles.container}>
      <DuoInfo label="Name" value={data.name} />
      <DuoInfo label="Tempo de Jogo" value={`${data.yearsPlaying}`} />
      <DuoInfo
        label="Disponibilidade"
        value={`${data.weekDays.length} dias \u2022 ${data.hourStart} - ${data.hourEnd}`}
      />
      <DuoInfo
        label="Chamada de áudio"
        value={data.useVoiceChannel ? "Sim" : "Não"}
        colorValue={
          data.useVoiceChannel ? THEME.COLORS.SUCCESS : THEME.COLORS.ALERT
        }
      />
    </View>
  );
}

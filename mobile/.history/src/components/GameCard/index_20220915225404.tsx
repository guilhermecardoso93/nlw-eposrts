import {
  TouchableOpacity,
  TouchableOpacityProps,
  ImageBackground,
  Text,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import { styles } from "./styles";
import { THEME } from "../../theme";

export interface GameCardProps {
  id: string;
  title: string;
  ads: string;
  bannerUrl: string;
}

interface Props extends TouchableOpacityProps {
  data: GameCardProps;
}

export function GameCard({ data, ...rest }: Props) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <ImageBackground style={styles.cover} source={{uri: data.bannerUrl}}>
        <LinearGradient colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.9)', '#fff9f9']} style={styles.footer}>
          <Text style={styles.name}>{data.title}</Text>
          <Text style={styles.ads}>{data.ads} anúncios</Text>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
}
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
  _count: {ads: number}
}

interface Props extends TouchableOpacityProps {
  data: GameCardProps;
}

export function GameCard({ data, ...rest }: Props) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <ImageBackground style={styles.cover} source={{uri: data.bannerUrl}}>
        <LinearGradient start={{x:0,y:1}}
	end={{x:1,y:0}}
    locations={[.5,0.7]}
	colors={['0,0,0,0.9','#6A2597']} style={styles.footer}>
          <Text style={styles.name}>{data.title}</Text>
          <Text style={styles.ads}>{data._count.ads} anúncio(s)</Text>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
}
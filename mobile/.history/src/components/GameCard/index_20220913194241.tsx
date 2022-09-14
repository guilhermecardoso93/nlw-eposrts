import { LinearGradient } from "expo-linear-gradient";
import {
  ImageBackground,
  ImageSourcePropType,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from "react-native";
import { THEME } from "../../theme";

export interface GameCardProps {
  id: string;
  name: string;
  ads: string;
  cover: ImageSourcePropType;
}

interface Props extends TouchableOpacityProps {
  data: GameCardProps;
}

import { styles } from "./styles";

export function GameCard({data, ...rest} : Props) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <ImageBackground 
        style={styles.cover} 
        source={data.cover}
      />
      <LinearGradient
        colors={THEME.COLORS.FOOTER}
        style={styles.footer}
      >

      </LinearGradient>
    </TouchableOpacity>
  );
}

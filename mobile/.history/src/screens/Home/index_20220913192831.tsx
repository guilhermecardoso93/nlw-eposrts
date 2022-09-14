import logoImg from "../../assets/logo-nlw-esports.png";

import { Image, View } from "react-native";

import { styles } from "./styles";
import { Heading } from "../../components/Heading";

export function Home() {
  return (
    <View style={styles.container}>
      <Image source={logoImg} style={styles.logo} />
      <Heading title="Encontre seu duo!" subtitle="Selecione o game que deseje jogar..." />
    </View>
  );
}

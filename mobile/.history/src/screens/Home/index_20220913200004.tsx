import logoImg from "../../assets/logo-nlw-esports.png";

import { Image, View, FlatList } from "react-native";

import { styles } from "./styles";
import { Heading } from "../../components/Heading";
import { GameCard } from "../../components/GameCard";
import { GAMES } from "../../utils/games";

export function Home() {
  return (
    <View style={styles.container}>
      <Image source={logoImg} style={styles.logo} />
      <Heading
        title="Encontre seu duo!"
        subtitle="Selecione o game que deseje jogar..."
      />
      <Flatlist 
        data={GAMES}
        keyExtractor={item => item.id}
        renderItem={ ({item}) => (
          <GameCard data={item} />
        )}
        horizotal
      />
      
    </View>
  );
}

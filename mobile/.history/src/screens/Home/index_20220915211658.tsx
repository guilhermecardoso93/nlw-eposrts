import logoImg from "../../assets/logo-nlw-esports.png";

import { Image, FlatList } from "react-native";
import { useEffect, useState } from "react";

import { styles } from "./styles";
import { Heading } from "../../components/Heading";
import { GameCard, GameCardProps } from "../../components/GameCard";
import { SafeAreaView } from "react-native-safe-area-context";
import { Background } from "../../components/Background";

export function Home() {
  const [games, setGames] = useState<GameCardProps[]>([]);

  useEffect(() => {
    fetch("http://192.168.1.2:3333/games")
      .then((response) => response.json())
      .then((data) => setGames(data));
  }, []);

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <Image source={logoImg} style={styles.logo} />
        <Heading
          title="Encontre seu duo!"
          subtitle="Selecione o game que deseje jogar..."
        />
        <FlatList
          data={games}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <GameCard data={item} />}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.contentList}
        />
      </SafeAreaView>
    </Background>
  );
}

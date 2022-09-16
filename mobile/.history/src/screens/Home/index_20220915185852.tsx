import logoImg from "../../assets/logo-nlw-esports.png";

import { Image, View, FlatList } from "react-native";
import { useEffect, useState } from 'react';

import { styles } from "./styles";
import { Heading } from "../../components/Heading";
import { GameCard } from "../../components/GameCard";
import { GAMES } from "../../utils/games";

export function Home() {

  useEffect(() => {
    fetch('http://192.168.1.2:3333/games')
    .then(response => response.json())
    .then(data => console.log(data))
  }, [])

  return (
    <View style={styles.container}>
      <Image source={logoImg} style={styles.logo} />
      <Heading
        title="Encontre seu duo!"
        subtitle="Selecione o game que deseje jogar..."
      />
      <FlatList
        data={GAMES}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <GameCard data={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.contentList}
      />
    </View>
  );
}

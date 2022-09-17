import { SafeAreaView } from "react-native-safe-area-context";
import { useRoute } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { FlatList, Image, TouchableOpacity, View } from "react-native";
import { GameParams } from "../../@types/navigation";

import { Heading } from "../../components/Heading";
import { DuoCard, DuoCardProps } from "../../components/DuoCard";
import { Background } from "../../components/Background";

import logoImg from "../../assets/logo-nlw-esports.png";
import { THEME } from "../../theme";
import { styles } from "./styles";
import { DuoMatch } from "../../components/DuoMatch";

export function Game() {
  const [duos, setDuos] = useState<DuoCardProps[]>([]);
  const [discordDuoSelected, setDiscordDuoSelected] = useState("Gui");

  const route = useRoute();
  const game = route.params as GameParams;
  const navigation = useNavigation();

  function handleGoBack() {
    navigation.goBack();
  }

  async function getDiscordUser(adsId: string) {
    useEffect(() => {
      fetch(`http://192.168.1.2:3333/games/${adsId}/discord`)
        .then((response) => response.json())
        .then((data) => setDuos(data));
    }, []);
  }

  useEffect(() => {
    fetch(`http://192.168.1.2:3333/games/${game.id}/ads`)
      .then((response) => response.json())
      .then((data) => setDuos(data));
  }, []);

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleGoBack}>
            <Entypo
              name="chevron-thin-left"
              size={20}
              color={THEME.COLORS.CAPTION_300}
            />
          </TouchableOpacity>
          <Image source={logoImg} style={styles.logo} />
          <View style={styles.right} />
        </View>
        <Image
          source={{ uri: game.bannerUrl }}
          style={styles.cover}
          resizeMode="cover"
        />
        <Heading title={game.title} subtitle="Conecte-se e comece a jogar!" />
        <FlatList
          data={duos}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <DuoCard data={duos[0]} onConnect={() => getDiscordUser(item.id)} />
          )}
          horizontal
          style={styles.containerList}
          contentContainerStyle={styles.contentList}
          showsHorizontalScrollIndicator={false}
        />

        <DuoMatch
          visible={discordDuoSelected.length > 0}
          discord="jgosjosfo"
          onClose={() => setDiscordDuoSelected("")}
        />
      </SafeAreaView>
    </Background>
  );
}

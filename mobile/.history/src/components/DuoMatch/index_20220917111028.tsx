import {
  Modal,
  View,
  ModalProps,
  Text,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from "react-native";
import * as Clipboard from "expo-clipboard";
import { MaterialIcons } from "@expo/vector-icons";
import { Activity, CheckCircle } from "phosphor-react-native";

import { styles } from "./styles";
import { THEME } from "../../theme";
import { Heading } from "../Heading";
import React, { useState } from "react";

interface Props extends ModalProps {
  discord: string;
  onClose: () => void;
}

export function DuoMatch({ discord, onClose, ...rest }: Props) {
  const [ isCopping, setIsCopping ] = useState(false)

  async function handleCopieDiscordUser() {
    setIsCopping(true)
    await Clipboard.setStringAsync(discord);

    Alert.alert(
      "Discord Copiado!",
      "Usuário copiado para você colocar no Discord"
    );
    setIsCopping(false)
  }

  return (
    <Modal {...rest} transparent statusBarTranslucent animationType="fade">
      <View style={styles.container}>
        <View style={styles.content}>
          <TouchableOpacity style={styles.closeIcon} onPress={onClose}>
            <MaterialIcons
              name="close"
              size={20}
              color={THEME.COLORS.CAPTION_500}
            />
          </TouchableOpacity>
          <CheckCircle size={54} weight="bold" color={THEME.COLORS.SUCCESS} />
          <Heading
            title="Let's Play"
            subtitle="Agora é so começar a jogar"
            style={{ alignItems: "center", marginTop: 24 }}
          />
          <Text style={styles.label}>
            Adicione no Discord
          </Text>
          <TouchableOpacity
            style={styles.discordButton}
            onPress={handleCopieDiscordUser}
            disabled={isCopping}
          >
            <Text style={styles.discord}>
              { isCopping ? <ActivityIndicator /> :  discord }
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

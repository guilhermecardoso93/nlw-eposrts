import {
  Modal,
  View,
  ModalProps,
  Text,
  TouchableOpacity,
  Alert,
} from "react-native";
import * as Clipboard from "expo-clipboard";
import { MaterialIcons } from "@expo/vector-icons";
import { CheckCircle } from "phosphor-react-native";

import { styles } from "./styles";
import { THEME } from "../../theme";
import { Heading } from "../Heading";

interface Props extends ModalProps {
  discord: string;
  onClose: () => void;
}

export function DuoMatch({ discord, onClose, ...rest }: Props) {
  async function handleCopieDiscordUser() {
    await Clipboard.setStringAsync(discord);

    Alert.alert(
      "Discord Copiado!",
      "Usuário copiado para você colocar no Discord"
    );
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
          <Text style={styles.label}></Text>
          <TouchableOpacity style={styles.discordButton} onPress={handleCopieDiscordUser}>
            <Text style={styles.discord}>{discord}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

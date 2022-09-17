import { Modal, View, ModalProps, Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons"

import { styles } from "./styles";
import { THEME } from "../../theme";

interface Props extends ModalProps {
  discord: string;
}

export function DuoMatch({ discord, ...rest }: Props) {
  return (
    <Modal {...rest} transparent statusBarTranslucent>
      <View style={styles.container}>
        <View style={styles.content}>
          <TouchableOpacity
            style={styles.closeIcon}
          >
            <MaterialIcons name='close' size={20} color={THEME.COLORS.CAPTION_500}/>
          </TouchableOpacity>
          <Text style={styles.discord}>{discord}</Text>
        </View>
      </View>
    </Modal>
  );
}

import { Modal, View, ModalProps, Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { CheckCircle } from 'phosphor-react-native'

import { styles } from "./styles";
import { THEME } from "../../theme";
import { Heading } from "../Heading";

interface Props extends ModalProps {
  discord: string;
  onClose: () => void;
}

export function DuoMatch({ discord, onClose, ...rest }: Props) {
  return (
    <Modal {...rest} transparent statusBarTranslucent>
      <View style={styles.container}>
        <View style={styles.content}>
          <TouchableOpacity
            style={styles.closeIcon}
            onPress={onClose}
          >
            <MaterialIcons name='close' size={20} color={THEME.COLORS.CAPTION_500}/>
          </TouchableOpacity>
          <CheckCircle size={54} weight="bold" color={THEME.COLORS.SUCCESS}/>
          <Heading title="Let's Play" subtitle="Agora é so começar a jogar" styles={{alignItems:'center', maginTop: 24}}/>
          <Text style={styles.label}></Text>
          <Text style={styles.discord}>{discord}</Text>
        </View>
      </View>
    </Modal>
  );
}

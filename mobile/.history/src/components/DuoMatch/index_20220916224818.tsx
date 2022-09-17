import { Modal, View, ModalProps, Text } from "react-native";

import { styles } from "./styles";

interface Props extends ModalProps {
  discord: string;
}

export function DuoMatch({ discord, ...rest }: Props) {
  return (
    <Modal {...rest} transparent statusBarTranslucent>
      <View style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.discord}>{discord}</Text>
        </View>
      </View>
    </Modal>
  );
}

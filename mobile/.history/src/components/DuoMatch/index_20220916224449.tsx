import { Modal, View, ModalProps, Text } from "react-native";

import { styles } from "./styles";

interface Props extends ModalProps {
  discord: string
}

export function DuoMatch({discord, ...rest} : Props) {
  return (
    <Modal 
      {...rest}
      transparent
    >
      <View style={styles.container}>
        <Text style={styles.discord}>

        </Text>
      </View>
    </Modal>
  )
}
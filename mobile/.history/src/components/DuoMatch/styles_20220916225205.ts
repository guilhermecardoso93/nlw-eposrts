import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: THEME.COLORS.OVERLAY,
  },
  discord: {
    color: THEME.COLORS.TEXT,
    fontSize: THEME.FONT_SIZE.MD,
    fontFamily: THEME.FONT_FAMILY.REGULAR,
  },
  content: {
    width: 311,
    backgroundColor: THEME.COLORS.SHAPE,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
  },
  closeIcon: {
    alignSelf: 'flex-end',
    margin: 16,

  }
});

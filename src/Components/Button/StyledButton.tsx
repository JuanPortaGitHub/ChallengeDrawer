import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import Colors from "../../Utils/Colors";

interface Props {
  text: string;
  onPress: () => void;
}

export const StyledButton = ({ text, onPress }: Props) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.btnContainer}>
        <Text style={styles.btnText}> {text} </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    flexWrap: "wrap",
    backgroundColor: Colors.darkRed,
    padding: 8,
    borderRadius: 5,
  },
  btnText: {
    color: Colors.white,
    fontSize: 16,
    textTransform: "uppercase",
    textAlign: "center",
  },
});

export default StyledButton;

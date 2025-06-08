import { View } from "react-native";
import { useContext } from "react";
import { AuthContext } from "../auth-context";
import { createStyles } from "../styles/global-stylesheet";

export default function Dashboard({ navigation }) {
  const { theme } = useContext(AuthContext);
  const StyleSheet = createStyles(theme);

  return (
    <View
      style={StyleSheet.screenContainer}>
    </View>
  );
}
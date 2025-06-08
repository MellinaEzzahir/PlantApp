import { View, Text} from "react-native";
import { useContext } from "react";
import { AuthContext } from "../auth-context";
import { createStyles } from "../styles/global-stylesheet";

// import local components here

export default function CustomHeader({ title }) {
  const { theme } = useContext(AuthContext);
  const StyleSheet = createStyles(theme);
  return (
    <View style={StyleSheet.customHeader}>
       <Text style={StyleSheet.customHeaderTitle}>{title}</Text>
    </View>
  );
}
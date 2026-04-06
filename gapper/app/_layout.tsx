import { Stack } from "expo-router";
import { MenuProvider } from 'react-native-popup-menu';
import { ScrollView } from "react-native";

export default function RootLayout() {
  return (

    <MenuProvider>
      <Stack />
    </MenuProvider>
  );
}

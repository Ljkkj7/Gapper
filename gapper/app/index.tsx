import { Text, View, Button } from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";


export default function Index() {
  const router = useRouter();

  async function handlePress() {
    router.push('/station_screen/stationScreen')
  }

  return (
    <View>
      <Text>Get Station Info</Text>
      <Button title="Get Station Info" onPress={handlePress} />
    </View>
  )
}

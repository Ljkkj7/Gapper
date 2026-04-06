import { Text, View, Button } from "react-native";
import { getStationInfo } from "../services/api";
import StationCard from "../components/StationCard";
import { useState } from "react";


export default function Index() {
  const [stationInfo, setStationInfo] = useState(null);

  const handlePress = async () => {
    try {
      const data = await getStationInfo('BNK');
      setStationInfo(data);
    } catch (error) {
      console.log('ERROR', error);
    }
  }

  return (
    <View>
      <Text>Get Station Info</Text>
      <Button title="Get Station Info" onPress={handlePress} />
      <StationCard stationInfo={stationInfo} />
    </View>
  )
}

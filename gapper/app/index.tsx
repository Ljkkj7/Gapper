import { Text, View, Button } from "react-native";
import { getStationInfo } from "../services/api";
import StationCard from "../components/StationCard";
import { useState } from "react";


export default function Index() {
  const [data, setData] = useState(null);

  const handlePress = async () => {
    try {
      const result = await getStationInfo('BNK')
      setData(result)
    } catch (error) {
      console.log('ERROR', error)
    }
  }

  return (
    <View>
      <Text>Get Station Info</Text>
      <Button title="Get Station Info" onPress={handlePress} />
      {data && <StationCard data={data} />}
    </View>
  )
}

import { Text, View, Button } from "react-native";
import { useState, useEffect } from "react";
import { useRouter } from "expo-router";
import { getLineCodes } from "../services/api";
import { Menu, MenuTrigger, MenuOptions, MenuOption } from 'react-native-popup-menu';
import { StyleSheet, ScrollView } from "react-native";


export default function Index() {
  const router = useRouter();

  async function handlePress(stationCode: string) {
    router.push(`/station_screen/stationScreen?stationCode=${stationCode}`)
  }

  const [lineCodes, setLineCodes] = useState<{ [key: string]: string }>({})

  useEffect(() => {
    getLineCodes()
      .then(setLineCodes)
      .catch(console.error)
  }, [])

  console.log(lineCodes)

  return (
    <View>
      <Text style={styles.title}>Get Station Info</Text>
      <Menu>
        <MenuTrigger text="Select Station" style={styles.trigger} />
        <MenuOptions customStyles={{
          optionsContainer: {
            maxHeight: 400,
          }
        }}>
          <ScrollView>
            {Object.keys(lineCodes).map((lineCode) => (
              <MenuOption style={styles.option}
                key={lineCode}
                text={lineCode}
                onSelect={() => handlePress(lineCode)}
              />
            ))}
          </ScrollView>
        </MenuOptions>
      </Menu>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  trigger: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginVertical: 8,
  },
  optionsContainer: {
    maxHeight: 400,
  },
  option: {
    fontSize: 16,
    color: '#1a1a1a',
    marginVertical: 8,
  },
  optionText: {
    fontSize: 16,
    color: '#1a1a1a',
    marginVertical: 8,
  },
  optionTextSelected: {
    fontSize: 16,
    color: '#1a1a1a',
    marginVertical: 8,
  },
})
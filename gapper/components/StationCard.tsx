import { Text, View, StyleSheet, FlatList } from "react-native";
import { LINE_COLOURS } from "../constants/colours";

export default function StationCard({ data }) {
    return (
        <View>
            <Text>{data.station}</Text>
            <Text>{data.last_updated}</Text>
            {data.lines.map((line) => (
                <Text key={line.name}>{line.name}</Text>
            ))}
            {data.lines.map((line) => (
                line.platforms.map((platform) => (
                    <Text key={platform.platform}>{platform.platform}</Text>
                ))
            ))}
            {data.lines.map((line) => (
                line.platforms.map((platform) => (
                    platform.trains.map((train) => (
                        <View>
                            <Text key={train.current_position}>{train.current_position}</Text>
                            <Text key={train.destination}>{train.destination}</Text>
                            <Text key={train.eta_seconds}>{train.eta_seconds}</Text>
                        </View>
                    ))
                ))
            ))}
        </View>
    );
}
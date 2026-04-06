import { View, Text, StyleSheet, FlatList } from 'react-native'
import TrainRow from './TrainRow'
import { LINE_COLOURS } from '../constants/colours'

function PlatformSection({ platform }: { platform: Platform }) {
    return (
        <View style={styles.platform}>
            <Text style={styles.platformLabel}>{platform.platform}</Text>
            {platform.trains.slice(0, 5).map((train, i) => (
                <TrainRow key={i} train={train} />
            ))}
        </View>
    )
}

function LineCard({ line }: { line: Line }) {
    const colour = LINE_COLOURS[line.name] || '#888888'
    const isGood = line.status === 'Good Service'

    return (
        <View style={styles.card}>
            <View style={styles.lineHeader}>
                <View style={[styles.lineDot, { backgroundColor: colour }]} />
                <Text style={styles.lineName}>{line.name} line</Text>
                <View style={[styles.badge, isGood ? styles.badgeGood : styles.badgeBad]}>
                    <Text style={[styles.badgeText, isGood ? styles.badgeTextGood : styles.badgeTextBad]}>
                        {line.status}
                    </Text>
                </View>
            </View>

            {line.platforms.map((p, i) => (
                <PlatformSection key={i} platform={p} />
            ))}
        </View>
    )
}

export type TubeLine = keyof typeof LINE_COLOURS;

export interface Train {
    current_position: string;
    destination: string;
    eta_seconds: number;
}

export interface Platform {
    platform: string;
    trains: Train[];
}

export interface Line {
    name: TubeLine;
    status: string;
    platforms: Platform[];
}

export interface StationData {
    station: string;
    last_updated: string;
    lines: Line[];
}

export interface StationCardProps {
    data: StationData;
}

export default function StationCard({ data }: StationCardProps) {

    return (
        <View>
            <View style={styles.stationHeader}>
                <Text style={styles.stationName}>{data.station}</Text>
                <Text style={styles.updated}>Updated {data.last_updated}</Text>
            </View>

            <FlatList
                data={data.lines}
                keyExtractor={(item) => item.name}
                renderItem={({ item }) => <LineCard line={item} />}
                scrollEnabled={false}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    stationHeader: { marginBottom: 16 },
    stationName: { fontSize: 24, fontWeight: '500', color: '#1a1a1a' },
    updated: { fontSize: 12, color: '#999', marginTop: 2 },
    card: { backgroundColor: '#fff', borderRadius: 12, borderWidth: StyleSheet.hairlineWidth, borderColor: '#ddd', marginBottom: 12, overflow: 'hidden' },
    lineHeader: { flexDirection: 'row', alignItems: 'center', padding: 12, borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: '#eee' },
    lineDot: { width: 12, height: 12, borderRadius: 6, marginRight: 10 },
    lineName: { flex: 1, fontSize: 15, fontWeight: '500', color: '#1a1a1a' },
    badge: { paddingHorizontal: 8, paddingVertical: 3, borderRadius: 20 },
    badgeGood: { backgroundColor: '#EAF3DE' },
    badgeBad: { backgroundColor: '#FCEBEB' },
    badgeText: { fontSize: 11, fontWeight: '500' },
    badgeTextGood: { color: '#3B6D11' },
    badgeTextBad: { color: '#A32D2D' },
    platform: { padding: 12, borderBottomWidth: StyleSheet.hairlineWidth, borderBottomColor: '#f0f0f0' },
    platformLabel: { fontSize: 11, color: '#aaa', textTransform: 'uppercase', letterSpacing: 0.5, marginBottom: 8, fontWeight: '500' },
})
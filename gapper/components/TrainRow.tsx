import { View, Text, StyleSheet } from 'react-native'
import { formatEta } from '../utils/formatEta'

export interface Train {
    eta_seconds: number;
    destination: string;
    current_position: string;
}

export interface TrainRowProps {
    train: Train;
}

export default function TrainRow({ train }: TrainRowProps) {
    const eta = train.eta_seconds;
    const isDue = eta < 60;
    const isSoon = eta < 120;

    return (
        <View style={styles.row}>
            <Text style={styles.destination} numberOfLines={1}>
                {train.destination}
            </Text>
            <Text style={styles.position} numberOfLines={1}>
                {train.current_position}
            </Text>
            <Text style={[styles.eta, isSoon && styles.etaSoon]}>
                {formatEta(train.eta_seconds)}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 8,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#E5E5E5',
    },
    destination: { flex: 2, fontSize: 13, color: '#1a1a1a' },
    position: { flex: 2, fontSize: 11, color: '#888', marginHorizontal: 8 },
    eta: { fontSize: 13, fontWeight: '500', color: '#444', minWidth: 40, textAlign: 'right' },
    etaSoon: { color: '#3B6D11' },
})
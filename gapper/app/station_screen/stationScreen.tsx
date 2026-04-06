import { useState, useEffect } from 'react'
import { ScrollView, ActivityIndicator, Text, StyleSheet } from 'react-native'
import StationCard, { StationData } from '../../components/StationCard'
import { getStationInfo } from '../../services/api'

export default function StationScreen({ stationCode = 'BNK' }) {
    const [data, setData] = useState<StationData | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        getStationInfo(stationCode)
            .then(setData)
            .catch(err => setError(err.message))
            .finally(() => setLoading(false))
    }, [stationCode])

    if (loading) return <ActivityIndicator style={styles.center} />
    if (error) return <Text style={styles.error}>{error}</Text>
    if (!data) return null

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <StationCard data={data} />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: { padding: 16 },
    center: { flex: 1, marginTop: 40 },
    error: { color: 'red', padding: 16 },
})
export const formatEta = (seconds: number) => {
    if (seconds < 60) return 'Due'
    return `${Math.round(seconds / 60)} min`
}
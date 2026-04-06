
const BASE_URL = 'http://192.168.1.209:5000';

export const getStationInfo = async (stationCode: string) => {
    const response = await fetch(`${BASE_URL}/get_station_info/${stationCode}`);
    const data = await response.json();
    return data;
}

export const getLineCodes = async () => {
    const response = await fetch(`${BASE_URL}/get_line_codes`);
    const data = await response.json();
    return data;
}
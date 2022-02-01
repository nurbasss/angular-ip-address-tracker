export interface IpAddress {
    ip: string,
    location:{
        country: string,
        region: string,
        city: string,
        lat: number,
        lng: number,
        postalCode: string,
        timezone: string
    },
    isp: string
}

declare global {
    // Interface representing the 'Company' information related to the IP address.
    interface Company {
        name: string;
        abuser_score: string;
        domain: string;
        type: string;
        network: string;
    }

    // Interface representing the 'Abuse' details associated with the IP address.
    interface Abuse {
        name: string;
        address: string;
        email: string;
        phone: string;
    }

    // Interface representing the ASN (Autonomous System Number) details for the IP address.
    interface ASN {
        asn: number;
        abuser_score: string;
        route: string;
        descr: string;
        country: string;
        active: boolean;
        org: string;
        domain: string;
        abuse: string;
        type: string;
        updated: string;
        rir: string;
        whois: string;
    }

    // Interface representing the 'Location' details of the IP address (e.g., city, country).
    interface Location {
        continent: string;
        country: string;
        country_code: string;
        state: string;
        city: string;
        latitude: number;
        longitude: number;
        zip: string;
        timezone: string;
        local_time: string;
        local_time_unix: number;
        is_dst: boolean;
    }

    // Interface representing the complete response data structure from the IP location API.
    interface LocationResponseData {
        isProxy: boolean;       // Indicates if the IP is a proxy.
        source: string;         // The source of the data (e.g., 'ipapi_is').
        res: LocationResponse | ErrorResponse
    }

    interface ErrorResponse {
        error: string;
        elapsed_ms: number;
    }

    interface LocationResponse {
        ip: string;           // The queried IP address.
        rir: string;          // The Regional Internet Registry for the IP address.
        is_bogon: boolean;    // Indicates if the IP is a bogon address.
        is_mobile: boolean;   // Indicates if the IP is associated with mobile devices.
        is_crawler: boolean;  // Indicates if the IP is a bot/crawler.
        is_datacenter: boolean; // Indicates if the IP belongs to a data center.
        is_tor: boolean;      // Indicates if the IP is part of the Tor network.
        is_proxy: boolean;    // Indicates if the IP is a proxy.
        is_vpn: boolean;      // Indicates if the IP is associated with a VPN.
        is_abuser: boolean;   // Indicates if the IP is flagged as an abuser.
        company: Company;     // The company details for the IP address.
        abuse: Abuse;         // The abuse report details.
        asn: ASN;             // The ASN details for the IP.
        location: Location;   // The geographical location of the IP address.
        elapsed_ms: number;   // The time taken to get the data (in milliseconds).
    }

    // Class definition for the 'IpLocation' which interacts with the IP location API.
    class IpLocation {
        private readonly ip: string;
        private readonly finder: string;
        private readonly source: string;
    
        constructor(ip: string);
    
        private isIPv6(ip: string): boolean;
    
        private parseIpAndPort(ipWithPort: string): { ip: string, port: string | null };
    
        find(): Promise<LocationResponseData | null>;
      }
}

export { };

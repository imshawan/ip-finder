export class IpLocation {
    private readonly ip: string;
    private readonly finder: string;
    private readonly source: string;

    constructor(ip: string) {
        this.ip = ip;
        this.source = "ipapi_is";
        this.finder = String.fromCharCode(
            104, 116, 116, 112, 115, 58, 47, 47, 119, 119, 119, 46, 105, 112, 108, 111,
            99, 97, 116, 105, 111, 110, 46, 110, 101, 116, 47, 103, 101, 116, 45, 105,
            112, 100, 97, 116, 97
        );
    }

    /**
     * Basic check for IPv6 format (detects if the string contains more than 1 ":")
     * @param ip 
     * @returns bool
     */
    private isIPv6(ip: string): boolean {
        return ip.split(":").length > 2;
    }

    /**
     * Function to parse the IP and port (including handling square brackets for IPv6)
     * @param ipWithPort 
     * @returns {Object} ip and port
     */
    private parseIpAndPort(ipWithPort: string): { ip: string, port: string | null } {
        let ip = ipWithPort;
        let port: string | null = null;

        if (ip.includes(":")) {
            let splitted = ip.split(":");
            port = splitted[splitted.length - 1];
        }

        if (ip.startsWith("[") && ip.includes("]")) {
            ip = ip.substring(1, ip.indexOf("]"));

        } else if (ip.split(":").length <= 2) {
            ip = ip.split(":")[0];
        }

        return { ip, port };
    }

    async find(): Promise<LocationResponseData | null> {
        const { ip: ipAddr } = this.parseIpAndPort(this.ip);
        const ipv = this.isIPv6(ipAddr) ? 6 : 4;

        const body = {
            ip: ipAddr,
            source: this.source,
            ipv: String(ipv),
        };

        try {
            const response = await fetch(this.finder, {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded;",
                },
                body: new URLSearchParams(body as Record<string, string>).toString(),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data: LocationResponseData = await response.json(); // Assuming the response is of type LocationResponseData
            return data;
        } catch (error) {
            console.error(`Fetch error: ${error}`);
            return null; // Return null if there"s an error
        }
    }
}
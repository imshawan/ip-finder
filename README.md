# IP Location Finder

`ip-finder` is a TypeScript library that allows you to find the location of an IP address (both IPv4 and IPv6). It interacts with the IPLocation API to provide detailed location information, including the country, city, timezone, and more.

## Features

- **IPv4 and IPv6 Support**: Detect and handle both IPv4 and IPv6 addresses.
- **Location Data**: Retrieve location data such as country, city, timezone, and more.
- **Simple API**: Easy-to-use methods for finding location information based on IP addresses.
- **Lightweight**: Minimal dependencies, fast, and simple to integrate.

## Installation

### NPM

To install the package, use the following command:

```bash
npm install ip-finder
```

## Usage
### Basic Example
```typescript
import IpLocation from 'ip-finder';

const ip = '2402:a00:192:6f7:986c:9055:4fca:490f'; // Example IPv6 address
const ipLocation = new IpLocation(ip);

ipLocation.find().then((data) => {
  if (data) {
    console.log('Location Data:', data);
  } else {
    console.log('Invalid IP or failed to fetch data');
  }
}).catch((error) => {
  console.error('Error:', error);
});
```

## API
### `new IpLocation(ip: string)`
- `ip`: The IP address to look up. Can be IPv4, IPv6, or IPv6 with a port.

### `find()`
- Returns: A Promise that resolves to the location data object (or null if the IP is invalid or an error occurs).
- Error Handling: If an invalid IP is provided or if there's a problem fetching the data, it returns null.

### Location Response Data
The `find()` method returns a `LocationResponseData` object, which includes various details about the IP's location. Some of the fields include:

- `ip`: The IP address provided.
- `location`: The location information including country, city, timezone, and more.
- `company`: Information about the ISP or organization using the IP address.
- `abuse`: Abuse contact information for the ISP.
- `asn`: ASN (Autonomous System Number) details related to the IP address.

If the IP is invalid, the response will contain an error:

```json
{
  "error": "Invalid IP Address or AS Number",
  "elapsed_ms": 0.19
}
```

## Development
To develop this package locally, follow these steps:

### Install Dependencies
```bash
npm install
```

### Build the TypeScript code
```bash
npm run build
```

### Run Tests
To run tests, use:
```bash
npm test
```

## Contributing
We welcome contributions and suggestions! If you have any ideas, improvements, or bug fixes, feel free to fork the repository, create a new branch, and submit a pull request.

If you have any new features or enhancements you'd like to see, or if you encounter any issues, please open an issue, and we’ll be happy to discuss and collaborate on a solution.

We’re always open to new suggestions, and we value collaboration!

## License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.
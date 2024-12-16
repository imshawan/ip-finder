import IpLocation from '../src';

describe('IpLocation Class Tests', () => {

  // Test with IPv4 address
  test('should handle IPv4 address correctly', async () => {
    const ip = '147.12.160.98:6881';
    const ipLocation = new IpLocation(ip);

    const result = await ipLocation.find();

    expect(result).not.toBeNull();
    expect(result?.res).toHaveProperty('ip');
    expect(result?.res).toHaveProperty('company');
    expect(result?.res).toHaveProperty('abuse');
    expect(result?.res).toHaveProperty('asn');
    expect(result?.res).toHaveProperty('location');
  });

  // Test with IPv6 address
  test('should handle IPv6 address correctly', async () => {
    const ip = '2402:a00:192:6f7:986c:9055:4fca:490f';
    const ipLocation = new IpLocation(ip);

    const result = await ipLocation.find();

    expect(result).not.toBeNull();
    expect(result?.res).toHaveProperty('ip');
    expect(result?.res).toHaveProperty('company');
    expect(result?.res).toHaveProperty('abuse');
    expect(result?.res).toHaveProperty('asn');
    expect(result?.res).toHaveProperty('location');
  });

  // Test with IPv6 address with square brackets and port
  test('should handle IPv6 address with square brackets and port correctly', async () => {
    const ip = '[2402:a00:192:6f7:986c:9055:4fca:490f]:9428';
    const ipLocation = new IpLocation(ip);

    const result = await ipLocation.find();

    expect(result).not.toBeNull();
    expect(result?.res).toHaveProperty('ip');
    expect(result?.res).toHaveProperty('company');
    expect(result?.res).toHaveProperty('abuse');
    expect(result?.res).toHaveProperty('asn');
    expect(result?.res).toHaveProperty('location');
  });

  // Test with incorrect IP address (should return error response)
  test('should return an error for an invalid IP address', async () => {
    const ip = '999';
    const ipLocation = new IpLocation(ip);

    const result = await ipLocation.find();

    expect(result).not.toBeNull();
    expect(result?.res).toHaveProperty('error');
  });

});

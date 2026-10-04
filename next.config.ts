import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow real phones on the LAN to load dev/HMR resources. The PC's Wi-Fi IP
  // is DHCP-assigned and changes (seen: 10.76.139.194 -> 10.145.233.194), so
  // wildcard both active subnets; add a new pattern here if the IP moves again.
  allowedDevOrigins: [
    "10.145.233.194",
    "10.145.*.*",
    "10.76.139.194",
    "10.76.*.*",
  ],
};

export default nextConfig;

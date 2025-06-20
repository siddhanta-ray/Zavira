import { createCivicAuthPlugin } from "@civic/auth/nextjs"
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

const withCivicAuth = createCivicAuthPlugin({
  clientId: "34c577e8-dbfd-455b-bd47-f69f04d96190"
});

export default withCivicAuth(nextConfig)
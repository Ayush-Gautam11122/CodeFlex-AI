// https://sunny-horse-41.clerk.accounts.dev

import { AuthConfig } from "convex/server";

const authConfig: AuthConfig = {
providers: [
    {
      // Replace with your Clerk Frontend API URL
      // or with `process.env.CLERK_JWT_ISSUER_DOMAIN`
      // and configure CLERK_JWT_ISSUER_DOMAIN on the Convex Dashboard
      // See https://docs.convex.dev/auth/clerk#configuring-dev-and-prod-instances
    domain: "https://sunny-horse-41.clerk.accounts.dev/",
    applicationID: "convex",
    },
],
};
export default authConfig;
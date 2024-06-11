import { PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_BUILD } from "next/dist/shared/lib/constants.js";

/** @type {(phase: string, defaultConfig: import("next").NextConfig) => Promise<import("next").NextConfig>} */
const nextConfig = async (phase) => {
    /** @type {import("next").NextConfig} */

    // Your current or future configuration 

    const nextConfig = {

    };

    if (phase === PHASE_DEVELOPMENT_SERVER || phase === PHASE_PRODUCTION_BUILD) {
        const withSerwist = (await import("@serwist/next")).default({
            swSrc: "app/app-worker.ts",
            swDest: "public/sw.js",
            reloadOnOnline: true,
        });
        return withSerwist(nextConfig);
    }

    return nextConfig;
};

export default nextConfig;
//@ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { composePlugins, withNx } = require('@nx/next');

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
  // Add this to help with module resolution
  webpack: (config, { isServer }) => {
    // Add any custom webpack configurations here
    return config;
  },
  env:{ 
    NEXT_PUBLIC_ENABLE_ANALYTICS:process.env.NEXT_PRIVATE_ENABLE_ANALYTICS, 
    NEXT_PUBLIC_GA_MEASUREMENT_ID:process.env.NEXT_PRIVATE_GA_MEASUREMENT_ID
  }
};

const plugins = [
  // Add more Next.js plugins to this list if needed.
  withNx,
];

module.exports = composePlugins(...plugins)(nextConfig);

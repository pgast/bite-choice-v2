/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   webpack: (config, { isServer }) => {
//     if (!isServer) {
//       config.resolve.fallback.fs = false
//       config.resolve.fallback.tls = false
//       config.resolve.fallback.net = false
//       config.resolve.fallback.child_process = false
//     }

//     return config
//   },
// }

// module.exports = nextConfig

// next.config.js
module.exports = {
  async headers() {
    return [
      {
        // matching all API routes
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
          { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
        ]
      }
    ]
  }
};

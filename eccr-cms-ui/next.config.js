const { createSecureHeaders } = require("next-secure-headers");

const nextConfig = {
    reactStrictMode: true,
    // swcMinify: true,
    basePath: '/eccr-cms-ui',
    trailingSlash: true,
    
    // Adding policies:
    async headers() {
        return [
            {
                source: '/(.*)',
                headers: createSecureHeaders({
                    contentSecurityPolicy: {
                        directives: {
                            defaultSrc: [
                                "'self'",
                                "https://eccr.staging.dso.mil",
                                "https://eccr.staging.dso.mil/eccr-cms",
                                "https://eccr.staging.dso.mil/eccr-cms-ui/", 
                                "https://eccr.apps.dso.mil/",
                                "https://eccr.apps.dso.mil/eccr-cms-ui/",
                                "https://fonts.googleapis.com"
                            ],
                            styleSrc: [
                                "'self'",
                                "https://eccr.staging.dso.mil",
                                "https://eccr.staging.dso.mil/eccr-cms",
                                "https://eccr.staging.dso.mil/eccr-cms-ui/", 
                                "https://eccr.apps.dso.mil/",
                                "https://eccr.apps.dso.mil/eccr-cms-ui/",
                                "https://fonts.googleapis.com"
                            ],
                            imgSrc: ["'self'",
                                    "data:",
                                    "data:*",
                            ],
                            fontSrc: [
                                "'self'", 
                                "https://fonts.gstatic.com"
                            ],
                            frameAncestors: [
                                "'self'",
                                "https://eccr.apps.dso.mil/",
                                "https://eccr.apps.dso.mil/eccr-cms-ui/",
                                "https://eccr.staging.dso.mil/eccr-cms-ui/"
                            ]
                        },
                        frameGuard: "deny",
                        noopen: "noopen",
                        nosniff: "nosniff",
                        xssProtection: "sanitize",
                        referrerPolicy: "origin-when-cross-origin",
                    }
                })
            },
        ];
    },
}

module.exports = nextConfig

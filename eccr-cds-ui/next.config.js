const { createSecureHeaders } = require("next-secure-headers");

const nextConfig = {
    reactStrictMode: true,

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
                                "https://eccr.staging.dso.mil/cds/",
                                "https://ecc.apps.dso.mil",
                                "https://eccr.apps.dso.mil/cds/"
                            ],
                            styleSrc: [
                                "'self'",
                                "https://eccr.apps.dso.mil",
                                "https://eccr.apps.dso.mil/cds-ui/",
                                "https://eccr.staging.dso.mil", 
                                "https://fonts.googleapis.com"
                            ],
                            imgSrc: ["'self'",
                                    "data:",
                                    "data:*",
                                    "https://www.jcs.mil",
                                    "https://www.aetc.af.mil",
                                    "https://prod-discovery.edx-cdn.org",
                                    "https://media.defense.gov",
                                    "https://www.dote.osd.mil",
                                    "https://d15cw65ipctsrr.cloudfront.net",
                                    "https://d3njjcbhbojbot.cloudfront.net",
                                    "https://coursera-course-photos.s3.amazonaws.com",
                                    "https://eccr.apps.dso.mil"
                            ],
                            fontSrc: [
                                "'self'", 
                                "https://fonts.gstatic.com"
                            ],
                            frameAncestors: [
                                "'self'",
                                "https://eccr.staging.dso.mil",
                                "https://eccr.apps.dso.mil",
                                "https://eccr.apps.dso.mil/cds-ui/"
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
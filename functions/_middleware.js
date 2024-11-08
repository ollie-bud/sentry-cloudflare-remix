import * as Sentry from "@sentry/cloudflare";

export const onRequest = [
  // Make sure Sentry is the first middleware
  Sentry.sentryPagesPlugin(() => ({
    dsn: "https://2348aa2b901bb45ea74a6da3af267a35@o4505885946478592.ingest.us.sentry.io/4508261956911104",
    // Set tracesSampleRate to 1.0 to capture 100% of spans for tracing.
    tracesSampleRate: 1.0,
  })),
  // Add more middlewares here
];

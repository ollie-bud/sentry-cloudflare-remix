import * as Sentry from "@sentry/remix";

Sentry.init({
    dsn: "https://2348aa2b901bb45ea74a6da3af267a35@o4505885946478592.ingest.us.sentry.io/4508261956911104",
    autoInstrumentRemix: true
})
import * as Sentry from "@sentry/remix";
/**
 * By default, Remix will handle hydrating your app on the client for you.
 * You are free to delete this file if you'd like to, but if you ever want it revealed again, you can run `npx remix reveal` ✨
 * For more information, see https://remix.run/file-conventions/entry.client
 */

import { RemixBrowser } from "@remix-run/react";
import { startTransition, StrictMode } from "react";
import { hydrateRoot } from "react-dom/client";

Sentry.init({
    dsn: "https://2348aa2b901bb45ea74a6da3af267a35@o4505885946478592.ingest.us.sentry.io/4508261956911104"
})

startTransition(() => {
  hydrateRoot(
    document,
    <StrictMode>
      <RemixBrowser />
    </StrictMode>
  );
});
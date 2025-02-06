

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://aa0f07d351439d4d72dd70ace75c2c8c@o4508771971629056.ingest.de.sentry.io/4508771975757904",

  tracesSampleRate: 1,

  debug: false,
});

# Remix, Cloudflare and Sentry

Using the latest Remix, Wrangler and Sentry packages - with nothing much extra.

The git history should be pretty followable if you want to follow the steps yourself.

There are 3 routes:

- `/client` - (The default sentry clientside error example)
- `/action` - A form that when submitted, throws an error
- `/loader` - A page that when loaded, throws an error

Client side errors come through perfectly - and so do serverside errors - until it's deployed.

The moment it's actually on a Cloudflare worker - serverside errors always come through as `Unexpected Server Error` without any details.

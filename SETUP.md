# Setup

The site runs with no configuration at all. Two footer widgets — the Spotify
line and the visitor count — simply do not render until their credentials
exist, so nothing breaks while you set them up (or if you never do).

Put the values in `.env.local` for development, and in your host's environment
variables for production. `.env*` is already gitignored.

---

## Spotify — "last played · <track>"

Spotify has no public "what is this person listening to" endpoint. You have to
authorise your own account once, keep the refresh token, and let the server
trade it for a short-lived access token on each request. That is what
`src/app/api/now-playing/route.ts` does.

You do this **once**. Refresh tokens do not expire.

### 1. Create an app

1. Go to <https://developer.spotify.com/dashboard> and log in with the Spotify
   account whose listening you want to show.
2. **Create app**. Any name and description.
3. Set **Redirect URI** to exactly:
   ```
   http://127.0.0.1:3000/callback
   ```
   Spotify no longer accepts `localhost` here — it must be `127.0.0.1`. Click
   **Add**, tick the Web API checkbox, and save.
4. Open **Settings** and copy the **Client ID** and **Client secret**.

### 2. Authorise your account

Paste this into a browser, with your client ID substituted in:

```
https://accounts.spotify.com/authorize?client_id=YOUR_CLIENT_ID&response_type=code&redirect_uri=http%3A%2F%2F127.0.0.1%3A3000%2Fcallback&scope=user-read-currently-playing%20user-read-recently-played
```

Approve it. The browser lands on a dead page — that is fine, nothing is
listening on that port. What matters is the URL bar:

```
http://127.0.0.1:3000/callback?code=AQD9f...VeryLongString
```

Copy everything after `code=`. It is valid for about a minute, so do the next
step straight away.

### 3. Trade the code for a refresh token

```bash
curl -X POST https://accounts.spotify.com/api/token \
  -u "YOUR_CLIENT_ID:YOUR_CLIENT_SECRET" \
  -d grant_type=authorization_code \
  -d code=THE_CODE_YOU_COPIED \
  -d redirect_uri=http://127.0.0.1:3000/callback
```

The response contains `"refresh_token": "..."`. That is the last value you need.

> If you get `invalid_grant`, the code expired or was already used. Redo step 2
> for a fresh one.

### 4. Set the variables

```bash
# .env.local
SPOTIFY_CLIENT_ID=...
SPOTIFY_CLIENT_SECRET=...
SPOTIFY_REFRESH_TOKEN=...
```

Restart the dev server. Play something on Spotify and the footer line appears,
polling every 30 seconds. It says "now playing" while a track is running and
"last played" once it stops.

---

## Visitor count

`src/app/api/visit/route.ts` runs a single Redis `INCR` over HTTP, so there is
no driver and no connection pool — one `fetch` per page view.

Either provider works; the route checks both names.

**Vercel** — in the project dashboard go to **Storage → Create Database →
Upstash (Redis)** and connect it. Vercel injects `KV_REST_API_URL` and
`KV_REST_API_TOKEN` automatically. Redeploy.

**Anywhere else** — create a free database at <https://console.upstash.com>,
open its **REST API** tab, and copy:

```bash
# .env.local
UPSTASH_REDIS_REST_URL=https://....upstash.io
UPSTASH_REDIS_REST_TOKEN=...
```

The counter lives under the key `portfolio:visits`. To start it somewhere other
than zero, set it once from the Upstash console: `SET portfolio:visits 1000`.

If the store is ever unreachable the route returns `configured: false` and the
line disappears rather than showing a wrong number.

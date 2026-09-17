import { NextResponse } from "next/server";

// Redis over HTTP, so the counter needs no driver and no connection pool — one
// fetch per page view. Vercel's KV integration sets the KV_* pair; a plain
// Upstash database sets the UPSTASH_* pair. Either works.
const REST_URL = process.env.KV_REST_API_URL ?? process.env.UPSTASH_REDIS_REST_URL;
const REST_TOKEN =
  process.env.KV_REST_API_TOKEN ?? process.env.UPSTASH_REDIS_REST_TOKEN;

const KEY = "portfolio:visits";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET() {
  if (!REST_URL || !REST_TOKEN) {
    return NextResponse.json({ configured: false }, { status: 200 });
  }

  try {
    // INCR returns the value after the increment, so the visitor reading the
    // number is the one it counts.
    const res = await fetch(`${REST_URL}/incr/${KEY}`, {
      headers: { Authorization: `Bearer ${REST_TOKEN}` },
      cache: "no-store",
    });

    if (!res.ok) throw new Error(`redis responded ${res.status}`);

    const data = (await res.json()) as { result?: number };
    return NextResponse.json({ configured: true, visits: data.result ?? 0 });
  } catch (err) {
    // A counter is decoration. If the store is down the page should not notice.
    console.warn("visit counter failed:", err);
    return NextResponse.json({ configured: false }, { status: 200 });
  }
}

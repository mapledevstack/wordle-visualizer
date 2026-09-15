import { NextRequest, NextResponse } from "next/server"

const DATE_PATTERN = /^\d{4}-\d{2}-\d{2}$/

// The NYT Wordle API (https://www.nytimes.com/svc/wordle/v2/YYYY-MM-DD.json)
// sends no CORS headers, so the browser cannot call it directly.
// This route proxies it: same-origin for the client, server-side fetch for NYT.
// NYT resets the puzzle at midnight US Eastern time, so that is the fallback date.
export async function GET(request: NextRequest) {
  const date =
    request.nextUrl.searchParams.get("date") ??
    new Date().toLocaleDateString("en-CA", { timeZone: "America/New_York" })

  if (!DATE_PATTERN.test(date)) {
    return NextResponse.json(
      { error: "date query param must be YYYY-MM-DD" },
      { status: 400 },
    )
  }

  try {
    const res = await fetch(
      `https://www.nytimes.com/svc/wordle/v2/${date}.json`,
      { cache: "no-store" },
    )

    if (!res.ok) {
      return NextResponse.json(
        { error: `NYT API responded with ${res.status}` },
        { status: 502 },
      )
    }

    const data = await res.json()

    if (!data?.solution) {
      return NextResponse.json(
        { error: "NYT response is missing the solution" },
        { status: 502 },
      )
    }

    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unknown error" },
      { status: 502 },
    )
  }
}

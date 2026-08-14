import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch("https://github.com/users/santanamnaa/contributions", {
      headers: {
        "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      },
      next: { revalidate: 3600 },
    });

    if (!res.ok) {
      return NextResponse.json({ error: "Failed to fetch GitHub contributions" }, { status: 500 });
    }

    const html = await res.text();

    // Extract table from HTML
    const tableMatch = html.match(/<table[^>]*class="[^"]*ContributionCalendar-grid[^"]*"[^>]*>[\s\S]*?<\/table>/i);
    const countMatch = html.match(/([\d,]+)\s+contributions\s+in the last year/i);

    return NextResponse.json({
      success: true,
      totalCount: countMatch ? countMatch[1] : "884",
      tableHtml: tableMatch ? tableMatch[0] : "",
    });
  } catch (error) {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const upstream = await fetch("https://applicant.vinter.me/api/Sms/SendOtpSms", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const data = await upstream.json().catch(() => null);
    return NextResponse.json(data, { status: upstream.status });
  } catch {
    return NextResponse.json(
      { data: false, success: false, message: "Bad request", isResourceKey: false },
      { status: 400 }
    );
  }
}


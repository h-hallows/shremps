import { NextResponse } from "next/server";

// ----------------------------------------------------------------------------
// Contact API — STUB. Wire up Resend (or Formspree) when going live.
// To activate:
//   1. npm install resend
//   2. Add RESEND_API_KEY to your environment (Vercel: Settings → Env Vars)
//   3. Uncomment the Resend block below and remove the early return.
//   4. In components/sections/Contact.tsx, switch the active handler from
//      handleSubmitMailto to handleSubmitApi (one line).
// ----------------------------------------------------------------------------

// import { Resend } from "resend";

interface ContactBody {
  name?: string;
  email?: string;
  reason?: string;
  message?: string;
}

export async function POST(request: Request) {
  const body = (await request.json().catch(() => ({}))) as ContactBody;

  if (!body.email || !body.message) {
    return NextResponse.json(
      { ok: false, error: "Missing required fields." },
      { status: 400 },
    );
  }

  // TODO(Hunter): swap the stub below for a real Resend call.
  // const resend = new Resend(process.env.RESEND_API_KEY);
  // await resend.emails.send({
  //   from: "Shremps Studios <studio@shremps.com>",
  //   to: ["studio@shremps.com"],
  //   replyTo: body.email,
  //   subject: `[${body.reason ?? "Other"}] from ${body.name ?? "the site"}`,
  //   text: body.message,
  // });

  return NextResponse.json(
    { ok: false, error: "Contact API not yet configured. See route.ts." },
    { status: 501 },
  );
}

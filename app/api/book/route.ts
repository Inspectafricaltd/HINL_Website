import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, phone, service, date, address, addons } = body;

  try {
    await resend.emails.send({
      from: "HINL Bookings <noreply@homeinspectors.ng>",
      to: "info@homeinspectors.ng",
      replyTo: email,
      subject: `New Booking: ${service} — ${name}`,
      html: `
        <h2>New Inspection Booking Request</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Preferred Date:</strong> ${date || "Not specified"}</p>
        <p><strong>Property Address:</strong><br/>${address || "Not provided"}</p>
        ${addons?.length ? `<p><strong>Add-Ons Requested:</strong><br/>${addons.join("<br/>")}</p>` : ""}
      `,
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}

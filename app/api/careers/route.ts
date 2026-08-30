import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const formData = await request.formData();

  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const state = formData.get("state") as string;
  const profession = formData.get("profession") as string;
  const experience = formData.get("years_of_experience") as string;
  const motivation = formData.get("motivation") as string;
  const cvFile = formData.get("cv") as File | null;

  const attachments: { filename: string; content: Buffer }[] = [];

  if (cvFile && cvFile.size > 0) {
    const bytes = await cvFile.arrayBuffer();
    attachments.push({
      filename: cvFile.name,
      content: Buffer.from(bytes),
    });
  }

  try {
    await resend.emails.send({
      from: "HINL Careers <noreply@homeinspectors.ng>",
      to: "careers@homeinspectors.ng",
      replyTo: email,
      subject: `Inspector Application: ${name} — ${state}`,
      html: `
        <h2>New Inspector Application</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>State:</strong> ${state}</p>
        <p><strong>Profession:</strong> ${profession}</p>
        <p><strong>Years of Experience:</strong> ${experience}</p>
        <hr/>
        <h3>Motivation</h3>
        <p>${motivation.replace(/\n/g, "<br/>")}</p>
        ${cvFile ? `<p><em>CV attached: ${cvFile.name}</em></p>` : "<p><em>No CV attached</em></p>"}
      `,
      attachments,
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Failed to send" }, { status: 500 });
  }
}

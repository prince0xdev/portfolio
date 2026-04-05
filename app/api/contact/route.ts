import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json()

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'Champs manquants.' }, { status: 400 })
  }

  const res = await fetch('https://api.mailzeet.com/v1/mails', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.MAILZEET_API_KEY}`,
    },
    body: JSON.stringify({
      sender: {
        email: 'princeekpinse97@gmail.com',
        name: 'Portfolio — Prince Ekpinse',
      },
      recipients: [{ email: 'princeekpinse97@gmail.com', name: 'Prince Ekpinse' }],
      reply_to: [{ email, name }],
      subject: `Nouveau message de ${name} depuis votre portfolio`,
      html: `
        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Message :</strong></p>
        <p>${message.replace(/\n/g, '<br/>')}</p>
      `,
      text: `Nom : ${name}\nEmail : ${email}\n\nMessage :\n${message}`,
    }),
  })

  if (!res.ok) {
    const err = await res.json()
    return NextResponse.json({ error: err }, { status: res.status })
  }

  return NextResponse.json({ success: true })
}
import { Resend } from 'resend'
import EmailTemplate from '../../components/EmailTemplate'
const resend = new Resend(process.env.RESEND_API_KEY)

export default async function sendEmail(req, res) {
  try {
    const data = req.body

    await resend.sendEmail({
      from: 'sabare.tech <sabarevictor@gmail.com>',
      to: process.env.RESEND_DESTINATION_EMAIL,
      replyTo: data.email,
      subject: `${data.name} - via sabare.tech`,
      react: <EmailTemplate {...data} />,
    })

    res.status(200).json({ message: 'Email sent' })
  } catch (e) {
    res.status(500).json({ message: e.message })
  }
}

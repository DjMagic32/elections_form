import nodemailer from "nodemailer";
export async function sendMail({
  to,
  name,
  body,
  subject,
}: {
  to: string;
  name: string;
  body: string;
  subject: string;
}) {

    const { SMTP_PASSWORD, SMTP_EMAIL } = process.env;

    const transport  = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: SMTP_EMAIL,
            pass: SMTP_PASSWORD
        }
    });

    try {
        const testResult = await transport.verify();
        console.log(testResult);
    } catch (error) {
        console.log(error);
    }

    try {
        const sendResult = await transport.sendMail({
            from: `David Garcia <${SMTP_EMAIL}>`,
            to,
            subject,
            html: body
        });
    } catch (error){
        console.log("Error al enviar el correo electrónico", error);
    }

}

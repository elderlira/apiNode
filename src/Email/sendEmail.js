import nodeMailer from 'nodemailer'
import emailData from './emailCredential.js'

async function sendEmail(target, name, message) {
    let transporter = nodeMailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: emailData.email,
            pass: emailData.password
        },
        tls: {
            rejectUnauthorized: false
        }
    })
    try {
        await transporter.sendMail({
            from: 'Doctor Fenix <doctorfenix.sac@gmail.com>',
            to: `${target}`,
            subject: 'doctor fenix',
            text: 'Serviço cadastrado com sucesso',
            html: `<b> ${name} </b> ${message}`
        })
    } catch (erro) {
        console.log(erro)
    }
}

export default sendEmail

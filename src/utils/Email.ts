require('dotenv').config()
import nodemailer from 'nodemailer'


class Email {

    private img: any
    private email: any

    constructor(img: any) {
        this.email = process.env['my_email']
        this.sendMail(img)
    }

    private sendMail(img: any) {
        const transporter = nodemailer.createTransport({
            service: 'outlook',
            auth: {
                user: process.env['email'],
                pass: process.env['pass']
            }
        })

        const mailOptions = {
            from: process.env['email'],
            to: this.email,
            subject: 'Alerta de preço',
            html: `<img src="data:image/png;base64, ${img}"/>`
        }
   
        transporter.sendMail(mailOptions, (err, info) => {
            if (err)
                console.log(err)
            else
                console.log(info)
        })
    }
}

export default Email

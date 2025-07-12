import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '@envs/environment.development';
import sendGrid from '@sendgrid/mail';


@Injectable({
  providedIn: 'root'
})
export class SignupService {

  private readonly toSend = environment.sendGrid.toSend;
  private apiUrl = environment.sendGrid.urlApi;
  private http = inject(HttpClient);

  sendEmail(to: string, subject: string, content: string) {
    return this.http.post(`${this.apiUrl}/send-email`, {
      
    })
  }


  // sendMail(): Promise<void> {
  //   const msg = {
  //     from: this.toSend,
  //     to: this.toSend,
  //     subject: 'REGISTRO | VENTA DE TIEMPO AIRE',
  //     text: 'Tienes un nuevo cliente no lo hagas esperar!',
  //     html: '<strong>it works!</strong>'
  //   };

  //  return sendGrid
  //   .send(msg)
  //   .then( (resp) => {
  //     console.log('MAIL SENT')
  //   })
  //   .catch( (err) => {
  //     console.log(err)
  //   })

  // }

  

// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
// javascript
// const sgMail = require('@sendgrid/mail')
// sgMail.setApiKey(process.env.SENDGRID_API_KEY)
// const msg = {
//   to: 'test@example.com', // Change to your recipient
//   from: 'test@example.com', // Change to your verified sender
//   subject: 'Sending with SendGrid is Fun',
//   text: 'and easy to do anywhere, even with Node.js',
//   html: '<strong>and easy to do anywhere, even with Node.js</strong>',
// }
// sgMail
//   .send(msg)
//   .then(() => {
//     console.log('Email sent')
//   })
//   .catch((error) => {
//     console.error(error)
//   })
}

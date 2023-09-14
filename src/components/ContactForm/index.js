import { Component } from "react";

import {
  Form,
  NameEmail,
  NameInput,
  EmailInput,
  Message,
  SendButton,
} from "./styledComponents";

class ContactForm extends Component {
  render() {
    return (
      <Form
        action="https://formsubmit.co/450ddd0ad797280bf49008cfc731a488"
        method="POST"
      >
        <input type="hidden" name="_subject" value="New Email from Portfolio" />
        <input type="hidden" name="_captcha" value="false" />
        <input
          type="hidden"
          name="_next"
          value="https://geethasaatvik.vercel.app/contact"
        />
        <NameEmail>
          <NameInput
            type="input"
            placeholder="Your Name"
            name="name"
            required
          />
          <EmailInput
            type="email"
            placeholder="Your Email"
            name="email"
            required
          />
        </NameEmail>
        <Message
          rows="5"
          placeholder="Your Message"
          name="message"
          required
        ></Message>
        <SendButton type="submit">Send Message</SendButton>
      </Form>
    );
  }
}

export default ContactForm;

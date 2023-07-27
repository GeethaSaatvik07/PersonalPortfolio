import { Component } from "react";
// import axios from "axios";

import {
  Form,
  NameEmail,
  NameInput,
  EmailInput,
  Message,
  SendButton,
} from "./styledComponents";

class ContactForm extends Component {
  //   state = { name: "", email: "", message: "" };

  //   onChangeName = (event) => {
  //     this.setState({ name: event.target.value });
  //   };

  //   onChangeEmail = (event) => {
  //     this.setState({ email: event.target.value });
  //   };

  //   onChangeMessage = (event) => {
  //     this.setState({ message: event.target.value });
  //   };

  //   onSubmitSendMessage = async (event) => {
  //     event.preventDefault();
  //     try {
  //       await axios.post("/submit_contact_form", this.state);
  //       alert("Message sent successfully!");
  //       this.setState({
  //         name: "",
  //         email: "",
  //         message: "",
  //       });
  //     } catch (error) {
  //       console.error("Error sending message:", error);
  //       alert("Error sending message. Please try again later.");
  //     }
  //   };

  render() {
    return (
      <Form
        action="https://formsubmit.co/450ddd0ad797280bf49008cfc731a488"
        method="POST"
        // onSubmit={this.onSubmitSendMessage}
      >
        <input type="hidden" name="_subject" value="New Email from Portfolio" />
        <input type="hidden" name="_captcha" value="false" />
        <NameEmail>
          <NameInput
            type="input"
            placeholder="Your Name"
            // onChange={this.onChangeName}
            name="name"
            required
          />
          <EmailInput
            type="email"
            placeholder="Your Email"
            // onChange={this.onChangeEmail}
            name="email"
            required
          />
        </NameEmail>
        <Message
          rows="5"
          placeholder="Your Message"
          //   onChange={this.onChangeMessage}
          name="message"
          required
        ></Message>
        <SendButton type="submit">Send Message</SendButton>
      </Form>
    );
  }
}

export default ContactForm;

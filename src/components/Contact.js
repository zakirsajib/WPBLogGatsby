// Dependencies
import React, { Component } from 'react'

class Form extends Component {

  render() {
    return (
        <div>
        <form
            name="contact"
            method="POST"
            data-netlify-honeypot="bot-field"
            data-netlify="true"
        >
        {/* Netlify hidden field */}
        <input name="form-name" type="hidden" value="contact"/>
        <p hidden><label>Don’t fill this out: <input name="bot-field"/></label></p>
        {/* Name field */}
        <div className="field">

            <div className="control">
                <input className="input is-medium" type="text" placeholder="Name" name="name" required="required" />
            </div>
        </div>
        {/* Email field */}
        <div className="field">

            <div className="control">
                <input className="input is-medium" type="email" placeholder="@hello" name="email" required="required" />
            </div>
        </div>
        {/* Message textarea */}
        <div className="field">

            <div className="control">
        <textarea className="textarea" placeholder="Message" name="message" required="required"></textarea>
            </div>
        </div>
        {/* Submit button */}
        <div className="field">
            <div className="control">
                <button
                    type="submit"
                    className="button is-large is-fullwidth is-primary"
                >Submit</button>
            </div>
        </div>
      </form>
      </div>
    );
  }
}

export default Form;

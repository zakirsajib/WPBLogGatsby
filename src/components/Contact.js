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
            <label className="label">Name</label>
            <div className="control">
                <input className="input" type="text" placeholder="Name" name="name" />
            </div>
        </div>
        {/* Email field */}
        <div className="field">
            <label className="label">Email</label>
            <div className="control">
                <input className="input" type="email" placeholder="@hello" name="email" />
            </div>
        </div>
        {/* Message textarea */}
        <div className="field">
            <label className="label">Message</label>
            <div className="control">
                <textarea className="textarea" placeholder="Message"></textarea>
            </div>
        </div>
        {/* Submit button */}
        <div className="field">
            <div className="control">
                <button type="submit" className="button is-link">Submit</button>
            </div>
        </div>
      </form>
      </div>
    );
  }
}

export default Form;

import React, { Component } from 'react'
// import axios from 'axios'

export default class Contactform extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      message: '',
      name: '',
      phone: ''
    }
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(evt) {
    evt.preventDefault();
    const {email, message, name, phone } = this.state;
    const contents = {
      email,
      message,
      name,
      phone
    }
    // axios.post('/api/contact', contents);

    this.setState({
      email: '',
      message: '',
      name: '',
      phone: ''
    })
  }

  render() {
    const messageCharLimit = (message) => {
      return Boolean(message.length > 400);
    }

    return (
      <div>
        <div className="container">
          <h1 className="pagehead">Let's Get In Touch!</h1>
          <hr />
          <div className="col-lg-12 col-md-12 col-sm-12 ">
            <div className="form-area form-button">
              <form role="form" onSubmit={this.handleSubmit} >
          			<div className="form-group">
      						<input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="Name"
                    maxLength="100"
                    value={this.state.name}
                    onChange={(name) => {this.setState({name: name.target.value})}}
                    required />
      					</div>
      					<div className="form-group">
      						<input
                    type="text"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="Email"
                    maxLength="100"
                    value={this.state.email}
                    onChange={(email) => this.setState({email: email.target.value})}
                    required />
      					</div>
      					<div className="form-group">
      						<input
                    type="text"
                    className="form-control"
                    id="phone"
                    name="phone"
                    placeholder="Phone Number"
                    maxLength="10"
                    value={this.state.phone}
                    onChange={(phone) => this.setState({phone: phone.target.value})}
                  />
      					</div>
                <div className="form-group">
                  <textarea
                    className="form-control"
                    type="textarea"
                    id="message"
                    placeholder="Message"
                    maxLength="400"
                    rows="7"
                    value={this.state.message}
                    onChange={(message) => {this.setState({message: message.target.value})}}>
                  </textarea>
                  <span className="help-block">
                    {this.state.message.length > 400
                      ?
                      <p id="characterLeft" className="help-block descrip">You have reached the limit</p>
                      :
                      <p id="characterLeft" className="help-block descrip">{400 - this.state.message.length} characters left</p>
                    }
                  </span>
                </div>
                <button
                  type="submit"
                  name="submit"
                  className="btn btn-secondary" 
                  style={{"opacity": "0.8"}}
                  disabled={messageCharLimit(this.state.message)}> SEND </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

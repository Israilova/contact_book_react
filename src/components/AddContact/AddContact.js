import React, { Component } from 'react';

class AddContact extends Component {

    state = {
        firstNameVal: '',
        lastNameVal: '',
        emailVal: '',
        phoneNumberVal: ''
    }

    handlefirstName = event => {
        const firstNameVal = event.target.value
        this.setState({ firstNameVal })
    }

    handlelastName = event => {
        const lastNameVal = event.target.value
        this.setState({ lastNameVal })
    }

    handleEmail = event => {
        const emailVal = event.target.value
        this.setState({ emailVal })
    }

    handlePhoneNumber = event => {
        const phoneNumberVal = event.target.value
        this.setState({ phoneNumberVal })
    }

    handleClick = () => {
        const newArr = [...this.props.data]
        const firstNameValue = this.state.firstNameVal
        const lastNameValue = this.state.lastNameVal
        const emailValue = this.state.emailVal
        const phoneNumberValue = this.state.phoneNumberVal

        const obj = {
            firstName: firstNameValue,
            lastName: lastNameValue,
            email: emailValue,
            phoneNumber: phoneNumberValue
        }

        if(!firstNameValue || !lastNameValue || !emailValue || !phoneNumberValue ) return

        newArr.push(obj)
        

        this.props.onChange(newArr)

        this.setState({firstNameVal: '', lastNameVal: '', emailVal: '', phoneNumberVal: ''})
    }
 

    render() {
        return (
            <div className="add-contact">
                <div>
                    <input 
                        type="text" 
                        className="firstName" 
                        placeholder="First name"
                        value={this.state.firstNameVal}
                        onChange = {this.handlefirstName}
                    />                    
                    <input 
                        type="text" 
                        className="lastName" 
                        placeholder="Last name"
                        value={this.state.lastNameVal}
                        onChange = {this.handlelastName}
                    />
                    <input 
                        type="email" 
                        className="email" 
                        placeholder="E-mail"
                        value={this.state.emailVal}
                        onChange = {this.handleEmail}
                    />
                    <input 
                        type="number" 
                        className="phoneNumber" 
                        placeholder="Phone number"
                        value={this.state.phoneNumberVal}
                        onChange = {this.handlePhoneNumber}
                    />
                    <button
                    onClick = {this.handleClick}
                    >Add contact</button>
                </div>
            </div>
        );
    }
}

export default AddContact;
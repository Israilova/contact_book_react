import React, { Component } from 'react';

import './Edit.css';

class Edit extends Component {

    state = {
        currentContact: {
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            status: false
        }
    }
    shouldComponentUpdate(nextProps, nextState) {
        if(nextProps.editId !== this.props.editId) {
            this.changeState(nextProps.data, nextProps.editId)
        }
        return true
    }
    changeState = (data, id) => {
        let firstName = data[id].firstName
        let lastName = data[id].lastName
        let email = data[id].email
        let phoneNumber = data[id].phoneNumber

        this.setState({ currentContact: {...this.state.currentContact, firstName, lastName, email, phoneNumber }})
        
    }

    handleInputFirstName = event => {
        let firstName = event.target.value
        this.setState({ currentContact: {...this.state.currentContact, firstName}})
      
    }

    handleInputLastName = event => {
        let lastName = event.target.value
        this.setState({ currentContact: {...this.state.currentContact, lastName}})
       
    }

    handleInputEmail = event => {
        let email = event.target.value
        this.setState({ currentContact: {...this.state.currentContact, email}})
    }

    handleInputPhoneNumber = event => {
        let phoneNumber = event.target.value
        this.setState({ currentContact: {...this.state.currentContact, phoneNumber}})
    }

    handleSave = () => {
        console.log(this.state)
        const id = this.props.editId
        let data = [...this.props.data]

        const obj = {
            firstName: this.state.currentContact.firstName,
            lastName: this.state.currentContact.lastName,
            email: this.state.currentContact.email,
            phoneNumber: this.state.currentContact.phoneNumber
        }

        data.splice(id, 1, obj)

        this.props.onChange(data)

        this.props.handleEditId(id)
    }

    render() {

        const currentContact = this.state.currentContact
        return (
            <>
                {this.props.isEdit ? (
                    <div className="modal-window">
                        <div className="modal-body">
                            <input onChange = {e => this.handleInputFirstName(e)} value={currentContact.firstName}
                            />
                            <input onChange = {e => this.handleInputLastName(e)} value={currentContact.lastName}
                            />
                            <input onChange = {e => this.handleInputEmail(e)} value={currentContact.email}
                            />
                            <input onChange = {e => this.handleInputPhoneNumber(e)} value={currentContact.phoneNumber}
                            />
                            <button onClick = {this.handleSave}>save</button>
                        </div>                    
                    </div>
                ): false}                
            </>
        );
    }
}

export default Edit;
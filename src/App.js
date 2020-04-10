import React, { Component } from 'react';

import AddContact from './components/AddContact/AddContact';
import List from './components/List/List';
import Edit from './components/Edit/Edit';

class App extends Component {

  state = {
    contact: [
      {
        firstName: 'NewContact firstName',
        lastName: 'NewContact lastName',
        email: 'NewContact email',
        phoneNumber: 'NewContact phoneNumber',
      },
      {
        firstName: 'NewContact2 firstName',
        lastName: 'NewContact2 lastName',
        email: 'NewContact2 email',
        phoneNumber: 'NewContact2 phoneNumber',
      }
    ],
    isEdit: false,
    editId: null
  }

  handleContactBook = contact => {
    this.setState({ contact })
  }

  handleEditId = editId => {
    this.setState({ editId })
    this.setState({ isEdit: !this.state.isEdit })
  }

  render() {
    return (
      <div className="app">

      <AddContact 
        data = {this.state.contact}
        onChange = {this.handleContactBook}
      
      />  

      <List 
        data = {this.state.contact}
        onChange = {this.handleContactBook}
        handleEditId = {this.handleEditId}
      />

      <Edit 
        data = {this.state.contact}
        onChange = {this.handleContactBook}
        isEdit = {this.state.isEdit}
        editId = {this.state.editId}
        handleEditId = {this.handleEditId}       
      
      />

      </div>
    );
  }
}

export default App;
import React, { Component } from 'react';

import './List.css';

class List extends Component {

    handleDelete = (index, event) => {
        
        event.stopPropagation()

        let newArr = [...this.props.data]

        newArr.splice(index, 1)

        this.props.onChange(newArr)
        
    }

    render() {

        const data = this.props.data

        return (
            <div className="list">
                {data.map((item, index) => {
                    return <div key={index} className="contacts">
                        <p>Contact # </p>
                        <div>First name: {item.firstName}</div>
                        <div>Last name: {item.lastName}</div>
                        <div>Email: {item.email}</div>  
                        <div>Phone number: {item.phoneNumber}</div>
                        <div className="contacts-buttons">
                            <button onClick = { e => {this.handleDelete(index, e)}} className="btn-del">delete</button>
                            <button onClick = { e => {
                                e.stopPropagation()
                                this.props.handleEditId(index)}}className="btn-edit">edit</button>
                        </div>            
                    </div>
                })}                
            </div>
        );
    }
}

export default List;
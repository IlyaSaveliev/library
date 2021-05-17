import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserList from "./components/Users.js";
import Header from "./components/Header.js";
import Clr from "./components/Clr.js";
import Footer from "./components/Footer.js";
import axios from "axios";

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            'users': []
        }
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/users')
            .then(response => {
                const users = response.data
                this.setState(
                    {
                        'users': users
                    }
                )
            }).catch(error => console.log(error))
        // const users = [
        //     {
        //         "user_name": "Пользователь1",
        //         "first_name": "Иван",
        //         "last_name": "Иванович",
        //         "email": "IvanIvanovich@gb.local",
        //         "age": 35
        //     },
        //     {
        //         "user_name": "Пользователь2",
        //         "first_name": "Петр",
        //         "last_name": "Петров",
        //         "email": "PetrPetrov@gb.local",
        //         "age": 28
        //     },
        // ]
        // this.setState(
        //     {
        //         'users': users
        //     })
    }

    render() {
        return (
            <div>
                <div>
                    <Header/>
                </div>
                <div>
                    <UserList users={this.state.users}/>
                </div>
                <div>
                    <Clr/>
                </div>
                <div>
                    <Footer/>
                </div>
            </div>
        )
    }
}

export default App;

import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserList from "./components/Users.js";
import Header from "./components/Header.js";
import Clr from "./components/Clr.js";
import Footer from "./components/Footer.js";
import ProjectList from "./components/Projects.js";
import TodoList from "./components/Todos.js";
import {HashRouter, Route, Link, Redirect, BrowserRouter} from "react-router-dom";
import axios from "axios";

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            'users': [],
            'projects': [],
            'notes': []
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


            axios.get('http://127.0.0.1:8000/api/project')
                .then(response => {
                    const projects = response.data
                    this.setState(
                        {
                            'projects': projects
                        }
                    )
                }).catch(error => console.log(error))


            axios.get('http://127.0.0.1:8000/api/todo')
                .then(response => {
                    const notes = response.data
                    this.setState(
                        {
                            'notes': notes
                        }
                    )
                }).catch(error => console.log(error))


    }

    render() {
        return (
            <div className='App'>
                <BrowserRouter>
                    <div>
                        <Header/>
                    </div>
                    <HashRouter>
                        <nav>
                            <ul>
                                <li>
                                    <Link to='/'>Users</Link>
                                </li>
                                <li>
                                    <Link to='/projects'>Projects</Link>
                                </li>
                                <li>
                                    <Link to='/notes'>Notes</Link>
                                </li>
                            </ul>
                        </nav>

                        <div>
                            <Route exact path='/' component={() => <UserList items={this.state.users}/>}/>
                            <Route exact path='/projects'
                                   component={() => <ProjectList items={this.state.projects}/>}/>
                            <Route exact path='/notes' component={() => <TodoList items={this.state.todos}/>}/>
                            <Redirect from='/users' to='/'/>
                        </div>
                    </HashRouter>
                    <div>
                        <Clr/>
                    </div>
                    <div>
                        <Footer/>
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

export default App;

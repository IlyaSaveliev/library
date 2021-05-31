import React from 'react';
import logo from './logo.svg';
import './App.css';
import UserList from "./components/Users.js";
import Header from "./components/Header.js";
import Clr from "./components/Clr.js";
import Footer from "./components/Footer.js";
import ProjectList from "./components/Projects.js";
import TodoList from "./components/Todos.js";
import {HashRouter, Route, Link} from "react-router-dom";
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
        axios.get('http://127.0.0.1:8000/viewsets/users')
            .then(response => {
                const users = response.data
                this.setState(
                    {
                        'users': users
                    }
                )
            }).catch(error => console.log(error))

            axios.get('http://127.0.0.1:8000/viewsets/project')
            .then(response => {
                const projects = response.data
                this.setState(
                    {
                        'projects': projects
                    }
                )
            }).catch(error => console.log(error))

            axios.get('http://127.0.0.1:8000/viewsets/todo')
            .then(response => {
                const notes = response.data
                this.setState(
                    {
                        'notes': notes
                    }
                )
            }).catch(error => console.log(error))
        // const user1 = {
        //     id: 1,
        //     user_name: 'User1',
        //     first_name: 'User1',
        //     last_name: 'User1',
        //     email: 'User1@db.local',
        //     age: 35
        // }
        // const user2 = {
        //     id: 2,
        //     user_name: 'User2',
        //     first_name: 'User2',
        //     last_name: 'User2',
        //     email: 'User2@db.local',
        //     age: 28
        // }
        // const users = [user1, user2]
        // const project1 = {
        //     id: 1,
        //     name: 'Project1',
        //     description: 'Test',
        //     links: 'http://localhost:8000',
        //     users: user1
        // }
        // const project2 = {
        //     id: 2,
        //     name: 'Project2',
        //     description: 'test',
        //     links: 'http://localhost:8000',
        //     users: user2
        // }
        // const project3 = {
        //     id: 3,
        //     name: 'Project3',
        //     description: 'TesT',
        //     links: 'http://localhost:8000',
        //     users: user1
        // }
        // const projects = [project1, project2, project3]
        // const todo1 = {
        //     id: 1,
        //     project: project1,
        //     description: 'destroy project2',
        //     created_ad: '',
        //     updated_ad: '',
        //     owner: user1,
        //     status: 'is_active'
        // }
        // const todo2 = {
        //     id: 2,
        //     project: project3,
        //     description: 'update projects',
        //     created_ad: '',
        //     updated_ad: '',
        //     owner: user2,
        //     status: 'is_active'
        // }
        // const todos = [todo1, todo2]
        // this.state = {
        //     'users': users,
        //     'projects': projects,
        //     'todos': todos
        // }
    }

    render() {
        return (
            <div>
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
                    </div>
                    <div>
                        <Route exact path='/projects' component={() => <ProjectList items={this.state.projects}/>}/>
                    </div>
                    <div>
                        <Route exact path='/notes' component={() => <TodoList items={this.state.todos}/>}/>
                    </div>
                </HashRouter>
                <div>
                    <Footer/>
                </div>
            </div>
        )
    }

}

export default App;

import React from 'react';
// import logo from './logo.svg';
import './App.css';
import UserList from "./components/Users.js";
import Header from "./components/Header.js";
import Clr from "./components/Clr.js";
import Footer from "./components/Footer.js";
import ProjectList from "./components/Projects.js";
import TodoList from "./components/Todos.js";
import LoginForm from "./components/Auth.js";
import ProjectForm from "./components/ProjectForm.js";
import TodoForm from "./components/TodoForm.js";
import {HashRouter, Route, Link, Redirect, BrowserRouter, Switch} from "react-router-dom";
import axios from "axios";
import Cookies from 'universal-cookie';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'users': [],
            'projects': [],
            'notes': [],
            'token': ''
        }
    }

    load_data() {

        const headers = this.get_headers()

        axios.get('http://127.0.0.1:8000/api/users/', {headers})
            .then(response => {
                this.setState({users: response.data})
            }).catch(error => console.log(error))

        // axios.get('http://127.0.0.1:8000/api/users/')
        //     .then(response => {
        //         this.setState({users: response.data})
        //     }).catch(error => console.log(error))

        axios.get('http://127.0.0.1:8000/api/project/', {headers})
            .then(response => {
                this.setState({projects: response.data})
            }).catch(error => console.log(error))

        axios.get('http://127.0.0.1:8000/api/todo/', {headers})
            .then(response => {
                this.setState({notes: response.data})
            }).catch(error => console.log(error))
    }

    componentDidMount() {
        // this.load_data()
        this.get_token_from_storage()
    }

    set_token(token) {
        const cookies = new Cookies()
        cookies.set('token', token)
        this.setState({'token': token}, () => this.load_data())
    }

    is_authenticated() {
        return this.state.token != ''
    }

    logout() {
        this.set_token('')
    }

    get_token_from_storage() {
        const cookies = new Cookies()
        const token = cookies.get('token')
        this.setState({'token': token}, () => this.load_data())
    }

    get_headers() {
        //     let headers = {
        //         'Content-Type': 'application/json'
        //     }
        //     if (this.is_authenticated()) {
        //         headers['Authorization'] = 'Token ' + this.state.token
        //     }
        //     return headers
        // }
        if (!this.is_authenticated())
            return {};

        return {
            'Authorization': 'Token ' + this.state.token
        }
    }

    get_token(username, password) {
        axios.post('http://127.0.0.1:8000/api-token-auth/', {username: username, password: password})
            .then(response => {
                this.set_token(response.data['token'])
                // console.log(response.data)
            }).catch(error => alert('Неправильный логин или пароль'))
    }

    delete_project(id) {
        let headers = this.get_headers();
        axios
            .delete(`http://127.0.0.1:8000/api/project/${id}/`, {headers})
            .then(response => {
                this.setState(
                    {
                        'projects': this.state.projects.filter((project) => project.id !== id)
                    }
                )
            })
            .catch(error => {
                console.log(error)
            })
    }

     delete_note(id) {
        let headers = this.get_headers();
        axios
            .delete(`http://127.0.0.1:8000/api/todo/${id}/`, {headers})
            .then(response => {
                this.setState(
                    {
                        'notes': this.state.notes.filter((note) => note.id !== id)
                    }
                )
            })
            .catch(error => {
                console.log(error)
            })
    }

    create_project(name, description, links, users) {
        console.log("create_project " + name + " - " + description + " - " + links + " - " + users);

       axios
       .post(
            'http://127.0.0.1:8000/api/project/',
            {"name": name, "descriprion": description, "links": links, "users": users}
       )
       .then(response => {
            this.load_data();
       })
       .catch(error => console.log('Error'))
    }

    create_note(project, description, createdAd, updatedAd, owner, status) {
        console.log("create_note " + project + " - " + description + " - " + createdAd + " - " + updatedAd + " - " + owner + " - " + status);


       axios
       .post(
            'http://127.0.0.1:8000/api/todo/',
            {"project": project, "descriprion": description, "createdAd": createdAd, "updatedAd": updatedAd, "owner": owner, "status": "status"}
       )
       .then(response => {
            this.load_data();
       })
       .catch(error => console.log('Error'))
    }


    render() {
        return (
            <div className='App'>
                <BrowserRouter>
                    <div>
                        <Header/>
                    </div>

                    <nav>
                        <ul>
                            <li className='li'>
                                {this.is_authenticated() ? <button onClick={() => this.logout()}>Logout</button> :
                                    <Link to='/login'>Login</Link>}
                            </li>
                            <li className='li'>
                                <Link to='/'>Users</Link>
                            </li>
                            <li className='li'>
                                <Link to='/projects'>Projects</Link>
                            </li>
                            <li className='li'>
                                <Link to='/notes'>Notes</Link>
                            </li>
                            <li className='li'>
                                <Link to='/projects/create'>New Project</Link>
                            </li>
                            <li className='li'>
                                <Link to='/notes/create'>New Note</Link>
                            </li>
                        </ul>
                    </nav>

                    <Switch>
                        <Route exact path='/' component={() => <UserList users={this.state.users}/>}/>
                        <Route exact path='/projects'
                               component={() => <ProjectList projects={this.state.projects} delete_project = {(id) => this.delete_project(id)} />}/>
                        <Route exact path='/projects/create'
                            component = {() => <ProjectForm create_project = {(name, description, links, users) => this.create_project(name, description, links, users)} users={this.state.users} />} />
                        <Route exact path='/notes/create'
                            component = {() => <TodoForm create_note = {(project, description, createdAd, updatedAd, owner, status) => this.create_note(project, description, createdAd, updatedAd, owner, status)}  />} />
                        <Route exact path='/notes' component={() => <TodoList notes={this.state.notes} delete_note = {(id) => this.delete_note(id)}/>}/>
                        <Redirect from='/users' to='/'/>
                        <Route exact path='/login'
                               component={() => < LoginForm
                                   get_token={(username, password) => this.get_token(username, password)}/>}/>
                    </Switch>

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

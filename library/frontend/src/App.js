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
                this.setState({authors: response.data})
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
        let headers = {
            'Content-Type': 'application/json'
        }
        if (this.is_authenticated()) {
            headers['Authorization'] = 'Token ' + this.state.token
        }
        return headers
    }

    get_token(username, password) {
        axios.post('http://127.0.0.1:8000/api-token-auth/', {username: username, password: password})
            .then(response => {
                this.set_token(response.data['token'])
                // console.log(response.data)
            }).catch(error => alert('Неправильный логин или пароль'))
    }


    render() {
        return (
            <div className='App'>
                <BrowserRouter>
                    <div>
                        <Header />
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
                        </ul>
                    </nav>

                    <Switch>
                        <Route exact path='/' component={() => <UserList users={this.state.users}/>}/>
                        <Route exact path='/projects'
                               component={() => <ProjectList projects={this.state.projects}/>}/>
                        <Route exact path='/notes' component={() => <TodoList notes={this.state.notes}/>}/>
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

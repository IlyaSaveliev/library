import React from "react";

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          'projects': '',
          'description': '',
          'createdAd': '',
          'updatedAd': '',
          'owner': '',
          'status': ''
        }
    }

    handleChange(event) {
        this.setState(
            {
                [event.target.name]: event.target.value
            }
        );
    }


    handleSubmit(event) {
        this.props.create_note(this.state.project, this.state.description, this.state.createdAd, this.state.updatedAd, this.state.owner, this.state.status);
        event.preventDefault();
    }

    render() {
      return (
        <form onSubmit={(event)=> this.handleSubmit(event)}>
            <input type="text" name="Project" placeholder="Project" value={this.state.project} onChange={(event)=>this.handleChange(event)} />
            <input type="text" name="description" placeholder="description" value={this.state.description} onChange={(event)=>this.handleChange(event)} />
            <input type="date" name="createdAd" placeholder="createdAd" value={this.state.createdAd} onChange={(event)=>this.handleChange(event)} />
            <input type="date" name="updatedAd" placeholder="updatedAd" value={this.state.updatedAd} onChange={(event)=>this.handleChange(event)} />
            <input type="text" name="owner" placeholder="owner" value={this.state.owner} onChange={(event)=>this.handleChange(event)} />
            <input type="boolean" name="status" placeholder="status" value={this.state.status} onChange={(event)=>this.handleChange(event)} />

            <input type="submit" value="Create" />
        </form>
      );

    }
}


export default TodoForm;
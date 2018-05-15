import React, { Component } from 'react';

class TodoForm extends Component {
    constructor(){
      super();
      this.state= {
          title:'',
          responsible:'',
          description:'',
          priority:'low'

      };
      this.handleInput=this.handleInput.bind(this);
      this.handleSubmit=this.handleSubmit.bind(this);

    }
// cambiar el estado con los nuevos valores d elos nombres
    handleInput(event){
      const {value, name} = event.target;
      this.setState({
        [name]: value
      })
      
    }

    handleSubmit(event){
      event.preventDefault();
      this.props.onAddTodo(this.state);


    }

    render() {
      return (
      <div className="card">
        <form className="card-body" onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input type="text" className="form-control" name="title" placeholder="Title" onChange={this.handleInput} />
          </div>
          <div className="form-group">
            <input type="text" className="form-control" name="responsible"  placeholder="Responsible" onChange={this.handleInput} />
          </div>
          <div className="form-group">
            <input type="text" className="form-control" name="description" placeholder="Description" onChange={this.handleInput}/>
          </div>
          <div className="form-group">
            <select className="form-control" name="priority" onChange={this.handleInput}>
              <option value="low">low</option>
              <option value="medium">medium</option>
              <option value="high">high</option>
            </select>
          </div>
          <button className="btn btn-danger">AGREGAR</button>

        </form>
      </div>





      )
    }

}

export default TodoForm;
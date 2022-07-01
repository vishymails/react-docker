import React, { Component } from 'react';
import AddNinja from './AddNinja';
import AddNinja1 from './AddNinja1';
import Ninjas from './Ninjas';
import Ninjas1 from './Ninjas1';
import Ninjas2 from './Ninjas2';
import Ninjas3 from './Ninjas3';
import Ninjas4 from './Ninjas4';
import Ninjas5 from './Ninjas5';


class App extends Component {

  state = {
    ninjas : [
      { name : "Amit", age : 20, belt : "black", id : 1},
      { name : "keerti", age : 25, belt : "yellow", id : 2},
      { name : "om", age : 22, belt : "white", id : 3},
      { name : "shalini", age : 28, belt : "yellow", id : 4}
    ]
  }

  addNinja = (ninja) => {
    ninja.id = Math.random();
    let ninjas = [...this.state.ninjas, ninja];
    this.setState({
      ninjas : ninjas
    })
  }

  deleteNinja = (id) => {
    let ninjas = this.state.ninjas.filter(ninja => {
      return ninja.id !== id
    });
    this.setState({
      ninjas : ninjas
    })
  }

  componentDidMount() {
    console.log("COMPONENT MOUNTED");
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('Component Updated');
    console.log(prevProps, prevState);
  }

  componentWillUnmount() {
    console.log("Component will UnMount");
  }

  componentWillUpdate() {
    console.log("Component will update");
  }

  shouldComponentUpdate(newProps, nextState, snapshot) {
    return true ;
  }

  componentWillReceiveProps(newProps) {
    console.log("Component will receive props ");
  }

  changeState() {
    // this.setState({name:"John Deere"});
  }
  render() {
    return (

      <div className="App">
        <p> SPA </p>
        <h1> My First Component</h1>
        <p> Welcome :) </p>

        <hr/>
        <p> Ninjas Component - Nesting components </p>
        <Ninjas />

        <hr/>
        <p> Ninjas1 Component - Nesting components with props </p>
        <Ninjas1 name="aditi" age="20" belt="green" />
        <Ninjas1 name="Kedar" age="20" belt="black" />
        <Ninjas1 name="Sarang" age="20" belt="yellow" />
        
        <hr/>
        <p> Ninjas2 - Outputing list </p>
        <Ninjas2 ninjas ={ this.state.ninjas } />
      

      <hr/>
      <p> Ninjas3 - Outputing List with state and props </p>
      <Ninjas3 ninjas ={ this.state.ninjas } />
      

      <hr/>
      <p> Ninjas4 - Conditional Output  </p>
      <Ninjas4 ninjas ={ this.state.ninjas } />
      

      <hr/>
      <p> Form Actions   </p>
      <AddNinja />

      <hr/>
      <p> Form Actions - updating State  </p>
      <AddNinja1 addNinja = { this.addNinja }/>

      <hr/>
      <br/>

      <p> Form Actions - Deleting Record   </p>
      <Ninjas5 ninjas={ this.state.ninjas } deleteNinja = { this.deleteNinja } />
      
      </div>
    )
  }
}
export default App;

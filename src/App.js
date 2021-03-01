//import React, {Fragment,Component} from 'react'
//import UserItem from './components/users/UserItem'
import Navbar from './components/layout/Navbar';
import React, {Component} from 'react'
import Users from './components/users/Users'
import Search from './components/users/Search'
import axios from 'axios';
import './App.css';
class App extends Component{  
  // react componnets contains all lifecycle methods.
    
    //const name = 'Harsh';
    //const foo = () => 'Wipro React Project';
    //const loading = false;
    //const showName = true;

   /* if(loading){
      return <h4> loading...</h4>
    }
    */
   // npm i axios
  //Now if you ever want to make a request in HD GDP requests such as to get hub right when the the app .loads or the component loads this is where you want to do it.
  //So that's what we're gonna do and I'm going to use axioms you can use the fetch API if you want.
  state = {
    users: [],
    loading: false
  }
  async componentDidMount(){
      //this.state.loading = true;
      this.setState({loading: true});
      const res = await axios.get('https://api.github.com/users');
      this.setState({users: res.data, loading: false}); 
   }
    render() {
    return (
    <div className='App'>
    <Navbar title ='Wipro Github' icon='fab fa-github-square'/>
    <div className="container">
    <Search/>
    <Users loading = {this.state.loading} users={this.state.users} />
    </div>
    </div>
    // npm run build.
    // npm start => to run dev server
    //{loading ? <h5>loading..</h5> : <h1> hello {showName ? name : null  } </h1> } same as
    //<React.Fragment>
    //after writing fragment above we can use <Fragment>
    //</div className='App'>
    //<>
    //<h1> Hello from Harsh,Chirag and Pratik </h1>
    //<p> wipro react js practice.</p>
    //</>
    //</React.Fragment>
    //<Fragment>
    //</div>

  );
 }
}
export default App;
//<div>
//{loading ? <h5>loading..</h5> : <h1> hello {showName && name }</h1>}
// {loading ? <h4> loading..</h4>:<h1> I have made a {foo()} , hope you like it. </h1>}
//<p>Hello from {name.toUpperCase()},Chirag and Prateek </p>  
//</div>
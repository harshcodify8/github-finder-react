import React from 'react'
import PropTypes from 'prop-types'
const Navbar = ({icon,title}) => {
        return (
            <nav className="navbar bg-primary">
                <h1>
                <i className={icon}/>  {title}
                </h1>
            </nav>
        );   
};
Navbar.defaultProps = {
    title:'kuch bi title deda',
    icon:'fab fa-github-square'
};
Navbar.propTypes = {
title: PropTypes.string.isRequired,
icon: PropTypes.string.isRequired
};
export default Navbar
/*
import React, { Component } from 'react'
#### rce
class based component syntax
export class Navbar extends Component {
    
        static defaultProps = {
            title:'kuch bi title deda',
            icon:'fab fa-github-square'
        };
     /*   
        props are property in a component that you can pass from outside.

        So now even though I didn't pass any props in the default prop should take over.
        and whenever I pass they are going to  overwrite default props.
        
        prop types are basically  type checking. It will tell you if you know your prop should be a string or a number or an array or object or anything
        like that. -->> impt
    /*
    static propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
 };
 
 render() {
     return (
         <nav className="navbar bg-primary">
             <h1>
             <i className={this.props.icon}/>  {this.props.title}
             </h1>
         < /nav>
     )
 }
}
export default Navbar
*/
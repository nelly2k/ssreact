import * as React from "react";
import { Link } from 'react-router-dom'
import { Routes } from "../routes";

interface IProps{
  name:string;
}


export class Hello extends React.Component<IProps>{
  render(){
    return <div>
    <h1>Hello, {this.props.name}!</h1>
    <ul>
      <li><Link to="/">Page 1</Link></li>
      <li><Link to="/page2">Page 2</Link></li>
      <li><Link to="/page3">Page 3</Link></li>
    </ul>
    <hr />
    <Routes/>
  </div>
  }
}

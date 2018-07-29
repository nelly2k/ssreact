import * as React from "react";
import { Link } from 'react-router-dom'
import { Routes } from "../routes";


export const Hello = (props) => <div>
  <h1>Hello, {props.name}!</h1>
  <ul>
    <li><Link to="/">Page 1</Link></li>
    <li><Link to="/page2">Page 2</Link></li>
  </ul>
  <hr />
  <Routes/>
</div>


import * as React from "react";
import {actionCreators, State} from "../state/story"
import { connect } from "react-redux";

type Props = typeof actionCreators
    & State;
class Page3 extends React.Component<Props>{
    render(){
        return <div><h3>I'm page 3</h3>
        <button onClick={this.props.search}>Search</button>
        <ul>
            {this.props.stories && this.props.stories.map(x=><li>{x.id}</li>)}
            </ul>
        </div>
    }
}

export default connect((state:State)=>state, actionCreators)(Page3);

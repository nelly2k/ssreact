import * as React from "react";
import {actionCreators, State} from "../state/story"
import { connect } from "react-redux";
import { ApplicationState } from "../state/store";

type Props = typeof actionCreators
    & State;
class Page3 extends React.Component<Props>{
    componentWillMount(){
        console.log("mounted");
        console.log(`props ${this.props.stories.length}`);
    }
    render(){
        return <div><h3>I'm page 3</h3>
        <button onClick={this.props.search}>Search</button>
        <ul>
            {this.props.stories && this.props.stories.map(x=><li key={x.id}>{x.title}</li>)}
            </ul>
        </div>
    }
}

export default connect((state:ApplicationState)=>state.story, actionCreators)(Page3);

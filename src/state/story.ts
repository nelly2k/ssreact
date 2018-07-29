export type Story={
    id:string;
}
export interface State{
    stories:Story[]
}

interface SearchAction{
    type:"SEARCH"
}


interface SearchActionSuccess{
    type:"SEARCH_SUCCESS",
    stories:Story[]
}

const defaultState:State = {
    stories:[]
}

type KnownActions = SearchAction | SearchActionSuccess;

export const actionCreators = {
    search: ():  AppThunkAction <KnownActions>=> (dispatch) => {
        dispatch({type: "SEARCH"});
        var story:Story = {
            id: "storyId"
        }; 
        dispatch({type: "SEARCH_SUCCESS", stories: [story]});
    }
}


export const reducer  = (state:State, action:any):State=>{
    const myAction = action as KnownActions;

    switch(myAction.type){
        case "SEARCH":
            return {stories:state.stories};
        case "SEARCH_SUCCESS":
            return {stories:action.stories};
        default:return defaultState;
    }

}
export interface AppThunkAction<TAction> {
    (dispatch: (action: TAction) => void): void;
}

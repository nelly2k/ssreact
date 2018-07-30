export type Story={
    id:string;
    title:string;
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

const get =async <T> (url:string): Promise<T> =>{
    const task = fetch(url);
    var response = await task;
    return response.json() as Promise<T>;
}


export const actionCreators = {
    search: ():  AppThunkAction <KnownActions>=> async (dispatch) => {
        dispatch({type: "SEARCH"});
        var stories = await get<Story[]>("https://localhost:9000/api/Stories");
        dispatch({type: "SEARCH_SUCCESS", stories: stories});
    }
}


export const reducer  = (state:State, action:any):State=>{
    const myAction = action as KnownActions;

    switch(myAction.type){
        case "SEARCH":
            return {stories:state.stories};
        case "SEARCH_SUCCESS":
            console.log("story is here");
            return {stories:action.stories};
        default:return defaultState;
    }

}
export interface AppThunkAction<TAction> {
    (dispatch: (action: TAction) => void): void;
}

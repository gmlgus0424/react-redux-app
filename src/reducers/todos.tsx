enum ActionType{
  ADD_TODO ="ADD_TODO",
  DELETE_TODO="DELETE_TODO"
}

interface Action{
  type:ActionType;
  text: string

}
const todos=(state=[],action:Action)=>{
  switch(action.type){
    //액션타입 주로 대문자 
    case "ADD_TODO":
      return [...state, action.text]

     
      
      return state;


    default:
      break;
  }
}

export default todos;

interface Action{
  type:string;
 

}



const counter=(state=0, action: {type:string})=>{
  switch(action.type){
    //액션타입 주로 대문자 
    case "INCREMENT":
      return state +1;
    case "DECREMENT":
      return state -1;
      
      return state;


    default:
      break;
  }
}

export default counter;
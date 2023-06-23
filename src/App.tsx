import React, { useState,useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { useSelector } from 'react-redux/es/exports';
import { RootState } from './reducers';
import { useDispatch } from 'redux';
import axios from 'axios';
import { UseSelector } from 'react-redux/es/hooks/useSelector';
import posts from './reducers/posts';
import { fetchPosts } from './actions/posts';

type Props={
  value: any;
  onIncrement :()=> void;
onDecrement:()=> void;

}

interface Post{
  userId: number;
  id: number;
  title: string;
}


function App({value, onIncrement,onDecrement}:Props) {
  const dispatch=useDispatch();
  const counter= useSelector((state:RootState)=>state.counter);
  const todos: string[]=useSelector((state:RootState)=>state.todos);
  const posts:Post[]= useSelector((state: RootState)=>state.posts) 
  const [TodoValue,setTodoValue]=useState("");

  useEffect(()=>{
    dispatch(fetchPosts());
  },[dispatch])


  const handleChange =(e:React.ChangeEvent<HTMLInputElement>)=>{
    setTodoValue(e.target.value);
  }
  const addTodo=(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    dispatch({type:"ADD_TODO", text : TodoValue})
    setTodoValue("");
  }

  return (
    <div className="App">
      Clicked: {counter}times
      <button onClick={onIncrement} >
        +
      </button>
      <button onClick={onDecrement}>
        -
      </button>
      <ul>
    {todos.map((todo,index)=><li key={index}>{todo}</li>)}
      </ul>
      <form onSubmit={addTodo}>
        <input type= "text" value={TodoValue} onChange={handleChange}/>
        <input type="submit"/>
      </form>

      <ul>
        {posts.map((post,index)=><li key={index}>{post.title}</li>)}
      </ul>
    </div>
  );
}

export default App;

import React from 'react'
import { useState } from 'react';

export const AddTodo = ({addTodo}) => {
const [title, setTitle] = useState("");
const [desc, setDesc] = useState("");

    const SubmitTodo = (e)=>{
        e.preventDefault();
        if(!title || !desc){
        alert("Title or Description cannot be blank");
       }else{
       addTodo(title,desc)
       setTitle("");
       setDesc("");
    }

    }

  return (
    <>
   <div className="container text-center my-3 ">
    <h3>Add a Todo</h3>
    <form  className="todo-form " onSubmit={SubmitTodo}>
    <div class="row mb-3">
      <label for="Title" class="col-sm-2 col-form-label">Todo Title :</label>
      <div class="col-sm-10">
        <input type="text"  value={title} onChange={(e)=>{setTitle(e.target.value)}} class="form-control" id="title"/>
      </div>
    </div>
    <div class="row mb-3">
      <label for="desc" class="col-sm-2 col-form-label">Todo Description :</label>
      <div class="col-sm-10">
        <input type="desc" value={desc} onChange={(e)=>{setDesc(e.target.value)}} class="form-control" id="desc"/>
      </div>
    </div>
    <button type="submit" class="btn btn-sm btn-success">Add Todo</button>
  </form>
  </div>
  </>
  )
}

import React, { useReducer, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const Todolist = () => {
   function reducer(state, action){
       switch (action.type) {
        case "add":
            return [...state,{id: Date.now(), name: action.payload, completed:false}];
        case "update":
            return state.map(todo => todo.id === action.payload ? { ...todo, completed: !todo.completed } :todo);
        case "delete":
            return state.filter(todo => todo.id !== action.payload);
        default:
            return state;    
      }
   }
    const initialState = [
        {id:1,name:"Jhon",completed:true},
        {id:2,name:"Dany",completed:true}
    ];

    const [todos, dispatch] = useReducer(reducer, initialState)
    const [input, setInput] = useState("");

    const addtodo = () => {
        if(input.trim() === "") return;
        dispatch({type: "add",payload: input});
        setInput("");
    };

    return (
        <div className="fst-italic fw-bold">
        <h4 className="mt-3">TodoList:</h4>
        <input type="text" value={input} onChange={(e) => setInput(e.target.value)} placeholder="Add the details.."
         style={{width:'10%',height:'30px',fontSize:'13px'}} className="p-1 fst-italic mt-3 ms-2 border border-2 border-secondary"/>
        <button onClick={addtodo} className="btn btn-dark ms-2 mb-1 btn-sm rounded-pill">To Add</button>
        {todos.length > 0 ? (
        <table border= "2" className="align-items-center text-center ms-2 mt-1" style={{backgroundColor:'lightcyan'}}>
            <thead>
                <tr className="border border-dark ">
                    <th className="border border-dark p-2" >ID</th>
                    <th className="border border-dark p-2">Name</th>
                    <th className="border border-dark p-2">Status</th>
                    <th className="border border-dark p-2">Action</th>
                </tr>
            </thead>
            <tbody>
                {todos.map((todo, index) => (
                        <tr key={todo.id} className="border border-dark" >
                            <td className="border border-dark">{index + 1}</td>
                            <td className="border border-dark">{todo.name}</td>
                            <td className="border border-dark" style={{color: todo.completed ? "blue" : "red"}}>{todo.completed ? "True" : "False"}</td>
                            <td>
                                <button className="btn btn-success btn-sm p-1 border border-dark m-1 fst-italic fw-bold"
                                 onClick={() => dispatch({type: 'update',payload: todo.id})}>Update</button>
                                <button className="btn btn-danger btn-sm p-1 border border-dark m-1 fst-italic fw-bold"
                                 onClick={() => dispatch({type: 'delete',payload: todo.id})}>Delete</button>
                            </td>
                        </tr>
                    ))}
            </tbody>
        </table>
         ):<p>no task</p>
        }
        </div>
    );

}; export default Todolist;
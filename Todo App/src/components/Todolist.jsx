import React from 'react'
import { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';
const Todo = () => {
    const [Todo, setTodo] = useState("")
    const [Todos, setTodos] = useState([])
    useEffect(() => {
        let todostr = localStorage.getItem("Todos")
        if (todostr) {
            let Todos = JSON.parse(localStorage.getItem("Todos"))
            setTodos(Todos)
        }
    }, [])

    const lc = (item) => {
        localStorage.setItem("Todos", JSON.stringify(Todos))
    }

    const handlechange = (e) => {
        setTodo(e.target.value)
        lc()
    }
    const handleadd = () => {
        setTodos([...Todos, { id: uuidv4(), Todo, iscompleted: false }])
        setTodo("")
        lc()
    }
    const handleedit = (e, id) => {
        let t = Todos.filter(item => {
            return item.id === id
        })
        setTodo(t[0].Todo)
        let newtodo = Todos.filter(item => {
            return item.id !== id
        })
        setTodos(newtodo)
        lc()
    }
    const handledelete = (e, id) => {
        let newtodo = Todos.filter(item => {
            return item.id !== id
        })
        setTodos(newtodo)
        lc()
    }
    const handlecheck = (e) => {
        let id = e.target.name
        let index = Todos.findIndex(item => {
            return item.id === id;
        })
        let newtodo = [...Todos]
        newtodo[index].iscompleted = !newtodo[index].iscompleted
        setTodos(newtodo)
        lc()


    }

    return (
        <>
            <div>
                <div className="container text-white w-[30vw] min-h-[70vh] m-auto bg-[#333333] rounded-[10px] p-[15px] border-2 border-purple-600 flex flex-col gap-y-[10px]">

                    <div className="add w-full bg-purple-600 p-[15px] rounded-[10px]">
                        <h1 className="font-bold font-sans text-[20px] text-center">Add Todos</h1>
                        <div className="flex gap-[10px] my-[5px]">
                            <input onChange={handlechange} value={Todo} className="font-sans text-black w-[23vw] p-[7px] bg-white rounded-[5px] border-none outline-none" type="text" placeholder="What you want todo?" />
                            <button onClick={handleadd} className="w-auto p-[7px] h-[40px] bg-white text-black rounded-[5px] ">Submit</button>
                        </div>
                    </div>

                    <div className="yourtodo w-full bg-purple-600 p-[15px] rounded-[10px]">
                        <div className="font-bold font-sans text-[20px]">Your Todos</div>
                        {Todos.length == 0 && <div>No todos to display</div>}
                        {Todos.map(items => {
                            return (
                                <div key={items.id} className="w-full my-[7px]">
                                    <div className="title flex gap-[10px] text-[17px] justify-between items-center">
                                        <input onChange={handlecheck} type="checkbox" checked={items.iscompleted} name={items.id} id="" />
                                        <h2 className={items.iscompleted ? "line-through" : ""}>{items.Todo}</h2>
                                        <div className="buttons">
                                            <button onClick={(e) => { handleedit(e, items.id) }} className="w-auto p-[7px] h-[40px] mx-[5px] bg-white text-black rounded-[5px]">Edit</button>
                                            <button onClick={(e) => { handledelete(e, items.id) }} className="w-auto p-[7px] h-[40px] mx-[5px] bg-white text-black rounded-[5px]">Delete</button>
                                        </div>
                                    </div>
                                    <div className="w-full h-[1px] bg-white my-[10px]"></div>
                                </div>
                            )
                        })}

                    </div>
                </div>
            </div>

        </>
    )
}

export default Todo

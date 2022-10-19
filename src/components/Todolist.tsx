import React from 'react';

type TasksType = {
    taskId: number
    title: string
    isDone: boolean
}

type DataType = {
    title: string
    tasks: Array<TasksType>
    students: Array<string>
}

const Todolist = (props: DataType) => {
    return (

        <div className="todolist">
            <h2 className="todolist__title">{props.title}</h2>
            <ul className="todolist__tasks">
                {props.tasks.map(el => {
                    return (
                        <li className="todolist__item" key={el.taskId}>
                            <input type="checkbox" checked={el.isDone}/>
                            <span>{el.title}</span>
                        </li>)
                })}
            </ul>
            <ol className="todolist__students">
                {props.students.map((el, index) => {
                    return (
                            <li key={index} className="todolist__item">{el}</li>
                    )
                })}
            </ol>
        </div>
    )
}

export default Todolist;
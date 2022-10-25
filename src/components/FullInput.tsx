import React, {ChangeEvent, useState} from 'react';

type FullInputPropsType = {
    messages: MessageType[]
    addMessage: (title: string) => void
}

type MessageType = {
    message: string
}

const FullInput = (props: FullInputPropsType) => {
    let [title, setTitle] = useState('')
    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }

    const onClickButtonHandler = () => {
        props.addMessage(title)
        setTitle('')
    }

    return (<div>
            <input value={title} onChange={onChangeInputHandler}/>
            <button onClick={onClickButtonHandler}>+</button>
        </div>
    )
}

export default FullInput;
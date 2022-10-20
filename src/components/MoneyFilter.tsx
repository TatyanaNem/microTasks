import React, {useState} from 'react';
import {Button} from './Button';

type FilterType = 'All' | 'Dollar' | 'Ruble'

type MoneyType = {
    banknots: string
    value: number
    number: string
}

type MoneyArrayType = {
    money: Array<MoneyType>
}

export const MoneyFilter = (props: MoneyArrayType) => {
    let currentMoney = props.money;
    let [filter, setFilter] = useState<FilterType>('All');

    if (filter === 'Dollar') {
        currentMoney = props.money.filter((filteredMoneyEl) =>
            filteredMoneyEl.banknots === 'Dollars');
    }
    if (filter === 'Ruble') {
        currentMoney = props.money.filter((filteredMoneyEl) =>
            filteredMoneyEl.banknots === 'RUBLS');
    }

    const onClickFilterHandler = (nameButton: FilterType) => {
        setFilter(nameButton)
    }

    return (
        <>
            <ul>
                {currentMoney.map((el, index) => {
                    return (
                        <li key={index}>
                            <span>{el.banknots}</span>
                            <span>{el.value}</span>
                            <span>{el.number}</span>
                        </li>
                    )
                })}
            </ul>
            <div style={{marginLeft: '35px'}}>
                <Button name={'All'} callBack={() => onClickFilterHandler('All')}/>
                <Button name={'Dollar'} callBack={() => onClickFilterHandler('Dollar')}/>
                <Button name={'Ruble'} callBack={() => onClickFilterHandler('Ruble')}/>
            </div>
        </>
    )
}
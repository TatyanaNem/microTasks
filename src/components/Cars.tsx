import React from 'react';

type CarType = {
    manufacturer: string
    model: string
}

type TopCarsType = {
    cars: Array<CarType>
}


const Cars = (props: TopCarsType) => {
    return (
        <table border={1}>
            {props.cars.map((el, index) => {
                return (
                    <tr>
                        <td>{index + 1}</td>
                        <td>{el.manufacturer}</td>
                        <td>{el.model}</td>
                    </tr>

                )
            })}
        </table>
    )
}

export default Cars;
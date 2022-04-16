import React from 'react'

const Employee = () => {
    const employees = [
        {
            id: 1,
            name: "Hoa",
            age: 20
        },
        {
            id: 2,
            name: "Khánh",
            age: 25
        },
        {
            id: 3,
            name: "Tú",
            age: 22
        },
    ]
  return (
    <div>
        {employees.map(item => <div>
            <li>{item.id}</li>
            <li>{item.name}</li>
            <li>{item.age}</li>
        </div>)}
    </div>
  )
}

export default Employee
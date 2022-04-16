import React, { useState } from "react";

const ManagerHs = () => {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleAdd = () => {
    setStudents([...students, { id: students.length, name, phone, email }]);
    setName("");
    setPhone("");
    setEmail("");
  };
  const handleDelete = (id) => {
    setStudents(students.filter((item) => item.id !== id));
  };
  const showInfo = (id) => {
    const student = students.filter((item) => item.id === id)[0];
    setName(student.name);
    setPhone(student.phone);
    setEmail(student.email);
  };
  const handleEdit = (id) => {
    setStudents(
      students.map((item) => {
        if (item.id === id) {
          return { ...item, name, phone, email };
        }
        return item;
      })
    );
  };
  return (
    <div className="min-h-screen bg-violet-400 flex justify-center items-center">
      <div className="w-[800px] border p-3">
        <div>
          <div>
            <h1>Student list</h1>
            <input
              type="text"
              className="mt-2"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <br />
            <input
              type="text"
              className="mt-2"
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <br />
            <input
              type="text"
              className="mt-2"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />
            <button
              className="px-5 bg-violet-600 mt-2 text-white"
              onClick={handleAdd}
            >
              Add
            </button>
          </div>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Phone</th>
                <th scope="col">Email</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {students.map((item) => (
                <tr onClick={() => showInfo(item.id)}>
                  <td scope="col">{item.name}</td>
                  <td scope="col">{item.phone}</td>
                  <td scope="col">{item.email}</td>
                  <td scope="col flex items-center">
                    <button
                      className="ml-1 px-2 bg-violet-600 text-white"
                      onClick={() => handleEdit(item.id)}
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="ml-1 px-2 bg-violet-600 text-white"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManagerHs;

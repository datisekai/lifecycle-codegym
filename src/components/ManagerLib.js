import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const ManagerLib = () => {
  const [libs, setLibs] = useState([]);

  const formik = useFormik({
    initialValues: {
      tieude: "",
      sl: "",
    },
    validationSchema: Yup.object({
      tieude: Yup.string().required("Required"),
      sl: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      setLibs([
        ...libs,
        { id: libs.length, tieude: values.tieude, sl: values.sl },
      ]);
    },
  });

  const handleDelete = (id) => {
    setLibs(libs.filter((item) => item.id !== id));
  };

  const handleEdit = (id) => {
    setLibs(
      libs.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            id,
            tieude: formik.values.tieude,
            sl: formik.values.sl,
          };
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
            <h1>Libary</h1>
            <input
              type="text"
              name="tieude"
              className="mt-2"
              placeholder="Tieeu de"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.tieude}
            />
            <br />
            <input
              type="text"
              className="mt-2"
              placeholder="So luong"
              name="sl"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.sl}
            />
            <br />

            <button
              className="px-5 bg-violet-600 mt-2 text-white"
              onClick={formik.handleSubmit}
            >
              Add
            </button>
          </div>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Tieu de</th>
                <th scope="col">So luong</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {libs.map((item) => (
                <tr>
                  <td scope="col">{item.tieude}</td>
                  <td scope="col">{item.sl}</td>
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

export default ManagerLib;

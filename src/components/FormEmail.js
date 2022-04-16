import React from 'react'
import { useFormik } from "formik";
import * as Yup from "yup";

const FormEmail = () => {
    const formik = useFormik({
        initialValues: {
          name: "",
          email: "",
          phone: "",
          message: "",
        },
        validationSchema: Yup.object({
          name: Yup.string().required("Required"),
          email: Yup.string()
            .required("Required")
            .matches(
              /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
              "Invalid email"
            ),
          phone: Yup.string().required("Required"),
          message: Yup.string().required("Required"),
        }),
        onSubmit:(values) => {
            alert('Add successfully')
        }
      });
      return (
        <div className="bg-violet-400 min-h-screen flex justify-center items-center">
          <div className="w-[500px] bg-violet-600 text-center">
            <input
              type="text"
              className=""
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Name"
              name="name"
            />
            <p>{formik.errors.name && formik.errors.name}</p>
            <br />
            <input
              type="text"
              className=""
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Email"
              value={formik.values.email}
              name="email"
            />
              <p>{formik.errors.email && formik.errors.email}</p>
            <br />
            <input
              type="text"
              className=""
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Phone"
              name="phone"
              value={formik.values.phone}
            />
              <p>{formik.errors.phone && formik.errors.phone}</p>
            <br />
            <textarea
              value={formik.values.message}
              className=""
              id=""
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              placeholder="Message"
              name="message"
            ></textarea>
              <p>{formik.errors.message && formik.errors.message}</p>
            <br />
            <input type="file" name="" id="" />
            <br />
            <button onClick={formik.handleSubmit} className=" px-5 bg-violet-800 text-white">Submit</button>
          </div>
        </div>
      );
}

export default FormEmail
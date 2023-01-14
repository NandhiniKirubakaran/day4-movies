import { useFormik } from "formik";
import * as yup from "yup";


const formValidationSchema = yup.object({
  email: yup.string().min(8).required()
  .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i),
  password: yup.string().min(4).required(),
});

export function BasicForm() {
 const {handleSubmit, values, handleChange, handleBlur, touched, errors } =  
  useFormik({
  initialValues: {
    email: "",
    password: "",
  },

validationSchema: formValidationSchema,
  onSubmit: (values) => {
    console.log("Form values: ", values);
  },

 });
  return (
    <form className="add-movie-form" onSubmit= {handleSubmit}>
      <input value={values.email} 
      type="email"  
      placeholder="Email" 
      name="email"
      onChange={handleChange}
      onBlur={handleBlur}
      />
      {touched.email && errors.email ? errors.email : null}
      <input value={values.password} 
      type="text" 
      placeholder="Password" 
      name="password"
      onChange={handleChange}
      onBlur={handleBlur}
      />
      {touched.password && errors.password ? errors.password : null}
 
      {/* <h2>Errors</h2>
      <pre>{JSON.stringify(formik.errors)}</pre>
      <h2>Touched</h2>
      <pre>{JSON.stringify(formik.touched)}</pre> */}

      <button type="submit">Submit</button>
    </form>
  );
}




// previous code----------------
export function BasicForm1() {
 const formik =  useFormik({
  initialValues: {
    email: "",
    password: "",
  },

validationSchema: formValidationSchema,

  onSubmit: (values) => {
    console.log("Form values: ", values);
  },

 });
  return (
    <form className="add-movie-form"
    onSubmit= {formik.handleSubmit}>
      <input value={formik.values.email} 
      type="email"  
      placeholder="Email" 
      name="email"
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      />
      {formik.touched.email && formik.errors.email ? formik.errors.email : null}
      <input value={formik.values.password} 
      type="text" 
      placeholder="Password" 
      name="password"
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      />
      {formik.touched.password && formik.errors.password ? formik.errors.password : null}
 
      {/* <h2>Errors</h2>
      <pre>{JSON.stringify(formik.errors)}</pre>
      <h2>Touched</h2>
      <pre>{JSON.stringify(formik.touched)}</pre> */}

      <button type="submit">Submit</button>
    </form>
  );
}
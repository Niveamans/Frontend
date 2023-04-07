import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useFirebase } from "../context/Firebase";
import { useState } from "react";

const Login = () => {
  const auth = getAuth();
  const firebase = useFirebase();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const getDoctor = (doctorEmail) => {
    const data = firebase.getDoctor(doctorEmail);
  };
  
  return (
    <div className='h-[100vh] w-[100vw] flex bg-blue-100 items-center justify-center'>
      <div className='p-8 bg-blue-300 flex-column rounded-lg'>
        <div className='text-center mb-3  text-[40px] font-dmserif text-white'>
          Login
        </div>

        <div className='p-5 font-poppins'>
          <Formik
            initialValues={{ doctorEmail: "", password: "" }}
            validationSchema={Yup.object({
              doctorEmail: Yup.string().required("Required"),
              password: Yup.string().required("Required"),
            })}
            onSubmit={(values) => {
              Promise.all([
                signInWithEmailAndPassword(
                  auth,
                  values.doctorEmail,
                  values.password
                )
                  .then((userCredential) => {
                    // Signed in
                    const user = userCredential.user;
                    console.log(userCredential);
                    firebase.setIsLoggedIn(true);
                  })
                  .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                  }),
                getDoctor(values.doctorEmail),
              ]);
            }}
          >
            <Form className='grid'>
              <div className='mb-6 p-3 bg-blue-500 text-blue-50 rounded-md flex justify-between'>
                <label className='px-5' htmlFor='doctorEmail'>
                  Doctor Email
                </label>
                <Field name='doctorEmail' type='text' className='text-black' />
                <ErrorMessage name='doctorEmail' />
              </div>

              <div className='mb-6 p-3 bg-blue-500 text-blue-50 rounded-md flex justify-between'>
                <label className='px-5' htmlFor='password'>
                  Password
                </label>
                <Field name='password' type='password' className='text-black' />
                <ErrorMessage name='password' />
              </div>

              <button
                className='mt-6 w-full h-full mx-auto bg-blue-500 text-blue-50 rounded-md'
                type='submit'
              >
                Submit
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Login;

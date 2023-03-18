import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useFirebase } from "../context/Firebase";
import { v4 as uuidv4 } from "uuid";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

const Signup = () => {
  const auth = getAuth();
  const firebase = useFirebase();

  const createUser = (data, docId) => {
    const Data = firebase.setDoctor(data, docId);
  };

  const signUpUser = (username, password) => {};
  return (
    <div className='h-[100vh] w-[100vw] flex bg-blue-100 items-center justify-center'>
      <div className='p-8 bg-blue-300 flex-column rounded-lg'>
        <div className='text-center mb-3  text-[40px] font-dmserif text-white'>
          Signup
        </div>

        <div className='p-5 font-poppins'>
          <Formik
            initialValues={{ doctorId: "", password: "" }}
            validationSchema={Yup.object({
              doctorEmail: Yup.string().required("Required"),
              doctorName: Yup.string().required("Required"),
              password: Yup.string().required("Required"),
            })}
            onSubmit={(values) => {
              const data = {
                doctorName: values.doctorName,
                doctorEmail: values.doctorEmail,
                doctorId: uuidv4(),
              };

              Promise.all([
                createUser(data, data.doctorId),

                createUserWithEmailAndPassword(
                  auth,
                  values.doctorEmail,
                  values.password
                )
                  .then((userCredential) => {
                    // Signed in
                    const user = userCredential.user;
                    console.log(userCredential);

                    // ...
                  })
                  .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    // ..
                  }),
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
                <label className='px-5' htmlFor='doctorName'>
                  Doctor Name
                </label>
                <Field name='doctorName' type='text' className='text-black' />
                <ErrorMessage name='doctorName' />
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

export default Signup;

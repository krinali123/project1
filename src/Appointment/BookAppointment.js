import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Inputbox from '../component/Inputbox/Inputbox';
import * as yup from 'yup';
import { Formik, Form, useFormik } from 'formik';


function BookAppointment(props) {
  const [update, setUpadate] = useState(false)

  const hisoty = useHistory();
  const handlsert = (values) => {

    let iData = {
      id: Math.floor(Math.random() * 1000),
      ...values
    }
    let localData = JSON.parse(localStorage.getItem("apt"));

    if (localData === null) {
      localStorage.setItem("apt", JSON.stringify([iData]))
    }
    else {
      localData.push(iData);
      localStorage.setItem("apt", JSON.stringify(localData))
    }
    // console.log(values);
    hisoty.push("/ListAppointment")
  };

  let bookAppointment = {
    name: yup.string().required("enter name"),
    email: yup.string().email().required("enter email"),
    phone: yup.string().required("enter phone"),
    date: yup.string().required("enter date"),
    department: yup.string().required("enter department"),
    message: yup.string().required("enter message")
  };
  const handleUpdateData = (values) => {
    let localData = JSON.parse(localStorage.getItem("apt"));
    let uData = localData.map((l) => {
      if (l.id === values.id) {
        return values
      }
      else {
        return l
      }
    })
    localStorage.setItem("apt", JSON.stringify(uData));

    setUpadate(false);
    formik.resetForm();
    hisoty.push("/listappointment")
  }

  let schema = yup.object().shape(bookAppointment);
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      date: '',
      department: '',
      message: ''
    },

    validationSchema: schema,
    onSubmit: values => {
      if (update) {
        handleUpdateData(values)
      } else {
        handlsert(values)
      }

    }
  })

  const { handleSubmit, handleBlur, errors, handleChange, touched, values } = formik;

  console.log(errors, values.name);

  useEffect(() => {
    let localData = JSON.parse(localStorage.getItem("apt"));
    // console.log(localData);
    if (localData !== null && props.location.state) {

      let fData = localData.filter((l) => l.id === props.location.state.id);
      formik.setValues(fData[0]);
      setUpadate(true);
    }


  }, []);


  return (
    <section id="appointment" className="appointment">
      <div className="container">
        <div className="section-title">
          <h2>Make an Appointment</h2>

        </div>
        <div className='row text-center'>
          <div className='col-6 pb-5'>
            <NavLink activeClassName={"btnbook"} to={"/bookappointment"}>Bookappointment</NavLink>
          </div>
          <div className='col-6'>
            <NavLink activeClassName={"btnbook"} to={"/listappointment"}>ListAppointment</NavLink>
          </div>

        </div>

        <Formik values={formik}>
          <Form onSubmit={handleSubmit} className="php-email-form">
            <div className="row">
              <div className="col-md-4 form-group">
                <Inputbox
                  type="text"
                  name="name"
                  className="form-control"
                  id="name"
                  value={values.name}
                  placeholder="Your Name"
                  error={Boolean(errors.name && touched.name)}
                  errorMessage={errors.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <div className="validate" />
              </div>
              <div className="col-md-4 form-group mt-3 mt-md-0">
                <Inputbox type="email" className="form-control"
                  placeholder="Your email" name="email" id="email"
                  value={values.email}
                  error={Boolean(errors.email && touched.email)}
                  errorMessage={errors.email}
                  onChange={handleChange}
                  onBlur={handleBlur} />

                <div className="validate" />
              </div>
              <div className="col-md-4 form-group mt-3 mt-md-0">
                <Inputbox type="tel" className="form-control"
                  name="phone" id="phone"
                  placeholder="Your Phone"
                  value={values.phone}
                  error={Boolean(errors.phone) && touched.phone}
                  errorMessage={errors.phone}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <div className="validate" />
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 form-group mt-3">
                <Inputbox type="datetime"
                  name="date"
                  className="form-control datepicker"
                  id="date"
                  placeholder="Appointment Date"
                  value={values.date}
                  error={Boolean(errors.date) && touched.date}
                  errorMessage={errors.date}
                  onChange={handleChange}
                  onBlur={handleBlur}

                />
                <div className="validate" />
              </div>
              <div className="col-md-4 form-group mt-3">
                <Inputbox type="select" name="department"
                  id="department" className="form-select"
                  value={values.department}
                  error={Boolean(errors.department && touched.department)}
                  errorMessage={errors.department}
                  onChange={handleChange}
                  onBlur={handleBlur}>

                  <option value="">Select Department</option>
                  <option value="Department 1">Department 1</option>
                  <option value="Department 2">Department 2</option>
                  <option value="Department 3">Department 3</option>
                </Inputbox>
                <div className="validate" />
              </div>
            </div>

            <div className="form-group mt-3">
              <Inputbox type="textarea"
                className="form-control"
                value={values.message}
                name="message" rows={5}
                placeholder="Message (Optional)"
                error={Boolean(errors.message) && touched.message}
                errorMessage={errors.message}
                onChange={handleChange}
                onBlur={handleBlur} />
              <div className="validate" />
            </div>
            <div className="mb-3">
              <div className="loading">Loading</div>
              <div className="error-message" />
              <div className="sent-message">Your appointment request has been sent successfully. Thank you!</div>
            </div>
            {
              update ? (
                <div className="text-center">
                  <button type='submit' className="btn">update an Appointment</button>
                </div>
              ) : (
                <div className="text-center">
                  <button type='submit' className="btn">Make an Appointment</button>
                </div>
              )
            }
          </Form>
        </Formik>
      </div>
    </section>

  );
}

export default BookAppointment;
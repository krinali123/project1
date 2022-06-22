import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

function ListAppointment(props) {
  const hisoty = useHistory();
  const [data, setData] = useState([])

  const loadData = () => {
    
    let localData = JSON.parse(localStorage.getItem(("apt")));
    if(localData !== null){
    setData(localData);
  }
  }
 const handledelete =(id)=>{
    let localData =JSON.parse(localStorage.getItem("apt"));
    let dData = localData.filter((l,i) =>l.id !==id)
    localStorage.setItem("apt",JSON.stringify(dData));
    loadData();
 }
 const handleadit =(id)=>{
  hisoty.push("/bookappointment", {"id":id});
    
 }

  useEffect(() => {
    loadData();
  }, [])

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
        <div>

        </div>
      </div>

      {
        data.map((d, i) => {
          return (
            <>
             
              <h1>{d.name}</h1>
              <h1>{d.email}</h1>
              <button onClick={() =>handledelete(d.id)}>delete</button>
              <button onClick={() =>handleadit(d.id)}>Edit</button>
              {/* <h1>{d.phone}</h1>
              <h1>{d.date}</h1>
              <h1>{d.department}</h1>
              <h1>{d.message}</h1> */}
            </>
          )
        })
      }
    </section>

  );
}

export default ListAppointment;
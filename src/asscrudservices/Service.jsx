










// 1
// import React,{useEffect, useState}  from "react";
// import { useLocation } from "react-router-dom";

// import { Link } from "react-router-dom";
// import axios from 'axios'

// function Users() {
//   const [users,setUsers] = useState([])
//   const location = useLocation();

// //get product from server 
//   useEffect(()=>{
    
//     axios.get('http://localhost:3001')
//     .then(result => 
//     setUsers(result.data))
//     .catch(err => console.log(err))
// }, [location]); // ✅ كل ما تغيّر المسار (navigate) بتجيب بيانات جديدة
// //[]is empty this means useEffect implememnts only once when loading page 


// const handleDelete  = (id) => {
//   axios.delete("http://localhost:3001/deleteUser/"+id)
//   .then(result => {console.log(result)
//     window.location.reload()
//   })
//     .catch(err => console.log(err))

// }
//                   // <td>{user.imageId}</td> 
//    return (
//     <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
//  <div className="w-50 bg-white rounded p-3">
//   <Link to="/create" className="btn btn-success">Add +</Link>
// <table className="table">
// <thead>
//   <tr>
//     <th>ImageId</th>
//     <th> ProductName</th>
//         <th>ProductPrice</th>
//     <th>ProductQuantity</th>
//     <th>Action</th>

//   </tr>
// </thead>
// <tbody>

//   {
//     users.map((user)=> {
//       return(
//       <tr key={user._id}>
// <td>
//   <img 
//     src={user.imageId} 
//     alt={user.productName} 
//     style={{ width: "80px", height: "80px", objectFit: "cover" }} 
//   />
// </td>

//         <td>{user.productName}</td>
//          <td>{user.productPrice}</td>
//         <td>{user.productQuantity}</td>
// <td>
//   <Link to={`/update/${user._id}`} className="btn btn-success">Update </Link>
// <button className="btn btn-danger"
// onClick={(e) => handleDelete(user._id)}>Delete</button>
// </td>
//       </tr>
//       )
//     })
//   }
// </tbody>

// </table>
//     </div>
//     </div>
//   )
// }

// export default Users;







import React,{useEffect, useState}  from "react";
import { useLocation } from "react-router-dom";

import { Link } from "react-router-dom";
import axios from 'axios'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";


function Services() {
  const [events,setEvents] = useState([])
  const location = useLocation();
  const [confirmDeleteId, setConfirmDeleteId] = useState(null);

  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  
//get product from server 
                // .post("http://localhost:3001/createEvent/", formData, {

//   useEffect(()=>{

//     axios.get(`${backendUrl}/`)
//         // axios.get("http://localhost:3001/")

//     .then(result => 
//     setEvents(result.data))
//     .catch(err => console.log(err))
// }, [location]); // ✅ كل ما تغيّر المسار (navigate) بتجيب بيانات جديدة


useEffect(() => {
  axios.get(`${backendUrl}/services`)
    // axios.get("http://localhost:3001/services")

    .then(result => {
      const data = result.data;
      if (Array.isArray(data)) {
        setEvents(data);
      } else if (data && typeof data === "object" && data.events) {
        // if backend wraps events inside an object
        setEvents(Array.isArray(data.events) ? data.events : []);
      } else {
        setEvents([]); // fallback
      }
    })
    .catch(err => {
      console.log(err);
      setEvents([]); // fallback
    });
}, [location]);



const confirmDeleteEvent = (id) => {
  axios.delete(`${backendUrl}/services/` + id)
    // axios.delete("http://localhost:3001/services/" + id)

    .then(() => {
      setEvents(prev => prev.filter(e => e._id !== id)); // remove without reload
            toast.success("Message deleted successfully!");

      setConfirmDeleteId(null); // close modal
    })
    // .catch(err => console.log(err));
        .catch(() => toast.error("Delete failed!"));

};

                  // <td>{user.imageId}</td>
  //                <div className="d-flex min-vh-100-custom bg-primary justify-content-center align-items-center">
  // <div className="w-50 bg-white rounded p-3"> 
 
 return (
<div>
  {/* // <div className="users">
  // <div className="">
        // <div className="d-flex min-vh-100-custom bg-primary justify-content-center align-items-center" */}

     


 
 <div className="events-container">
  
      <div className="events-wrapper">
                              <h2 className="contacts-table-create-event-title"> Event</h2>

        <Link to="/createServices" className="btn-add-event">
          Add +
        </Link>

        <div className="table-responsive-events">
          <table className="table-events">
            <thead className="thead-events">
              <tr className="tr-events">
                <th className="th-events">Main Image</th>
          
                <th className="th-events">Title</th>
                <th className="th-events">Description</th>
                <th className="th-events">Action</th>
              </tr>
            </thead>
            <tbody className="tbody-events">
              {events.map((event) => (
                <tr className="tr-events" key={event._id}>
                  <td className="td-events">
                    <img
                      // src={`http://localhost:3001${event.mainImage}`}
                                            // src={`${backendUrl}${event.mainImage}`}
                                            src={event.mainImage}

                      alt={event.title}
                      className="main-image-event"
                    />
                  </td>

       

              
                  <td className="td-events">{event.title}</td>
                  <td className="td-events">{event.description}</td>

                  <td className="td-events actions-events">
                    <Link to={`/updateservices/${event._id}`} className="btn-update-event">
                      Update
                    </Link>
                    <button
                      className="btn-delete-event"
                      // onClick={() => handleDelete(event._id)}
                        onClick={() => setConfirmDeleteId(event._id)}
                    >
                      Delete
                    </button>
        {confirmDeleteId && (
  <div className="confirm-overlay">
    <div className="confirm-box">
      <p>Are you sure you want to delete this event?</p>

      <button
        onClick={() => confirmDeleteEvent(confirmDeleteId)}
        className="btn-yes"
      >
      Delete
      </button>

      <button
        onClick={() => setConfirmDeleteId(null)}
        className="btn-cancel"
      >
        Cancel
      </button>
    </div>
  </div>
)}


                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

   <ToastContainer
        position="top-center"
        // autoClose={20}
        hideProgressBar={false}
        // closeOnClick
        // pauseOnHover
        // theme="light"
      />
      </div>
    </div>
</div>
  )
}

export default Services;




// <div className="d-flex  justify-content-center align-items-center"
//             style={{ width: "100vw", minHeight: "100vh",marginTop:"110px", backgroundColor: "rgb(205,230,155)" }}

//       >
//    <div className="w-50 bg-white rounded p-3"> 
//   <Link to="/create" className="btn btn-success">Add +</Link>
// <table className="table">
// <thead>
//   <tr>
//         <th>mainImage</th>
//     <th>images</th>
//     <th> date</th>
//         <th>place</th>
//     <th>title </th>
//         <th> text</th>

//     <th>Action</th>

//   </tr>
// </thead>
// <tbody>

//   {
//     events.map((event)=> {
//       return(
//       <tr key={event._id}>

//         <td>
//   <img 
//     // src={event.mainImage} 
//         src={`http://localhost:3001${event.mainImage}`}

//     alt={event.productName} 
//     style={{ width: "80px", height: "80px", objectFit: "cover" }} 
//   />
// </td>





// <td>
//   {event.images && event.images.length > 0 ? (
//     event.images.map((img, idx) => (
//       <div key={idx} style={{ display: "flex", marginRight: "10px", textAlign: "center" }}>
//         <img
//           // src={img}
//            src={`http://localhost:3001${img}`}
//           alt={`img-${idx}`}
//           style={{ width: "60px", height: "60px", objectFit: "cover", display: "block", marginBottom: "5px" }}
//         />
//      <td>       <button
//           className="btn btn-sm btn-danger"
//           onClick={() => handleDeleteImage(event._id, idx)}
//         >
//           Delete
//         </button></td>
        
//       </div>
//     ))
//   ) : (
//     <span>No images</span>
//   )}
// </td>


// {/* <td>
//   <Link to={`/update/${event._id}`} className="btn btn-success">
//     Update
//   </Link>

//   <button
//     className="btn btn-danger"
//     onClick={() => handleDelete(event._id)}
//   >
//     Delete
//   </button>
// </td> */}
// {/* <td>
//   <Link to={`/update/${event._id}`} className="btn btn-success">Update</Link>
//   <button className="btn btn-danger" onClick={() => handleDelete(event._id)}>Delete</button>
// </td> */}




//         <td>{event.date}</td>
//          <td>{event.place}</td>
//         <td>{event.title }</td>
//                 <td>{event. text}</td>

// <td>
//   <Link to={`/update/${event._id}`} className="btn btn-success">Update </Link>
// <button className="btn btn-danger"
// onClick={(e) => handleDelete(event._id)}>Delete</button>
// </td>
//       </tr>
//       )
//     })
//   }
// </tbody>

// </table>
//     </div>
//     </div>




// 2

// import React,{useEffect, useState,}  from "react";
// import { useLocation } from "react-router-dom";

// import { Link } from "react-router-dom";
// import axios from 'axios'

// function Users() {
//   const [users,setUsers] = useState([])
//   const location = useLocation();

// //get product from server 
//   useEffect(()=>{
    
//     axios.get('http://localhost:3001')
//     .then(result => 
//     setUsers(result.data))
//     .catch(err => console.log(err))
// }, [location]); // ✅ كل ما تغيّر المسار (navigate) بتجيب بيانات جديدة
// //[]is empty this means useEffect implememnts only once when loading page 


// const handleDelete  = (id) => {
//   axios.delete("http://localhost:3001/deleteUser/"+id)
//   .then(result => {console.log(result)
//     window.location.reload()
//   })
//     .catch(err => console.log(err))

// }
//                   // <td>{user.imageId}</td> 
//    return (
//     <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
//  <div className="w-50 bg-white rounded p-3">
//   <Link to="/create" className="btn btn-success">Add +</Link>
// <table className="table">
// <thead>
//   <tr>
//     <th>imageId</th>
//     <th> date</th>
//         <th>place</th>
//     <th>title </th>
//         <th> text</th>

//     <th>Action</th>

//   </tr>
// </thead>
// <tbody>

//   {
//     users.map((user)=> {
//       return(
//       <tr key={user._id}>
// <td>
//   <img 
//     src={user.imageId} 
//     alt={user.productName} 
//     style={{ width: "80px", height: "80px", objectFit: "cover" }} 
//   />
// </td>

//         <td>{user.date}</td>
//          <td>{user.place}</td>
//         <td>{user.title }</td>
//                 <td>{user. text}</td>

// <td>
//   <Link to={`/update/${user._id}`} className="btn btn-success">Update </Link>
// <button className="btn btn-danger"
// onClick={(e) => handleDelete(user._id)}>Delete</button>
// </td>
//       </tr>
//       )
//     })
//   }
// </tbody>

// </table>
//     </div>
//     </div>
//   )
// }

// export default Users;








// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useLocation, Link } from "react-router-dom";

// function Users() {
//   const [users, setUsers] = useState([]);
//   const location = useLocation();

//   // جلب المنتجات
//   useEffect(() => {
//     axios
//       .get("http://localhost:3001")
//       .then((result) => setUsers(result.data))
//       .catch((err) => console.log(err));
//   }, []);

//   // إذا رجعنا من CreateUser ومعنا newProduct ضيفه مباشرة
//   useEffect(() => {
//     if (location.state?.newProduct) {
//       setUsers((prev) => [...prev, location.state.newProduct]);
//     }
//   }, [location.state]);

//   return (
//     <div className="container mt-3">
//       <h2>Products</h2>
//       <Link to="/create" className="btn btn-primary mb-3">
//         Add New +
//       </Link>

//       <table className="table">
//         <thead>
//           <tr>
//             <th>Image</th>
//             <th>ProductName</th>
//             <th>ProductPrice</th>
//             <th>ProductQuantity</th>
//           </tr>
//         </thead>
//         <tbody>
//           {users.map((user) => (
//             <tr key={user._id}>
//               <td>
//                 <img
//                   src={user.imageId}
//                   alt={user.productName}
//                   style={{ width: "60px", height: "60px", objectFit: "cover" }}
//                 />
//               </td>
//               <td>{user.productName}</td>
//               <td>{user.productPrice}</td>
//               <td>{user.productQuantity}</td>
//                <td>
//    <Link to={`/update/${user._id}`} className="btn btn-success">Update </Link>
//  {/* <button className="btn btn-danger"
//  onClick={(e) => handleDelete(user._id)}>Delete</button> */}
//  </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default Users;














// 3
// import React,{useEffect, useState}  from "react";
// import { Link } from "react-router-dom";
// import axios from 'axios'

// function Users() {
//   const [users,setUsers] = useState([])

//   useEffect(()=>{
//     axios.get('http://localhost:3001')
//     .then(result => 
//     setUsers(result.data))
//     .catch(err => console.log(err))
// },[])


// const handleDelete  = (id) => {
//   axios.delete("http://localhost:3001/deleteUser/"+id)
//   .then(result => {console.log(result)
//     window.location.reload()})
//     .catch(err => console.log(err))

// }

//   return (
//     <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
//  <div className="w-50 bg-white rounded p-3">
//   <Link to="/create" className="btn btn-success">Add +</Link>
// <table className="table">
// <thead>
//   <tr>
//     <th> Name</th>
//         <th>Email</th>
//     <th>Age</th>
//     <th>Action</th>

//   </tr>
// </thead>
// <tbody>
//   {
//     users.map((user)=> {
//       return(
//       <tr>
//         <td>{user.name}</td>
//          <td>{user.email}</td>
//         <td>{user.age}</td>
// <td>
//   <Link to={`/update/${user._id}`} className="btn btn-success">Update </Link>
// <button className="btn btn-danger"
// onClick={(e) => handleDelete(user._id)}>Delete</button>
// </td>
//       </tr>
//       )
//     })
//   }
// </tbody>

// </table>
//     </div>
//     </div>
//   )
// }


//  export default Users;



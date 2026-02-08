




import { useState, useEffect } from "react";
// //fetch or axios to send data to the backend
import axios from "axios";

// import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

// import { IoMdTime } from "react-icons/io";
// import { FiMapPin } from "react-icons/fi";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import Section3  from "../association/event";



// function Section3({ images = [], mainImage, date, place, title, text }) {
//   const [expanded, setExpanded] = useState(false);
//   const navigate = useNavigate();
//   //  const handleMoreClick = () => {
//   //     navigate("/eventmoresch", { state: { event: { imageId, date, place, title, text, } } });
//   //   };
//   const handleMoreClick = () => {
//     const eventData = { images, mainImage, date, place, title, text };

//     // save in localStorage
//     // localStorage.setItem("selectedEvent", JSON.stringify(eventData));

//     navigate("/eventmoresch", { state: { event: eventData } });
//   };

//   return (
//     <section>

//       <div className="listitems-event">

//         {/* <img
//           className="img2-event-sch"
//           src={imageId}
//           alt={title}
//         /> */}
//         {/* <img className="img2-event-sch" src={imageId[0]} alt={title} /> */}
//         {/* <img className="img2-event-sch" src={mainImage} alt={title} /> */}
//         {/* <img className="img2-event-sch" src={`http://localhost:3001${mainImage}`} alt="Main" /> */}
// <img className="img2-event-sch" src={mainImage} alt="Main" />

//         <div className="place-title-sec3-event">
//                  <div className="date-sec3-event"><span className='icontime'><IoMdTime  /></span>{date}</div>
       
//           <div className="place-sec3-event"> {place} <FiMapPin className='' /></div>
//           </div>
//         <div className="text-title-sec3-event">
//           <div className="title-sec3-event">{title}</div>

//           <div
//             className="text-sec3-event"
//             style={{
//               display: "-webkit-box",
//               WebkitLineClamp: expanded ? "unset" : 2, // 👈 show 2 lines first
//               WebkitBoxOrient: "vertical",
//               overflow: "hidden",
//               textAlign: "right", 
//     direction: "rtl",
//             }}
//           >

//             {text}
//             {/* <p> {text}</p> */}
//           </div>
//         </div>

//         <div
//           // onClick={() => setExpanded(!expanded)}
//           onClick={handleMoreClick}

//           style={{
//             // marginTop: "4px",
//             width: "90px",
//             marginLeft: "20px",
//             color: "blue",
//             cursor: "pointer",
//             background: "none",
//             border: "none",
//           }}
//         >
//           {/* {expanded ? " " : "  عرض المزيد "} */}
//           عرض المزيد
//         </div>
//       </div>
//     </section>
//   );
// }



export default function Admin() {

  //   const navigate = useNavigate();
  const [inform, setInform] = useState([]);
  const [contacts, setContacts] = useState([]);
const [confirmDelete, setConfirmDelete] = useState(null);

 const backendUrl = import.meta.env.VITE_BACKEND_URL;

  

  useEffect(() => {
        // Fetch data from your backend API 
        // axios.get(`${backendUrl}/`)
        axios.get('http://localhost:3001/events')

            .then((res) => {
                console.log('see product :', res.data);
                 const data = res.data;
      setInform(Array.isArray(data) ? data : []);

                // setInform(res.data);
            })
            .catch((err) => {
                console.error("Error fetching data:", err);
                      setInform([]);

            });
    // }, [backendUrl]);
    }, []);

  useEffect(() => {
            axios.get('http://localhost:3001/contactschool')

    // axios.get(`${backendUrl}/contactschool`)
      .then(res => {
        setContacts(res.data);
      })
      .catch(err => console.log(err));
  }, []);



// const deleteMessage = (id) => {
//   // if (!window.confirm("Are you sure you want to delete this message?")) return;

//   axios
//     .delete(`${backendUrl}/deleteMessage/${id}`)
//     .then(() => {
//       setContacts((prev) => prev.filter((msg) => msg._id !== id));
//             setConfirmDelete(null); // close popup
//     })
//     .catch((err) => console.log(err));
// };

// 2
// const deleteMessage = (id) => {
//   axios
//     .delete(`${backendUrl}/deleteMessage/${id}`)
//     .then(() => {
//       setContacts(prev => prev.filter(msg => msg._id !== id));

//       toast.success("Message deleted successfully!");
//     })
//     .catch(() => {
//       toast.error("Failed to delete message!");
//     });
// };



const askDelete = (id) => setConfirmDelete(id);

const confirmDeleteMessage = () => {
  axios
    // .delete(`${backendUrl}/deleteMessage/${confirmDelete}`)
        .delete('http://localhost:3001/deleteMessage/${confirmDelete}')

    .then(() => {
      setContacts(prev => prev.filter(msg => msg._id !== confirmDelete));
      toast.success("Message deleted successfully!");
      setConfirmDelete(null);
    })
    .catch(() => toast.error("Delete failed!"));
};

    


  return (


    <div className="page">

      <div className="page-admins">

        <div>
          <Link to="/event">
            <button className="btn-event">Add Event</button>
          </Link>
        </div>
        <div className="page-admin1">

          <div className="page-admin2">



            <div className='sect3-admin'>
              {/* <div className="title-text-sec3-events">
    <div className='title-sec3-events '>  أنشطتنا</div>
       <div className="text-sec3-events"> بعض النشاطات التي تقوم بها مدرسة البدر 
</div></div> */}

              <div className="sect3admin">

                {/* {inform.map((listsch) => ( */}
    {inform.map((listsch, index) => (
            <Section3 key={listsch._id || index} 
                    // imageId={item.imageId}
                    // title={item.title}
                    // name={item.title}
                    {...listsch}
                  />
                ))}


              </div>


              {/* </div> */}
            </div>


            <div className="contacts-table-messages-wrapper">
              <table className="contacts-table-messages">
                <thead className="thead-messages">
                  <tr className="tr-messages">
                    <th className="thead-messages-th">#</th>
                    <th className="thead-messages-th">Full Name</th>
                    <th  className="thead-messages-th">Email </th>
                    <th className="thead-messages-th">Title</th>
                    <th >Notes</th>
                    <th className="thead-messages-th">Actions</th>

                  </tr>
                </thead>
                <tbody>
                  {contacts.map((c, idx) => (
                    <tr key={idx} className="tr-messages">
                      <td>{idx + 1}</td>
                      <td>{c.fullname}</td>
                      <td>{c.phonenumber}</td>
                      <td>{c.titlename}</td>
                      <td>{c.additionalnotes}</td>
                        <td>
        {/* <button
          onClick={() => deleteMessage(c._id)}
          className="btn-delete-message"
//           style={{
// border:"none"    
//         }}
        > */}
                <button onClick={() => askDelete(c._id)}>

          <MdOutlineDeleteOutline  style={{
                  color:"red"
            }}
            />

        </button>

 

{confirmDelete && (
  <div className="confirm-overlay">
    <div className="confirm-box">
      <p>Are you sure you want to delete this message?</p>

      <button onClick={confirmDeleteMessage}
        style={{
                  color:"red"
            }}
      > Delete</button>
      <button onClick={() => setConfirmDelete(null)}>Cancel</button>
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
      />
          </div>
        
        </div>
      </div>

    </div>

  )
}



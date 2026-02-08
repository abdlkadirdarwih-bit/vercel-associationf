







import { useState, useEffect } from "react";
// //fetch or axios to send data to the backend
import axios from "axios";

// import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";

// import { IoMdTime } from "react-icons/io";
// import { FiMapPin } from "react-icons/fi";

import "react-toastify/dist/ReactToastify.css";
import Section3 from "../association/event";
// import Servicesass from "../association/servicesass";
import Event from "../association/event";


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



export default function Eventview() {

  //   const navigate = useNavigate();
  const [inform, setInform] = useState([]);

  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    // Fetch data from your backend API 
    axios.get(`${backendUrl}/events`)
    // axios.get('http://localhost:3001/events')

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


  return (


    <div className="page">
      {/* <Servicesass /> */}
      <div className="eventview">
      </div>

      <div className="page-admins">





        {/* <div className='sect3-admin'> */}
          {/* <div className="title-text-sec3-events">
    <div className='title-sec3-events '>  أنشطتنا</div>
       <div className="text-sec3-events"> بعض النشاطات التي تقوم بها مدرسة البدر 
</div></div> */}
          <div className="btn-events">
            <Link to="/event">
              <button className="btn-event">Add Event</button>
            </Link>
          </div>

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
        {/* <Event/> */}



      {/* </div> */}

    </div>


  )
}



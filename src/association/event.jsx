




import { useState, useEffect } from "react";
// //fetch or axios to send data to the backend
import axios from "axios";
import {FiMapPin,} from "react-icons/fi";
import { IoMdTime } from "react-icons/io";

import { useNavigate } from 'react-router-dom';

const backendUrl = import.meta.env.VITE_BACKEND_URL;

function Section3({ images = [], mainImage, date, place, title, text }) {
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();
  //  const handleMoreClick = () => {
  //     navigate("/eventmoresch", { state: { event: { imageId, date, place, title, text, } } });
  //   };
  const handleMoreClick = () => {
    const eventData = { images, mainImage, date, place, title, text };

    // save in localStorage
    // localStorage.setItem("selectedEvent", JSON.stringify(eventData));
    navigate("/eventmoreass", { state: { event: eventData }});
  };

  return (
    <section>

      <div className="listitems-event">
        {/* <img className="img2-event-sch" src={mainImage} alt={title} /> */}
        {/* <img  className="img2-event-sch" src={`http://localhost:3001${mainImage}`} alt="Main" /> */}
        {/* <img  className="img2-event-sch" src={`${backendUrl}/${mainImage}`} alt="Main" /> */}
        <img className="img2-event-sch" src={mainImage} alt="Main" />

        <div className="place-title-sec3-event">
          <div className="date-sec3-event"><span className='icontime'><IoMdTime /></span>{date}</div>
          <div className="place-sec3-event"> {place} <FiMapPin className='' /></div></div>
        <div className="text-title-sec3-event">
          <div className="title-sec3-event">{title}</div>

          <div
            className="text-sec3-event"
            style={{
              display: "-webkit-box",
              WebkitLineClamp: expanded ? "unset" : 2, // 👈 show 2 lines first
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              textAlign: "right", // 👈 Align button text to right
              direction: "rtl", // 👈 RTL for button text
            }}
          >

            {text}
            {/* <p> {text}</p> */}
          </div>
        </div>

        <div
          // onClick={() => setExpanded(!expanded)}
          onClick={handleMoreClick}

          style={{
            // marginTop: "4px",
            width: "90px",
            marginLeft: "20px",
            color: "blue",
            cursor: "pointer",
            background: "none",
            border: "none",

          }}
        >
          {/* {expanded ? " " : "  عرض المزيد "} */}
          عرض المزيد
        </div>
      </div>
    </section>
  );
}

export default Section3;





export  function Event() {

  //   const navigate = useNavigate();
  const [inform, setInform] = useState([]);


  useEffect(() => {
    // Fetch data from your backend API
        // axios.get(`${backendUrl}/`)
                axios.get('http://localhost:3001/events')

      .then((res) => {
        console.log('see product :',res.data);  
        setInform(res.data);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
      });
  }, []);


//   useEffect(() => {
//     axios
//       .get(`${backendUrl}/`) // make sure backend route is /events
//       .then((res) => {
//         // Ensure we always set an array
//         const data = res.data;
//         if (Array.isArray(data)) {
//           setInform(data);
//         } else if (data && typeof data === "object" && data.events) {
//           setInform(Array.isArray(data.events) ? data.events : []);
//         } else {
//           setInform([]);
//         }
//       })
//       .catch((err) => {
//         console.error("Error fetching events:", err);
//         setInform([]); // fallback to empty array
//       });
//   }, [backendUrl]);

  
  return (

//   useEffect(() => {
  //   axios.get(`${backendUrl}/`)
  //     .then((res) => {
  //       const data = res.data;
  //       setInform(Array.isArray(data) ? data : []);
  //     })
  //     .catch((err) => {
  //       console.error("Error fetching events:", err);
  //       setInform([]);
  //     });
  // }, [backendUrl]);

    <div className="page">


      <div className='sect3-events'>
        <div className="title-text-sec3-events">
          <div className='title-sec3-events '>  أنشطتنا</div>
          {/* <div className="text-sec3-events"> <p>نحن هنا لتلبية احتياجاتك ! إذا كنت بحاجة إلى اي منتج غير متوفر حاليًاعلى موقعنا</p> */}
          <div className="text-sec3-events"> بعض النشاطات التي تقوم بها جمعية معاً من أجل الخير

          </div></div>

        <div className="sect3event">

          {/* {inform.map((listsch) => (
            <Section3
              // imageId={item.imageId}
              // title={item.title}
              // name={item.title}
            />
          ))} */}
          {inform.map((listsch, index) => (
            <Section3 key={listsch._id || index}
             {...listsch}
              />
          ))}
        </div>

        {/* </div> */}
      </div>
    </div>

  )
}



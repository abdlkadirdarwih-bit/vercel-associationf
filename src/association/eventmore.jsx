
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
//  const backendUrl = import.meta.env.VITE_BACKEND_URL;

function Section1({images = [], title, text }) {
  return (

  <section >

            <div className='eventmore'>
  <div className='title-sec1-eventmore '>{title}</div>

   <div className='images-eventmore-sec1-sch'
   >
    {/* {images.length > 0 &&
    // images.map((img, idx) => (
    //         <img
    //           key={idx}
    //           className="img1-eventmoresch-sec1-sch"
    //           src={img}
    //           alt={`${title} ${idx + 1}`}
    //         />
    images.map((img, idx) => (
  <img key={idx}
  className="img1-eventmoresch-sec1-sch"
  //  src={`http://localhost:3001${img}`}
     src={`${backendUrl}${img}`}

    alt={`Img ${idx}`}  />
          ))} */}


            {images.length > 0 && (
            images.map((img, idx) => (
              <img
                key={idx}
                className="img1-eventmoresch-sec1-sch"
                // src={img || myImage} // Base64 or fallback
                    src={img} // Base64 or fallback
                alt={`Image ${idx + 1}`}
                style={{ width: "150px", height: "150px", objectFit: "cover", borderRadius: "8px" }}
              />
            ))
          ) 
       
          }

         
        
        </div>
        
        <div className="text-sec1-eventmore" >{text} </div>

            </div>

    </section>
  );
}

export default function Eventmoreass() {
// بس مبدئيًا: useLocation().state مو مضمون يظل بعد كل Refresh، لأن المتصفح أحيانًا يمسحه.
// لو بدك تضمن 100% إنه يظل:

// يا تخزّنه بـ localStorage عند التنقل.

  const location = useLocation();
  // const event = location.state?.event; // 👈 received from navigate
  const [event, setEvent] = useState(location.state?.event || null);

 
  
  
  if (!event) {
    return <p>لا يوجد بيانات للفعالية.</p>;
  }


//  const navigate = useNavigate();
//   const [inform, setInform] = useState([]);
  
//   useEffect(() => {
//     // Fetch data from your backend API
// axios.get("http://localhost:3001/events")
//       .then((res) => {
//         console.log('see product :',res.data);  
//         setInform(res.data);
//       })
//       .catch((err) => {
//         console.error("Error fetching data:", err);
//       });
//   }, []);
  return (
    
    <div className="page">

    <div className="sect1eventmore">
        <Section1
   title={event.title}
          text={event.text}
       
  images={event.images}

  // image1='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu5DoqF7PBa-MgldlEW-VUYgs9-rE86Za3SQ&s'

   
     />
     
      </div>

    </div>

  )



































  
 // useEffect(() => {
  //   if (!event) {
  //     const stored = localStorage.getItem("selectedEvent");
  //     if (stored) {
  //       setEvent(JSON.parse(stored));
  //     }
  //   }
  //   {console.log("event data:", event)}

  // }, [event]);

  // useEffect(() => {
  //   // If page refreshed, try fallback from localStorage
  //   if (location.state?.event) {
  //     setEvent(location.state.event);
  //     localStorage.setItem("currentEvent", JSON.stringify(location.state.event));
  //   } else {
  //     const stored = localStorage.getItem("currentEvent");
  //     if (stored) setEvent(JSON.parse(stored));
  //   }
  // }, [location.state]);
  
  




  
// ---------------------------------------------------------------
  //  const { id } = useParams();        // جلب :id من الرابط
  // const [event, setEvent] = useState(null);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   axios.get(`http://localhost:3001/events/${id}`)
  //     .then(res => {
  //       setEvent(res.data);
  //       setLoading(false);
  //     })
  //     .catch(err => {
  //       console.error("❌ Error fetching event:", err);
  //       setLoading(false);
  //     });
  // }, [id]);

  // if (loading) return <p>Loading...</p>;
  // if (!event) return <p>Event not found</p>;

  // return (
  //   <div className="page">
  //     <section>
  //               <h1>صفحة تفاصيل الحدث</h1>

  //       <h2 className="title-sec1-eventmore">{event.title}</h2>

  //       <div className="images-eventmore-sec1-sch">
  //         <img
  //           className="img1-eventmoresch-sec1-sch"
  //           src={event.imageId}
  //           alt={event.title}
  //         />
  //       </div>

  //       <div className="text-sec1-eventmore" style={{ whiteSpace: "pre-line" }}>
  //         {event.text}
  //       </div>
  //     </section>
  //   </div>
  // );
}



//  const navigate = useNavigate();
//   const [inform, setInform] = useState([]);
  
//   useEffect(() => {
//     // Fetch data from your backend API
// axios.get("http://localhost:3001/events")
//       .then((res) => {
//         console.log('see product :',res.data);  
//         setInform(res.data);
//       })
//       .catch((err) => {
//         console.error("Error fetching data:", err);
//       });
//   }, []);
//   return (



//     </div>

//   )
// }
// /https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHJ7W0XflpiXsxduFZKt11bwALQ7LfN_YDGA&s

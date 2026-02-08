


import { useState, useEffect } from "react";
import axios from "axios";

const backendUrl = import.meta.env.VITE_BACKEND_URL;


// import './Services.css';
// // import { servicesData } from './servicesData';

// // ServiceCard.jsx
// const ServiceCard = ({ title, description, icon, isGradient }) => {
//   return (
//     <div className={`service-card ${isGradient ? 'gradient-bg' : 'white-bg'}`}>
//       <div className="service-icon">{icon}</div>
//       <h2 className="service-title">{title}</h2>
//       <p className="service-description">{description}</p>
//     </div>
//   );
// };





// const Servicesass = () => {
//     const [servicesdata, setServicesdata] = useState([]);
  
  
//     useEffect(() => {
//       // Fetch data from your backend API
//           // axios.get(`${backendUrl}/`)
//                   axios.get('http://localhost:3001/services')
  
//         .then((res) => {
//           console.log('see product :',res.data);  
//           setServicesdata(res.data);
//         })
//         .catch((err) => {
//           console.error("Error fetching data:", err);
//         });
//     }, []);

//   return (
//     <div className="page-wrapper">
//       {/* Top Border Curve to close the first page */}
//       <div className="top-curve-divider"></div>

//       <div className="page-header">
//         <h2 className="main-blue-title">الخدمات المتقدمة</h2>
//         <p className="main-black-desc">في جمعية معاً من أجل الخير ، نقدم مجموعة من الخدمات المتخصصة لتلبية احتياجاتك التكنولوجية</p>
//       </div>

//       <div className="flex-container">
//         {servicesdata.map(item => (
//           <ServiceCard 
//             key={item.id}
//             title={item.title}
//             description={item.description}
//             icon={item.icon}
//             isGradient={item.grad}
//           />
//         ))}
//       </div>
      
//     </div>
//   );
// };

// export default Servicesass;




const ServiceCard = ({ mainImage, title, description }) => {
  return (
    <div className="service-card-v2">
      {/* <span className="card-icon">{mainImage}</span> */}
              <img className="img-ass" src={mainImage} alt="Main" />
      <h2 className="card-h2">{title}</h2>
      <p className="card-p">{description}</p>
    </div>
  );
};

const Servicesass = () => {
        const [servicesdata, setServicesdata] = useState([]);
  useEffect(() => {

    // Fetch data from your backend API 
    axios.get(`${backendUrl}/services`)
      // axios.get('http://localhost:3001/services')

      .then((res) => {
        console.log('see product :', res.data);
        const data = res.data;
        setServicesdata(Array.isArray(data) ? data : []);

        // setInform(res.data);
      })
      .catch((err) => {
        console.error("Error fetching data:", err);
        setServicesdata([]);

      });
  }, []);
  return (
    <section className="page-two-container">
      <div className="text-headerass">
        <h2 className="h1-blueass">الخدمات المتقدمة</h2>
        <p className="p-blackass">
          في جمعية معاً من أجل الخير ، نقدم مجموعة من الخدمات المتخصصة لتلبية احتياجاتك التكنولوجية
        </p>
      </div>

      <div className="cards-wrapper">
        {servicesdata.map((item) => (
          <ServiceCard 
            key={item.id}
            mainImage={item.mainImage}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>

    </section>
  );
};

export default Servicesass;
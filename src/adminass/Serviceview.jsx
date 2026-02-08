




import { useState, useEffect } from "react";
import axios from "axios";

// import ServiceCard  from "../association/servicesass";
import Servicesass  from "../association/servicesass";
import { Link } from "react-router-dom";


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




// const ServiceCard = ({ mainImage, title, description }) => {
//   return (
//     <div className="service-card-v2">
//       {/* <span className="card-icon">{mainImage}</span> */}
//               <img className="img-ass" src={mainImage} alt="Main" />
//       <h2 className="card-h2">{title}</h2>
//       <p className="card-p">{description}</p>
//     </div>
//   );
// };

const Servicesview = () => {
  
  return (
    // <Servicesass/>
      <div className="page-admins">
        <div className="btn-services">
              <Link to="/event">
                <button className="btn-service">Add Service</button>
              </Link>
            </div>
  
  <div className="admin-page-wrapper">
      <Servicesass />
    </div>
    </div>
  );
};

export default Servicesview;


import { useState, useEffect } from "react";
import axios from "axios";
// import './Services.css';
// import { servicesData } from './servicesData';
import myImage from "../assets/WhatsApp Image 2026-01-25 at 10.31.44 PM.jpeg";

import { useNavigate } from 'react-router-dom';

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





// const ServicesPage = () => {
//     const navigate = useNavigate();
//         const [servicesdata, setServicesdata] = useState([]);
//   useEffect(() => {

//     // Fetch data from your backend API 
//     // axios.get(`${backendUrl}/`)
//       axios.get('http://localhost:3001/services')

//       .then((res) => {
//         console.log('see product :', res.data);
//         const data = res.data;
//         setServicesdata(Array.isArray(data) ? data : []);

//         // setInform(res.data);
//       })
//       .catch((err) => {
//         console.error("Error fetching data:", err);
//         setServicesdata([]);

//       });
//   }, []);
//   return (
//     <div className="page-wrapper">
//       {/* Top Border Curve to close the first page */}
//       <div className="top-curve-divider"></div>

//       <div className="page-header">
//         <h2 className="main-blue-title">الخدمات المتقدمة</h2>
//         <p className="main-black-desc">في جمعية معاً من أجل الخير ، نقدم مجموعة من الخدمات المتخصصة لتلبية احتياجاتك التكنولوجية</p>
//       </div>

//       <div className="flex-container">
//         {servicesData.map(item => (
//           <ServiceCard 
//             key={item.id}
//             title={item.title}
//             description={item.description}
//             icon={item.icon}
//             isGradient={item.grad}
//           />
//         ))}
//       </div>
//       <button className="but-show-sch-home" onClick={() => navigate("/servicesass")}
//         >عرض المزيد  </button>
//     </div>
//   );
// };

// export default ServicesPage;






// import { servicesData } from './servicesData';

const ServiceCard = ({ mainImage, title, description }) => {
  return (
    <div className="service-card-v2">
      {/* <span className="card-icon">{icon}</span> */}
                    <img className="img-ass" src={mainImage} alt="Main" />
      <h2 className="card-h2">{title}</h2>
      <p className="card-p">{description}</p>
    </div>
  );
};


// const Section1 = ({ title, description, buttonText }) => {
//   return (
//     <section className="hero-container">
//       <div className="hero-content">
     
//         {/* Right Side: Text Content */}
//         <div className="hero-text-wrapper">
//           <h1 className="hero-title">{title}</h1>
//           <p className="hero-description">{description}</p>
//           <button className="hero-button"
//           //  onClick={() => alert('Contacting...')}
//            >
//             {buttonText}
//           </button>
//         </div>
//            {/* Left Side: Logo/Image */}
//         <div className="hero-image-wrapper">
//           <img src={myImage} alt="Together for Goodness Logo" className="hero-logo" />
//         </div>
//       </div>
//     </section>
//   );
// };


const ServicesPage = () => {
  const navigate = useNavigate();
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
      <div className="text-header">
        <h2 className="h1-blue">الخدمات المتقدمة</h2>
        <p className="p-black">
          في جمعية معاً من أجل الخير ، نقدم مجموعة من الخدمات المتخصصة لتلبية احتياجاتك التكنولوجية
        </p>
      </div>

      <div className="cards-wrapper">
        {servicesdata.slice(0,3).map((item) => (
          <ServiceCard 
            key={item.id}
            mainImage={item.mainImage}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>

{/* <Section1 
      title="تمكين التحول الرقمي الخاص بك"
      description=".مرحباً بكم في جمعية معاً من أجل الخير حيث يلتقي الإبداع بالتميز. بصفتنا مزوداً رائداً لحلول البرمجيات المتطورة
.فإننا ملتزمون بتحويل أفكارك إلى حقيقة. نحن هنا لدعم رحلتك في كل خطوة على الطريق  انضم  إلينا في تشكيل مستقبل التكنولوجيا اليوم       "
      buttonText="دعونا نتواصل"
    /> */}
      <button className="animated-blue-btn"  onClick={() => navigate("/servicesass")} >عرض المزيد</button>
    </section>
  );
};

export default ServicesPage;
















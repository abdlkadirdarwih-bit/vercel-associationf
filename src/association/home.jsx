


// import myImage from "../assets/WhatsApp Image 2026-01-25 at 10.31.44 PM";
import myImage from "../assets/WhatsApp Image 2026-01-25 at 10.31.44 PM.jpeg";

// import myImage from "../assets/WhatsApp Image 2025-09-19 at 10.49.02 PM.jpeg";
import ServicesPage from "./services";
import   "./services.css";
import AboutPage from "./about";
import   "./about.css";
import ProjectsPage from "./project";
import   "./project.css";

import Contact from "./contact";
import   "./contact.css";
import { useNavigate } from 'react-router-dom';
const Section1 = ({ title, description, buttonText }) => {
       const navigate = useNavigate(); 

  return (
    <section className="hero-container">
      <div className="hero-content">
     
        {/* Right Side: Text Content */}
        <div className="hero-text-wrapper">
          <h1 className ="hero-title">{title}</h1>
          <p className="hero-description">{description}</p>
          <button className="hero-button"
          //  onClick={() => alert('Contacting...')}
           onClick={() => navigate("/contactass")}

           >
            {buttonText}
          </button>
        </div>
           {/* Left Side: Logo/Image */}
        <div className="hero-image-wrapper">
          <img src={myImage} alt="Together for Goodness Logo" className="hero-logo" />
        </div>
      </div>
    </section>
  );
};

// export default Section1;


export default function Home() {
  return (
<>



<Section1 
      title=" التحول الرقمي الخاص بك"
      description=".مرحباً بكم في جمعية معاً من أجل الخير حيث يلتقي الإبداع بالتميز. بصفتنا مزوداً رائداً لحلول البرمجيات المتطورة
.فإننا ملتزمون بتحويل أفكارك إلى حقيقة. نحن هنا لدعم رحلتك في كل خطوة على الطريق  انضم  إلينا في تشكيل مستقبل التكنولوجيا اليوم       "
      buttonText="دعونا نتواصل"
    />

     <ServicesPage/>
         <AboutPage/>
         <ProjectsPage/>
<Contact/>
</>
  )
}











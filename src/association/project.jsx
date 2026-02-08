

// import myImage from "../assets/WhatsApp Image 2025-09-19 at 10.49.02 PM.jpeg";
import myImage from "../assets/WhatsApp Image 2026-01-25 at 10.31.44 PM.jpeg";
// import myImage from "../assets/WhatsApp Image 2026-01-25 at 10.31.44 PM";
// import myImage from "../assets/WhatsApp Image 2025-09-19 at 10.49.02 PM.jpeg";
// client/src/assets/WhatsApp Image 2026-01-25 at 10.31.44 PM.jpeg
const Section4 = ({ icon, title, description, projects }) => {
  return (
    <section className="projects-container">
      <div className="projects-content">
         {/* FIRST PART: Image (Right on Desktop) */}
        <div className="projects-image-wrapper">
          <img src={myImage} alt="Project Logo" className="rounded-project-img" />
        </div>
        {/*  SECOND PART: Text and Circles (Left on Desktop) */}
        <div className="projects-text-wrapper">
          <div className="projects-heading-flex">
            <span className="project-main-icon">{icon}</span>
            <h1 className="project-title">{title}</h1>
          </div>
          
          <p className="project-description">{description}</p>

          {/* Three Circle Divs */}
          <div className="circles-row">
            {projects.map((proj, index) => (
              <div key={index} className="circle-item-container">
                <div className="white-circle"></div>
                <p className="circle-label">{proj.name}</p>
              </div>
            ))}
          </div>
        </div>

       

      </div>
    </section>
  );
};

// Main Export Component
export default function ProjectsPage () {
  const projectsData = [
    { name: "موقع التجارة الإلكترونية" },
    { name: "نظام المحاسبة" },
    { name: "إدارة المدرسة" }
  ];

  return (
    <Section4 
      icon="📱"
      title="مشاريع جمعية معاً من أجل الخير"
      description="تلتزم جمعية معاً من أجل الخير للمشاريع بتقديم حلول مبتكرة وعالية الجودة تعمل على تمكين الشركات والمجتمعات. مع التركيز على التميز وإرضاء العملاء، نجمع بين التكنولوجيا المتطورة والتفكير الإبداعي لإنشاء مشاريع تحدث تأثيراً ذا مغزى..من الفكرة إلى الإنجاز تعد جمعية معا من أجل الخير للمشاريع شريكك الموثق به في تحقيق نتائج متميزة. يمكنك الاتصال بنا لمشاهدة جميع مشاريعنا "
      projects={projectsData}
    />
  );
}

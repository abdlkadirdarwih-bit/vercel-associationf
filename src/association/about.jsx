
// import myImage from "../assets/WhatsApp Image 2025-09-19 at 10.49.02 PM.jpeg";
// import myImage from "../assets/WhatsApp Image 2026-01-25 at 10.31.44 PM";
import myImage from "../assets/WhatsApp Image 2026-01-25 at 10.31.44 PM.jpeg";


const AboutPage = ({  }) => {
  const stats = [
    { id: 'top-left', icon: "👥", num: "10", label: "عملاء" },
    { id: 'top-right', icon: "📊", num: "15", label: "مشاريع" },
    { id: 'bottom-left', icon: "⭐", num: "3", label: "التجارب" },
  ];

  return (
    <section className="about-container">
      <div className="about-header">
        <h1>عن جمعية معاً من أجل الخير</h1>
        <p>نفخر بكوننا في طليعة الثورة الرقمية، ونقدم حلولاً برمجية متخصصة تلبي احتياجاتكم.
            نفخر بكوننا في طليعة الثورة الرقمية، ونقدم حلولاً برمجية متخصصة تلبي احتياجاتكم
            نفخر بكوننا في طليعة الثورة الرقمية، ونقدم حلولاً برمجية متخصصة تلبي احتياجاتكم
        </p>
      </div>

      <div className="about-content">

        {/* Right Side: The Positive Symbol Layout */}
        <div className="stats-plus-container">
          <div className="plus-symbol-line horizontal"></div>
          <div className="plus-symbol-line vertical"></div>
          
          {stats.map((item) => (
            <div key={item.id} className={`stat-box ${item.id}`}>
              <span className="stat-icon">{item.icon}</span>
              <h3 className="stat-number">{item.num}</h3>
              <p className="stat-label">{item.label}</p>
            </div>
          ))}
        </div>
         {/* Left Side: Circular Image */}
        <div className="about-image-wrapper">
          <img src={myImage} alt="Logo" className="rounded-logo" />
        </div>
      </div>
    </section>
  );
};

export default AboutPage;





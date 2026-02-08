



import { useNavigate } from 'react-router-dom';
// The Main Footer/CTA Section
const FooterCTA = ({ title, description, buttonText }) => {
     const navigate = useNavigate();

  return (
    <section className="cta-container">
      <div className="cta-content">
        <h1 className="cta-title">{title}</h1>
        <p className="cta-description">{description}</p>
        <button className="cta-button"   onClick={() => navigate("/contactass")}
>{buttonText}</button>
      </div>
    </section>
  );
};

// The Independent Copyright Line
const CopyrightBar = () =>
    {
  return (
    <div className="copyright-bar">
      <p>جميع الحقوق محفوظة © 2026، تطوير دورة البرمجة 2026</p>
    </div>
  );
};

// Integration in your Main Page
export default function Contact() {
  return (
    <>
      <FooterCTA 
        title="رسالة الجمعية"
        description='جمعيتنا تسعى لمد يد العون ودعم المجتمع من خلال المشاريع الخيرية والإنسانية التي تلبي احتياجات الأفراد والعائلات المحتاجة."'
        buttonText="اتصل بنا"
      />
      <CopyrightBar />
    </>
  );
}
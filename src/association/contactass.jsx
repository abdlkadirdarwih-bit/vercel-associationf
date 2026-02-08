






import { useState } from 'react';

// import {FaWhatsapp,FaShoppingCart,FaMotorcycle  } from 'react-icons/fa'
import {FiMapPin, FiSearch, FiMail, FiPhone,} from "react-icons/fi";
import { useNavigate } from 'react-router-dom';

// //fetch or axios to send data to the backend
import axios from 'axios';
// import { useNavigate } from "react-router-dom";

const backendUrl = import.meta.env.VITE_BACKEND_URL;




export default function Contactass() {
    const [fullname, setFullname] = useState()
    const [phonenumber, setPhonenumber] = useState()
    const [titlename, setTitlename] = useState()
    const [additionalnotes, setAdditionalnotes] = useState()
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();
    const backendUrl = import.meta.env.VITE_BACKEND_URL;
    const handleSubmit = (e) => {
        e.preventDefault()

        const newErrors = {};
        if (!fullname) newErrors.fullname = "الاسم الكامل مطلوب";
        if (!phonenumber) newErrors.phonenumber = "رقم الهاتف مطلوب";
        if (!additionalnotes) newErrors.additionalnotes = "الرسالة مطلوبة";

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return; // stop submission
        }

        // Clear errors if all good
        setErrors({});

        axios.post(`${backendUrl}/contactassociation`, {
            // axios.post('http://localhost:3001/contactassociation',{

            fullname,
            phonenumber,
            titlename,
            additionalnotes
            // formData
        })
            .then(result => {
                console.log(result)
                if (result.data) {
                    navigate('/')
                }
            })
            .catch(err => console.log(err))
    }
    return (


        <div className="page">

            {/* <div className="sect1home">

        <Section1
          title="أطلب منتجك"
           text='  هل تبحث عن منتج لم تجده في قائمتنا؟ </br>نحن هنا لتلبية احتياجاتك ! </br>  إذا كنت بحاجة إلى اي منتج غير متوفر حاليًاعلى موقعنا'
       />
      </div> */}


            <div className='contactpage'>
                {/* <div className="container-image-contact">

                    <div className="content-contact">
                        <h2>مدرسة البدر للتربية والتعليم  </h2>
                        <p>مؤسسة تربوية تعليمية، لا تتوخى الربح، مرخص لها من السلطة اللبنانية، بموجب قانون رقم 6384 تاريخ 23\2\1995 .</p>

                    </div>
                </div> */}

                <div className="contact-form-details">
             
                    {/* <!-- contact information --> */}
                    <div className="contact-information">
                        <h4>معلومات الاتصال </h4>
                        {/* <div><FiPhone /> +961 78 823 881</div> */}

                        <div className='item-contact-icon-sch'>
                            <div className='item-contactsch'>   <FiMail className='icon-sch' />     <span> albader@gmail.com</span></div>
                            <div className='item-contactsch'>   <FiPhone className='icon-sch' />     <span> +961 78 823 881</span></div>
                            <div className='item-contactsch'>   <FiMapPin className='icon-sch' />     <span>Fnaydek</span></div>
                        </div>
                        {/* <div>  <p>Phone:(123) 456-3350</p></div>
                   {/* <div>  <p>Phone:(123) 456-3350</p></div>
                                     <div className='item-contactsch'>   <FiPhone className='icon-sch'/>     <span> +961 78 823 881</span></div> {/* <div>  <p>Phone:(123) 456-3350</p></div>

                   <div className='item-contactsch'>   <FiMail className='icon-sch'/>     <span>Email: contact@example.com</span></div>

         <div>  <p>Adderess:123 Main Street</p></div> */}

                    </div>


                    {/*  contact information  */}


                    <div className="contact-form">
                        <h4>أرسل رسالة  </h4>

                        <form
                            onSubmit={handleSubmit}
                        >
                            <div className="form-firstname">
                                {/* {errors.Name && <span>{errors.Name}</span>} */}

                            </div>

                            <div className="form-firstname">
                                {errors.fullname && <span className="error-text">{errors.fullname}</span>}
                                <label>  الاسم الكامل </label>
                                <input
                                    className={`fullname ${errors.fullname ? 'error-input' : ''}`}
                                    type="text"
                                    name="fullname"

                                    // value={Name}
                                    placeholder='الاسم الكامل'
                                    autoComplete='off'

                                    // onChange={handleNameChange}
                                    // onChange={handleChange}
                                    onChange={(e) => setFullname(e.target.value)}

                                />
                                {/* {errors.Name && <span>{errors.Name}</span>} */}

                            </div>

                            <div className="form-firstname">
                                {errors.phonenumber && <span className="error-text">{errors.phonenumber}</span>}
                                <label>رقم الهاتف </label>
                                <input
                                    className={`phonenumber ${errors.phonenumber ? 'error-input' : ''}`}
                                    type='text'
                                    name="phonenumber"
                                    // value={phonenumber}
                                    placeholder='رقم الهاتف'
                                    autoComplete='off'
                                    // onChange={handlephonenumberChange}
                                    // onChange={handleChange}
                                    onChange={(e) => setPhonenumber(e.target.value)}
                                // required

                                />

                            </div>
                            <div className="form-firstname">
                                <label>البريد الإلكتروني </label>
                                <input
                                    className='titlename'
                                    type="text"
                                    name="titlename"
                                    // value={titlename}
                                    placeholder=' البريد الإلكتروني '
                                    autoComplete='off'

                                    // onChange={handletitlenameChange}
                                    // onChange={handleChange}
                                    onChange={(e) => setTitlename(e.target.value)}

                                />
                                {/* {errors.titlename && <span>{errors.titlename}</span>} */}
                            </div>
                            <div className="form-firstname">
                                {errors.additionalnotes && <span className="error-text">{errors.additionalnotes}</span>}
                                <label> أدخل رسالتك </label>
                                <input
                                    className={`addnotes ${errors.additionalnotes ? 'error-input' : ''}`}
                                    // value={additionalnotes}
                                    placeholder='  أدخل رسالتك '
                                    // onChange={handleadditionalnotesChange}
                                    // onChange={handleChange}
                                    onChange={(e) => setAdditionalnotes(e.target.value)}
                                />

                            </div>
                            <button type="submit" className='bt3-contact'>ارسل </button>

                        </form>

                    </div>



                </div>



            </div>
        </div>
    )
}




































//  <div id="contact" class="section">

//                 {/* container  */}
//                 <div class="container">

//                     <div class="row">

//                         {/* contact form  */}
//                         {/* <div class="col-md-6"> */}
//                         <div class="contact-form">
//                             {/* <h4>Send A Message</h4> */}
//                             <form>
//                                 {/* <input class="input" type="text" name="name" placeholder="Name">
// 								<input class="input" type="email" name="email" placeholder="Email">
// 								<input class="input" type="text" name="subject" placeholder="Subject"> */}
//                                 {/* <textarea class="input" name="message" placeholder="Enter your Message"></textarea>
//                                     <button class="main-button icon-button pull-right">Send Message</button> */}
//                             </form>
//                         </div>
//                         {/* </div> */}
//                         {/* <!-- /contact form --> */}

//                         {/* <!-- contact information --> */}
//                         {/* <div class="col-md-5 col-md-offset-1">
// 						<h4>Contact Information</h4>
// 						<ul class="contact-detai">
// 							<li><i class="fa fa-envelope"></i>Educate@email.com</li>
// 							<li><i class="fa fa-phone"></i>122-547-223-45</li>
// 							<li><i class="fa fa-map-marker"></i>4476 Clement Street</li>
// 						</ul>

// 						<div id="contact-map"></div>

// 					</div> */}
//                         {/*  contact information  */}

//                     </div>
//                     {/*  /row */}

//                 </div>
//                 {/* /container */}

//             </div>











//  <div className="contact-details-sch-footer">
//         <div className="homeabout-sch-footer">
//           <div><Link to="/Talab8" className="nav-link">Home  </Link></div>
//           <div ><Link to="/About" className="nav-link">About Us  </Link></div>
//         </div>
//         {/* <div className="phoneemailaddressfollow"> */}
//         <div className="phoneemailaddress">
//           <div><FiPhone /> +961 78 823 881</div>
//           <div><FiMail /> talabatk2025@gmail.com</div>
//           <div className="contact-item"> <FiMapPin /> Akkar-Lebanon</div>

//         </div>
//         <div className="folow"> <FiInstagram /> Folow Us:</div>
//         {/* </div> */}


//       </div>







import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import myImage from "../assets/photo-xxl.png";
import imageCompression from "browser-image-compression";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";


function CreateServices() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [updateSuccess, setUpdateSuccess] = useState(false);

  const backendUrl = import.meta.env.VITE_BACKEND_URL;

 
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [mainImageBase64, setMainImageBase64] = useState("");
  const [mainImagePreview, setMainImagePreview] = useState(myImage);

const [confirmImageIndex, setConfirmImageIndex] = useState(null);

  // Convert file to Base64
  const convertToBase64 = (file) =>
    new Promise((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.readAsDataURL(file);
    });

  // Load event from backend
  useEffect(() => {
    axios
      .get(`${backendUrl}/getService/${id}`)
      // .get("http://localhost:3001/getService/${id}")
      .then((res) => {
        const d = res.data;
        
        setTitle(d.title || "");
        setDescription(d.description || "");
        setMainImageBase64(d.mainImage || "");
        setMainImagePreview(d.mainImage || myImage);
        setImagesBase64(d.images || []);
        setImagesPreviews(d.images || []);
      })
      .catch(console.log);
  }, [id]);

  // Handle Main Image
  const handleMainImageChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const compressed = await imageCompression(file, { maxSizeMB: 0.01, maxWidthOrHeight: 800 });
    const base64 = await convertToBase64(compressed);
    setMainImageBase64(base64);
    setMainImagePreview(base64);
  };

 

  const openFilePicker = (id) => document.getElementById(id).click();





  const handleUpdate = (e) => {
    e.preventDefault();
    axios
      .put(`${backendUrl}/services/${id}`, {
        mainImage: mainImageBase64,
    
        title,
        description,
      })
      // .then(() => navigate("/"))
      // .catch(console.log);
      
      .then(() => {
  toast.success("Message updated successfully!");
    setTimeout(() => {
      navigate("/");               // <--- redirect after 1.5 seconds
    }, 4500);
        setUpdateSuccess(true);        // <--- show success message

  })
  // .catch(console.log);
  .catch(() => toast.error("Update failed!"));
  };




  return (
    <div className="cte-container">
      <div className="cte-card">
        <form onSubmit={handleUpdate}>
                      <h2 className="contacts-table-create-event-title">Update Event</h2>

         
          <div className="cte-field">
            <label>Title</label>
            <input className="cte-input" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
          </div>
          <div className="cte-field">
            <label>Description</label>
            <input className="cte-input" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
          </div>

          {/* Main Image */}
          <div className="cte-field">
            <label>Main Image</label>
            <input type="file" id="mainImageInput" style={{ display: "none" }} accept="image/*" onChange={handleMainImageChange} />
            <button type="button" className="btn btn-primary btn-sm" onClick={() => openFilePicker("mainImageInput")}>
              Select Main Image
            </button>
            <div className="image-preview">
              <img src={mainImagePreview} alt="Main" />
            </div>
          </div>

   

          <br />
          <button type="submit" className="btn btn-success cte-submit">
            Update
          </button>
    {/* {updateSuccess && (
  <div className="confirm-overlay">
    <div className="confirm-box">
      <p>Event Updated Successfully ✔</p>
    </div>
  </div>
)} */}


        </form>
    
   <ToastContainer
        position="top-center"
        // autoClose={3000}
        hideProgressBar={false}
      />
      </div>
    </div>
  );
}

export default CreateServices;



  


//     <div className="d-flex  justify-content-center align-items-center"
//              style={{ width: "99vw", height: "100vh",marginTop:"110px", backgroundColor: "rgb(205,230,155)" }}
// >
//  <div className="w-50 bg-white rounded p-3">
//   <form onSubmit={Update}>
//     <h2> Update Event </h2>
//     <div className="mb-2">
//       <label htmlFor="">date</label>
//       <input type="text" placeholder="Enter date" className="form-control"
//       value = {date}  onChange={(e) => setDate(e.target.value)}/>
//     </div>

//    <div className="mb-2">
//       <label htmlFor="">place</label>
//       <input type="text" placeholder="Enter place" className="form-control"
//       value = {place}     onChange={(e) => setPlace(e.target.value)}/>
//     </div>


//        <div className="mb-2">
//       <label htmlFor="">title </label>
//       <input type="text" placeholder="Enter title " className="form-control"
//       value = {title }     onChange={(e) => setTitle(e.target.value)}/>
//     </div>
//       <div className="mb-2">
//       <label htmlFor=""> text</label>
//       <input type="text" placeholder="Enter  text" className="form-control"
//       value = { text}     onChange={(e) => setText(e.target.value)}/>
//     </div>
//      {/* <div className="mb-2">
//       <label htmlFor="">ImageId</label>
//       <input type="text" placeholder="Enter ImageId" className="form-control"
//       value = {imageId}     onChange={(e) => setImageId(e.target.value)}/>
//     </div> */}

// {/* Main image */}
// <div className="mb-2">
//   <label>Main Image</label>
//   <input
//     type="text"
//     placeholder="Enter main image URL"
//     className="form-control"
//     value={mainImage}
//     onChange={(e) => setMainImage(e.target.value)


//     }
//   />
// </div>

// {/* Detail images */}
// {/* {images.map((img, idx) => (
//   <div className="mb-2" key={idx}>
//     <label>Detail Image {idx + 1}</label>
//     <input
//       type="text"
//       placeholder={`Enter image ${idx + 1} URL`}
//       className="form-control"
//       value={img}
//       onChange={(e) => {
//         const newImages = [...images];
//         newImages[idx] = e.target.value;
//         setImages(newImages);
//       }}
//     />
//   </div>
// ))} */}

// {/* Detail images */}
// {images.map((img, idx) => (
//   <div className="mb-2 d-flex align-items-center" key={idx}>
//     <div className="flex-grow-1">
//       <label>Detail Image {idx + 1}</label>
//       <input
//         type="text"
//         placeholder={`Enter image ${idx + 1} URL`}
//         className="form-control"
//         value={img}
//         onChange={(e) => {
//           const newImages = [...images];
//           newImages[idx] = e.target.value;
//           setImages(newImages);
//         }}
//       />
//     </div>
//     {/* Delete button */}
//     <button
//                  style={{ marginTop:"20px" }}

//       type="button"
//       className="btn btn-danger btn-sm ms-2"
//       onClick={() => {
//         const newImages = images.filter((_, i) => i !== idx);
//         setImages(newImages);
//       }}
//     >
//       Delete
//     </button>
//   </div>
// ))}

// {/* Add new image field */}
// <button
//                  style={{ marginBottom:"20px" }}
//   type="button"
//   className="btn btn-primary btn-sm mt-2"
//   onClick={() => setImages([...images, ""])}
// >
//   + Add Image
// </button>

// <br/>
//  {/* <tr></tr> */}
//     <button className="btn btn-success"> Update</button>
//   </form>
//   </div>
//   </div>




































  


  // 2

// import React,{useState,useEffect}  from "react";
// import {useParams,useNavigate}  from "react-router-dom";
// import axios from 'axios'

 
// function UpdateUser() {
//   const{id}=useParams()
//     const [  imageId,setImageId] = useState()
//   const [date,setDate] = useState("")
//   const [place,setPlace] = useState("")
//   const [title ,setTitle] = useState("")
//     const [ text,setText] = useState("")

//     const [category, setCategory] = useState("");
  
//   const [isNewProduct, setIsNewProduct] = useState(false);
// const [unit, setUnit] = useState(""); // يتم جلبه من السيرفر

//   const navigate=useNavigate()
// // Fetch it from DB in useEffect:
//     useEffect(()=>{
//       axios.get('http://localhost:3001/getUser/'+id)
//       .then(result => {console.log(result)
//       setImageId(result.data.imageId)
//       setDate(result.data.date)
//      setPlace(result.data.place)
//       setTitle(result.data.title )
//             setText(result.data. text)
//      setIsNewProduct(result.data.isNewProduct); 
//       setUnit(result.data.unit) // ✅ جلب الوحدة

//     })
//       .catch(err => console.log(err))
//   },[])
// // Send it in update request:
//   const Update  = (e) => {
//     e.preventDefault();
//     axios.put("http://localhost:3001/updateUser/"+id, {imageId,date,place,title ,  text,  isNewProduct  ,unit  
// })
//     // axios.put(`http://localhost:3001/updateUser/${id}`, { productName, productPrice, productQuantity })

//     .then(result => {
//       console.log(result)
//       navigate('/')
//    })
//       .catch(err => console.log(err))
  
//   }
//   return (
//     <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
//  <div className="w-50 bg-white rounded p-3">
//   <form onSubmit={Update}>
//     <h2> Update User </h2>
//     <div className="mb-2">
//       <label htmlFor="">date</label>
//       <input type="text" placeholder="Enter date" className="form-control"
//       value = {date}  onChange={(e) => setDate(e.target.value)}/>
//     </div>

//    <div className="mb-2">
//       <label htmlFor="">place</label>
//       <input type="text" placeholder="Enter place" className="form-control"
//       value = {place}     onChange={(e) => setPlace(e.target.value)}/>
//     </div>
// <div className="mb-2">
//   <label>وحدة المنتج</label>
//   <select value={unit} onChange={e => setUnit(e.target.value)} className="form-control">
//     <option value="pcs">قطعة</option>
//     <option value="kg">كيلو</option>
//   </select>
// </div>

//        <div className="mb-2">
//       <label htmlFor="">title </label>
//       <input type="text" placeholder="Enter title " className="form-control"
//       value = {title }     onChange={(e) => setTitle(e.target.value)}/>
//     </div>
//       <div className="mb-2">
//       <label htmlFor=""> text</label>
//       <input type="text" placeholder="Enter  text" className="form-control"
//       value = { text}     onChange={(e) => setText(e.target.value)}/>
//     </div>
//      <div className="mb-2">
//       <label htmlFor="">ImageId</label>
//       <input type="text" placeholder="Enter ImageId" className="form-control"
//       value = {imageId}     onChange={(e) => setImageId(e.target.value)}/>
//     </div>
//     <select value={category} onChange={e => setCategory(e.target.value)}>


//   <option value="">اختر الفئة</option>
//   <option value="">  لأكثر مبيعًا  </option>
//   <option value="خضار وفواكه">خضار وفواكه</option>
//   <option value="معجنات">معجنات</option>
//   <option value="مشروبات">مشروبات</option>
// </select>
//     <div className="mb-2">
//   <label htmlFor="isNewProduct">منتج جديد؟</label>
//   <input 
//     type="checkbox" 
//     id="isNewProduct"
//     checked={isNewProduct} 
//     onChange={(e) => setIsNewProduct(e.target.checked)} 
//   />
// </div>

//     <button className="btn btn-success"> Update</button>
//   </form>
//   </div>
//   </div>
//   )
// }

//   export default UpdateUser;












//   import React,{useState,useEffect}  from "react";
// import {useParams,useNavigate}  from "react-router-dom";
// import axios from 'axios'

 
// function UpdateUser() {
//   const{id}=useParams()
//   const [name,setName] = useState()
//   const [email,setEmail] = useState()
//   const [age,setAge] = useState()
//   const navigate=useNavigate()

//     useEffect(()=>{
//       axios.get('http:localhost:3001/getUser/'+id)
//       .then(result => {console.log(result)
//       setName(result.data.name)
//      setEmail(result.data.email)
//       setAge(result.data.age)
//     })
//       .catch(err => console.log(err))
//   },[])

//   const Update  = (e) => {
//     e.preventDefault();
//     axios.put("http://localhost:3001/updateUser/"+id, {name,email,age})
//     .then(result => {
//       console.log(result)
//       navigate('/')
//    })
//       .catch(err => console.log(err))
  
//   }
//   return (
//     <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
//  <div className="w-50 bg-white rounded p-3">
//   <form onSubmit={Update}>
//     <h2> Update User </h2>
//     <div className="mb-2">
//       <label htmlFor="">Name</label>
//       <input type="text" placeholder="Enter Name" className="form-control"
//       value = {name}  onChange={(e) => setName(e.target.value)}/>
//     </div>

//    <div className="mb-2">
//       <label htmlFor="">Email</label>
//       <input type="text" placeholder="Enter Email" className="form-control"
//       value = {email}     onChange={(e) => setEmail(e.target.value)}/>
//     </div>

//        <div className="mb-2">
//       <label htmlFor="">Age</label>
//       <input type="text" placeholder="Enter Age" className="form-control"
//       value = {age}     onChange={(e) => setAge(e.target.value)}/>
//     </div>
//     <button className="btn btn-success"> Update</button>
//   </form>
//   </div>
//   </div>
//   )
// }

//  export default UpdateUser;







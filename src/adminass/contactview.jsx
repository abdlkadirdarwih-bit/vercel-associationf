






import { useState, useEffect } from "react";
// //fetch or axios to send data to the backend
import axios from "axios";
import { Link } from "react-router-dom";

import { MdOutlineDeleteOutline } from "react-icons/md";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";






export default function Contactview() {

  const [contacts, setContacts] = useState([]);
  const [confirmDelete, setConfirmDelete] = useState(null);

  const backendUrl = import.meta.env.VITE_BACKEND_URL;




  useEffect(() => {
    axios.get('http://localhost:3001/contactschool')

      // axios.get(`${backendUrl}/contactschool`)
      .then(res => {
        setContacts(res.data);
      })
      .catch(err => console.log(err));
  }, []);



  const askDelete = (id) => setConfirmDelete(id);

  const confirmDeleteMessage = () => {
    axios
      // .delete(`${backendUrl}/deleteMessage/${confirmDelete}`)
      .delete('http://localhost:3001/deleteMessage/${confirmDelete}')

      .then(() => {
        setContacts(prev => prev.filter(msg => msg._id !== confirmDelete));
        toast.success("Message deleted successfully!");
        setConfirmDelete(null);
      })
      .catch(() => toast.error("Delete failed!"));
  };




  return (


    <div className="page">

      {/* <div className="page-admins"> */}

        {/* <div>
          <Link to="/event">
            <button className="btn-event">Add Event</button>
          </Link>
        </div> */}
        {/* <div className="page-admin1"> */}

          {/* <div className="page-admin2"> */}



            {/* <div className='sect3-admin'> */}




            {/* </div> */}


            <div className="contacts-table-messages-wrapper">
              <table className="contacts-table-messages">
                <thead className="thead-messages">
                  <tr className="tr-messages">
                    <th className="thead-messages-th">#</th>
                    <th className="thead-messages-th">Full Name</th>
                    <th className="thead-messages-th">Email </th>
                    <th className="thead-messages-th">Title</th>
                    <th >Notes</th>
                    <th className="thead-messages-th">Actions</th>

                  </tr>
                </thead>
                <tbody>
                  {contacts.map((c, idx) => (
                    <tr key={idx} className="tr-messages">
                      <td>{idx + 1}</td>
                      <td>{c.fullname}</td>
                      <td>{c.phonenumber}</td>
                      <td>{c.titlename}</td>
                      <td>{c.additionalnotes}</td>
                      <td>
                        {/* <button
          onClick={() => deleteMessage(c._id)}
          className="btn-delete-message"
//           style={{
// border:"none"    
//         }}
        > */}
                        <button onClick={() => askDelete(c._id)}>

                          <MdOutlineDeleteOutline style={{
                            color: "red"
                          }}
                          />

                        </button>



                        {confirmDelete && (
                          <div className="confirm-overlay">
                            <div className="confirm-box">
                              <p>Are you sure you want to delete this message?</p>

                              <button onClick={confirmDeleteMessage}
                                style={{
                                  color: "red"
                                }}
                              > Delete</button>
                              <button onClick={() => setConfirmDelete(null)}>Cancel</button>
                            </div>
                          </div>
                        )}



                      </td>
                    </tr>
                  ))}

                </tbody>
              </table>
            </div>

            <ToastContainer
              position="top-center"
              // autoClose={20}
              hideProgressBar={false}
            />
          {/* </div> */}

        {/* </div> */}
      </div>

    // </div>

  )
}



import React, { useState } from "react";

const RegisterOwner = () => {
  const [ownerData, setOwnerData] = useState({
    Fullname: "",
    Lastname: "",
    email: "",
    phone:"",
    Password: "",
    state:"",
    city:"",

  });
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  return (
    <>
      <form action="submit">
        <div>
          <div>
            <label>Fullname</label>
            <input
              type="text"
              placeholder="Fullname"
              value={ownerData.Fullname}
              onChange={(event)=>{setMessage(prevState=>({...prevState,Fullname:event.target.value}))}}
            ></input>
            <label>lastname</label>
             <input
              type="text"
              placeholder="Lastname"
              value={ownerData.Fullname}
              onChange={(event)=>{setMessage(prevState=>({...prevState,Fullname:event.target.value}))}}
            ></input>
          </div>
          <div></div>
          <div></div>
        </div>
      </form>
    </>
  );
};

export default RegisterOwner;

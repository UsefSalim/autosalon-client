import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { authlogin } from "../../redux/ducks/authSlice";
// const getProfileClient = async (props) => {
//   try {
//     const { data } = await axios.get("http://localhost:5000/api/client");
//   } catch (error) {
//     error && props.history.push("/login");
//     console.log(error);
//   }
// };

function Client(props) {
  // useEffect(() => {
  //   // getProfileClient(props);
  // });
  return (
    <>
      <button>Logout</button>
      <div> Client Private rOOt</div>
    </>
  );
}

export default Client;

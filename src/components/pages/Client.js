import React from "react";
import { useEffect } from "react";

import { useDispatch } from "react-redux";
import { authlogout } from "../../redux/ducks/authSlice";

function Client(props) {
  const dispatch = useDispatch();
  const handelLogout = () => {
    dispatch(authlogout());
  };
  useEffect(() => {});
  return (
    <>
      <button onClick={handelLogout}>Logout</button>
      <div> Client Private rOOt</div>
    </>
  );
}

export default Client;

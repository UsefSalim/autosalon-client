import React, { useEffect } from "react";

function Home(props) {
  setTimeout(() => {
    props.history.push("/register");
  }, 1);
  useEffect(() => {
    document.title = "Home Page";
  }, []);
  return <>Redirrect To register page</>;
}

export default Home;

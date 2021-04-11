import React, { useEffect } from "react";

function Home(props)
{
  setTimeout(() =>
  {
    props.history.push("/register");
  }, 1);
  useEffect(() =>
  {
    document.title = "Home Page";
  }, []);
  return <></>;
}

export default Home;

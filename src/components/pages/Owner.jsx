import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios'
// const getProfileOwner = async (setIsLoged, props) =>
// {
//   try
//   {
//     const { data } = await axios.get('http://localhost:5000/api/owner')
//     data && setIsLoged(true)
//   } catch (error)
//   {
//     error && props.history.push("/login")
//   }
// }

function Owner(props)
{

  // useEffect(() =>
  // {
  //   getProfileOwner(setIsLoged, props)

  // }, [])
  return (
    <>
      Owner Private Roote
    </>

  )
}

export default Owner

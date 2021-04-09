import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios'
const getProfileOwner = async (setIsLoged, props) =>
{
  try
  {
    const { data } = await axios.get('http://localhost:5000/api/owner')
    data && setIsLoged(true)
  } catch (error)
  {
    error && props.history.push("/login")
  }
}

function Owner(props)
{
  const [isLoged, setIsLoged] = useState(false)
  useEffect(() =>
  {
    getProfileOwner(setIsLoged, props)

  }, [])
  return (
    <>
      {
        isLoged
          ? (<div>
            Owner  Private rOOt
          </div>)
          : props.history.push("/login")
      }
    </>

  )
}

export default Owner

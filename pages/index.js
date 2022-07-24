import { useEffect, useState } from "react";
import HomeScreen from "@components/HomeScreen";
import Splash from "@components/Splash";

export default function Home() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])
  
  return (
    <>
      {
        (loading)
        ? <Splash />
        : <HomeScreen />
      }
    </>
  )
}

import { useState, useEffect } from 'react'
import useFetch from '../hooks/useFetch'

const colorstyleStatus = [
  {
    backgroundColor: "#37c24a"
  },
  {
    backgroundColor: "#e71a1a"
  },
  {
    backgroundColor: "#838383"
  }
]
  const CardResident = ({url}) => {
  const resident = useFetch(url)
  const [colorStatus, setColorStatus] = useState();
  useEffect(() => {
    if (resident?.status === "Alive"){
      setColorStatus(colorstyleStatus[0])
    }else if (resident?.status === "Dead"){
      setColorStatus(colorstyleStatus[1])
    }else if (resident?.status === "unknown"){
      setColorStatus(colorstyleStatus[2])
    }
  }, [resident])
  
  
  
  return (
   <article className='Card_resident'>
    <section className='Card_img'>
      <img src={resident?.image} alt={`image of $resident?.name}`} />
      <div className='Status'>
      <span>{resident?.status}</span>   
      <div className="circle" style={colorStatus}></div> 
      </div> 
    </section>
      <h3>{resident?.name}</h3>
      <hr></hr>
      <ul>
        <li><span><b>Species: <br></br></b></span>
        {resident?.species}
        </li>
        <li><span><b>Origin: <br></br></b></span>
        {resident?.origin.name}
        </li>
        <li><span><b>Eppisodes where appear: <br></br></b></span>
        {resident?.episode.length}
        </li>
      </ul>
   </article>
  )
}

export default CardResident
import React,{useState} from 'react'

const Tour = ({id,name,image,info,price,removeTours}) => {
  const[show,setShow] = useState(false)
  return (
    
    <article className='single-tour' >
      <img className='img' src={image} alt={name}/>
      <span className='tour-price'>{price}</span>
      <div className='tour-info'>
        <h5>{name}</h5>
        <p>{show ? info:`${info.substring(0,209)}...`} <span className='span' onClick={()=> setShow(!show)} >{show ? 'Show less':'Read more'}</span></p>
        
      <button className='btn btn-block delete-btn' onClick={()=>{removeTours(id)}} >Remove Tour</button>

      </div>

    </article>
  )
}

export default Tour
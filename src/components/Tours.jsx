import Tour from './Tour';


const Tours = ({tours, removeTours}) => {
    
  return (
    <section>
    <div className='title'>
        <h2>Our Tours</h2>
        <div className='title-underline'></div>
    </div>
    <div className='tours'>
    {tours.map(tour=>(
        <Tour  key={tour.id} {...tour} removeTours={removeTours} />
    ))}
      </div>
    </section>
  )
}

export default Tours
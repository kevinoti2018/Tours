import React,{useState,useEffect,useCallback} from 'react'
import Tours from './components/Tours';
import Loading from './components/Loading';

const url = 'https://course-api.com/react-tours-project';
const App = () => {
  const [tours,setTours] = useState([])
    const [isLoading,setIsLoading] = useState(true)
    
   const fetchData= useCallback(async()=>{
    setIsLoading(true)
        try{
            const response = await fetch(url)
            const data = await response.json()
            // console.log(data);
            setTours(data)
            console.log(tours);
        }
        catch(error){
            console.log(error);
        }
        setIsLoading(false)
    },[])


    useEffect(()=>{
        fetchData();
        setIsLoading(false);
       
    },[])
    const removeTours=(id)=>{
      const newTours = tours.filter(tour=> tour.id !==id)
      setTours(newTours);
    }
    const refresh=()=>{
      fetchData()
    }

    if(tours.length===0){
      return (
      <main className='main' >
        <h2 className='title' >No tours</h2>
        <button className='btn' onClick={refresh} >Refresh</button>
      </main>)
    }
  return( 
    <div>
    {isLoading? <Loading/>:<Tours tours={tours} removeTours={removeTours} />}
    </div>);
};
export default App;

import React,{useState} from 'react'
import { useEffect } from 'react'
import Header from '../components/Header'
import Porduct from '../components/Porduct'
import './home.css'


const Home = () => {
    const [data, setData] = useState([])
    const [filteredData, setFilteredData] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
        setLoading(true)
        fetch('https://fakestoreapi.com/products?limit=12')
        .then(res=>res.json())
        .then(json=>setData(json))
        setLoading(false)
    },[])
    
console.log(data)

const handlePriceSort = (val)=>{
    let newData = data;
    if(val === 'inc'){
        newData.sort((a,b)=> a.price - b.price)
    }else{
       newData.sort((a,b)=> b.price - a.price)
    }
    setFilteredData([...newData])
    console.log(filteredData)
}

const handleFilter = (val)=>{
    let newData = data;
    let priceFiltered = newData.filter((x)=> x.price <= val);
    setFilteredData([...priceFiltered])
}
  return (
    <>
    <Header handlePriceSort={handlePriceSort} handleFilter={handleFilter}/>
    <div className='container'>
        <h1 className='fw-light text-center'>Latest Listings</h1>

        <div className='row justify-content-evenly'>
            {!filteredData.length && data.length ? data.map((item, i)=>(
            <Porduct key={i}  item={item}/>
            ))
        : data.length && filteredData.length ? filteredData.map((item, i)=>(
            <Porduct key={i}  item={item}/>
        ))
        : !loading &&  <div class="spinner-border text-dark text-center my-5" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
        }
           
        </div>
    </div>
    </>
  )
}

export default Home
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Guitarra from './Components/Guitarra'
import { useState } from 'react'
import { db } from './db'

export default function App() {
  
   const [data]=useState(db)
   const [car, setCar]=useState([])

   function addToCar(item){
        const itemExist=car.findIndex(guitarra => guitarra.id === item.id)

        if (itemExist>=0){
            //console.log("ya existe")
            const updateCar=[...car]
            updateCar[itemExist].quantity++
            setCar(updateCar)
        }else{
            //console.log("no existe")
            item.quantity=1
            setCar(prevCar => [...car, item])
        }

   } 

  return (
    <>
        <Header
            car={car}
        />
        <main className="container-xl mt-5">
            <h2 className="text-center">Nuestra Colección</h2>

            <div className="row mt-5">
                {data.map((guitarra)=>(
                    <Guitarra
                        key={guitarra.id}
                        guitarra={guitarra}
                        addToCar={addToCar}
                    />     
                ))}
            </div>
        </main>

        <Footer/>
    </>
    
  )
}



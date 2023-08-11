import React, { useState } from 'react'
import { FaCalendarDay, FaSearch} from 'react-icons/fa'

import { data } from '../data/database';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


const Home = () => {
  const [event] =useState(data);

  const [selectedDate, setSelectedDate] = useState(null)

  return (
    <div className='w-full h-auto bg-gray-400 py-20'>
        {/* calender and search event */}
        <div className='flex flex-col max-w-[500px] md:max-w-[800px] justify-between items-center text-center py-8 bg-gray-500 px-6 mx-auto'>

          <div className='flex gap-2 items-center justify-center absolute py-4 top-20'>
              <FaSearch size={15}/>
              <input type="text" placeholder='Search event' className='border-4 outline-none sm:w-[300px] text-center shadow-black' />
          </div>
          <div className='flex gap-2 items-center py-5 justify-center cursor-pointer'>

              <FaCalendarDay size={15}/>
              <span className='text-gray-500 py-2 text-center justify-center items-center'>
                <DatePicker 
                selected={selectedDate} 
                onChange={ date => setSelectedDate(date)} 
                dateFormat='dd/MM/yyyy'
                minDate={new Date()}
                showYearDropdown
                scrollableYearDropdown
                
                className=' text-center outline-none'/>
              </span>

              
          </div>
        </div>

        {/* events display */}

        <div className='bg-gray-500 mt-10 mx-8 h-auto sm:gap-5 rounded-md'>
              <div className='py-4 mx-8' >
                <h1 className='text-center text-gray-200 py-2 mx-2 justify-center items-center text-2xl inline-block'>Events</h1>
              </div>
            <div className='justify-center items-center mx-auto flex '>
              <div className='sm:grid md:grid grid-cols-3'>

                  {/* event pic display */}
                  {event.map((item, index) =>(
                    <div key={index}>

                      <img src={item.eventimage} alt={item.eventimage} className='w-[300px] h-[150px] m-2 px-3 pb-6 mx-auto md:w-[550px] md:h-[200px] object-cover'/>
                    
                    </div>
                  ))}
                </div>
              </div>
            
        </div>
    </div>


  )
}

export default Home
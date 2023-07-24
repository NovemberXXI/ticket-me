import React, { useState } from 'react'
import { FaCalendar, FaCalendarDay} from 'react-icons/fa'
import Suite from './assets/suite.jpg'
import {DateRange} from 'react-date-range'
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { format } from 'date-fns';

const Home = () => {

  const [openDate, setOpenDate] = useState(false)

  const [date, setDate] = useState([
    {
      startDate: new Date(),
      key: 'selection'
    }
  ]);
  return (
    <div className='w-full h-auto bg-gray-400 py-20'>
        {/* calender and search event */}
        <div className='flex flex-col max-w-[500px] md:max-w-[800px] justify-between items-center text-center py-8 bg-gray-500 px-6 mx-auto'>

          <div className='flex gap-1 items-center justify-center absolute py-4 top-20'>
              <FaCalendar size={10}/>
              <input type="text" placeholder='Search event' className='border-4 outline-none w-[180px] sm:w-[300px] text-center shadow-black' />
          </div>
          <div className='flex gap-1 items-center py-5 justify-center cursor-pointer'>
              <FaCalendarDay size={10}/>
              <span onClick={()=>setOpenDate(!openDate)} className='text-gray-300 py-2'>{`${format(date[0].startDate, "dd/MM/yyyy")}`}</span>
              {openDate && <DateRange
                editableDateInputs={true}
                onChange={item => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}

                className='absolute top-[170px]'
              />}
          </div>
        </div>

        {/* events display */}

        <div className='bg-gray-500 mt-10 mx-8 h-auto sm:gap-5 rounded-md'>
              <div className='py-4 mx-8' >
                <h1 className='text-center text-gray-200 py-2 mx-2 justify-center items-center text-2xl inline-block'>Events</h1>
              </div>
            <div className='justify-center items-center mx-auto'>

              {/* event pic display */}
              <div className='grid sm:grid-cols-3 items-center justify-center text-center'>
                {/* event pics */}
                
                  <img src={Suite} alt="siute ticket" className='w-[300px] h-[150px] m-2 px-3 mx-auto'/>
                  <img src={Suite} alt="siute ticket" className='w-[300px] h-[150px] m-2 px-3 mx-auto'/>
                  <img src={Suite} alt="siute ticket" className='w-[300px] h-[150px] m-2 px-3 mx-auto'/>
                
                
                {/* event pics */}

              </div>
            </div>
        </div>
    </div>


  )
}

export default Home
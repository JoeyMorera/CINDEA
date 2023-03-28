import React from 'react'

const Contacto = () => {
  return (
    <div className='bg-gray-100'>
      <div className='px-10 md:px-40'>
        <div>
          <h2 className='text-center uppercase md:text-4xl pt-28'>C O N T A C T O</h2>
          <p className='text-center pt-10 pb-10'>Información de sedes y satélites en la Dirección Regional Educativa más cercana o al DEPJA </p>
        </div>
        <div className='flex justify-center items-center py-10  md:py-40 '>
          <div className=''>
            <div className='flex p-5'>
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-map-pin" width="36" height="28" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <circle cx="12" cy="11" r="3" />
                <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
              </svg>
              <p className='pl-4 text-1xl md:text-2xl'>San Juan de Dios, Desamparados, CR</p>
            </div>
            <div className='flex p-5'>
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-phone-call" width="28" height="28" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                <path d="M15 7a2 2 0 0 1 2 2" />
                <path d="M15 3a6 6 0 0 1 6 6" />
              </svg>
              <p className='pl-4 text-1xl md:text-2xl'> 2257-3964</p>
            </div>
            <div className='flex p-5'>
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-calendar-stats" width="28" height="28" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M11.795 21h-6.795a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v4" />
                <path d="M18 14v4h4" />
                <circle cx="18" cy="18" r="4" />
                <path d="M15 3v4" />
                <path d="M7 3v4" />
                <path d="M3 11h16" />
              </svg>
              <p className='pl-4 text-1xl md:text-2xl'> L-V 6:00 am – 9:30 pm</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contacto
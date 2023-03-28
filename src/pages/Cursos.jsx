import React from 'react'

const Cursos = () => {
    return (
        <div className='bg-gray-100'>
            <div>
                <h2 className='text-center uppercase text-4xl pt-28'>C u r s o s</h2>
                <p className='text-center py-2'>Promociona el desarrollo de conocimientos, habilidades y destrezas para el trabajo, la convivencia social, la comunicación, la actualización cultural y el desarrollo personal</p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-14 p-6 md:p-10'>
                <div className='md:flex bg-white p-5 rounded-lg shadow-md'>
                    <div className='w-full md:w-2/4'>
                        <img src="https://images.pexels.com/photos/12899095/pexels-photo-12899095.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="imagen_secretaria" />
                    </div>
                    <div className='md:pl-10 w-full md:w-2/4'>
                        <p className='text-2xl lg:text-3xl'>Técnicas Secretariales</p>
                        <p className='md:py-8'>Podras brindar apoyo en procesos administrativos, mediante la ejecución de funciones como producción y control documental, comunicación interna y externa, servicio y atención al cliente y manejo de relaciones corporativas, en empresas de todos los sectores.</p>
                        <small className='text-red-600 font-bold' >**Actualmente sin cupo**</small>
                        <br />
                        <button className='rounded-full w-40 p-3 bg-indigo-500 text-white font-bold my-2 hover:bg-indigo-700'>Registrarse</button>
                    </div>
                </div>
                <div className='md:flex bg-white p-5 rounded-lg shadow-md'>
                    <div className='w-full md:w-2/4'>
                        <img src="https://images.pexels.com/photos/4226122/pexels-photo-4226122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="imagen_ingles" />
                    </div>
                    <div className='md:pl-10 w-full md:w-2/4'>
                        <p className='text-2xl lg:text-3xl'>Inglés</p>
                        <p className='py-8'>Este es un curso de inglés con un enfoque conversacional de naturaleza teórico-práctico en modalidad virtual diseñado para que el estudiante se comunique a un nivel principiante en situaciones cotidianas y de interacción sencilla.  </p>
                        <small className='text-red-600 font-bold' >**Actualmente sin cupo**</small>
                        <br />
                        <button className='rounded-full w-40 p-3 bg-indigo-500 text-white font-bold my-2 hover:bg-indigo-700'>Registrarse</button>
                    </div>
                </div>
                <div className='md:flex bg-white p-5 rounded-lg shadow-md'>
                    <div className='w-full md:w-2/4'>
                        <img src="https://images.pexels.com/photos/3202235/pexels-photo-3202235.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="imagen_excel"  />
                    </div>
                    <div className='md:pl-10 w-full md:w-2/4'>
                        <p className='text-2xl lg:text-3xl'>Excel</p>
                        <p className='py-8'>Con Excel podrás realizar desde cálculos básicos para manejar tu negocio, llevar un inventario, como también el dominar todas las funciones y fórmulas que son necesarias para triunfar en el mercado laboral. Además, Excel tiene un lenguaje de programación el cual te permitirá automatizar tareas repetitivas y gestionar mejor tu tiempo.</p>
                        <small className='text-red-600 font-bold' >**Actualmente sin cupo**</small>
                        <br />
                        <button className='rounded-full w-40 p-3 bg-indigo-500 text-white font-bold my-2 hover:bg-indigo-700'>Registrarse</button>
                    </div>
                </div>
                <div className='md:flex bg-white p-5 rounded-lg shadow-md'>
                    <div className='w-full md:w-2/4'>
                        <img src="https://images.pexels.com/photos/3862373/pexels-photo-3862373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="imagen_software" />
                    </div>
                    <div className='md:pl-10 w-full md:w-2/4'>
                        <p className='text-2xl lg:text-3xl'>Diseño de Software</p>
                        <p className='py-8'>En este curso de diseño de software aprenderás a planificar la solución y la representación de una aplicación, bajo la finalidad de consolidar la disminución de riesgos, con relación a la implementación de desarrollos erróneos. Es fácil de aprender y solo se requiere tener conocimientos elementales.</p>
                        <small className='text-red-600 font-bold' >**Actualmente sin cupo**</small>
                        <br />
                        <button className='rounded-full w-40 p-3 bg-indigo-500 text-white font-bold my-2 hover:bg-indigo-700'>Registrarse</button>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Cursos
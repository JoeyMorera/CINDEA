import React from 'react'

const Navbar = () => {
    return (
        <nav className='bg-indigo-500 md:flex md:justify-between text-1xl md:text-2xl text-white md:px-10'>
            <div className='flex h-28 items-center md:items-end justify-center'>
                <a href="/" className='pb-5'>C I N D E A</a>
            </div>
            <ul className='flex'>
                <li className='flex md:items-end items-center hover:bg-indigo-900 h-28 pb-5'><a href="/CINDEA/" className='px-4 '>Inicio</a></li>
                <li className='flex md:items-end items-center hover:bg-indigo-900 h-28 pb-5'><a href="/CINDEA/cursos" className='px-4 '>Cursos</a></li>
                <li className='flex md:items-end items-center hover:bg-indigo-900 h-28 pb-5'><a href="/CINDEA/nosotros" className='px-4 '>Nosotros</a></li>
                <li className='flex md:items-end items-center hover:bg-indigo-900 h-28 pb-5'><a href="/CINDEA/contacto" className='px-4 '>Contacto</a></li>
                <li className='md:flex md:items-end items-center hover:bg-indigo-900 h-28 pb-5 hidden md:visible'><a href="https://www.facebook.com/profile.php?id=541452505874020&paipv=0&eav=AfaqSBr8vsIjX08r2X75mccQPeCN8scQxJHNZpohq7vG4PQkYgQpyauZp1hqzaCekyM&_rdr" className='px-4' target={'_blank'}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-facebook" width="28" height="28" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                    </svg></a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
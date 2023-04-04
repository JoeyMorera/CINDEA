import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='w-full h-screen bg-cover' style={{ backgroundImage: 'url(https://cdn.pixabay.com/photo/2017/03/27/13/17/notebook-2178656_960_720.jpg)' }}>
      <div className='flex justify-center h-screen items-center' style={{backgroundColor: 'rgb(0,0,0,0.5)'}} >
        <div className=' text-center text-white'>
          <h1 className='font-bold text-4xl md:text-7xl uppercase'>Bienvenidos a CINDEA</h1>
          <p className='p-4'>¿Aun no has terminado la primaria o secundaria y deseas alguna formación técnica para incorporarte al mundo laboral?
          </p>
          <p className='pb-4'>  Ingresa para conocer el reglamento</p>
          <button className='rounded-full w-40 p-5 bg-indigo-500 hover:bg-indigo-700 text-white font-bold'>
            <Link to='/nosotros'>Reglamento</Link></button>
        </div>
      </div>
    </div>
  )
}

export default Home
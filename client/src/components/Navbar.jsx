import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <header className='bg-white'>
        <div className=' max-w-[1440px] my-0 mx-auto py-3 px-5 flex items-center justify-between'>
        <Link to="/" className='text-slate-800'>
            <h1 className='text-2xl font-extrabold'>Workout Logger</h1> 
        </Link>
        </div>
    </header>
  )
}

export default Navbar
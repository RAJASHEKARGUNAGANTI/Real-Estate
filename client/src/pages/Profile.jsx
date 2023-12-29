import {useSelector} from 'react-redux'

export default function Profile() {
  const {currentUser} = useSelector(state=>state.user);
  return (
    <div className='p-3 max-w-lg mx-auto  ' >
      <h1 className='text-3xl font-semibold text-center my-7'>Profile</h1>
      <form className='flex flex-col gap-4'>
        <img  className='rounded-full h-24 w-24 object-cover cursor-pointer self-center ' src={currentUser.avatar} alt="Profile" />
        <input className='border p-3 rounded-lg ' id='username' type="text" placeholder='User Name' />
        <input className='border p-3 rounded-lg ' id='email' type="text" placeholder='Email' />
        <input className='border p-3 rounded-lg ' id='password' type="text" placeholder='Password' />
        <button className='bg-slate-700 text-white rounded-lg p-3 uppercase hover:opacity-95 disabled:opacity-80 ' >Update</button>

      </form>
      <div className='flex justify-between mt-5'>
        <span className='text-red-700 cursor-pointer '>Delete Account</span>
        <span className='text-red-700 cursor-pointer '>Sign out</span>
      </div>
    </div>
  )
}

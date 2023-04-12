const Navbar = () => {
  return (
    <div className='flex justify-between items-center w-full bg-blue-500 p-6'>
      <div className='px-4 py-2 text-[25px] font-dmserif text-white'>
        <a href='/' className='decoration-none'>
          Helth.
        </a>
      </div>
      <div className='flex justify-evenly text-[17px] items-center'>
        <button className='px-4 py-2 font-poppins rounded-md mr-8'>
          <a href='/' className='decoration-none'>
            Dashboard
          </a>
        </button>
        <button className='px-4 py-2 font-poppins rounded-md'>
          <a href='/patients' className='decoration-none'>
            All Patients
          </a>
        </button>
      </div>
      <button className='px-4 py-2 bg-red-400 text-[17px] text-white rounded-md'>
        <a href='/logout' className='decoration-none'>
          Logout
        </a>
      </button>{" "}
    </div>
  );
};

export default Navbar;

import bg from '../../assets/bg-2.jpg'
const BanarSection = () => {
    return (
        <div className="max-w-screen-xl h-[500px] mx-auto flex items-center justify-center
        bg-cover bg-center bg-no-repeat rounded-lg mt-12 relative z-30"
        style={{backgroundImage: `url(${bg})`}}>
            <div className='rounded-lg'>
              <div className='text-center space-y-2'>
                <h3 className='text-5xl font-bold text-white z-30'>Discover an exceptional cooking <span className='block'>class tailored for you!</span></h3>
                <p className='text-lg font-normal text-white'>Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding <br /> problems to become an exceptionally well world-class Programmer.</p>
                <div>
                <button className='bg-[#0BE58A] m-4 rounded-full py-1 px-3 text-base font-medium text-black'>Explore Now</button>
                <button className='text-base font-medium  rounded-full py-1 px-3 bg-transparent border border-white text-white'>Our Feedback</button>
              </div>
              </div>
            </div>
            {/* opacity  container*/}
               <div className='absolute w-full h-full bg-black
                left-0 top-0 opacity-30 -z-10 rounded-lg'></div>
        </div>
    );
};

export default BanarSection;
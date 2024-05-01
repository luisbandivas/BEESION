import img1 from "../img/Frame 21.png";
import img2 from "../img/IMAGE_2.png";

const Home = () => {
  return (
    <>
      <div
        className="px-5 pb-16 lg:flex flex-row-reverse 
                   lg:px-10  
                   xl:px-16 xl:py-0"
      >
        <div
          className="py-10 basis-2/4
                     xl:pt-16"
        >
          <p
            className="text-center font-extralight 
                       lg:text-[1rem] 
                       lg:pr-5 lg:text-left 
                       xl:pr-20 xl:text-[1.3rem] xl:font-normal xl:mb-4 font-Poppin"
          >
            Lorem ipsum dolor sit amet consectetur. Facilisi ornare egestas
            nascetur magnis. Dolor sit amet ornare.
          </p>
          <div
            className="pt-2 justify-evenly flex flex-row 
                       sm:justify-around 
                       lg:justify-between"
          >
            <img
              src={img2}
              className="w-[215px] h-[160px] rounded-[20px] 
                         sm:w-[280px] sm:h-[180px] 
                         lg:w-[180px] lg:h-[160px] lg:rounded-[10px]
                         xl:w-[220px] xl:h-[180px]"
            />
            <img
              src={img2}
              className="w-[215px] h-[160px] rounded-[20px] 
                         sm:w-[280px] sm:h-[180px] 
                         lg:w-[180px] lg:h-[160px] lg:rounded-[10px]
                         xl:w-[220px] xl:h-[180px]"
            />
          </div>
        </div>
        <div
          className="flex flex-col  items-center 
                     lg:items-start lg:justify-center 
                     xl:p-0 basis-3/4 xl:pb-7 xl:pt-24"
        >
          <h1
            className="mb-2 text-3xl font-bold 
                       lg:text-6xl font-Poppins  
                       xl:m-0 xl:text-[5rem] xl:font-extrabold xl:mb-4 xl:pt-6"
          >
            AGRARIAN PEST IDENTIFIER
          </h1>
          <button
            className="w-56 h-12 bg-yellow-400 text-[1.5rem] text-black font-medium rounded-3xl 
                       font-Poppins lg:mb-5 lg:w-64 lg:h-16 lg:font-bold"
          >
            See it in action
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;


import Part1 from "@/Component/HomePage/Part1/Part1";
import Part2 from "@/Component/HomePage/Part2/Part2";
import Dashboard from "./dashboard/page";


export default function Home() {
  return (
    <div>
      <div className='md:flex text-center mb-96'>
        {/* <div className='md:w-[20%] bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%  text-[#ffffff] md:h-screen md:fixed md:pt-12 md:top-0'>
                <Sidebar />
            </div> */}
        <div className='md:w-[10%]  md:h-screen md:fixed md:pt-12 md:top-0'>
          <Part1 />
        </div>
        <div>
          <Dashboard></Dashboard>

        </div>


        <div className='md:w-[20%] bg-white md:right-0 md:absolute pb-20'>
          <Part2 />
        </div>
      </div>

    </div>
  );
}

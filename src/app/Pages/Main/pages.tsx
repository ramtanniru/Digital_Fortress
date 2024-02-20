'use client'
import Image from "next/image";
import award from '@/app/assets/Award.svg';
import BG from '@/app/assets/BG.svg';
import { data, data2_1, data2_2 } from "@/app/components/data";
import Card1 from "@/app/components/Card1";
import logo2 from '@/app/assets/Logo2.svg';
import Card2 from "@/app/components/Card2";
function Main() {

  const handleStarted = () => {
    var x = document.getElementById('text1');
    var btn = document.getElementById('getStarted');
    var hero = document.getElementById('hero');
    var head = document.getElementById('head');
    var img = document.getElementById('bg');
    x?.classList.replace('text-lg', 'text-xl');
    btn?.classList.add('hidden');
    hero?.classList.add('text-white');
    img?.classList.add('transition ease-in h-600');
    head?.classList.remove('text-[#E76E26]');
  }

  return (
    <div className="h-screen text-black flex flex-col static">
    <section className="static">
      <div className=' mt-52 flex flex-col gap-10 justify-center w-full absolute'>
        <div className="relative flex flex-col justify-center text-center gap-10 hero">
          <h1 className='head text-7xl text-[#E76E26] tracking-wide'>
          Redefining The Authentication
          </h1>
          <p className=' text-lg w-7/12 text-center mt-2 transition ease-in-out duration-500 mx-auto tracking-normal' id='text1'>It involves using biometric security software to automatically
         recognise people based on their behavioural or biological characteristics.
          </p>
          <button className='btn mx-auto' id="getStarted" onClick={()=>handleStarted()}>Get started</button>
        </div>
        <div className=" h-40 overflow-hidden static mx-auto bottom-0 mt-6 bg"><Image src={BG} width={614} height={109} alt="Image" className=" object-fill"/></div>
      </div>
      <div className='static flex justify-end pt-4 pr-16 items-baseline'>
        <div className="flex justify-center">
          <Image src={award} height={600} width={300} alt="award-image" className="static object-cover"/>
          <div className="absolute flex flex-col justify-center text-center mt-24 gap-2">
            <div className="flex flex-col gap-1">
              <h1 className="anton tracking-wide text-sm">DIGITAL FORTRESS PRIVATE LIMITED</h1>
              <p className="poppins text-xs">Cyber Security</p>
            </div>
            <div className="flex flex-col gap-1">
              <h1 className="anton tracking-wide text-sm">DeepTech AI & Cloud Summit</h1>
              <p className="poppins text-xs">10th Feb 2024</p>
              <p className="poppins-med text-xs">Visakhapatnam</p>
            </div>
          </div>
        </div>  
      </div>
    </section>

    <section className="flex flex-col static">
      <div className="flex flex-row gap-16 justify-center mt-52 mb-6">
          <Card1 arr={data[0]}/>
          <Card1 arr={data[1]}/>
          <Card1 arr={data[2]}/>
      </div>

      <div className="my-56 flex flex-row justify-evenly items-center">
        <div className=" rounded-full bg-[#F6F6F8] py-16 px-24 w-3/12 flex justify-center items-center">
          <Image src={logo2} height={500} width={500} alt="logo" className=" object-cover"/>
        </div>
        <div className=" justify-start flex flex-col gap-4 w-6/12">
          <h1 className=" font-semibold text-2xl">About us</h1>
          <h1 className="font-semibold text-5xl leading-tight">Transform security with 
            Biometric recognition. it’s just a 
            Click away with <span style={{color:"#E76E26"}}> Digital Fortress</span>
          </h1>
          <p className="mt-8 w-10/12 text-sm tracking-wide">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tortor
           id aliquam dignissim risus diam dictum. A lectus in ridiculus viverra id ut dui volutpat volutpat.
            Vulputate sed imperdiet magna ac nunc faucibus. Enim eget egestas ipsum sed sed non ut 
          </p>
          <button className="btn mt-8">See Detail</button>
        </div>
      </div>
    </section>

    <section className="flex flex-col text-center gap-3 w-9/12 mx-auto static">
      <h1 className="font-semibold text-xl">Our Services</h1>
      <h1 className="font-semibold text-4xl">With Quality services for you</h1>
      <div className="mt-10 flex flex-row justify-start gap-16">
        {data2_1.map(x=>(
          <Card2 arr={x}/>
        ))}
      </div>
      <div className="mt-10 flex flex-row justify-end gap-16">
        {data2_2.map(x=>(
          <Card2 arr={x}/>
        ))}
      </div>
    </section>

    <section className="flex flex-col pt-20 pb-36 justify-center text-center gap-10 static">
      <h1 className="font-semibold text-4xl">Contact Us?</h1>
      <p className="text-lg font-extralight">Reach out to us for inquiries. Support, or collaboration opportunities.</p>
      <button className="btn mx-auto">Click here</button>
    </section>
    </div>
  );
}

export default Main;

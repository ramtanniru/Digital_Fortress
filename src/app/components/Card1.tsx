import Image from 'next/image'
const Card1 = ({arr}:any) => {
  return (
    <div className=' w-3/12 flex flex-col px-7 py-14 justify-center items-center text-black gap-3 shadow-inner drop-shadow-2xl bg-[#F6F6F8]'>
      <Image src={arr.img} height={100} width={100} alt='icon' className=''/>
      <h1 className=' font-semibold text-2xl mt-3'>{arr.title}</h1>
      <p className=' font-light text-center text-sm'>{arr.body}</p>
    </div>
  )
}

export default Card1
import Image from "next/image"
const Card2 = ({arr}:any) => {
  return (
    <div className="flex flex-col gap-5 drop-shadow-xl shadow-inner bg-[#ffffff] px-7 py-14 w-5/12">
        <h1 className="font-semibold text-2xl">{arr.title}</h1>
        <div className="flex justify-center items-center">
            <Image src={arr.img} height={100} alt="logo" className="object-contain"/>
        </div>
        <p className="text-sm">{arr.body}</p>
    </div>
  )
}

export default Card2
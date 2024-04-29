import Image from 'next/image';

export default function MyComponent() {
  return (
    <div>
      <h1><center>THIS IS MY FIRST IMAGE TAG</center></h1>
      <div className="flex">
      <Image
        src="/428622097_10159731897687623_5205538449250210583_n.jpg" // Apne image ka path set karein
        alt="alternative"
        width={800}
        height={300}
        loading="lazy"
        className="w-100px h-100px rounded-full"//ya circle type round hoga
        
      />
      <Image
        src="/428622097_10159731897687623_5205538449250210583_n.jpg" // Apne image ka path set karein
        alt="Alternative text for image"
        width={800}
        height={300}
        loading="lazy"
        className='w-[400px] h-[400px] ml-5 rounded-full'//ya round hoga only
      />
    </div>
    </div>
  );
}



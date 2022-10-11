import { Carousel } from "@mantine/carousel";
import Image from 'next/image';


const carouselPictures = [
  {
    src: '/assets/carousel/P6180043.png',
  },
  {
    src: '/assets/carousel/IMG_0326.png',
  },
  {
    src: '/assets/carousel/P6180043.png',
  },
  {
    src: '/assets/carousel/P6180343.JPG',
  }
]



const Compilation: React.FC = () => {
  return (
    <div className="px-8 my-16 flex flex-col gap-y-6">
      <h1 className="font-chonburi text-3xl text-center text-radial">
        ภาพกิจกรรมปีที่แล้ว
      </h1>
      <Carousel
        sx={{ maxWidth: 320 }}
        className="rounded-xl w-full"
        mx="auto"
        withIndicators={true}
      >
        {carouselPictures.map((picture, index) => (
          <Carousel.Slide className='rounded-xl w-full'>
            <Image
              {...picture}
              layout='responsive'
              className='rounded-xl w-full'
              width={4608}
              height={3456}
              key={index}
            />
          </Carousel.Slide>
        ))}
      </Carousel>
    </div>
  );
};

export default Compilation;

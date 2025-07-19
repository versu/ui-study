import { Carousel } from "./Carousel";
import { CarouselItem } from "./CarouselItem";

export default function CarouserPage() {

  return (
    <div className="grid place-content-center">
      <div className="w-[600px]">
        <Carousel>
          <CarouselItem className="basis-1/2 pl-2">
            <div>
              <img alt="item1" src="https://picsum.photos/600/600" width="100%" />
            </div>
          </CarouselItem>
          <CarouselItem className="basis-1/2 pl-2">
            <div>
              <img alt="item2" src="https://picsum.photos/600/600" width="100%" />
            </div>
          </CarouselItem>
          <CarouselItem className="basis-1/2 pl-2">
            <div>
              <img alt="item3" src="https://picsum.photos/600/600" width="100%" />
            </div>
          </CarouselItem>
          <CarouselItem className="basis-1/2 pl-2">
            <div>
              <img alt="item4" src="https://picsum.photos/600/600" width="100%" />
            </div>
          </CarouselItem>
          <CarouselItem className="basis-1/2 pl-2">
            <div>
              <img alt="item4" src="https://picsum.photos/600/600" width="100%" />
            </div>
          </CarouselItem>
        </Carousel>
      </div>
    </div>
  )
}

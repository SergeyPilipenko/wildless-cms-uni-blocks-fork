import '../../react/setup-fixture';
import { CARD, CARD_MINI, CARD_NEW } from '../CarouselCard/CarouselCard.fixture';
import { Carousel } from './Carousel';
import { CarouselCard } from '../CarouselCard/CarouselCard';

const CAROUSEL_CARD_BLOCK = <CarouselCard className="col-span-12" {...CARD} />;

const CAROUSEL_CARD_BLOCK_MINI = <CarouselCard className="col-span-3" {...CARD_MINI} />;

const CAROUSEL_CARD_NEW = <CarouselCard className="col-span-12" {...CARD_NEW} />;

export default {
  default: (
    <div className="container grid grid-cols-12">
      <Carousel
        className="col-span-12"
        cardFullViewCount={1}
        cardWidth={1200}
        isBlur={false}
        isCyclic={true}
        block={{ type: 'Carousel', blocks: new Array(2).fill(CARD).flat() }}
      >
        {[CAROUSEL_CARD_BLOCK, CAROUSEL_CARD_NEW]}
      </Carousel>
    </div>
  ),
  'carousel with mini cards': (
    <div className="container grid grid-cols-12">
      <Carousel
        className="col-span-12"
        cardFullViewCount={3}
        cardWidth={350}
        isBlur={true}
        isCyclic={false}
        block={{ type: 'Carousel', blocks: new Array(5).fill(CARD_MINI).flat() }}
      >
        {[
          CAROUSEL_CARD_BLOCK_MINI,
          CAROUSEL_CARD_BLOCK_MINI,
          CAROUSEL_CARD_BLOCK_MINI,
          CAROUSEL_CARD_BLOCK_MINI,
          CAROUSEL_CARD_BLOCK_MINI,
          CAROUSEL_CARD_BLOCK_MINI,
        ]}
      </Carousel>
    </div>
  ),
};

import { HeaderComponent } from '../../Components/HeaderComponent';
import { Content, PosterImage, PosterTitle, PromotionalPoster } from './styles';
import { Body } from './styles';
import promotionImage from '../../Assets/images/PromotionImage.png';
import { FloatCard } from '../../Components/FloatCard';

export function Home() {
  return (
    <Body>
      <HeaderComponent />
      <Content>
        <PromotionalPoster>
          <PosterImage src={promotionImage} alt="Cartaz Promocional" />
          <PosterTitle>50% de desconto</PosterTitle>
          <FloatCard />
        </PromotionalPoster>
      </Content>
    </Body>
  );
}

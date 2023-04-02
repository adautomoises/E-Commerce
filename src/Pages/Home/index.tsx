import { Body, Content, Info } from "./styles";
import { HeaderComponent } from "../../Components/HeaderComponent";
import { FloatCard } from "../../Components/Home/FloatCard";
import { BestSeller } from "../../Components/Home/BestSeller";
import { AdNews } from "../../Components/Home/AdNews";
import { PromotionalPoster } from "../../Components/Home/PromotionalPoster";

export function Home() {
  return (
    <Body>
      <HeaderComponent />
      <Content>
        <PromotionalPoster />
        <FloatCard />
        <BestSeller />
        <AdNews />
      </Content>
      <Info></Info>
    </Body>
  );
}

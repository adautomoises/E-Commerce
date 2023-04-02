import { Body, Content } from "./styles";
import { HeaderComponent } from "../../Components/HeaderComponent";
import { FooterComponent } from "../../Components/FooterComponent";
import { FloatCard } from "../../Components/Home/FloatCard";
import { BestSeller } from "../../Components/Home/BestSeller";
import { AdNews } from "../../Components/Home/AdNews";
import { PromotionalPoster } from "../../Components/Home/PromotionalPoster";
import { PageInfo } from "../../Components/Home/PageInfo";

export function Home() {
  return (
    <Body>
      <HeaderComponent />
      <Content>
        <PromotionalPoster />
        <FloatCard />
        <BestSeller />
        <AdNews />
        <PageInfo />
      </Content>
      <FooterComponent />
    </Body>
  );
}

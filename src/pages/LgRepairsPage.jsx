import BrandPageTemplate from "../components/BrandPageTemplate";
import { brandPages } from "../data/brandPages";

export default function LgRepairsPage() {
  return <BrandPageTemplate data={brandPages.lg} />;
}

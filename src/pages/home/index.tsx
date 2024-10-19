import Assurance from "./Assurance";
import CustomerList from "./CustomerList";
import CustomerReview from "./CustomerReview";
import HighlightedCustomer from "./HighlightedCustomer";
import { HomeCarousel } from "./HomeCarousel";
import ServiceList from "./ServiceList";

export default function HomePage() {
  return (
    <>
      <HomeCarousel />
      <ServiceList />
      <Assurance />
      <CustomerReview />
      <CustomerList />
      <HighlightedCustomer />
    </>
  );
}

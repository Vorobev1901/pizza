import { Container, Heading, Categroies, Sort, Filters } from "@/components/index";
import ProductGroupList from "./ProductGroupList";

function Home() {
  return (
    <>
      <Container className="mt-10">
        <Heading level="1" className="mb-5">
          Все пиццы
        </Heading>
        <div className="flex justify-between items-start mb-9">
          <Categroies />
          <Sort />
        </div>
        <div className="flex gap-x-12">
          <div className="max-w-60">
            <Filters />
          </div>
          <div className="w-full">
            <ProductGroupList />
          </div>
        </div>
      </Container>
    </>
  );
}

export default Home;

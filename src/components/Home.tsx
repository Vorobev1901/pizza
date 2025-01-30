import {
  Container,
  Heading,
  Categroies,
  Sort,
  Filters,
  ProductGroupList,
  SkeletonGroupList,
  Paginator
} from "@/components/index";
import { useState } from "react";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import { useQuery } from "react-query";

type TVariant = {
  size: string;
  price: number;
};

export type TProduct = {
  id: number;
  title: string;
  category: string;
  type: string;
  variants: TVariant[];
  description: string;
  defaultIngredients: string[];
  optionalIngeredients?: string[];
  imageUrl: string;
};

async function fetchPizzas(page: number, limit: number) {
  return (await axios.get(
    `https://be59c100963cd288.mokky.dev/pizzas?page=${page}&limit=${limit}`
  )).data;
}

function Home() {
  const [searchParams, setSearchParams] = useSearchParams();
  
  const page = Number(searchParams.get("page")) || 1;
  const limit = Number(searchParams.get("limit")) || 6;

  const [currentPage, setCurrentPage] = useState<number>(page);
  const [currentLimit] = useState<number>(limit);

  const {data, isLoading, isError} = useQuery(
    ['pizzas', currentPage], 
    ()  => fetchPizzas(currentPage, currentLimit),
    {
      keepPreviousData: true,
    }
  );

  function changePage(page: number) {
    setCurrentPage(page);

    if (page === 1) {
      searchParams.delete("page");
      searchParams.delete("limit");
    } else {
      searchParams.set("page", page.toString());
      searchParams.set("limit", currentLimit.toString());
    }
    
    setSearchParams(searchParams);
  }
  
  return (
    <>
      <Container className="mt-10 mb-16">
        <Heading level="1" className="mb-5">
          Все пиццы
        </Heading>
        <div className="flex justify-between items-start mb-9">
          <Categroies />
          <Sort />
        </div>
        <div className="flex gap-x-12">
          <div className="max-w-60 w-full">
            <Filters />
          </div>
          <div className="w-full flex flex-col gap-y-16">
            {
              !isLoading && !isError ?
              <ProductGroupList products={data.items}/> :
              <SkeletonGroupList length={limit || 6}/>
            }
           
            { !isLoading && !isError && (
              <Paginator meta={data.meta} changePage={changePage} />
            )}
          </div>
        </div>
      </Container>
    </>
  );
}

export default Home;

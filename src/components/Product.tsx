import {
  Container,
  Heading,
  BreadcrumbWithCustomSeparator,
  ProductToggleVariants,
  ProductToggleIngredines,
  ProductGroupList,
  SkeletonGroupList,
} from "@/components/index";
import axios from "axios";
import { FC } from "react";
import { useQuery } from "react-query";
import { useLocation, useParams } from "react-router-dom";
import { TProduct } from "./Home";
import { Ingredient } from "./Filters";
import { Button } from "./ui";

async function fetchProduct(id: string): Promise<TProduct> {
  return (await axios.get(`https://be59c100963cd288.mokky.dev/pizzas/${id}`))
    .data;
}

const Product: FC = () => {
  const params = useParams();
  const location = useLocation();
  const productId = params.id as string;

  const { data, isLoading } = useQuery(
    ["product", location],
    () => fetchProduct(productId),
    {
      keepPreviousData: true,
    }
  );

  const recommendedProducts: TProduct[] = [
    {
      id: 1,
      title: "Сырный цыпленок",
      category: "meat",
      type: "traditional",
      variants: [
        {
          size: 20,
          price: 300,
        },
        {
          size: 30,
          price: 425,
        },
        {
          size: 40,
          price: 595,
        },
      ],
      description:
        "Пряная говядина, пикантная пепперони, острые колбаски чоризо, соус кола-барбекю, моцарелла и фирменный томатный соус",
      defaultIngredients: [
        "Сырный соус",
        "Моцарелла",
        "Чеснок",
        "Солённые огурчики",
        "Красный лук",
        "Томаты",
      ],
      optionalIngeredients: [
        "Пряная говядина",
        "пикантная пепперони",
        "острые колбаски чоризо",
        "Моцарелла",
      ],
      imageUrl:
        "https://media.dodostatic.net/image/r:584x584/11ee7d6149eb101d8727573088fa2eff.avif",
    },
    {
      id: 2,
      title: "Диабло",
      category: "meat",
      type: "traditional",
      variants: [
        {
          size: 20,
          price: 395,
        },
        {
          size: 30,
          price: 495,
        },
        {
          size: 40,
          price: 595,
        },
      ],
      description:
        "Острая чоризо, острый перец халапеньо, соус барбекю, митболы, томаты, сладкий перец, красный лук, моцарелла",
      defaultIngredients: [
        "Сырный соус",
        "Моцарелла",
        "Чеснок",
        "Солённые огурчики",
        "Красный лук",
        "Томаты",
      ],
      imageUrl:
        "https://media.dodostatic.net/image/r:584x584/11ee7d610d2925109ab2e1c92cc5383c.avif",
    },
    {
      id: 3,
      title: "Чизбургер-пицца",
      category: "meat",
      type: "traditional",
      variants: [
        {
          size: 20,
          price: 395,
        },
        {
          size: 30,
          price: 495,
        },
        {
          size: 40,
          price: 595,
        },
      ],
      description:
        "Мясной соус болоньезе, соус бургер, соленые огурчики, томаты, красный лук, моцарелла",
      defaultIngredients: [
        "Сырный соус",
        "Моцарелла",
        "Чеснок",
        "Солённые огурчики",
        "Красный лук",
        "Томаты",
      ],
      imageUrl:
        "https://media.dodostatic.net/image/r:584x584/11ef12b2f6afd043932efbbaf24f90df.avif",
    },
    {
      id: 4,
      title: "Пепперони фреш",
      category: "meat",
      type: "traditional",
      variants: [
        {
          size: 20,
          price: 395,
        },
        {
          size: 30,
          price: 495,
        },
        {
          size: 40,
          price: 595,
        },
      ],
      description:
        "Пряная говядина, пикантная пепперони, острые колбаски чоризо, соус кола-барбекю, моцарелла и фирменный томатный соус",
      defaultIngredients: [
        "Сырный соус",
        "Моцарелла",
        "Чеснок",
        "Солённые огурчики",
        "Красный лук",
        "Томаты",
      ],
      optionalIngeredients: [
        "Пряная говядина",
        "пикантная пепперони",
        "острые колбаски чоризо",
        "Моцарелла",
      ],
      imageUrl:
        "https://media.dodostatic.net/image/r:584x584/11ee7d612fc7b7fca5be822752bee1e5.avif",
    },
  ];

  const ingredients: Ingredient[] = [
    {
      id: "1",
      imageUrl:
        "https://cdn.dodostatic.net/static/Img/Ingredients/11ef5ed5f8f64595a6d6a99c1fe6f7f0.png",
      name: "ingredient",
      title: "Пряная говядина",
      value: "cheese",
      price: 199,
    },
    {
      id: "2",
      imageUrl:
        "https://cdn.dodostatic.net/static/Img/Ingredients/cdea869ef287426386ed634e6099a5ba.png",
      name: "ingredient",
      title: "Моцарелла",
      value: "mozzarella",
      price: 100,
    },
    {
      id: "3",
      imageUrl:
        "https://cdn.dodostatic.net/static/Img/Ingredients/000D3A22FA54A81411E9AFA69C1FE796",
      name: "ingredient",
      title: "Сыры чеддер и пармезан",
      value: "garlic",
      price: 128,
    },
    {
      id: "4",
      imageUrl:
        "https://cdn.dodostatic.net/static/Img/Ingredients/11ee95b6bfdf98fb88a113db92d7b3df.png",
      name: "ingredient",
      title: "Острый перец халапеньо",
      value: "cucumbers",
      price: 179,
    },
  ];

  return (
    <>
      <Container className="mt-10 mb-16">
        {data ? (
          <>
            <BreadcrumbWithCustomSeparator
              breadcrumbPageText={data.title}
              className={"mb-10"}
            />
            <div className="flex gap-12 mb-20">
              <div className="max-w-[570px] aspect-square w-full flex justify-center items-center bg-secondary">
                <img
                  className="w-5/6 aspect-square object-cover object-center"
                  src={data.imageUrl}
                  width={500}
                  height={500}
                  loading="lazy"
                  alt={data.title}
                />
              </div>
              <div className="w-full flex flex-col items-start">
                <Heading size={"xl"} text={data.title} />
                <div className="text-sm text-muted-foreground mb-4">
                  <p>
                    {data.variants[0].size} cм,{" "}
                    {data.type === "traditional" &&
                      "традиционное тесто 25, 380 г"}
                  </p>
                </div>
                <ProductToggleVariants
                  defaultValue={"Маленькая"}
                  variants={["Маленькая", "Средняя", "Большая"]}
                  className="mb-5 justify-start max-w-[420px] w-full"
                />
                <ProductToggleVariants
                  defaultValue={"Тонкое"}
                  variants={["Традиционное", "Тонкое"]}
                  className="mb-5 justify-start max-w-[420px] w-full"
                />
                <div className="flex flex-col gap-y-4">
                  <Heading text={"Ингредиенты"} size="sm" />
                  <ProductToggleIngredines
                    ingredients={ingredients}
                    defaultValue={["mozzarella"]}
                  />
                </div>
                <Button
                  variant={"default"}
                  className="mt-auto font-base"
                  size={"lg"}
                >
                  Добавить в корзину за {data.variants[0].price}₽
                </Button>
              </div>
            </div>
            <div className="flex flex-col gap-y-7">
              <Heading text="Рекомендации" />
              {!isLoading ? (
                <ProductGroupList products={recommendedProducts} className="grid grid-cols-4 gap-6"/>
              ) : (
                <SkeletonGroupList length={6} className="grid grid-cols-4 gap-6"/>
              )}
            </div>
          </>
        ) : (
          <div>Товар не найден</div>
        )}
      </Container>
    </>
  );
};

export default Product;

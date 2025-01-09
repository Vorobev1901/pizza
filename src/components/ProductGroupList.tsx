import ProductCard from "./ProductCard";

const ProductGroupList = () => {
  const description =
    "Острая чоризо, острый перец халапеньо, соус барбекю, митболы, томаты, сладкий перец, красный лук, моцарелла";
  const imageUrl =
    "https://media.dodostatic.net/image/r:584x584/11ee7d6149eb101d8727573088fa2eff.avif";
  const optionalIngredients = [
    "Сырный бортик",
    "Сливочная моцарелла",
    "Сыры чеддер и пармезан",
  ];

  return (
    <ul className="grid grid-cols-3 gap-12">
      <ProductCard
        title={"Сырный цыпленок"}
        price={449}
        description={description}
        imageUrl={imageUrl}
        optionalIngredients={optionalIngredients}
      />
      <ProductCard
        title={"Диабло"}
        price={395}
        description={description}
        imageUrl={imageUrl}
      />
      <ProductCard
        title={"Чизбургер-пицца"}
        price={649}
        description={description}
        imageUrl={imageUrl}
      />
    </ul>
  );
};

export default ProductGroupList;

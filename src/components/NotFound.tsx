import { Heading, Categroies } from "@/components/index";

function NotFound() {
  return (
    <>
      <div className="container mx-auto mt-10">
        <Heading level="1" className="mb-5 text-5xl font-JetBrains">
          Страница не найдена
        </Heading>
        <Categroies />
      </div>
    </>
  );
}

export default NotFound;

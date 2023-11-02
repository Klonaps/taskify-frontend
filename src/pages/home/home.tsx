import { CreateCategoryModal } from "@features/create-category-modal";
import { Sidebar } from "@widgets/sidebar"

export const Home = () => {
  

  return (
    <>
      <div className="w-full h-full flex py-5">
        <Sidebar />
        <section></section>
      </div>
      <CreateCategoryModal />
    </>
  );
}

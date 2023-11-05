import { AnimatePresence } from "framer-motion"

import { Sidebar } from "@widgets/sidebar"
import { CreateCategoryModal } from "@features/create-category-modal"
import { useModalStore } from "@shared/model/store"

export const Home = () => {
  const isCategoryCreateModalOpen = useModalStore((state) => state.isCreateCategoryModalOpen)

  return (
    <>
      <div className="w-full h-full flex py-5">
        <Sidebar />
        <section></section>
      </div>
      <AnimatePresence mode="wait">
        {isCategoryCreateModalOpen && <CreateCategoryModal />}
      </AnimatePresence>
    </>
  );
}

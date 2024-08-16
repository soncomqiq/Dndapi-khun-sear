import DndCard from "@/components/dndCard";
import SearchForm from "@/components/searchForm";
import { useDndListStore } from "@/store/dndList";
import { LoadingOverlay } from "@achmadk/react-loading-overlay";

const HomePage = () => {
  const { dnd, fetchDnd } = useDndListStore();

  console.log(dnd);

  return (
    <div className="m-[auto]">
      <div className=" ">
        <img src="/image/DnD.png" className="max-h-[120px] mt-[50px]" />
      </div>
      <SearchForm />

      {fetchDnd.loading && (
        <div className="h-[600px] flex justify-center items-center">
          <LoadingOverlay
            spinner
            text="Loading your content..."
          ></LoadingOverlay>
        </div>
      )}

      {!fetchDnd.loading && (
        <div className=" grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-[20px] mt-[50px]">
          {dnd.data?.map((item) => {
            return (
              <DndCard
                image={item.image}
                name={item.name}
                type={item.type}
                size={item.size}
                index={item.index}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default HomePage;

import ProfileCarousel from "./components/autoscrollcards";
import "./index.css";
import CardsSection from "./components/cardsSection";
import YellowSection from "./components/yellowSection";
import { withHeaderFooter } from "../../components/hoc";
import CategoryCarousel from "./components/categoryCarousel";
import { useCategories, useItems, useProfiles } from "../../api/query";
import { useLayoutEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUserFromLocalStorage } from "../../redux/authSlice";
import withDataLayout from "../../components/layouts/dataLayout";
import { addCollection, toggleModal } from "../../redux/collectionSlice";
import CollectionModal from "./components/collectionmodal";
// import { Loading } from "../../assets";


const ProfileCarouselComponent = withDataLayout(ProfileCarousel);
const CardSectionComponent = withDataLayout(CardsSection);
const CategoryCarouselComponent = withDataLayout(CategoryCarousel);

const HomePage = () => {
  const {
    data: profiles,
    error: profilesError,
    isLoading: isProfilesLoading,
  } = useProfiles();
  const {
    data: items,
    error: itemsError,
    isLoading: isItemsLoading,
  } = useItems();
  const {
    data: categories,
    error: categoriesError,
    isLoading: isCategoriesLoading,
  } = useCategories();

  const { user } = useSelector((state) => state.auth);
  const isModalOpen = useSelector((state) => state.collection.isModalOpen);

  const dispatch = useDispatch();


  useLayoutEffect(()=>{
      dispatch(setUserFromLocalStorage());
  },[dispatch]);

  const handleCreateCollection = (collection) => {
    dispatch(addCollection(collection));
  };


 


  return (
    <>
      <div className="flex flex-col items-center">
        {!user && (
          <>
            <div className="rounded-3xl px-5 py-1.5 bg-color-change animate-color-change mt-24 text-center mx-10">
              <p className="text-gray-800 font-semibold">
                Over 3 million ready-to-work creatives!
              </p>
            </div>
            <div className="flex flex-col items-center mt-10 font-[525] text-center mx-10 heading">
              <h1 className="text-5xl md:text-7xl tracking-wider">
                The world’s destination
              </h1>
              <h1 className="text-5xl md:text-7xl tracking-wider">
                for design
              </h1>
            </div>
            <p className="mx-10 mt-10 text-lg md:text-xl text-center">
              Get inspired by the work of millions of top-rated designers &
              agencies around the world.
            </p>
            <div className="mt-10 text-sm flex justify-center mx-10">
              <button
                className={`font-[525] p-4 bg-black text-white border-none rounded-full w-32 hover:opacity-60`}
              >
                {"Get started"}
              </button>
            </div>
          </>
        )}
      </div>
      {!user && (
        <ProfileCarouselComponent
          data={profiles}
          error={profilesError}
          isLoading={isProfilesLoading}
        />
      )
      }
      <CardSectionComponent
        data={items}
        error={itemsError}
        isLoading={isItemsLoading}
      />
      {!user && <YellowSection />}
      {!user && (
        <CategoryCarouselComponent
          data={categories}
          error={categoriesError}
          isLoading={isCategoriesLoading}
        />
      )}
        {isModalOpen && (
        <CollectionModal
          onClose={() => {dispatch(toggleModal())}}
          onCreate={handleCreateCollection}
        />
      )}
    </>
  );
};

const Home = withHeaderFooter(HomePage);

export default Home;

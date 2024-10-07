import { withHeaderFooter } from "../../components/hoc";
import { useDispatch, useSelector } from "react-redux";
import { useLayoutEffect } from "react";
import { setUserFromLocalStorage } from "../../redux/authSlice";
import OutlineButton from "../../components/common/outlineButton";
import { Placeholder, UploadCard } from "./components/accountpagecard";

const AccountPage = () => {
  const { user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  useLayoutEffect(() => {
    dispatch(setUserFromLocalStorage());
  }, [dispatch]);

  return (
    <div className="flex flex-col items-start md:items-center">
      <div className="mt-12 flex gap-6 justify-between mx-10">
        <img
          src={"https://placehold.co/100x100?text=V"}
          className="rounded-full w-20 h-20 cursor-pointer"
          alt="User Avatar"
        />
        <div className="flex flex-col gap-4">
          <p className="text-3xl">{user?.username}</p>
          <p className="heading1 font-medium">Erode, India</p>
          <div className="flex gap-3">
            <OutlineButton
              text={"Edit Profile"}
              width={"32"}
              padding={"3"}
              borderColor="gray-300"
            />
            <OutlineButton
              text={"..."}
              width={"10"}
              padding={"3"}
              borderColor="gray-300"
            />
          </div>
        </div>
      </div>
      <div className="w-full lg:w-11/12 overflow-hidden whitespace-nowrap">
        <ul className="flex gap-8 lg:gap-10 list-none p-10 border-b border-gray-400 overflow-hidden">
          <li>Work</li>
          <li>Boosted shots</li>
          <li>Collections</li>
          <li>Liked shots</li>
          <li className="relative">
            About
            <span className="block md:hidden absolute right-[-1rem] top-1/2 transform -translate-y-1/2 bg-white pl-2 text-gray-600">
              &gt;
            </span>
          </li>
        </ul>
      </div>

      <div className="w-full flex justify-center self-center lg:justify-start mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-3 lg:gap-8 min-w-fit mx-16 lg:mx-32">
          <UploadCard />
          <Placeholder />
          <Placeholder />
          <Placeholder />
          <Placeholder />
        </div>
      </div>
    </div>
  );
};

const Account = withHeaderFooter(AccountPage);

export default Account;

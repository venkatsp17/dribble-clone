/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

import React, { useState } from "react";
import PropTypes from "prop-types";
import { IoCloseSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { timeAgo } from "../../../../utility";
import { FaMinusSquare } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import {
  addItemToCollection,
  removeItemFromCollection,
} from "../../../../redux/collectionSlice";

const CollectionModal = ({ onClose, onCreate }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [query, setQuery] = useState("");
  const [errors, setErrors] = useState({ name: "", description: "" });
  const collections = useSelector((state) => state.collection.collections);
  const itemToAdd = useSelector((state) => state.collection.changeState);
  const [createCollectionToggle, setcreateCollectionToggle] = useState(collections.length == 0);

  const validate = () => {
    const errors = {};
    if (!name.trim()) {
      errors.name = "Name is required";
    } else if (name.length > 64) {
      errors.name = "Name cannot exceed 64 characters";
    }

    if (description.length > 160) {
      errors.description = "Description cannot exceed 160 characters";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleCreate = () => {
    setcreateCollectionToggle(!createCollectionToggle);
    if (validate()) {
      onCreate({
        name,
        description,
        items: [itemToAdd?.item],
      });
      setName("");
      setDescription("");
      //   onClose();
    }
  };

  const handleCollectionAdd = (collection) =>{
        console.log(collection.items);

        if(collection.items.find((item)=>item.id == itemToAdd.item.id)){
            
            dispatch(removeItemFromCollection({collectionId: collection.id, itemId: itemToAdd.item.id}))
        }
        else{
            dispatch(addItemToCollection({collectionId: collection.id, item: itemToAdd.item}))
        }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-[625px] h-[495px] p-14 absolute top-5">
        {collections.length == 0 || createCollectionToggle ? (
          <>
            <IoCloseSharp
              className="absolute top-0 right-0 p-1"
              size={30}
              onClick={onClose}
            />
            <h2 className="text-sm font-semibold mb-4 text-gray-800 pb-4 border-b border-gray-400">
              Create a new collection
            </h2>
            <form>
              <div className="mb-4">
                <div className="flex justify-between heading1">
                  <label className="block text-md font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <p className="text-sm text-gray-400">{64 - name.length}</p>
                </div>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  maxLength="64"
                  className={`block w-full px-3 py-4 border ${
                    errors.name ? "border-red-500" : "border-gray-300"
                  } rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-200 focus:border-pink-200`}
                />
                {errors.name && (
                  <p className="text-sm text-red-600 mt-1">{errors.name}</p>
                )}
              </div>

              <div className="mb-4">
                <div className="flex justify-between heading1">
                  <label className="block text-md font-medium text-gray-700 mb-1 heading1">
                    Description (optional)
                  </label>
                  <p className="text-sm text-gray-400">
                    {160 - description.length}
                  </p>
                </div>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  maxLength="160"
                  rows={5}
                  className={`block w-full px-3 py-2 border ${
                    errors.description ? "border-red-500" : "border-gray-300"
                  } rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-200 focus:border-pink-200`}
                />
                {errors.description && (
                  <p className="text-sm text-red-600 mt-1">
                    {errors.description}
                  </p>
                )}
              </div>

              <p className="text-xs text-gray-500 mb-4">
                URLs are hyperlinked. Only &lt;a&gt; allowed.
              </p>

              <div className="flex justify-start space-x-2">
                <button
                  type="button"
                  onClick={handleCreate}
                  className="bg-black hover:opacity-80 text-white font-medium py-2 px-4 rounded-3xl text-sm"
                >
                  Create Collection
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-2 px-4 rounded-3xl text-sm"
                >
                  Cancel
                </button>
              </div>
            </form>
          </>
        ) : (
          <>
            <IoCloseSharp
              className="absolute top-0 right-0 p-1"
              size={30}
              onClick={onClose}
            />
            <h2 className="text-sm font-semibold mb-4 text-gray-800 pb-4 border-b border-gray-400">
              Add this Shot to a new collection
            </h2>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Filter collections"
              className={`block w-full px-3 py-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-200 focus:border-pink-200`}
            />
            <div className="flex flex-col w-full mt-2 h-[250px] overflow-y-scroll">
              {collections.map((collection) => {
                return (
                  <div
                    onClick={()=>handleCollectionAdd(collection)}
                    key={collection.id}
                    className="group w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 flex gap-3 items-center justify-between"
                  >
                    <div className="flex gap-3">
                      <img
                        className="w-20 h-16"
                        src="https://cdn.dribbble.com/assets/project-placeholder-174132c5b3ea6701610d6403d218a40553a135502361ef6d101acc84d79144a8.png"
                      />
                      <div className="flex flex-col justify-evenly">
                        <p>{collection.name}</p>
                        <p className="heading1 text-xs">
                          {collection.items.length} shots
                        </p>
                        <p className="heading1 text-xs">
                          {timeAgo(collection.timestamp)}
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-items-end">
                      {collection.items.find(
                        (item) => item.id == itemToAdd.item.id
                      ) ? (
                        <>
                        <FaMinusSquare
                          size={30}
                          color="gray"
                          className="hidden group-hover:block"
                        />
                        <TiTick
                          size={30}
                          color="gray"
                          className="block group-hover:hidden"
                        />
                      </>
                      ) : (
                        <></>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="flex justify-between space-x-2">
              <button
                type="button"
                onClick={handleCreate}
                className="bg-transparent hover:opacity-80 border border-gray-300 text-black font-medium py-2 px-4 rounded-3xl text-sm"
              >
                Create new Collection
              </button>
              <button
                type="button"
                onClick={onClose}
                className="bg-black hover:bg-gray-300 text-white font-medium py-2 px-4 rounded-3xl text-sm"
              >
                Done
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

CollectionModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  onCreate: PropTypes.func.isRequired,
};

export default CollectionModal;

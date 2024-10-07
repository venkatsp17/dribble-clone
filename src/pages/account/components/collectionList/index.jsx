// import React from 'react';
import PropTypes from "prop-types";

const CollectionList = ({ collections }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 p-10 lg:px-14 w-full">
      {collections.map((collection) => (
        <div key={collection.id} className="p-4 rounded-lg">
          <div className="relative h-80">
            <div className="h-1/2 mb-2">
              {collection.items[0] ? (
                <div className="w-full h-full bg-gray-300 rounded-md overflow-hidden">
                  <img
                    src={collection.items[0].image}
                    alt="Big Item"
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                <div className="w-full h-full bg-gray-300  rounded-md"></div>
              )}
            </div>

            <div className="grid grid-cols-3 gap-1 h-1/2">
              {collection.items.slice(1, 4).map((item, index) => (
                <div key={index} className="relative w-full h-full bg-gray-300 rounded-md overflow-hidden">
                  <img
                    src={item.image}
                    alt={`Item ${index + 1}`}
                    className="w-full h-full object-contain"
                  />
                </div>
              ))}
              {collection.items.length < 4 && [...Array(4 - collection.items.length)].map((_, i) => (
                <div key={i} className="w-full h-full bg-gray-300  rounded-md"></div>
              ))}
            </div>
          </div>

          <div className="text-center mt-2">
            <p className="font-bold">{collection.name}</p>
            <p className="text-gray-500">{collection.items.length} items</p>
          </div>
        </div>
      ))}
    </div>
  );
};

CollectionList.propTypes = {
  collections: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      items: PropTypes.arrayOf(
        PropTypes.shape({
          imageUrl: PropTypes.string.isRequired,
        })
      ),
    })
  ).isRequired,
};

export default CollectionList;

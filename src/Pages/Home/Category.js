import React from "react";

const Category = ({ category }) => {
  return (
    <div className="card w-100 bg-gray-600 text-zinc-300 shadow-xl ">
      {/* <figure className="px-10 pt-10">
        <img
          src="https://api.lorem.space/image/shoes?w=400&h=225"
          alt="Shoes"
          className="rounded-xl"
        />
      </figure> */}
      <div className="card-body items-center text-center">
        <h2 className="card-title ">{category.name}</h2>
        {/* <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions">
          <button className="btn btn-primary">Buy Now</button>
        </div> */}
      </div>
    </div>
  );
};

export default Category;

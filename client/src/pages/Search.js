import React from "react";
import Layout from "./../components/layout/Layout";
import { useSearch } from "../context/search";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [values, setValues] = useSearch();
  const navigate = useNavigate();

  return (
    <Layout title={"Search results"}>
      <div className="container">
        <div className="text-center">
          <h1>Search Results</h1>
          <h6>
            {values?.results.length < 1
              ? "No Products Found"
              : `Found ${values?.results.length}`}
          </h6>
          <div className="d-flex flex-wrap mt-4">
            {values?.results.map((p) => (
              <div className="card m-2" style={styles.card}>
                <img
                  src={`/api/v1/product/product-picture/${p._id}`}
                  className="card-img-top"
                  alt={p.name}
                />
                <div className="card-body">
                  <h5 className="card-title">{truncateName(p.name)}</h5>
                  <p className="card-text">{truncateDescription(p.description)}</p>
                  <p className="card-text">₹{p.price}</p>
                  <div className="CartButton">
                    <button
                      className="btn btn-info"
                      onClick={() => navigate(`/product/${p.slug}`)}
                      style={styles.button}
                    >
                      More Details
                    </button>
                    <button className="btn btn-secondary ms-1" style={styles.button}>
                      ADD TO CART
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Search;

// CSS Styles
const styles = {
  card: {
    width: "18rem",
    boxShadow: "0 4px 8px 0 rgba(0,0,0,0.5)",
    transition: "0.3s",
    borderRadius: "5px",
    marginBottom: "20px",
  },

};

// Function to truncate name to first 3 words
const truncateName = (name) => {
  const words = name.split(" ");
  return words.slice(0, 3).join(" ");
};

// Function to truncate description to 30 characters
const truncateDescription = (description) => {
  return description.length > 30 ? description.substring(0, 30) + "..." : description;
};

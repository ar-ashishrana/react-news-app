import { useEffect, useState } from "react";
import Card from "../components/Card";
import { useStateContext } from "../context/ContextProvider";

const Home = () => {
  const {
    setSearch,
    newsData,
    loading,
    handleScroll,
    error,
    fetchInitialNews
  } = useStateContext();

  useEffect(() => {
    setSearch("india");
    fetchInitialNews();
  }, []);

  useEffect(() => {
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll); // Cleanup listener on unmount
  }, [loading]);

  return (
    <>
      {loading && !newsData.length ? (
        <div className="text-center">
          <h2>Loading...</h2>
        </div>
      ) : (
        <div className='container'>
          <div className="row">
              {newsData.map(
                (item, index) =>
                  item.author && (
                    <div className="col-md-3 " key={index}>
                      <Card
                        title={item.title}
                        desc={item.description}
                        author={item.author}
                        image={item.urlToImage}
                        source={item.source.name}
                        url={item.url}
                      />
                    </div>
                  )
              )}
          </div>
        </div>
      )}
      {error ? (
        <div>Something went wrong: {error}</div>
      ):
        (loading && newsData.length > 0 && (
        <div className="text-center">
          <h2>Loading more news...</h2>
        </div>)
      )}
    </>
  );
};

export default Home;

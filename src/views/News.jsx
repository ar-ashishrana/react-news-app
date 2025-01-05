import { useEffect } from 'react'
import { useParams } from 'react-router'
import { useStateContext } from '../context/ContextProvider';
import Card from '../components/Card';

const News = () => {
    const {name} = useParams();
    const { search, setSearch, setLoading, getNews, newsData, loading, handleScroll, fetchInitialNews } = useStateContext();
    useEffect(()=>{
        setSearch(name);
    },[name]);
    

    useEffect(() => {
        fetchInitialNews();
      }, [search, name]);

      useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll); // Cleanup listener on unmount
    }, [loading]);

  return (
    <> 
        <h2>{name.charAt(0).toUpperCase()+name.slice(1)} News: </h2>
        <hr />
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
      {(
        loading && newsData.length > 0 && (
        <div className="text-center m-5">
          <h6>Loading more news...</h6>
        </div>
        )
        )}
    </>
  )
}

export default News

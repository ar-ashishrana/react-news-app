import { createContext, useState, useContext, useEffect } from "react";

const StateContext = createContext({
    search: "india",
    newsData: [],
    loading: false,
    page: 1,
    getNews: ()=>{},
    setSearch: ()=>{},
    setNewsData: ()=>{},
    loadMore: ()=>{},
    error: '',
    setError:()=>{},
    handleScroll: ()=>{},
    fetchInitialNews: ()=>{}
});

export const ContextProvider = ({children})=>{
    const [search, _setSearch] = useState('india');
    const [loading, _setLoading] = useState(false);
    const [page, _setPage] = useState(1);
    const [newsData, _setNewsData] = useState([]);
    const [error, _setError] = useState('');
    // 48ec0af7e8144ce9896a4cb12b56cbb6
    // 07994821b3814252b570c1e4962bcd41
    // 084289e218c14ee2a6cf857a871ff3ff

    const getNews = async () => {
        setLoading(true)
        try {
            // const res = await fetch(`https://newsapi.org/v2/everything?q=${search}&pageSize=20&page=${page}&apiKey=${import.meta.env.VITE_API_API_KEY}`);
            const res = await fetch(`https://newsapi.org/v2/everything?q=${search}&pageSize=20&page=${page}&apiKey=07994821b3814252b570c1e4962bcd41`);
            const data = await res.json();
            _setNewsData(data.articles);
        } catch (error) {
            console.error("Error fetching news:", error);
            setError(error);
        }finally{
            setLoading(false)
        }
    };
    const setError = (error) => {
        _setError(error);
    };
    const loadMore = async () => {
        if (loading) return; // Prevent multiple simultaneous fetches
        try {
          setLoading(true);
          if(page>=5){
            setPage(1);
          }
          const res = await fetch(
            `https://newsapi.org/v2/everything?q=${search}&pageSize=10&page=${page+1}&apiKey=07994821b3814252b570c1e4962bcd41`
          );
          const data = await res.json();
          console.log(data.status)
          if(data.status === "error"){
            setError("Some Error occured");
            console.log(error)
            return;
          }
          if (data.articles) {
            setNewsData((prevNews) => [...prevNews, ...data.articles]); // Append new data.
            setPage((prevPage) => prevPage + 1);   
          }
        } catch (error) {
          console.error("Error in loading more news:", error);
          setError(error);
        } finally {
          if(!error){
              setLoading(false);
            }
        }
      };
      const handleScroll = () => {    
        if (window.innerHeight + document.documentElement.scrollTop + 2 >= document.documentElement.offsetHeight ) {
          loadMore();
        }
      };
      const fetchInitialNews = () => {
        setLoading(true);
        getNews();
        setLoading(false);
    };
    const setPage = (newPage) => {
        if (typeof newPage === "function") {
          _setPage((prevPage) => {
            const updatedPage = newPage(prevPage);
            // console.log("Page updated to:", updatedPage);
            return updatedPage;
          });
        } else {
        //   console.log("Page updated to:", newPage);
          _setPage(newPage);
        }
      };
    const setSearch = (searchData) => {
        _setSearch(searchData);
    };
    const setLoading = (msg) => {
        _setLoading(msg);
    };
    
    const setNewsData = (data)=>{
        if(typeof data === "function"){
            _setNewsData((prevData)=>{
                const updatedData = data(prevData);
            console.log("Page updated to:", updatedData);
            return updatedData;
            })
        }else{
            _setNewsData(data)
        }
    }
      
    return(
        <StateContext.Provider value={{ search, setSearch, newsData, setNewsData, getNews, loadMore, loading, setLoading, page, setPage, handleScroll, fetchInitialNews }}>
            {children}
        </StateContext.Provider>
    )
}
export const useStateContext = () => useContext(StateContext);
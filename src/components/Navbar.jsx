import { NavLink, Link } from "react-router";
import { useStateContext } from "../context/ContextProvider";

const Navbar = () => {
    const { search, setSearch, newsData, getNews } = useStateContext();

    // const handleInput = (e) => {
    //     setSearch(e.target.value);
    // }

    // const handleSearch =  () => {
    //     console.log("Search button clicked with search term:", search);
    //     getNews();
    //     console.log("Result news data:", newsData);
    // }
    // useEffect(()=>{
    //     getNews();
    // },[handleSearch])
    return (
        <nav className="navbar navbar-expand-lg bg-primary text-white">
            <div className="container p-3">
                <Link className="navbar-brand text-white" to="/">
                    News APP
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink
                                className={({ isActive }) =>
                                    isActive ? "nav-link text-white active" : "nav-link text-white"
                                }
                                to="/news/science"
                            >
                                Science
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                className={({ isActive }) =>
                                    isActive ? "nav-link text-white active" : "nav-link text-white"
                                }
                                to="/news/world"
                            >
                                World
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                className={({ isActive }) =>
                                    isActive ? "nav-link text-white active" : "nav-link text-white"
                                }
                                to="/news/trending"
                            >
                                Trending
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                className={({ isActive }) =>
                                    isActive ? "nav-link text-white active" : "nav-link text-white"
                                }
                                to="/news/business"
                            >
                                Business
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                className={({ isActive }) =>
                                    isActive ? "nav-link text-white active" : "nav-link text-white"
                                }
                                to="/news/sports"
                            >
                                Sports
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                className={({ isActive }) =>
                                    isActive ? "nav-link text-white active" : "nav-link text-white"
                                }
                                to="/news/politics"
                            >
                                Politics
                            </NavLink>
                        </li>
                    </ul>
                    {/* <div className="d-flex">
                        <input
                            className="form-control me-2"
                            type="search"
                            placeholder="Search"
                            aria-label="Search"
                            onChange={handleInput}
                        />
                        <button
                            className="btn btn-outline-success"
                            onClick={handleSearch}
                        >
                            Search
                        </button>
                    </div> */}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

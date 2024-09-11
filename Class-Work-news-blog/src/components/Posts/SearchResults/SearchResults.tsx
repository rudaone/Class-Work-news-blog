import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { IStoreState } from "../../../types";
import { loadPosts } from "../../../redux/actionCreators";
import { PostDetail } from "../Post/PostDetail";
import { PostVertical } from "../Post/PostVertical";
import './SearchResults.css'
import { Pagination } from "../../Pagination";
import { PostsSelect } from "../../PostsSelect";

const SearchResults = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const posts = useSelector((state: IStoreState) => state.posts.posts);
    const limit = useSelector((state: IStoreState) => state.posts.limit);
    const currentPage = useSelector((state: IStoreState) => state.posts.currentPage);
    const theme = useSelector((state: IStoreState) => state.ui.theme);
    const dispatch = useDispatch();

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        dispatch(loadPosts({ limit, currentPage, search: params.get('search') }));
    }, [limit, currentPage, dispatch]);

    return (
        <div className={`search__result-wrapper_${theme}`}>
            <div className='search'>
            {windowWidth < 768 ? (
                posts.map(post => <PostVertical key={post.id} {...post} />)
            ) : (
                posts.map(post => <PostDetail key={post.id} {...post} />)
            )}
            <PostsSelect />
            <Pagination />
            </div>
        </div>
    );
}

export { SearchResults };

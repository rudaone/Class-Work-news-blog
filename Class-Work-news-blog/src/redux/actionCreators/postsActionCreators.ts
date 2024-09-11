import { ICreatePost, IPost, IPostsInfo, IPostsResponse, POST_TYPES } from "../../types";
import { SET_POSTS, LOAD_POSTS, SET_POSTS_LIMIT, LOAD_SELECTED_POST, SET_SELECTED_POST, SET_TOTAL, SET_CURRENT_PAGE,SET_CURRENT_POST, ADD_POST } from '../actionTypes';
import { takeEvery, put } from 'redux-saga/effects'
import { ContentPage } from "../../components";
import { getToken } from "./userActionCreators";

const loadPosts = (postsInfo: IPostsInfo) => ({
    type: LOAD_POSTS,
    postsInfo
})

const setPosts = (posts: IPost[]) => ({
    type: SET_POSTS,
    posts
})

const setPostsLimit = (limit: number) => ({
    type: SET_POSTS_LIMIT,
    limit
})

const loadSelectedPost = (id: string) => ({
    type: LOAD_SELECTED_POST,
    id
})

const setSelectedPost = (selectedPost: IPost) => ({
    type: SET_SELECTED_POST,
    selectedPost
})

const setTotal = (total: number) => ({
     type: SET_TOTAL,
     total
})

const setCurrentPage = (currentPage: number) => ({
     type: SET_CURRENT_PAGE,
     currentPage
})

const setCurrentPost = (currentPost: number) => ({
    type: SET_CURRENT_POST,
    currentPost
})

const addPost = (post: ICreatePost) => ({
    type: ADD_POST,
    post
})

function* fetchLoadPosts(action: any) {
    const { limit, currentPage, search } = action.postsInfo;
    let url = `https://studapi.teachmeskills.by/blog/posts/?limit=${limit}&offset=${(currentPage -1)*limit}`
    if (search) {
        url += '&search=' + search
    }
    const resp: Response = yield fetch (url)
    const data: IPostsResponse = yield resp.json();
    yield put(setPosts(data.results));
    yield put(setTotal(data.count))
}

function* fetchSelectedPost(action: any) {
    const resp: Response = yield fetch (`https://studapi.teachmeskills.by/blog/posts/${action.id}`)
    const selectedPost: IPost = yield resp.json();
    yield put(setSelectedPost(selectedPost));
}

function* fetchAddPost(action: any) {
    const token: string = yield getToken()
    const formData = new FormData();
    Object.keys(action.post).forEach(key => formData.append(key, action.post[key]));
    const resp: Response = yield fetch (`https://studapi.teachmeskills.by/blog/posts/`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${token}`
        },
        body: 
            formData 
        })
        if (resp.status === 201) {
            const { id }: IPost = yield resp.json();
            window.location.pathname = '/posts/' + id;
        }
}

function* watcherPosts() {
    yield takeEvery(LOAD_POSTS, fetchLoadPosts)
    yield takeEvery(LOAD_SELECTED_POST, fetchSelectedPost)
    yield takeEvery(ADD_POST, fetchAddPost)
}

export { setPosts, 
         loadPosts,
         watcherPosts,
         setPostsLimit,
         loadSelectedPost,
         fetchSelectedPost,
         setCurrentPage,
         setCurrentPost,
         addPost
}
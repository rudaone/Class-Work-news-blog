import { IPostsState, IPost } from '../../types'
import { SET_POSTS, SET_POSTS_LIMIT, SET_SELECTED_POST, SET_TOTAL, SET_CURRENT_PAGE, SET_CURRENT_POST } from '../actionTypes'

const initialState = {
    posts: [] as IPost[],
    limit: 15,
    selectedPost: {} as IPost,
    currentPage: 1,
    total: 0,
    currentPost: 1,
    totalPost: 0
}


const postsReducer = (state: IPostsState = initialState, action: any) => {
    switch (action.type) {
        case SET_POSTS: {
            return ({
                ...state,
                posts: action.posts
            })
        }
        default: {
            return state
        }

        case SET_POSTS_LIMIT: {
            return ({
                ...state,
                limit: action.limit
            })
        }
        
        case SET_SELECTED_POST: {
            return ({
                ...state,
                selectedPost: action.selectedPost
            })
        }

        case SET_TOTAL: {
            return ({
                ...state,
                total: action.total
            })
        }

        case SET_CURRENT_PAGE: {
            return ({
                ...state,
                currentPage: action.currentPage
            })
        }

        case SET_CURRENT_POST: {
            return ({
                ...state,
                currentPost: action.currentPost
            })
        }
    }
}

export { postsReducer }
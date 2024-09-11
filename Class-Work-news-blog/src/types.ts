interface IButton {
    children?: string, 
    className: string,
    isActive?: boolean,
    onClick: Function,
}

export enum INPUT_TYPES {
    TEXTAREA = 'textarea',
    NUMBER = 'number',
    PASSWORD = 'password',
    TEXT = 'text'
}

interface IInput {
    className: string,
    label: string,
    placeholder: string,
    value?: string | number,
    onChange?: Function,
    type?: INPUT_TYPES,
    disabled?: boolean,
    errorMessage?: string
}

export enum POST_TYPES {
    DETAIL = 'detail',
    VERTICAL = 'vertical',
    SMALL = 'small'
}

export enum THEMES {
    DARK = 'dark',
    LIGHT = 'light'
}

interface IPost {
    id: number,
    image: string,
    text: string,
    date: string,
    lesson_num: number,
    title: string,
    author: number,
    className?: string
}

interface IPostWithType extends IPost {
    type: POST_TYPES
}

interface IContentPage {
    id: number,
    title: string,
    image: string,
    text: string
}

export type Cancel = {
    isActive: boolean;
    onClick: Function;
  };

interface IPostsState {
    posts: IPost[],
    limit: number,
    selectedPost: IPost,
    total: number,
    currentPage: number,
    totalPost: number,
    currentPost: number
}

interface IUIState {
    theme: THEMES
}

interface IStoreState {
    posts: IPostsState,
    ui: IUIState,
    limit: number,
    user: IUserState
}

interface IPostsResponse {
    count: number,
    results: IPost[]
}

interface IPostsInfo {
    limit: number;
    currentPage: number,
    search?: string | null
}

interface ISignUp {
    username: string,
    email: string,
    password: string,
    course_group?: number
}

interface IActivationInfo {
    uid: string,
    token: string
}

interface ISignIn {
    email: string,
    password: string
}

interface IUser {
    username: string,
    id: number,
    email: string
}

interface IUserState {
     user: IUser
}

interface IFileLoader {
    image: ImageType,
    outerOnChange: Function,
    outerOnRemove: Function
}

interface ImageType {
    dataURL?: string;
    file?: File;
}

interface ICreatePost {
    image: File | undefined,
    text: string,
    title: string,
    lesson_num: number,
    description: string
}

export type {
    IButton,
    IInput,
    IPost,
    IPostWithType,
    IContentPage,
    IPostsState,
    IUIState,
    IStoreState,
    IPostsResponse,
    IPostsInfo,
    ISignUp,
    IActivationInfo,
    ISignIn,
    IUser,
    IUserState,
    IFileLoader,
    ImageType,
    ICreatePost
}


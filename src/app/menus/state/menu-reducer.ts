import { ChapterContent, chapterContentListing, defaultChapterContent } from 'src/app/chapter-content/models/chapterContent';
import { MenuActions, MenuActionTypes } from './menu-actions';



export interface MenuState {
    chapterListing: ChapterContent[];
    currentChapter: ChapterContent;
}


const initialState: MenuState = {
    chapterListing: chapterContentListing,
    currentChapter: defaultChapterContent,

};

export function menuReducer(state= initialState, action: MenuActions): MenuState {
    switch (action.type) {
        case MenuActionTypes.SET_CHAPTERLISTING:
            return {
                ...state,
                chapterListing: action.payload
            };

        case MenuActionTypes.CLEAR_CHAPTERLISTING:
            return {
                ...state,
                chapterListing: []
            };

        case MenuActionTypes.SET_CURRENT_CHAPTER:
            return {
                ...state,
                currentChapter: action.payload
            };
        case MenuActionTypes.CLEAR_CURRENT_CHAPTER:
            return {
                ...state,
                currentChapter: defaultChapterContent
            };

        default:
            return state;
    }
}

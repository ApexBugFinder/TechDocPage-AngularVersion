import * as fromRoot from '../../state/app.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MenuState } from './menu-reducer';
import { chapterContentListing } from '../../chapter-content/models/chapterContent';


export interface State extends fromRoot.State {
    menu: MenuState;
}

const getMenuFeatureState = createFeatureSelector<MenuState>('menus');

export const getChapterListing = createSelector(
    getMenuFeatureState,
    state => state.chapterListing
);

export const getCurrentChapter = createSelector(
    getMenuFeatureState,
    state => state.currentChapter
);

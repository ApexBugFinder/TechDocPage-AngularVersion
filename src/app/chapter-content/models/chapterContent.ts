import {actionsChapterInfo } from '../actions/actions.component';
import { creatingSelectorsChapterInfo } from '../creating-selectors/creating-selectors.component';
import { devToolsChapterInfo } from '../devtools/devtools.component';
import { dispatchingActionsChapterInfo } from '../dispatching-actions/dispatching-actions.component';
import { effectsChapterInfo } from '../effects/effects.component';
import { featureStateManagementChapterInfo } from '../feature-state-management/feature-state-management.component';
import { gettingStartedChapterInfo } from '../getting-started/getting-started.component';
import { stateChapterInfo } from '../immutable-state/immutable-state.component';
import { initStateChapterInfo } from '../initialize-state/initialize-state.component';
import { introductionChapterInfo } from '../introduction/introduction.component';
import { reducersChapterInfo } from '../reducers/reducers.component';
import { reduxPatternChapterInfo } from '../redux-pattern/redux-pattern.component';
import { strongTypingChapterInfo } from '../strong-typing/strong-typing.component';
import { utilizingFeatureSelectorsChapterInfo } from '../utilizing-feature-selectors/utilizing-feature-selectors.component';

export interface ChapterContent {
    index: number;
    name: string;
    address: string;
    heading: string;
}

export const chapterContentListing: ChapterContent[] = [
    introductionChapterInfo,
    reduxPatternChapterInfo,
    gettingStartedChapterInfo,
    stateChapterInfo,
    initStateChapterInfo,
    featureStateManagementChapterInfo,
    strongTypingChapterInfo,
    creatingSelectorsChapterInfo,
    actionsChapterInfo,
    dispatchingActionsChapterInfo,
    reducersChapterInfo,
    utilizingFeatureSelectorsChapterInfo,
    effectsChapterInfo,
    devToolsChapterInfo,


];

export const defaultChapterContent: ChapterContent = {
    index: 0,
    name: 'default',
    address: '',
    heading: 'No Heading'
};

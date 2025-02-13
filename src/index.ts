export { setupHooks } from '@redneckz/uni-jsx/lib/hooks';
export { setup } from '@redneckz/uni-jsx/lib/setup';
export { DaDataAPI } from './api/DaDataAPI';
export { LikeAPI } from './api/LikeAPI';
export { Blocks } from './components/Blocks';
export { ContentPage } from './components/ContentPage/ContentPage';
export { handlerDecorator } from './hooks/handlerDecorator';
export { useRouter } from './hooks/useRouter';
export { projectSettings } from './ProjectSettings';
export { joinList } from './utils/joinList';
export * as url from './utils/url';

export const packageVersion = globalThis.process?.env?.UNI_BLOCKS_VERSION;

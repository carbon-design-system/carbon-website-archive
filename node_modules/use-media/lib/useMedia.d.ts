import { MediaQueryObject } from './types';
export declare const mockMediaQueryList: MediaQueryList;
export declare const useMedia: (rawQuery: string | MediaQueryObject, defaultState?: boolean) => boolean;
export declare const useMediaLayout: (rawQuery: string | MediaQueryObject, defaultState?: boolean) => boolean;
export default useMedia;

import { DependencyList, EffectCallback } from 'react';
export declare type Effect = (effect: EffectCallback, deps?: DependencyList) => void;
export declare type MediaQueryObject = {
    [key: string]: string | number | boolean;
};

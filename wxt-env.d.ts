/// <reference types="svelte" />

// This type is to be used to extend generics, not anywhere else.
type AnyFunction = (...args: any[]) => any;

// This type is to indicate a possibly null value.
type Nullish<T extends unknown> = T | null;

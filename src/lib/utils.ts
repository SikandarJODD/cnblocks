import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type WithoutChild<T> = T extends { child?: any } ? Omit<T, "child"> : T;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type WithoutChildren<T> = T extends { children?: any } ? Omit<T, "children"> : T;
export type WithoutChildrenOrChild<T> = WithoutChildren<WithoutChild<T>>;
export type WithElementRef<T, U extends HTMLElement = HTMLElement> = T & {
	ref?: U | null;
};

/*
	Installed from @ieedan/std
*/

/** Allows you to have autocomplete on a string while still accepting any string value.
 *
 * ## Usage
 * ```ts
 * type Fruits = LooseAutocomplete<'apple' | 'orange' | 'pear'>;
 *
 * // you will still get autocomplete here
 * let fruit: Fruits = 'apple'; // valid
 * fruit = 'banana'; // valid
 * ```
 */
export type LooseAutocomplete<T> = T | (string & {});
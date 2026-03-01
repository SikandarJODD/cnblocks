import type { Component } from "svelte";

export interface Block {
  itemId?: string;
  slug: string;
  title: string;
  category: string;
  preview: string;
  code: MistCode | MistCode[];
  component: Component;
}

export interface MistCode {
  name?: string;
  code: string;
  lang?: string;
  highlight?: (number | [number, number])[];
}

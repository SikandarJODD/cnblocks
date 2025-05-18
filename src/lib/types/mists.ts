export interface MistBlock {
  slug: string;
  title: string;
  category: string;
  preview: string;
  code: MistCode | MistCode[];
  component: any;
}

export interface MistCode {
  code: string;
  lang?: string;
  hightlight?: string;
}

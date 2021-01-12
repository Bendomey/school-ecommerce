export interface SliderState {
  translate: number;
  transition: number;
}

export interface SliderContentProp {
  translate: number;
  transition: number;
}

export interface SliderProp {
  content: string;
  active: boolean;
  head: string;
  body: string;
  showButton: boolean;
}

export interface SliderComponentProp {
  slides: {
    head: string;
    body: string;
    slide: string;
    showButton: boolean;
  }[];
}

export interface DotsProp {
  active: number;
  slides: {
    head: string;
    body: string;
    slide: string;
  }[];
  setActive: Dispatch<SetStateAction<number>>;
}

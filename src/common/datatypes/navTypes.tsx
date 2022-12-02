// import directions
export type navType = {
  Logo?: any;
  direction?: directions;
  children?: any;
  links?: { title?: string; link?: string }[];
};

export type directions = "left" | "right" | "top" | "bottom";

export type RootObject = {
  next: string | undefined;
  previous: string | undefined;
  results: Result[];
};

export type Result = {
  name: string;
  url: string;
};

export type CardType = {
  name: string
  url: string;
}

export type types = {
  type: {
    name: string;
  };
  name: string
};

export type abilities = {
  ability: {
    name: string;
  };
};

export type statsProps = {
  base_stat: string;
  stat: {
    name: string;
  };
};

export type EvolutionProps = {
  idChain: string;
}
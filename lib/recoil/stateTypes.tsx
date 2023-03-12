export interface MainCategory {
  isTraditional: boolean;
  isCrypto: boolean;
}

export interface NowCategory {
  traditionalCategory: string;
  crpytoCategory: string;
}

export interface TraditionalCategory {
  isCnbc: boolean;
  isBbc: boolean;
  isReuters: boolean;
}
export interface CrpytoCategory {
  isCoindesk: boolean;
  isCointelegraph: boolean;
  isCryptoslate: boolean;
}

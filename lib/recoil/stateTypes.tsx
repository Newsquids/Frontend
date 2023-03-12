export interface MainCategory {
  isTraditional: boolean;
  isCrypto: boolean;
}

export interface NowCategory {
  traditional: Traditional;
  crpyto: Crpyto;
}

interface Traditional {
  isTraditional: boolean;
  category: TraditionalCategory;
}

interface Crpyto {
  isCrpyto: boolean;
  category: CrpytoCategory;
}

interface TraditionalCategory {
  isCnbc: boolean;
  isBbc: boolean;
  isReuters: boolean;
}
interface CrpytoCategory {
  isCoindesk: boolean;
  isCointelegraph: boolean;
  isCryptoslate: boolean;
}

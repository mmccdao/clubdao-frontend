import IMarket from "./IMarket"

interface IBuyMeerkat {
  market: string;
  url: string;
}

interface IMeerkat {
  name: string;
  image: string;
  buy: IBuyMeerkat;
  // market: IMarket
}

export default IMeerkat;

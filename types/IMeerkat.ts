interface Market {
  id: string;
  url: string;
}

interface IMeerkat {
  name: string;
  image: string;
  market: Market;
}

export default IMeerkat;

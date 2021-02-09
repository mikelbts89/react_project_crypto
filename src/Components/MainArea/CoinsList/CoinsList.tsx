import React, { useEffect, useState } from "react";
import "./CoinsList.css";
import Coin from "../Coin/Coin";
import Axios from "axios";
import CoinModel from "../Model/CoinModel";

const CoinsList = (): JSX.Element => {
  const [coin, setCoin] = useState({ coins: [] as any });
  useEffect(() => {
    const getCoins = async () => {
      const result = await Axios.get<any[]>(
        "https://api.coingecko.com/api/v3/coins/?_limit=100",
      );
      setCoin({ coins: result.data });
    };
    getCoins();
  }, []);
  console.log(coin);

  return (
    <div className="CoinsList">
      {coin.coins.map(
        (coin: CoinModel, i: string | number | null | undefined) => (
          <Coin key={i} coin={coin} />
        ),
      )}
    </div>
  );
};

export default CoinsList;

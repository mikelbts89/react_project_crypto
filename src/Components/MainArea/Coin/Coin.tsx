import React, { useEffect } from "react";
import "./Coin.css";
import CoinModel from "../Model/CoinModel";
import { Accordion, Button, Card } from "react-bootstrap";
import MoreInfoBtn from "../MoreInfoBtn/MoreInfoBtn";

interface CoinProps {
  coin: CoinModel;
}

const Coin = (props: any): JSX.Element => {
  useEffect(() => {
    if (props.coin.name?.length! > 15) {
      let currentH4 = document.querySelectorAll(".card_title");
      currentH4.forEach((coin) => {
        if (coin.innerHTML.length > 15) {
          coin.classList.add("changeLetterSize");
        }
      });
    }
  });

  return (
    <div className="Coin">
      <Accordion>
        <Card>
          <Card.Header>
            <h5 className="card_title">{props.coin.name}</h5>
            <input type="checkbox" />
            <Accordion.Toggle as={Button} eventKey="1">
              More info
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>
              <MoreInfoBtn
                image={props.coin.image.small}
                usd={props.coin.market_data.current_price.usd}
                eur={props.coin.market_data.current_price.eur}
                ils={props.coin.market_data.current_price.ils}
              />
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
};

export default Coin;

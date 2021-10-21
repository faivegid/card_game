import React from 'react';
import Card from "./components/Card"
import CARD_DECK from './constatnts/card_deck';
import customFetch from './functions/custom_fetch';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      deck_id: "",
      remainingDeck: 0,
      computerScore: 0,
      myScore: 0
    }
  }

  handleDrawCLick = async () => {
    const data = await customFetch(`https://deckofcardsapi.com/api/deck/${this.state.deck_id}/draw/?count=2`)
    console.log(data)
    this.setState(prevState => {
    })
  }

  handeNewDeckClick = async () => {
    const data = await customFetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1");
    this.setState({
      deck_id: data.deck_id,
      myScore: 0,
      computerScore: 0,
      remainingDeck: data.remaining
    })
    console.log(this.state)
  }

  render() {
    return (
      <div className="content-container">
        <div className="top">
          <button
            onClick={this.handeNewDeckClick}
          >New Deck</button>
          <p>Remaining Deck: {this.state.remainingDeck}</p>
        </div>
        <Card name="Computer" score={this.state.computerScore} />
        <Card name="Player" score={this.state.myScore} />
        <div className="bottom">
          <button
            onClick={this.handleDrawCLick}
          >Draw</button>
        </div>
      </div>
    );
  }
}

export default App;

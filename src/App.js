import React, {Component} from 'react';
import './App.css';
// eslint-disable-next-line
const SAUCE = "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      jsonFile: {},
      quotes: {},
      quote: {},
      text: "",
      author: ""
    }
    this.handleNewQuoteClick = this.handleNewQuoteClick.bind(this);
    this.getQuotes = this.getQuotes.bind(this);
    this.setQuotes = this.setQuotes.bind(this);
    this.handleNewQuoteClick = this.handleNewQuoteClick.bind(this);
    this.handleTwitterClick = this.handleTwitterClick.bind(this);
    this.handleTumblrClick = this.handleTumblrClick.bind(this);

  }

  getQuotes() {
    fetch(SAUCE).then(res => res.json()).then((result) => {
      this.setState({quotes: result, isLoaded: true});
    }, (error) => {})
  }
  setQuotes() {
    if (this.state.isLoaded) {
      this.setState({
        quote: this.state.quotes.quotes[Math.floor(Math.random() * this.state.quotes.quotes.length)],
        text: this.state.quote.quote,
        author: this.state.quote.author
      })
    }
  }

  handleNewQuoteClick = () => {
    this.setQuotes();
  }
  handleTwitterClick() {
    window.open("https://twitter.com/intent/tweet?text=\"" + this.state.text + "\" -" + this.state.author + "&hashtags=quotes");
  }
  handleTumblrClick() {
    window.open("");
  }

  componentWillMount() {
    const script = document.createElement("script");
    script.src = "https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js";
    script.async = true;
    document.body.appendChild(script);
    this.getQuotes();

    setTimeout(function() {
      this.setQuotes();
    }.bind(this), 100);
  }
  componentDidMount() {
    setTimeout(function() {
      this.setQuotes();
    }.bind(this), 10);
  }
  componentWillUpdate() {}

  render() {
    return (<div className="App">
      <div className="container">
        <div className="card">
          <div className="header">
            <h1>Random Quote Generator</h1>
          </div>
          <div className="quote-box" id="quote-box">
            <div className="quote-text" id="text">
              <p>{this.state.text}</p>
            </div>
            <div className="quote-author" id="author">
              <p>~{this.state.author}</p>
            </div>
            <a id="tweet-quote" href="https://twitter.com/intent/tweet" onClick={this.handleTwitterClick}></a>
            <a id="new-quote" onClick={this.handleNewQuoteClick}></a>
          </div>
          <div className="buttons">
            <button className="btn btn-twitter" onClick={this.handleTwitterClick}>
              <i class="fab fa-twitter"></i>
            </button>
            <button className="btn btn-new-quote" onClick={this.handleNewQuoteClick} id="new-quote">New Quote</button>
            <button className="btn btn-tumblr" onClick={this.handleTumblrClick}>
              <i class="fab fa-tumblr"></i>
            </button>
          </div>
          <p id="footer">by <a href="https://codepen.io/TotallyCurious/full/JBoboX/">TotallyCurious</a></p>
        </div>
      </div>
    </div>);
  }
}
export default App;

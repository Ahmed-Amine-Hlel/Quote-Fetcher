import generateQuote from './generateQuote.js';
import './styles/main.scss';
import quotes_1 from './assets/quotes_1.png';
import doubleQuotes from './assets/doubleQuotes.png';

const imageQuote = document.getElementById('imageQuote');
const quotes = document.getElementById('quotes');

imageQuote.src = quotes_1;
quotes.src = doubleQuotes;

const quoteBtn = document.getElementById('quoteBtn');
quoteBtn.addEventListener('click', generateQuote);

generateQuote();

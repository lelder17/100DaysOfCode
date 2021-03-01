const quotes = [
  {
    quote: `I am adventurous. I overcome fears by following my dreams.`,
    author: `(@malacollective)`,
  },
  {
    quote: `I am in charge of how I feel and today I am choosing happiness.`,
    author: `(@sequellife_bp)`,
  },
  {
    quote: ` I am my own superhero.`,
    author: `(@greatist)`,
  },
  {
    quote: `I will not compare myself to strangers on the Internet.`,
    author: `(@emilymcdowell_)`,
  },
  {
    quote: `I am choosing and not waiting to be chosen.`,
    author: `(@raisingself)`,
  },
  {
    quote: `I am enough.`,
    author: `(@alexandweightloss)`,
  },
  {
    quote: `I am whole.`,
    author: `(@jenniferkass)`,
  },
  {
    quote: `I have the power to create change.`,
    author: `(@iamruby)`,
  },
  {
    quote: `I let go of all that no longer serves me.`,
    author: `(@iamdailyaffirmations)`,
  },
  {
    quote: ` I can do all the things.`,
    author: `(@kay.penny)`,
  },
  {
    quote: `I refuse to give up because I haven’t tried all possible ways.`,
    author: `(@mbs_experience)`,
  },
  {
    quote: `I deserve the best and I accept the best now.`,
    author: `(@hayhouseinc)`,
  },
  {
    quote: `My presence is my power.`,
    author: `(@gabbybernstein)`,
  },
  {
    quote: `When you really want it, you are unstoppable.`,
    author: `(@patriciamoreno33)`,
  },
];

function generator() {
  const quoteContent = document.querySelector('.quote-content');
  const author = document.querySelector('.author');
  const quoteButton = document.getElementById('btn');

  quoteButton.addEventListener('click', () => {
    let random = Math.floor(Math.random() * quotes.length);

    quoteContent.innerHTML = quotes[random].quote;
    author.innerHTML = quotes[random].author;
  });
}
generator();

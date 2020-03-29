# Description
[Fiction Word](https://github.com/howardah/fiction-word) is a simple js word generator. It is a simple tool to create random English-like words. A friend of mine, who is a linguist and a novelest told me that the most tedious part of making up a language is creating the vocabulary—while some of the words are derived from combinations and derivations of other words, both the roots of those derivative words and many other unique words must simply be made up. He asked, if he gave me the rules of what constitutes a word, if I could make a script to generate random words. “Fiction Word” is a prototype of that idea.

# Documentation

### Installation & Usage

Install with [npm](https://www.npmjs.com/package/fiction-word): `npm install fiction-word`

Once installed, require 'fiction-word' and use the 'wordGen' function to create random words.

```javascript
const fiction = require('fiction-word');

console.log('Random word: ' + fiction.wordGen());
console.log('Random 5-letter word: ' + fiction.wordGen(5));
```

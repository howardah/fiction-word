# Description
[Fiction Word](https://github.com/howardah/fiction-word) is a simple js word generator. It is a simple tool to create random English-like words. A friend of mine, who is a linguist and a novelest told me that the most tedious part of making up a language is creating the vocabulary—while some of the words are derived from combinations and derivations of other words, both the roots of those derivative words and many other unique words must simply be made up. He asked, if he gave me the rules of what constitutes a word, if I could make a script to generate random words. “Fiction Word” is a prototype of that idea.

# Documentation

### Installation & Usage

Install with [npm](https://www.npmjs.com/package/fiction-word): `npm install fiction-word`

Once installed, import 'fiction-word' and use the 'word' function to create random words of a either a random or fixed length.

```javascript
import fiction from 'fiction-word';

console.log('Random word: ' + fiction.word());
// Random word: Vanued
console.log('Random 5-letter word: ' + fiction.word(5));
// Random 5-letter word: Mofiv
```

fiction-word also has the capability to generate sentences and paragraphs.

```javascript
console.log(fiction.sentence());
// Latyh bluce brof gos stral geblight goureey bliom whurio diablu drusor fodi yac strem swuceeb.  

console.log(fiction.paragraph());
// Bicafex gyfier thar xugo clouhoos va easwy eq kusik niowuny scoubic gheel doobli cay  
// thycrique wiswier puq adiy himy.Oclu daies quen peato meaw sod shedea obros wichan udrum  
// maje birou ruw iyt bioceta ges. Mead thanygh ade iz picroock ublywo rition xoduque blahe  
// mad zut crught jaed pand neabeek seag. Tecli offeafea in motaies ushov noc bo vouta guvemy  
// hio deame yep bakouteci umoswi trooh driobee pa swaght ro. Foti uque scin te choubee biok  
// strough abruer suz lee ogequcif zef meatea de crelabre okublosea ruhip piva.
```

Which can also be limited to a specific number of words or sentences (respectively).

```javascript
console.log(fiction.sentence(5));
// Daw stridrea fib drod predol.  

console.log(fiction.paragraph(5));
// Nea whucrio rou ghought foclijad quefio vio preyn preha blef divea querat toogav xouw  
// magea giblou laseauck shov.Chota si geehi xou shoumo ya fe diaxee koh cug banyed lob iovi  
// brier wetreff. Wheetok uhad stree deeg giv byshooc deahyp rond we bleab wav pretraies thekam  
// whitoo whelo xiowik. Bovo owa hecrese irobly so see kagee ranoond ec fi acofiv daed footion blioc  
// gyswu ludiwove hakabeck atrea trow ock. Dowee diacot whirux to egoond fithude vies dianiv chisha  
// rioswea sweing swicapuw tref neato noov aff ebim kuing yo.
```
# Description
[Fiction Word](https://github.com/howardah/fiction-word) is a simple js word generator. It is a simple tool to create random English-like words. A friend of mine, who is a linguist and a novelest told me that the most tedious part of making up a language is creating the vocabulary—while some of the words are derived from combinations and derivations of other words, both the roots of those derivative words and many other unique words must simply be made up. He asked, if he gave me the rules of what constitutes a word, if I could make a script to generate random words. “Fiction Word” is a prototype of that idea.

# Documentation

### Installation & Usage

Install with [npm](https://www.npmjs.com/package/fiction-word): `npm install fiction-word`

Once installed, import 'fiction-word' and use the 'word' function to create random words of a either a random or fixed length.

```javascript
import * as fiction from 'fiction-word';

console.log('Random word: ' + fiction.word());
// Random word: Motriko
console.log('Random 5-letter word: ' + fiction.word(5));
// Random 5-letter word: Gheki
```

fiction-word also has the capability to generate sentences and paragraphs.

```javascript
console.log(fiction.sentence());
// Ceq dashi ibrop riv yeag ifoytrafu moo moom nesiswofug ceamor whab ice son troolo ivoyv.

console.log(fiction.paragraph());
// Prec rom cofo uquwako mio shaswu zeb swequesib ghod oohyw scuff leeba swyshumicou prex
// woswo cydrascy eaw hateaut. Suscajay chacruki diaq drysce clecanio ekiscaf ki preswe
// a choos clos idro geaffe scot chasida geef uer i. Xigon thid ea zeir scop vofeanycu
// co doo oni cleshofa clounond rio zo yumef apoqur net adub whofi. Fup stree teew oowyq
// iff buh diac thad preshan clevo clex pik clecheal streau iotroym awy scis thokile.
// Ado preji droody seeshi qudry swehy deavo kiomouyed cheaswe huvikuly bludroox qusceaco
// qun ohy diascuck broock blyvib. Vage diaz i chab strodraw triyv bligour deeli kible
// yi pur ee la whupeecee noosheek shif omou poun.
```

Which can also be limited to a specific number of words or sentences (respectively).

```javascript
console.log(fiction.sentence(5));
// Ine stroudiy ghady foot tuclu.

console.log(fiction.paragraph(5));
// Effiolin thogy wok thishea crol thin kiolol cup hequl zeffe strih lek haswu eechit
// dechet stre. Das ouce quefoffide team bita quedur ouffeacho iokuvob i fiobeetre
// rouclaer egam re prem uboule preci roxa cline fuveclucot vom. Ceeb efija ujorouso
// crapok wa e clib etreq samuk mel iwal yeswiquep oushefim eriscyti ishug prevam
// predro rashorulo a. U few daz thiz wioy hofin crak blioke sweahio leac not sool
// scew shoog eli bafe zeechy taswe eswioti ghac. Noud swob vubro owol quefur bedo
// ego clipih eswiok buthotrux uly epudrun nurem que reh.
```

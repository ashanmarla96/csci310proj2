const fs = require('fs');
const path = require('path');
const unidecode = require('unidecode');

const vocab = fs.readFileSync(path.join(__dirname, 'vocab.txt'));
const data = fs.readFileSync(path.join(__dirname, 'data.txt'));

const codedVocab = unidecode(vocab);
const codedData = unidecode(data);

fs.writeFileSync(path.join(__dirname, 'MY_FILE.txt'), codedVocab);
fs.writeFileSync(path.join(__dirname, 'MY_OTHER.txt'), codedData);
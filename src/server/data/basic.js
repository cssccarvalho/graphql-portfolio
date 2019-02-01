const distanceInWordsToNow = require('date-fns/distance_in_words_to_now')

module.exports = {
  name: 'Carlos Carvalho',
  company: 'NBR',
  email: 'carlos.carvalho@nbrsolutions.pt',
  age: distanceInWordsToNow(new Date(1984, 5, 30)),
  twitter: '',
  github: 'https://github.com/cssccarvalho/',
  instagram: '',
  medium: ''
}

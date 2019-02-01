const curseWords = require('curse-words-common')
const uniqueRandomArray = require('unique-random-array')
const jobs = require('./resume').default
const { repos, contributors } = require('./github')
const talks = require('./talks').default
const projects = require('./projects').default
const countries = require('./countries').default
// const speakerInfo = require('./speaker-info').default
const basic = require('./basic')

const rand = uniqueRandomArray(curseWords)

module.exports = {
  ...basic,
  randomCurseWord: rand(),
  jobs,
  repos,
  talks,
  projects,
  contributors,
  countries
  // speakerInfo
}

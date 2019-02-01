const isPast = require('date-fns/is_past')

const talks = [
  {
    name: 'Docker... What?',
    event: 'OfficeCon',
    date: new Date(2016, 7, 8),
    done: !!isPast(new Date(2016, 7, 8)),
    video: '',
    slides:
      'https://www.dropbox.com/s/cyanoyr3rkdde9k/Docker-presentation_V1_EN.pptx?dl=0',
    location: 'Porto, Portugal'
  }
]

export default talks.sort((a, b) => (a.date > b.date ? -1 : 1))

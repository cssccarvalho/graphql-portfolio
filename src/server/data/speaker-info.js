import basic from './basic'
import talks from './talks'

export default {
  name: basic.name,
  email: basic.email,
  twitter: basic.twitter,
  github: basic.github,
  shirtSize: "Men's M",
  country: 'Portugal',
  bio: '',
  photo: '',
  talks: [],
  videos: talks.map(talk => talk.video && talk.video)
}

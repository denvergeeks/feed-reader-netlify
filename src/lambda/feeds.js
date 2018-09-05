import Parser from 'rss-parser'

const FEEDS = [
  'https://coloradojustice.com/feed/',
  'http://blog.dynamicdrive.com/feed/',
  'https://css-tricks.com/feed/',
  'https://codepen.io/posts/feed',
    'https://gwarp.com/ghost/feed/',
  'https://hnrss.org/frontpage',
  'http://github-trends.ryotarai.info/rss/github_trends_javascript_daily.rss'
]

export function handler(event, context, callback) {
  let parser = new Parser()

  const feedRequests = FEEDS.map(feed => {
    return parser.parseURL(feed)
  })

  Promise.all(feedRequests).then(response => {
    callback(null, {
      statusCode: 200,
      body: JSON.stringify(response)
    })
  })
}

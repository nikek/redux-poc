import './style.less' // This is a hook to make webpack package the css for us

import 'riot'
import './route/route-listener'
import './tags/app.tag'
import './tags/title.tag.js'
// import './tests'


riot.mount('app')
riot.mount('title')

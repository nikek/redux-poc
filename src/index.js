import './style.less' // This is a hook to make webpack package the css for us

import 'riot'
import './tags/app.tag'
import './tests'

riot.mount('app')

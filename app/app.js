import riot from 'riot'
import 'riot-hot-reload'
import './tags/list.tag'
import './app.css'

riot.mount('list', {
    title: 'I want to behave!',
    items: [
        { title: 'Avoid excessive caffeine', done: true },
        { title: 'Hidden item',  hidden: true },
        { title: 'Be less provocative'  },
        { title: 'Be nice to people' }
    ]
});
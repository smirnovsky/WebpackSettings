import React from 'react'
import {render} from 'react-dom'
import AppService from './modules/app.service'
import {config} from './modules/config'
import App from './app'
import './css/index.css'
import './less/index.less'

// console.log(css);

// console.log('config key', config.key)

const service = new AppService('Hello world')
service.log()

render(<App />, document.getElementById('app'))

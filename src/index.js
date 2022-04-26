import AppService from './modules/app.service'
import {config} from './modules/config'
import './modules/header.component'

console.log('config key', config.key)

const service = new AppService('Hello world')
service.log()
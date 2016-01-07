import {bootstrap}    from 'angular2/platform/browser'
import {AppComponent} from './app.component'
import {TodoService} from './todos/service/todo.service'
import {ROUTER_PROVIDERS} from 'angular2/router'

bootstrap(AppComponent, [TodoService, ROUTER_PROVIDERS]);

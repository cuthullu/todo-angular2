import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core'
import {Todo} from './todos/models/todo'
import {NewTodoFormComponent} from './todos/form/new-todo-form.component'
import {TodoListComponent} from './todos/list/todo-list.component'
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {TodoDashboardComponent} from './todos/todo-dashboard.component'

@Component({
    selector: 'my-app',
    template: `
    <a [routerLink]="['Dashboard']">Dashboard</a>
    <a [routerLink]="['List']">List</a>
    <a [routerLink]="['Form']">Form</a>
    <router-outlet></router-outlet>
    `,
    styleUrls:['app/styles/style.css'],
    directives: [ROUTER_DIRECTIVES]
})

@RouteConfig([
    {path:'/todo/new', name: 'Form', component: NewTodoFormComponent},
    {path:'/todo/list',        name: 'List',       component: TodoListComponent},
    {path:'/todo',      name: 'Dashboard',   component: TodoDashboardComponent, useAsDefault: true}
])
export class AppComponent {
    public title = 'Todos in Angular 2';


}

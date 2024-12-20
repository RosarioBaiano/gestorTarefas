import { Routes } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { TaskFilterComponent } from './task-filter/task-filter.component';

export const routes: Routes = [
    {path: 'tasklist', title: 'TaskList', component: TaskListComponent},
    {path: 'taskdetails', title: 'TaskDetails', component: TaskDetailsComponent},
    {path: 'taskfilter', title: 'TaskFilter', component: TaskFilterComponent},
    {path: '', redirectTo: '/tasklist', pathMatch: 'full'},
];

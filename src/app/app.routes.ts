import { Routes } from '@angular/router';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskDetailsComponent } from './task-details/task-details.component';

export const routes: Routes = [
    {path: 'tasklist', title: 'TaskList', component: TaskListComponent},
    {path: 'taskdetaisl', title: 'TaskDetails', component: TaskDetailsComponent},
    {path: '', redirectTo: '/ tasklist', pathMatch: 'full'},
];

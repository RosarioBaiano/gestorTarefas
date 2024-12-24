import { Component } from '@angular/core';
import { Task } from '../models/task';
import { ActivatedRoute, Router,} from '@angular/router';
import { TaskService } from '../services/task.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-details',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './task-details.component.html',
  styleUrl: './task-details.component.css'
})
export class TaskDetailsComponent {

  task? : Task;

  constructor(private router: Router, private route: ActivatedRoute, private taskService: TaskService) {}

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');

    if(id === null) {
      this.navigateBack();
    }
    else 
    {
      this.task = this.taskService.getByTd(+id);

      if(this.task === undefined) {
        this.navigateBack()
      }
    }
  }

   private navigateBack() {
    this.router.navigate(['/tasklist'], {relativeTo: this.route});
   }

   save() {
    this.taskService.updateTasks();

    this.navigateBack();
   }

   cancel() {
    this.navigateBack();
   }
  
}

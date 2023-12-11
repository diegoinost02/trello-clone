import { Component } from '@angular/core';
import { CdkDragDrop, DragDropModule, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { TaskDialogComponent } from '../../components/task-dialog/task-dialog.component';
import {Dialog, DialogModule} from '@angular/cdk/dialog';

import { Task, Column } from '../../core/task.model';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [DragDropModule, NavBarComponent, DialogModule],
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss'
})
export class BoardComponent {

  constructor(private dialog: Dialog){ }

  columns: Column[] = [
    {
      title: 'To do',
      tasks: [
        {
          id: '1',
          title: 'Buy food'
        },
        {
          id: '2',
          title: 'Repair car'
        }
      ]
    },
    {
      title: 'Doing',
      tasks: [
        {
          id: '3',
          title: 'Reed a book'
        },
        {
          id: '4',
          title: 'Clean the house'
        }
      ]
    },
    {
      title: 'Done',
      tasks: [
        {
          id: '5',
          title: 'Buy a coffee'
        },
        {
          id: '6',
          title: 'Go to the gym'
        }
      ]
    }
  ]


  drop(event: CdkDragDrop<Task[]>) {

    if(event.previousContainer === event.container){
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data, 
        event.container.data, 
        event.previousIndex, 
        event.currentIndex
      );
    }
  }

  addColumn(){
    this.columns.push({
      title: 'New Column',
      tasks: []
    })
  }

  openDialog(task: Task){
    const dialogRef =  this.dialog.open(TaskDialogComponent,{
        minWidth: '300px',
        maxWidth: '50%',
        autoFocus: false,
        disableClose: true,
        data: {
          task: task
        }
      });
      dialogRef.closed.subscribe(output => {
        console.log(output);
      })
  }
}
import { Component, Inject, OnInit } from '@angular/core';
import {DIALOG_DATA, DialogRef} from '@angular/cdk/dialog';
import { faClose, faCheckToSlot, faBars, faUser, faTag, faCheckSquare, faClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BtnComponent } from '../btn/btn.component';
import { Task } from '../../core/task.model';

interface InputData{
  task: Task;
}
interface OutputData{
  rta: boolean;
}

@Component({
  selector: 'app-task-dialog',
  standalone: true,
  imports: [FontAwesomeModule, BtnComponent],
  templateUrl: './task-dialog.component.html',
  styleUrl: './task-dialog.component.scss'
})
export class TaskDialogComponent implements OnInit{

  faClose = faClose;
  faCheckToSlot = faCheckToSlot;
  faBars = faBars;
  faUser = faUser;
  faTag = faTag;
  faCheckSquare = faCheckSquare;
  faClock = faClock;

  task!: Task;

  constructor(
    private dialogRef: DialogRef<OutputData>,
    @Inject(DIALOG_DATA) private data: InputData
  ){}

  ngOnInit(){
    this.task = this.data.task;
  }

  close(){
    this.dialogRef.close();
  }

  closeWithRta(rta: boolean){
    this.dialogRef.close({ rta });
  }
}
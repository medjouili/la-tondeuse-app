import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstructionControlComponent } from './instruction-control/instruction-control.component';
import { LawnDisplayComponent } from './lawn-display/lawn-display.component';
import { FileuploadComponent } from './fileupload/fileupload.component'; 

const routes: Routes = [
  { path: 'upload', component: FileuploadComponent }, 
  { path: 'display', component: LawnDisplayComponent }, 
  { path: 'instructions', component: InstructionControlComponent }, 
  { path: '', redirectTo: '/upload', pathMatch: 'full' } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
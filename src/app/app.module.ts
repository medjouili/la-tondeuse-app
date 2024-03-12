import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { LawnDisplayComponent } from './lawn-display/lawn-display.component';
import { InstructionControlComponent } from './instruction-control/instruction-control.component';
import { MowerService } from './mower.service';

@NgModule({
  declarations: [
    LawnDisplayComponent,
    InstructionControlComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    LawnDisplayComponent,
    InstructionControlComponent,
    HttpClientModule,
    RouterModule.forRoot([]), 
  ],
  providers: [MowerService, ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA] 
})
export class AppModule { }

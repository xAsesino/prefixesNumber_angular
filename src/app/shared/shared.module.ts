import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrefixesnumberPipe } from '../pipes/prefixesnumber.pipe';

@NgModule({
  declarations: [
    PrefixesnumberPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PrefixesnumberPipe]
})
export class SharedModule { }

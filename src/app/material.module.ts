import { NgModule } from '@angular/core';
import { 
  MatToolbarModule, 
  MatIconModule, 
  MatCardModule, 
  MatButtonModule, 
  MatInputModule, 
  MatListModule, 
  MatGridListModule, 
  MatRadioModule, 
  MatProgressSpinnerModule,
  MatMenuModule,
  MatSnackBar
} from '@angular/material';

const modules = [
  MatToolbarModule, 
  MatIconModule, 
  MatCardModule,
  MatButtonModule,
  MatInputModule,
  MatListModule, 
  MatGridListModule, 
  MatRadioModule,
  MatProgressSpinnerModule,
  MatMenuModule,
  MatSnackBar
];

@NgModule({
  imports: modules,
  exports: modules
})
export class MaterialModule { }
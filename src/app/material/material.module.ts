import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from "@angular/material/card";
import { MatTabsModule } from "@angular/material/tabs";
import { MatButtonModule } from "@angular/material/button";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatIconModule } from "@angular/material/icon";
import { MatBadgeModule } from "@angular/material/badge";
import { MatSelectModule } from "@angular/material/select";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatMenuModule } from "@angular/material/menu";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from '@angular/material/core';
import { MatDialogModule } from "@angular/material/dialog";


const materialComponent = [
  BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatTabsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    FormsModule,
    MatBadgeModule,
    MatSelectModule,
    MatExpansionModule,
    MatMenuModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDialogModule
]

@NgModule({
  imports: [materialComponent],
  exports: [materialComponent]
})
export class MaterialModule { }

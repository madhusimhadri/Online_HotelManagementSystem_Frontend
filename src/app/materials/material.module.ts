import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
export const materialComponents = [
	MatCardModule,
	MatInputModule,
	MatFormFieldModule,
	MatButtonModule,
	MatToolbarModule,
	MatProgressBarModule,
	MatMenuModule,
	MatSidenavModule,
	MatIconModule,
	MatSelectModule,
	MatExpansionModule,
	MatPaginatorModule,
	MatTableModule,
];

@NgModule({
	declarations: [],
	imports: [ materialComponents ]
})
export class MaterialModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddAnnouncementFormComponent } from './add-announcement-form/add-announcement-form.component';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  { path: 'add', component: AddAnnouncementFormComponent },
  { path: 'edit/:id', component: EditComponent },
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: "**", redirectTo: '' }

]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ]
})
export class AppRoutingModule { }


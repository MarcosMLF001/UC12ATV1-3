import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { MuralVagasComponent } from './views/mural-vagas/mural-vagas.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';



const routes: Routes = [
  { path: "", component: HomeComponent, pathMatch: "full" },
  { path: "mural-vagas", component: MuralVagasComponent },
 
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

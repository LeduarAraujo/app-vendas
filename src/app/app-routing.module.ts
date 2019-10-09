import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroComponent } from './components/cadastro/cadastro.component';


const routes: Routes = [
  { path: "", redirectTo: "cadastro", pathMatch: "full" },
  { path: "cadastro", component: CadastroComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }

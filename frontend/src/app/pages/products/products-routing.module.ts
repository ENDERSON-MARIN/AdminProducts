import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ListadoComponent } from './listado/listado.component';
import { FormularioComponent } from './formulario/formulario.component';


const routes: Routes = [
  
  {
    path: '',
    component: ListadoComponent
  },
  {
    path: 'product',
    component: ListadoComponent
  },
  {
    path: 'create',
    component: FormularioComponent
  },
  {
    path: 'edit/:id',
    component: FormularioComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule {}

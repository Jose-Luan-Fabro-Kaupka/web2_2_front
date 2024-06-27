import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistrarComponent } from './components/registrar/registrar.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { AtividadesComponent } from './components/atividades/atividades.component';
import { ArtefatosComponent } from './components/artefatos/artefatos.component';
import { HomeComponent } from './components/home/home.component';
import { AtividadeDetalheComponent } from './components/atividade-detalhe/atividade-detalhe.component';
import { UsuarioDetalheComponent } from './components/usuario-detalhe/usuario-detalhe.component';
import { ArtefatoDetalheComponent } from './components/artefato-detalhe/artefato-detalhe.component';

const routes: Routes = [
  {path: "login", component: LoginComponent},
  {path: "registrar", component: RegistrarComponent},
  {path: "usuarios", component: UsuariosComponent},
  { path: 'usuarios/:id', component: UsuarioDetalheComponent },
  {path: "atividades", component: AtividadesComponent},
  { path: 'atividades/:id', component: AtividadeDetalheComponent },
  {path: "artefatos", component: ArtefatosComponent},
  { path: 'artefatos/:id', component: ArtefatoDetalheComponent },
  {path: "home", component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Adicione isto
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // E isto

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrarComponent } from './components/registrar/registrar.component';
import { AtividadesComponent } from './components/atividades/atividades.component';
import { ArtefatosComponent } from './components/artefatos/artefatos.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { HomeComponent } from './components/home/home.component';
import { AtividadeDetalheComponent } from './components/atividade-detalhe/atividade-detalhe.component';
import { UsuarioDetalheComponent } from './components/usuario-detalhe/usuario-detalhe.component';
import { ArtefatoDetalheComponent } from './components/artefato-detalhe/artefato-detalhe.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrarComponent,
    AtividadesComponent,
    ArtefatosComponent,
    UsuariosComponent,
    HomeComponent,
    AtividadeDetalheComponent,
    UsuarioDetalheComponent,
    ArtefatoDetalheComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

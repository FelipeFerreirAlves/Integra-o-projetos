import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardModule } from './dashboard';
import { CalculadoraModule } from './calculadora';
import { ConversorModule } from './conversor';
import { TarefasModule } from './tarefas';
import { JogoDaVelhaModule } from './jogo-da-velha';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { AppModule1 } from './app/app.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DashboardModule,
    CalculadoraModule,
    ConversorModule,
    TarefasModule,
    JogoDaVelhaModule,
    DragDropModule,
    AppModule1,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

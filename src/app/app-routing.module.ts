import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
 
import { DashboardRoutes } from './dashboard/dashboard-routing.module';
import { CalculadoraRoutes } from './calculadora/calculadora-routing.module';
import { ConversorRoutes } from './conversor/conversor-routing.module';
import { TarefasRoutes } from './tarefas';
import { JogoDaVelhaRoutes } from './jogo-da-velha/jogo-da-velha-routing.module';
import { OlamundoRoutes } from './app/OlaMundo-routing.module';


export const routes: Routes = [
	{ 
		path: '', 
		redirectTo: '/dashboard', 
		pathMatch: 'full' 
	},
	...DashboardRoutes,
	...CalculadoraRoutes,
	...ConversorRoutes,
	...TarefasRoutes,
	...JogoDaVelhaRoutes,
	...OlamundoRoutes
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
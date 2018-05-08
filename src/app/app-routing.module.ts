import { Routes, RouterModule } from '@angular/router';
import { CalculatorComponent } from './components/calculator/calculator.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'calculator',
    pathMatch: 'full'
  },
  {
    path: 'calculator',
    component: CalculatorComponent,
  },
];

export const routing = RouterModule.forRoot(routes, { useHash: false });

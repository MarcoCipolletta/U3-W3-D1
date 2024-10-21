import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PreferitiComponent } from './pages/preferiti/preferiti.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
    title: 'Home',
  },
  {
    path: 'preferiti',
    loadChildren: () =>
      import('./pages/preferiti/preferiti.module').then(
        (m) => m.PreferitiModule
      ),
    canActivate: [AuthGuard],
    title: 'Favourites',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

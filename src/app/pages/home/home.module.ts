import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { SharedCardModule } from '../../shared/shared-card.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, HomeRoutingModule, SharedCardModule],
})
export class HomeModule {}

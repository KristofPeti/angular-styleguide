/*
 * SPDX-FileCopyrightText: (c) 2022 Carl Zeiss AG
 * SPDX-License-Identifier: MIT
 */

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';

import { ProductDetailComponent } from '@app/catalog/product/components/product-detail/product-detail.component';
import { ProductMasterComponent } from '@app/catalog/product/components/product-master/product-master.component';
import { ProductService } from '@app/catalog/product/services/product.service';
import { ProductEffects } from '@app/catalog/product/store/product.effects';
import { RecommendationModule } from '@app/catalog/recommendation/recommendation.module';
import { ThemeSwitcherComponent } from '@app/shared/components/theme/theme-switcher.component';
import { ProductComponent } from '@app/shared/components/product/product.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RecommendationModule,
    ProductComponent,
    ThemeSwitcherComponent,
    EffectsModule.forFeature([ProductEffects]),
  ],
  declarations: [ProductDetailComponent, ProductMasterComponent],
  exports: [ProductDetailComponent, ProductMasterComponent],
  providers: [ProductService],
})
export class ProductModule {}

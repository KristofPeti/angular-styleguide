import { inject, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of } from 'rxjs';

import { ProductEffects } from './product.effects';
import { ProductService } from '@app/product/services/product.service';
import { ProductTestData } from '@models/product.testdata';
import { loadProductDetails, loadProductDetailsSuccess, loadProducts, loadProductsSuccess } from '@app/product/product.actions';

fdescribe('ProductEffects', () => {
  let actions$: Observable<any>;
  let effects: ProductEffects;

  const productServiceStub = new ProductService(null);

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [
        ProductEffects,
        provideMockActions(() => actions$),
        {provide: ProductService, useValue: productServiceStub}
      ]
    });

    effects = TestBed.inject(ProductEffects);
  });

  it('should load products from service and dispatch successful action',
    inject([ProductService], (service: ProductService) => {

      // preparation
      const loadedProducts = ProductTestData.validProductList;
      const serviceSpy = spyOn(service, 'loadProducts').and.returnValue(of(loadedProducts));

      // execution
      actions$ = of(loadProducts());
      const resultObservable$ = effects.loadProducts$;

      // verification
      expect(resultObservable$).toEmitValues([loadProductsSuccess({products: loadedProducts})]);
      expect(serviceSpy).toHaveBeenCalled();
    }));

  it('should load product details from service, dispatch successful action and navigate to details',
    inject([ProductService], (service: ProductService) => {

      // preparation
      const detailedProducts = ProductTestData.validProduct;
      const serviceSpy = spyOn(service, 'getProduct').and.returnValue(of(detailedProducts));

      // execution
      actions$ = of(loadProductDetails({ productId: ProductTestData.validProduct.id }));
      const resultObservable$ = effects.loadProductDetails$;

      // verification
      expect(resultObservable$).toEmitValues([loadProductDetailsSuccess({product: detailedProducts})]);
      expect(serviceSpy).toHaveBeenCalled();
    }));
});

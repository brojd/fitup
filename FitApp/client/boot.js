import './shim';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { enableProdMode, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from 'ng2-translate/ng2-translate';
import { RouterModule } from '@angular/router';
import { routes } from './app/core/app.routes';

import { CORE_PROVIDERS, CORE_DECLARATIONS, FuAppComponent } from './app/core';

if (ENVIRONMENT === 'production') {
  enableProdMode();
}

@NgModule({
  declarations: [CORE_DECLARATIONS],
  imports: [
    HttpModule, BrowserModule, FormsModule, ReactiveFormsModule,
    TranslateModule.forRoot(),
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  providers: [
    CORE_PROVIDERS,
    { provide: 'ENVIRONMENT', useValue: ENVIRONMENT }
  ],
  bootstrap: [FuAppComponent]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);

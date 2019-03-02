import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CribListingComponent } from './crib-listing/crib-listing.component';
import { CribCardComponent } from './crib-card/crib-card.component';
import { CribsService } from './services/cribs.service';
import { UtilService } from './services/util.service';
import { AddListingFormComponent } from './add-listing-form/add-listing-form.component';
import { SortByPipe } from './pipes/sort-by.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CribListingComponent,
    CribCardComponent,
    AddListingFormComponent,
    SortByPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CribsService, UtilService],
  bootstrap: [AppComponent]
})
export class AppModule { }

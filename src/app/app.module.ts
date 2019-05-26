import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms'

import { NewCategoryComponent } from './components/new-category/new-category.component';
import { NewSubCategoryComponent } from './components/new-sub-category/new-sub-category.component';
import { ListSubCategoryComponent } from './components/list-sub-category/list-sub-category.component';
import { ListCategoryComponent } from './components/list-category/list-category.component';
import { EditCategoryComponent } from './components/edit-category/edit-category.component';
import { EditSubCategoryComponent } from './components/edit-sub-category/edit-sub-category.component';

import { MatToolbarModule,MatSelectModule,MatFormFieldModule,MatInputModule,MatOptionModule,MatSliderModule,MatIconModule,MatButtonModule,MatDividerModule,MatCardModule,MatTableModule,MatSnackBarModule } from '@angular/material'
import { MatGridListModule} from '@angular/material/grid-list';

import { ConnectfrontbackService } from './services/connectfrontback.service'
import { HttpClientModule } from '@angular/common/http';
import { AddproductComponent } from './components/addproduct/addproduct.component';

import { ListProductsComponent } from './components/list-products/list-products.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';

import { DataTablesModule } from 'angular-datatables';

@NgModule({
  declarations: [
    AppComponent,
    NewCategoryComponent,
    NewSubCategoryComponent,
    ListSubCategoryComponent,
    ListCategoryComponent,
    EditCategoryComponent,
    EditSubCategoryComponent,
    AddproductComponent,
    ListProductsComponent,
    EditProductComponent,
    
  ],
  imports: [
    DataTablesModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSliderModule,
    MatSelectModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    MatCardModule,
    MatTableModule,
    MatSnackBarModule,
    MatGridListModule
  ],
  providers: [ConnectfrontbackService],
  bootstrap: [AppComponent]
})
export class AppModule { }

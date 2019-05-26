import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewCategoryComponent } from './components/new-category/new-category.component';
import { NewSubCategoryComponent } from './components/new-sub-category/new-sub-category.component';
import { EditCategoryComponent } from './components/edit-category/edit-category.component';
import { EditSubCategoryComponent } from './components/edit-sub-category/edit-sub-category.component';
import { ListCategoryComponent } from './components/list-category/list-category.component';
import { ListSubCategoryComponent } from './components/list-sub-category/list-sub-category.component';
import { AddproductComponent } from './components/addproduct/addproduct.component';
import { ListProductsComponent} from './components/list-products/list-products.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';

const routes: Routes = [
  {path:'addCategory' , component:NewCategoryComponent},
  {path:'addSubCategory' , component:NewSubCategoryComponent},
  {path:'editCategory/:id' , component:EditCategoryComponent},
  {path:'editSubCategory/:id' , component:EditSubCategoryComponent},
  {path:'categories' , component:ListCategoryComponent},
  {path:'subCategories' , component:ListSubCategoryComponent},
  {path:'products' , component:ListProductsComponent},
  {path:'products/newProduct' , component:AddproductComponent},
  {path:'editProduct/:id',component:EditProductComponent},
  {path:'', redirectTo:'categories',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class ConnectfrontbackService {

  uri="http://localhost:3000"

  constructor(private  http : HttpClient) { }

  getCategories()
    {
      return this.http.get(`${this.uri}/admin/categories`);
    }
  getCategoryById(id)
    {
      return this.http.get(`${this.uri}/admin/category/${id}`);
    }
  addCategory(categoryNameForm)
    {
      const category ={
        categoryName:categoryNameForm,
      };
      return this.http.post(`${this.uri}/admin/addCategory`,category);
    }
  editCategory(id,categoryNameForm)
    {
      const category ={
        categoryName:categoryNameForm,
      };
      return this.http.post(`${this.uri}/admin/editCategory/${id}`,category);
    }
  deleteCategory(id)
    {
      return this.http.get(`${this.uri}/admin/deleteCategory/${id}`);
    }
///////////////////////////////////////////////////////////////////////////////////
  getSubCategories()
    {
      return this.http.get(`${this.uri}/admin/subCategories`);
    }
  getSubCategoryById(id)
    {
      return this.http.get(`${this.uri}/admin/subCategory/${id}`);
    }
  addSubCategory(subCategoryNameFrom,categoryNameForm)
    {
      const subCategory ={
        subCategoryName:subCategoryNameFrom,
        categoryId:categoryNameForm

      };
      return this.http.post(`${this.uri}/admin/addSubCategory`,subCategory);
    }
  editSubCategory(id,subCategoryNameForm,categoryNameForm)
    {
      const subCategory ={
        subCategoryName:subCategoryNameForm,
        categoryId:categoryNameForm
      };
      return this.http.post(`${this.uri}/admin/editSubCategory/${id}`,subCategory);
    }
  deleteSubCategory(id)
    {
      return this.http.get(`${this.uri}/admin/deleteSubCategory/${id}`);
    }


  /////////////////////////////////////////////////////////////////////////////////////
  addProduct(productNameForm,productPriceForm,productDescriptionForm,productImageForm,categoryNameForm,availablePiecesForm)
  {
    const product ={
      productName:productNameForm,
      categoryName:categoryNameForm,
      productPrice:productPriceForm,
      productDescription:productDescriptionForm,
      productImage:productImageForm,
      availablePieces:availablePiecesForm,
    }
    return this.http.post(`${this.uri}/seller/newProduct`,product);
  }


getProducts()
  {
    return this.http.get(`${this.uri}/seller/products`);
  }
 getProductById(id) 
  {
    return this.http.get(`${this.uri}/seller/product/${id}`);
  }

editProduct(id,productNameForm,productPriceForm,productDescriptionForm,productImageForm,categoryNameForm,numberPiecesForm)
  {
    const product ={
      productName:productNameForm,
      productPrice:productPriceForm,
      productDescription:productDescriptionForm,
      productImage:productImageForm,
      categoryName:categoryNameForm,
      availablePieces:numberPiecesForm
    };
    return this.http.post(`${this.uri}/seller/editProduct/${id}`,product);
  }
deleteProduct(id)
  {
    return this.http.get(`${this.uri}/seller/deleteProduct/${id}`);
  }
}

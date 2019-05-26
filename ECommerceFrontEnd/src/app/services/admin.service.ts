import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})

export class AdminService {

  uri="http://localhost:3000/admin"

  constructor(private  http : HttpClient) { }

  getCategories()
    {
      return this.http.get(`${this.uri}/categories`);
    }
  getCategoryById(id)
    {
      return this.http.get(`${this.uri}/category/${id}`);
    }
  addCategory(categoryNameForm)
    {
      const category ={
        categoryName:categoryNameForm,
      };
      return this.http.post(`${this.uri}/addCategory`,category);
    }
  editCategory(id,categoryNameForm)
    {
      const category ={
        categoryName:categoryNameForm,
      };
      return this.http.post(`${this.uri}/editCategory/${id}`,category);
    }
  deleteCategory(id)
    {
      return this.http.get(`${this.uri}/deleteCategory/${id}`);
    }
///////////////////////////////////////////////////////////////////////////////////
  getSubCategories()
    {
      return this.http.get(`${this.uri}/subCategories`);
    }
  getSpecificSubCategories(parentId)
  {
    return this.http.get(`${this.uri}/specificSubCategories/${parentId}`);
  }
  getSubCategoryById(id)
    {
      return this.http.get(`${this.uri}/subCategory/${id}`);
    }
  addSubCategory(subCategoryNameFrom,categoryNameForm)
    {
      const subCategory ={
        subCategoryName:subCategoryNameFrom,
        categoryId:categoryNameForm

      };
      return this.http.post(`${this.uri}/addSubCategory`,subCategory);
    }
  editSubCategory(id,subCategoryNameForm,categoryNameForm)
    {
      const subCategory ={
        subCategoryName:subCategoryNameForm,
        categoryId:categoryNameForm
      };
      return this.http.post(`${this.uri}/editSubCategory/${id}`,subCategory);
    }
  deleteSubCategory(id)
    {
      return this.http.get(`${this.uri}/deleteSubCategory/${id}`);
    }

}

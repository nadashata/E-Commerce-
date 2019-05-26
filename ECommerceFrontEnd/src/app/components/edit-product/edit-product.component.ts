import { product } from './../../models/product.model';
import { category } from './../../models/category.model';
import { ConnectfrontbackService } from '../../services/connectfrontback.service'
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup,FormBuilder,Validators} from '@angular/forms';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  productForm:FormGroup;
  categories:category[];
  product:any={};
  id:string;

  constructor(private connectionService:ConnectfrontbackService, private router:Router, private route:ActivatedRoute, private snackBar:MatSnackBar, private formbuilder:FormBuilder) {
    this.createForm();
   }

  ngOnInit() {
    this.fetchCategories();
    this.route.params.subscribe(params=>{
      this.id=params.id;
      this.connectionService.getProductById(this.id).subscribe(res=>{
        this.product=res;
        this.productForm.get('categoryName').setValue(this.product.categoryName);
        this.productForm.get('productName').setValue(this.product.productName);
        this.productForm.get('productPrice').setValue(this.product.productPrice);
        this.productForm.get('productDescription').setValue(this.product.productDescription);
        this.productForm.get('productImage').setValue(this.product.productImage);
        this.productForm.get('availablePieces').setValue(this.product.availablePieces);
      })
    })
  }
  createForm()
  {
    this.productForm=this.formbuilder.group({
    productName:['',Validators.required],
    productPrice:['',Validators.required],
    productDescription:['',Validators.required],
    productImage:['',Validators.required],
    categoryName:['',Validators.required],
    availablePieces:['',Validators.required],
  });
}
editProduct(productName,productPrice,productDescription,productImage,categoryName,availablePieces){
  this.connectionService.editProduct(this.id,productName,productPrice,productDescription,productImage,categoryName,availablePieces).subscribe(()=>{
    this.snackBar.open('Product updated Suceesfully','OK',{duration:1000})
    this.router.navigate(['/products']);
  })
}
fetchCategories()
{ 
  this.connectionService.getCategories().subscribe((data:category[])=>
  {
    this.categories=data;
    console.log(this.categories)
  });
}

}

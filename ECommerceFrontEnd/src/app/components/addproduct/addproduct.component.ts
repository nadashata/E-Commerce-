import { Component, OnInit } from '@angular/core';
import { ConnectfrontbackService } from '../../services/connectfrontback.service'
import { FormGroup,FormBuilder,Validators } from '@angular/forms'
import { Router } from '@angular/router';
import { category } from './../../models/category.model';
@Component({
  selector: 'addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {
  productForm:FormGroup;
  categories:category[];
    constructor(private connectionService:ConnectfrontbackService, private formbuilder:FormBuilder, private router:Router) {
    this.productForm=this.formbuilder.group({
      productName:['',Validators.required],
      productPrice:['',Validators.required],
      productDescription:['',Validators.required],
      productImage:['',Validators.required],
      categoryName:['',Validators.required],
      availablePieces:['',Validators.required],
    });
   }
  addProduct(productName,productPrice,productDescription,productImage,categoryName,availablePieces){
    this.connectionService.addProduct(productName,productPrice,productDescription,productImage,categoryName,availablePieces).subscribe(()=>{
    this.router.navigate(['/products']);
    });

    
  }
  ngOnInit() {
    this.fetchCategories();
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

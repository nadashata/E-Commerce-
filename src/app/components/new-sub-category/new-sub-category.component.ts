import { category } from './../../models/category.model';
import { Component, OnInit } from '@angular/core';
import { AdminService } from './../../services/admin.service';
import { FormGroup,FormBuilder,Validators } from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-sub-category',
  templateUrl: './new-sub-category.component.html',
  styleUrls: ['./new-sub-category.component.css']
})
export class NewSubCategoryComponent implements OnInit {
  categories:category[];
  createForm:FormGroup;
  constructor(private connectionService:AdminService, private formbuilder:FormBuilder, private router:Router) {
    this.createForm=this.formbuilder.group({
      subCategoryName:['',Validators.required],
      categoryName:['',Validators.required],
    });
   }
  addSubCategory(subCategoryName,categoryName){
    this.connectionService.addSubCategory(subCategoryName,categoryName).subscribe(()=>{
      this.router.navigate(['/subCategories']);
    });
  }

  fetchCategories()
  { 
    this.connectionService.getCategories().subscribe((data:category[])=>
    {
      this.categories=data;
      console.log(this.categories)
    });
  }

  ngOnInit() {
    this.fetchCategories();
  }

}

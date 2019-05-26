import { category } from './../../models/category.model';
import { AdminService } from '../../services/admin.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup,FormBuilder,Validators} from '@angular/forms';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-edit-sub-category',
  templateUrl: './edit-sub-category.component.html',
  styleUrls: ['./edit-sub-category.component.css']
})
export class EditSubCategoryComponent implements OnInit {

  id: String;
  subCategory:any={};
  editForm:FormGroup;
  categories:category[];

  constructor(private connectionService:AdminService, private router:Router, private route:ActivatedRoute, private snackBar:MatSnackBar, private formbuilder:FormBuilder) {
    this.createForm();
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
    this.route.params.subscribe(params=>{
      this.id=params.id;
      this.connectionService.getSubCategoryById(this.id).subscribe(res=>{
        this.subCategory=res;
        this.editForm.get('subCategoryName').setValue(this.subCategory.subCategoryName);

      })
    })
  }
  editSubCategory(subCategoryName,categoryName){
    this.connectionService.editSubCategory(this.id,subCategoryName,categoryName).subscribe(()=>{
      this.snackBar.open('Sub Category updated Suceesfully','OK',{duration:1000})
      this.router.navigate(['/subCategories']);
    })
  }
  createForm(){
    this.editForm=this.formbuilder.group({
      categoryName:['',Validators.required],
      subCategoryName:['',Validators.required],
    });
  }


}

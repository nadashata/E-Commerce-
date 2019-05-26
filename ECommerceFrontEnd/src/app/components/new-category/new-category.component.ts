import { Component, OnInit } from '@angular/core';
import { AdminService } from './../../services/admin.service';
import { FormGroup,FormBuilder,Validators } from '@angular/forms'
import {Router } from '@angular/router';

@Component({
  selector: 'app-new-category',
  templateUrl: './new-category.component.html',
  styleUrls: ['./new-category.component.css']
})
export class NewCategoryComponent implements OnInit {

  createForm:FormGroup;
  constructor(private connectionService:AdminService, private formbuilder:FormBuilder, private router:Router) {
    this.createForm=this.formbuilder.group({
      categoryName:['',Validators.required],
    });
   }
  addCategory(categoryName){
    this.connectionService.addCategory(categoryName).subscribe(()=>{
      this.router.navigate(['/categories']);
    });
  }
    

  ngOnInit() {
   
  }

}

import { AdminService } from '../../services/admin.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup,FormBuilder,Validators} from '@angular/forms';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.css']
})
export class EditCategoryComponent implements OnInit {

  id: String;
  category:any={};
  editForm:FormGroup;

  constructor(private connectionService:AdminService, private router:Router, private route:ActivatedRoute, private snackBar:MatSnackBar, private formbuilder:FormBuilder) {
    this.createForm();
   }

  ngOnInit() {
    this.route.params.subscribe(params=>{
      this.id=params.id;
      this.connectionService.getCategoryById(this.id).subscribe(res=>{
        this.category=res;
        this.editForm.get('categoryName').setValue(this.category.categoryName);

      })
    })
  }
  editCategory(categoryName){
    this.connectionService.editCategory(this.id,categoryName).subscribe(()=>{
      this.snackBar.open('Category updated Suceesfully','OK',{duration:1000})
      this.router.navigate(['/categories']);
    })
  }
  createForm(){
    this.editForm=this.formbuilder.group({
      categoryName:['',Validators.required],
    });
  }

}

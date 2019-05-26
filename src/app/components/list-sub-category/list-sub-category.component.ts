import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';
import { AdminService }      from '../../services/admin.service';
import { subCategory}        from '../../models/subCategory.model'
import { category}           from '../../models/category.model'

@Component({
  selector:     'app-list-sub-category',
  templateUrl:  './list-sub-category.component.html',
  styleUrls:    ['./list-sub-category.component.css']
})

export class ListSubCategoryComponent implements OnInit {
  categories:category[];
  subCategories:subCategory[];
  displayedColounms=['subCategoryName','Actions'];

  constructor(private connectionService:AdminService, private router:Router) { 
  }

  ngOnInit() {
    this.fetchCategories();
  }
  
  changeState(parentId){
    this.connectionService.getSpecificSubCategories(parentId).subscribe((data:subCategory[])=>
    {
      this.subCategories=data;
    });
    
  }

  fetchSubCategories(parentId){ 
    this.connectionService.getSpecificSubCategories(parentId).subscribe((data:subCategory[])=>{
      this.subCategories=data;
    });
  }

  fetchCategories(){ 
    this.connectionService.getCategories().subscribe((data:category[])=> {
      this.categories=data;
    });
  }

  editSubCategory(id){ 
    this.router.navigate([`/editSubCategory/${id}`]);
  }

  deleteSubCategory(parentId,id){ 
    this.connectionService.deleteSubCategory(id).subscribe(()=>{
      this.fetchSubCategories(parentId);
    })
  }

}

import { category } from './../../models/category.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../../services/admin.service';


@Component({
  selector: 'app-list-category',
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.css']
})
export class ListCategoryComponent implements OnInit {

  categories:category[];
  displayedColounms=['categoryName','Actions'];
  constructor(private connectionService:AdminService, private router:Router) { }

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

  editCategory(id)
  { 
    this.router.navigate([`/editCategory/${id}`]);
  }

  deleteCategory(id)
  { 
    this.connectionService.deleteCategory(id).subscribe(()=>{
      this.fetchCategories();
    })
  }
}

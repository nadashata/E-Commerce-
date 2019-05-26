import { Component, OnInit } from '@angular/core';
import { ConnectfrontbackService } from '../../services/connectfrontback.service';
import { Router } from '@angular/router';
import { product } from '../../models/product.model'
import { Subject } from 'rxjs';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {
  products:product[];
  filteredProducts:product[];
  displayedColounms=['productName','productPrice','numberPieces','Actions'];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();
  constructor(private connectionService:ConnectfrontbackService, private router:Router) { }

  ngOnInit() {
    this.fetchProducts();
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5
    };
  }
  fetchProducts()
  { 
    this.connectionService.getProducts().subscribe((data:product[])=>
    {
      this.products=data;
      this.filteredProducts=this.products;
      this.dtTrigger.next();
    });
  }

  editProduct(id)
  { 
    this.router.navigate([`/editProduct/${id}`]);
  }

  deleteProduct(id)
  { 
    this.connectionService.deleteProduct(id).subscribe(()=>{
      this.connectionService.getProducts().subscribe((data:product[])=>
    {
      this.products=data;
      this.filteredProducts=this.products;
    });
    })
  }
// Custom built in search
  // filter(filterQuery:String) {
  //   if(filterQuery){
  //     this.filteredProducts=this.products.filter(p=>
  //       p.productName.toLowerCase().includes(filterQuery.toLocaleLowerCase()));
  //   }
  //   else{
  //     this.filteredProducts=this.products;
  //   }
  // }

}

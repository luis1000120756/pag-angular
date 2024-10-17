import { Component, OnInit } from '@angular/core';
import { error } from 'console';
import { ProductService } from '../../services/product.service';
import { ProductInterface } from '../../interfaces/product.interface';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent implements OnInit {
  productlist: ProductInterface[] = [];
  constructor(private productService: ProductService){}

  ngOnInit(): void {
      this.getProducts()
  }

  getProducts(){
    this.productService.getProduct().subscribe({
      next: (result)=> {
        this.productlist = result;
      },
      error: (erro) => {
        console.log(erro);
      }
    })
  }
}

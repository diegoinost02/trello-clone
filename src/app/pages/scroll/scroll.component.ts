import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient} from '@angular/common/http';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { Product } from '../../core/product.model';


@Component({
  selector: 'app-scroll',
  standalone: true,
  imports: [NavBarComponent, HttpClientModule, ScrollingModule],
  templateUrl: './scroll.component.html',
  styleUrl: './scroll.component.scss'
})
export class ScrollComponent implements OnInit{

  products: Product[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<Product[]>('https://api.escuelajs.co/api/v1/products')
    .subscribe(data => {
      this.products = data;
    })

    console.log(this.products);
  }
}
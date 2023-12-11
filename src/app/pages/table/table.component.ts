import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient} from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormControl } from '@angular/forms';
import {CdkTableModule} from '@angular/cdk/table';

import { NavBarComponent } from '../../components/nav-bar/nav-bar.component';
import { BtnComponent } from '../../components/btn/btn.component';

import { Product } from '../../core/product.model';
import { DataSourceProduct } from './data-source';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [NavBarComponent, HttpClientModule, CdkTableModule, CommonModule, BtnComponent, ReactiveFormsModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent implements OnInit{

  dataSources = new DataSourceProduct();
  columns: string[] = ['id', 'title','price','image', 'actions'];
  total: number = 0;
  Input = new FormControl('', { nonNullable: true });

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<Product[]>('https://api.escuelajs.co/api/v1/products')
    .subscribe(data => {
      console.log(data);
      this.dataSources.init(data);
      this.total = this.dataSources.getTotal();
    })

    this.Input.valueChanges
    .pipe(
      debounceTime(300)
    )
    .subscribe(value => {
      this.dataSources.find(value);
    })
  }

  update(product: Product){
    this.dataSources.update(product.id, { price: 20 });
  }
}
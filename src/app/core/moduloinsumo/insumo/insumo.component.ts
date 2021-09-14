import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IInsumo } from './insumo.service';

@Component({
  selector: 'app-insumo',
  templateUrl: './insumo.component.html',
  styleUrls: ['./insumo.component.css']
})
export class InsumoComponent implements OnInit {

  products: IInsumo[];

  constructor(private route: ActivatedRoute) {
    this.products = this.route.snapshot.data['products'];
  }

  ngOnInit(): void {
  }

}

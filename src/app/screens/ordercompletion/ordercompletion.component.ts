import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-ordercompletion',
  templateUrl: './ordercompletion.component.html',
  styleUrls: ['./ordercompletion.component.css']
})
export class OrderCompletionComponent implements OnInit {

  totalPrice: number = 0;
  fullName: string = '';


  constructor(private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.router.params.subscribe((params: Params) => this.totalPrice = params['totalPrice']);
    this.router.params.subscribe((params: Params) => this.fullName = params['fullName']);
  }

}

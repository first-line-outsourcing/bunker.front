import { Component, OnInit } from '@angular/core';
import {CardData} from '../../models/card';
import {Input} from '@angular/core';

@Component({
  selector: 'app-card-info',
  templateUrl: './card-info.component.html',
  styleUrls: ['./card-info.component.css']
})
export class CardInfoComponent implements OnInit {

  @Input() card: CardData;
  constructor() { }

  ngOnInit(): void {
  }

}

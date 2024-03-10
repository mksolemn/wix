import {Component, Input, OnInit} from '@angular/core';
interface Item {
  item: string;
  children?: Item[];
}
@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent implements OnInit{
  @Input() items!: Item[];

  itemsLocal: Item[] = [];
  constructor() {
  }
  ngOnInit() {
    this.itemsLocal = this.items ;
  }

  addChild(parent: Item) {
    if (!parent.children) {
      parent.children = [];
    }
    parent.children.push({ item: '' });
  }
}

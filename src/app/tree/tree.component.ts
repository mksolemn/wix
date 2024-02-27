import {Component, Input} from '@angular/core';
interface Item {
  item: string;
  children?: Item[];
}
@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent {
  @Input() items!: Item[];

  addChild(parent: Item) {
    if (!parent.children) {
      parent.children = [];
    }
    parent.children.push({ item: '' });
  }
}

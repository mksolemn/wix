import {Component, Input} from '@angular/core';
interface Item {
  item: string;
  children?: Item[];
}
@Component({
  selector: 'app-iterate-tree',
  templateUrl: './iterate-tree.component.html',
  styleUrls: ['./iterate-tree.component.css']
})
export class IterateTreeComponent {
  @Input() items!: Item[];

  constructor() {}

  hasChildren(item: Item): any {
    return item.children && item.children.length > 0;
  }

  getNestedItems(items: Item[] | undefined, level: number = 0): { item: Item, level: number }[] {
    let result: { item: Item, level: number }[] = [];
    if (!items) return result;

    const stack = items.map(item => ({ item, level }));
    while (stack.length) {
      const { item, level } = stack.pop()!;
      result.push({ item, level });
      if (item.children) {
        stack.push(...item.children.map(child => ({ item: child, level: level + 1 })));
      }
    }
    return result;
  }

  addChildNode(parentNode: Item): void {
    if (!parentNode.children) {
      parentNode.children = [];
    }
    parentNode.children.push({ item: 'New Child' });
    this.items = [...this.items];
  }
}

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

    const stack: { item: Item, level: number }[] = [];
    for (let i = items.length - 1; i >= 0; i--) {
      stack.push({ item: items[i], level });
    }

    while (stack.length) {
      const { item, level } = stack.pop()!;
      result.push({ item, level });
      if (item.children) {
        // Push children onto the stack in reverse order to maintain original order
        for (let i = item.children.length - 1; i >= 0; i--) {
          stack.push({ item: item.children[i], level: level + 1 });
        }
      }
    }

    return result.reverse().reverse();
  }

  addChildNode(parentNode: Item): void {
    if (!parentNode.children) {
      parentNode.children = [];
    }
    parentNode.children.push({ item: 'New Child' });
    this.items = [...this.items];
  }
}

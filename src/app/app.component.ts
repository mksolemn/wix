import {Component} from '@angular/core';

interface Item {
  item: string;
  children?: Item[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'wix';

  treeData: Item[] = [
    {
      item: 'Root',
      children: [
        {
          item: 'Branch 1',
          children: [
            {item: 'Leaf 1.1'},
            {item: 'Leaf 1.2'}
          ]
        },
        {
          item: 'Branch 2',
          children: [
            {item: 'Leaf 2.1'},
            {item: 'Leaf 2.2'}
          ]
        }
      ]
    }
  ];

  itTreeData: Item[] = [
    {
      item: 'Root',
      children: [
        {
          item: 'Branch 1',
          children: [
            {
              item: 'Leaf 1.1'
            },
            {
              item: 'Leaf 1.2'
            }
          ]
        },
        {
          item: 'Branch 2',
          children: [
            {
              item: 'Leaf 2.1'
            },
            {
              item: 'Leaf 2.2',
              children: [
                {
                  item: 'Leaf 2.1'
                },
                {
                  item: 'Leaf 2.2'
                }
              ]
            }
          ]
        }
      ]
    }
  ];


}


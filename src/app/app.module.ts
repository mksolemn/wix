import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TreeComponent } from './tree/tree.component';
import { IterateTreeComponent } from './iterate-tree/iterate-tree.component';

@NgModule({
  declarations: [
    AppComponent,
    TreeComponent,
    IterateTreeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

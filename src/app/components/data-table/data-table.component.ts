import { Component } from '@angular/core';
import { ScrollingModule } from "@angular/cdk/scrolling";

import * as data from '../../data.json';
import { UpperCasePipe } from '@angular/common';
import { FilterAllPipe } from '../../pipes/filter-all.pipe';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-table',
  standalone: true,
  imports: [UpperCasePipe, ScrollingModule, FilterAllPipe, FormsModule],
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.scss'
})
export class DataTableComponent {

  // cryptocurrencies: any = data as any;
  cryptocurrencies: any = (data as any).default;

  searchText = ''; // filterAll pipe

  // virtual scroll properties
  itemSize = '2.5rem';
  viewportHeightPx = 500;

}

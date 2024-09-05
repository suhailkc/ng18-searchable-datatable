import { Component, HostBinding, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataTableComponent } from "./components/data-table/data-table.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DataTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  host: {
    class: 'my-another-class-component'
  }
})
export class AppComponent implements OnInit {
  title = 'ng-searchable-datatable';

  @HostBinding('class.my-class') classVariable = true;
  @HostBinding('class') myClassVariable = 'my-another-class';
  @HostBinding('class') get class() { return this.title }

  ngOnInit(): void {
    
  }
}

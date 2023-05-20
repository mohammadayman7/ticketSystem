import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { HttpClient } from '@angular/common/http';
import {Router} from "@angular/router";
export interface PeriodicElement {
  [key: string]: any;
}

@Component({
  selector: 'app-project-two',
  templateUrl: './project-two.component.html',
  styleUrls: ['./project-two.component.css']
})

export class ProjectTwoComponent implements OnInit {
  dataSource = new MatTableDataSource<PeriodicElement>();
  displayedColumns: string[] = [];
  pageSizeOptions = [5, 10, 25, 100];
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private httpClient: HttpClient,private router: Router) {}

  ngOnInit(): void {
    // retrieve data from fake API and assign it to dataSource
    // for example:
    this.httpClient.get<any[]>('https://jsonplaceholder.typicode.com/posts').subscribe(data => {
      this.dataSource = new MatTableDataSource(data.map((row, index) => ({...row})));
      // add a custom column for the row index
      this.displayedColumns = [ ...Object.keys(data[0])];
      this.dataSource.paginator = this.paginator;
      console.log(this.dataSource)

    });

  }
  addData(event : Event) {
    console.log(event.target)
    this.dataSource.data.push(this.displayedColumns);
  }

  removeData() {
    const newData = this.dataSource.data.slice(0, -1);
    this.dataSource.data.push(newData);
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  clickedRow(): void {
    console.log("name")
    this.router.navigate(['/home/ticket']);

  }

}

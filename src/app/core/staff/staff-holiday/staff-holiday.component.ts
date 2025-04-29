import { Component, OnInit } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';
import { Sort } from '@angular/material/sort';
import { MatTableDataSource } from "@angular/material/table";
import { pageSelection, apiResultFormat, staffholidays } from 'src/app/shared/models/models';
import { DataService } from 'src/app/shared/data/data.service';

@Component({
    selector: 'app-staff-holiday',
    templateUrl: './staff-holiday.component.html',
    styleUrls: ['./staff-holiday.component.scss'],
    standalone: false
})
export class StaffHolidayComponent implements OnInit {
  public routes = routes;

  public staffHoliday: Array<staffholidays> = [];
  dataSource!: MatTableDataSource<staffholidays>;

  public showFilter = false;
  public searchDataValue = '';
  public lastIndex = 0;
  public pageSize = 10;
  public totalData = 0;
  public skip = 0;
  public limit: number = this.pageSize;
  public pageIndex = 0;
  public serialNumberArray: Array<number> = [];
  public currentPage = 1;
  public pageNumberArray: Array<number> = [];
  public pageSelection: Array<pageSelection> = [];
  public totalPages = 0;

  constructor(public data : DataService){

  }
  ngOnInit() {
    this.getTableData();
  }
  private getTableData(): void {
    this.staffHoliday = [];
    this.serialNumberArray = [];

    this.data.getStaffHoliday().subscribe((data: apiResultFormat) => {
      this.totalData = data.totalData;
      data.data.map((res: staffholidays, index: number) => {
        const serialNumber = index + 1;
        if (index >= this.skip && serialNumber <= this.limit) {
         
          this.staffHoliday.push(res);
          this.serialNumberArray.push(serialNumber);
        }
      });
      this.dataSource = new MatTableDataSource<staffholidays>(this.staffHoliday);
      this.calculateTotalPages(this.totalData, this.pageSize);
    });
  }
// eslint-disable-next-line @typescript-eslint/no-explicit-any
  public searchData(value: any): void {
    this.dataSource.filter = value.trim().toLowerCase();
    this.staffHoliday = this.dataSource.filteredData;
  }

  public sortData(sort: Sort) {
    const data = this.staffHoliday.slice();

    if (!sort.active || sort.direction === '') {
      this.staffHoliday = data;
    } else {
      this.staffHoliday = data.sort((a, b) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const aValue = (a as any)[sort.active];
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const bValue = (b as any)[sort.active];
        return (aValue < bValue ? -1 : 1) * (sort.direction === 'asc' ? 1 : -1);
      });
    }
  }

  public getMoreData(event: string): void {
    if (event == 'next') {
      this.currentPage++;
      this.pageIndex = this.currentPage - 1;
      this.limit += this.pageSize;
      this.skip = this.pageSize * this.pageIndex;
      this.getTableData();
    } else if (event == 'previous') {
      this.currentPage--;
      this.pageIndex = this.currentPage - 1;
      this.limit -= this.pageSize;
      this.skip = this.pageSize * this.pageIndex;
      this.getTableData();
    }
  }

  public moveToPage(pageNumber: number): void {
    this.currentPage = pageNumber;
    this.skip = this.pageSelection[pageNumber - 1].skip;
    this.limit = this.pageSelection[pageNumber - 1].limit;
    if (pageNumber > this.currentPage) {
      this.pageIndex = pageNumber - 1;
    } else if (pageNumber < this.currentPage) {
      this.pageIndex = pageNumber + 1;
    }
    this.getTableData();
  }

  public PageSize(): void {
    this.pageSelection = [];
    this.limit = this.pageSize;
    this.skip = 0;
    this.currentPage = 1;
    this.getTableData();
  }

  private calculateTotalPages(totalData: number, pageSize: number): void {
    this.pageNumberArray = [];
    this.totalPages = totalData / pageSize;
    if (this.totalPages % 1 != 0) {
      this.totalPages = Math.trunc(this.totalPages + 1);
    }
    /* eslint no-var: off */
    for (var i = 1; i <= this.totalPages; i++) {
      const limit = pageSize * i;
      const skip = limit - pageSize;
      this.pageNumberArray.push(i);
      this.pageSelection.push({ skip: skip, limit: limit });
    }
  }
}

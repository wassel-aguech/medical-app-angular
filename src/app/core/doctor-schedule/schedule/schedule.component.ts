import { Component, OnInit } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { DataService } from 'src/app/shared/data/data.service';
import { pageSelection, apiResultFormat, schedule } from 'src/app/shared/models/models';
import { routes } from 'src/app/shared/routes/routes';
import { DisponibiliteService } from 'src/app/shared/services/disponibilite.service';
import Swal from 'sweetalert2';

@Component({
    selector: 'app-schedule',
    templateUrl: './schedule.component.html',
    styleUrls: ['./schedule.component.scss'],
    standalone: false
})
export class ScheduleComponent implements OnInit{
  public routes = routes;

  public schedule: Array<schedule> = [];
  dataSource!: MatTableDataSource<schedule>;

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
  listdisponibilites: any[] = [];
  medecinId: any




  constructor(private disponibiliteService: DisponibiliteService , public data : DataService , private router : Router) {}

  ngOnInit(): void {
    this.medecinId = localStorage.getItem('userId');

    this.loadDisponibilites();
    // this.getTableData();

  }

  loadDisponibilites(): void {
    this.disponibiliteService.getDisponibilitesByMedecinId(this.medecinId).subscribe(
      (data) => this.listdisponibilites = data,
      (error) => console.error('Erreur lors du chargement des disponibilités', error)
    );
  }


  // private getTableData(): void {
  //   this.schedule = [];
  //   this.serialNumberArray = [];

  //   this.data.getSchedule().subscribe((data: apiResultFormat) => {
  //     this.totalData = data.totalData;
  //     data.data.map((res: schedule, index: number) => {
  //       const serialNumber = index + 1;
  //       if (index >= this.skip && serialNumber <= this.limit) {

  //         this.schedule.push(res);
  //         this.serialNumberArray.push(serialNumber);
  //       }
  //     });
  //     this.dataSource = new MatTableDataSource<schedule>(this.schedule);
  //     this.calculateTotalPages(this.totalData, this.pageSize);
  //   });
  // }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public searchData(value: any): void {
    this.dataSource.filter = value.trim().toLowerCase();
    this.schedule = this.dataSource.filteredData;
  }

  public sortData(sort: Sort) {
    const data = this.schedule.slice();

    if (!sort.active || sort.direction === '') {
      this.schedule = data;
    } else {
      this.schedule = data.sort((a, b) => {
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
      // this.getTableData();
    } else if (event == 'previous') {
      this.currentPage--;
      this.pageIndex = this.currentPage - 1;
      this.limit -= this.pageSize;
      this.skip = this.pageSize * this.pageIndex;
      // this.getTableData();
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
    // this.getTableData();
  }

  public PageSize(): void {
    this.pageSelection = [];
    this.limit = this.pageSize;
    this.skip = 0;
    this.currentPage = 1;
    // this.getTableData();
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








  deleteDisponibilite(id:number)
  {
    if(id!=undefined && id !=null)
    {
      Swal.fire({
        title: 'Êtes-vous sûr?',
        text: 'Vous ne pourrez pas récupérer entite disponibilite!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Oui, supprimez-la!',
        cancelButtonText: 'Non, gardez-la'
      }).then((result : any) => {
        if (result.value) {
         this.disponibiliteService.deleteDisponibilite(id)
          .subscribe(res=>{
          })
          this.loadDisponibilites();
        Swal.fire(
          'Supprimé!',
          'Votre disponibilite entite a été supprimée.',
          'success'
        )

        } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Annulé',
          'Votre niveau est en sécurité 🙂',
          'error'
        )
        }
      })
    }





  }



 gotoupdatedisponibilite(id: number) {
    this.router.navigate(["doctor-schedule/edit-schedule",id])

  }







}

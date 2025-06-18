import { Component, inject, OnInit } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';
import { MatTableDataSource } from "@angular/material/table";
import { pageSelection, apiResultFormat, patientsList } from 'src/app/shared/models/models';
import { Sort } from '@angular/material/sort';
import { DataService } from 'src/app/shared/data/data.service';
import { Patient } from 'src/app/shared/models/patient';
import { PatientService } from 'src/app/shared/services/patient.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
    selector: 'app-patients-list',
    templateUrl: './patients-list.component.html',
    styleUrls: ['./patients-list.component.scss'],
    standalone: false
})
export class PatientsListComponent implements OnInit {
  public routes = routes;
  public patientsList: Array<Patient> = [];
  dataSource!: MatTableDataSource<Patient>;

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

    lispatient: Patient[] = [];


  constructor(public data : DataService ,private patientservice : PatientService){

  }
  ngOnInit() {
    this.getTableData();
  }

   private getTableData(): void {
     this.lispatient = [];
     this.serialNumberArray = [];

     this.patientservice.getAllPatient().subscribe((data: Patient[]) => {
       this.totalData = data.length;
       console.log(this.lispatient);

       data.map((res: Patient, index: number) => {
         const serialNumber = index + 1;
         if (index >= this.skip && serialNumber <= this.limit) {
           this.lispatient.push(res);
           this.serialNumberArray.push(serialNumber);
         }
       });
       this.dataSource = new MatTableDataSource<Patient>(this.lispatient);
       this.calculateTotalPages(this.totalData, this.pageSize);
     });
   }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public searchData(value: any): void {
    this.dataSource.filter = value.trim().toLowerCase();
    this.patientsList = this.dataSource.filteredData;
  }

  public sortData(sort: Sort) {
    const data = this.patientsList.slice();

    if (!sort.active || sort.direction === '') {
      this.patientsList = data;
    } else {
      this.patientsList = data.sort((a, b) => {
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
      var limit = pageSize * i;
      var skip = limit - pageSize;
      this.pageNumberArray.push(i);
      this.pageSelection.push({ skip: skip, limit: limit });
    }
  }

  router = inject(Router)

  gotoupdatePatient(id: number) {
    this.router.navigate(["patient/edit-patient",id])

  }







  deletePatient(id:number)
  {
    if(id!=undefined && id !=null)
    {
      Swal.fire({
        title: 'Êtes-vous sûr?',
        text: 'Vous ne pourrez pas récupérer entite patient!',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Oui, supprimez-la!',
        cancelButtonText: 'Non, gardez-la'
      }).then((result : any) => {
        if (result.value) {
         this.patientservice.deletePatient(id)
          .subscribe(res=>{
          })
          this.getTableData();
        Swal.fire(
          'Supprimé!',
          'Votre patient entite a été supprimée.',
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





}

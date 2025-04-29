import { Component, ViewChild } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexResponsive,
  ApexXAxis,
  ApexLegend,
  ApexFill,
  ApexGrid,
  ApexStroke,
  
} from 'ng-apexcharts';
import { Sort } from '@angular/material/sort';
import { DataService } from 'src/app/shared/data/data.service';
import { recentPatients, upcomingAppointments } from 'src/app/shared/models/models';
export type ChartOptions = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  series: ApexAxisChartSeries | any;
   // eslint-disable-next-line @typescript-eslint/no-explicit-any
  chart: ApexChart | any;
   // eslint-disable-next-line @typescript-eslint/no-explicit-any
  dataLabels: ApexDataLabels | any;
   // eslint-disable-next-line @typescript-eslint/no-explicit-any
  plotOptions: ApexPlotOptions | any;
   // eslint-disable-next-line @typescript-eslint/no-explicit-any
  responsive: ApexResponsive[] | any;
   // eslint-disable-next-line @typescript-eslint/no-explicit-any
  xaxis: ApexXAxis | any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  legend: ApexLegend | any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  fill: ApexFill | any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  colors: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  grid: ApexGrid | any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  stroke: ApexStroke | any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  labels: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
};
interface data {
  value: string ;
}

@Component({
    selector: 'app-admin-dashboard',
    templateUrl: './admin-dashboard.component.html',
    styleUrls: ['./admin-dashboard.component.scss'],
    standalone: false
})
export class AdminDashboardComponent {
  public routes = routes;
  public selectedValue ! : string  ;
  @ViewChild('chart') chart!: ChartComponent;
  public chartOptionsOne: Partial<ChartOptions>;
  public chartOptionsTwo: Partial<ChartOptions>;

  public recentPatients: Array<recentPatients> = [];
  public upcomingAppointments: Array<upcomingAppointments> = [];
 
  constructor(public data : DataService) {
    this.chartOptionsOne = {
      chart: {
        height: 230,
        type: 'bar',
        stacked: true,
        toolbar: {
          show: false,
        },
      
      },
      grid: {
        show: true, 
        xaxis: {
          lines: {
            show: false
           }
         },  
        yaxis: {
          lines: { 
            show: true 
           }
         },   
        },
      responsive: [
        {
          breakpoint: 480,
          options: {
            legend: {
              position: 'bottom',
              offsetX: -10,
              offsetY: 0,
            },
          },
        },
      ],
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '15%',
        },
      },
      dataLabels: {
        enabled: false,
      },
      series: [
        {
          name: 'Male',
          color: '#2E37A4',
          data: [20, 30, 41, 67, 22, 43, 40, 10, 30, 20, 40],
        },
        {
          name: 'Female',
          color: '#00D3C7',
          data: [13, 23, 20, 8, 13, 27, 30, 25, 10, 15, 20],
        },
      ],
      xaxis: {
        categories: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
        ],
          axisBorder: {
            show: false, // set to false to hide the vertical gridlines
          },
        },
    };
    this.chartOptionsTwo = {
      series: [44, 55, 41, 17],
      chart: {
        type: 'donut',
        height: 200,
        width: 200,
        toolbar: {
          show: false,
        },
      },
      legend: {
        show: false
      },
      plotOptions: {
        bar: {
            horizontal: false,
            columnWidth: '50%'
        },
    },
      dataLabels: {
        enabled: false,
      },
      responsive: [{
        breakpoint: 480,
        options: {
            chart: {
                width: 200
            },
            legend: {
              show: false
            }
        }
    }],
    };
    this.recentPatients = this.data.recentPatients;
    this.upcomingAppointments = this.data.upcomingAppointments;
  }
  
  public sortData(sort: Sort) {
    const data = this.recentPatients.slice();
    const datas = this.upcomingAppointments.slice();

    if (!sort.active || sort.direction === '') {
      this.recentPatients = data;
      this.upcomingAppointments = datas;

    } else {
      this.recentPatients = data.sort((a, b) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const aValue = (a as any)[sort.active];
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const bValue = (b as any)[sort.active];
        return (aValue < bValue ? -1 : 1) * (sort.direction === 'asc' ? 1 : -1);
      });
      this.upcomingAppointments = datas.sort((a, b) => {
         // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const aValue = (a as any)[sort.active];
         // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const bValue = (b as any)[sort.active];
        return (aValue < bValue ? -1 : 1) * (sort.direction === 'asc' ? 1 : -1);
      });
    }
  }
  selecedList: data[] = [
    {value: '2022'},
    {value: '2021'},
    {value: '2020'},
    {value: '2019'},
  ];
}

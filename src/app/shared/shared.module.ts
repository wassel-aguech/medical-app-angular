import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxBootstrapModule } from './ngx-bootstrap/ngx-bootstrap.module';
import { CountUpModule } from 'ngx-countup';
import { NgApexchartsModule } from "ng-apexcharts";
import { NgCircleProgressModule } from 'ng-circle-progress';
import { materialModule } from './material.module';
import { NgxEditorModule } from 'ngx-editor';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { FullCalendarModule } from '@fullcalendar/angular';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { DataService } from './data/data.service';
import { MatSortModule } from '@angular/material/sort';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({ declarations: [],
    exports: [
        CommonModule,
        NgxBootstrapModule,
        CountUpModule,
        NgApexchartsModule,
        NgCircleProgressModule,
        SlickCarouselModule,
        materialModule,
        NgxEditorModule,
        FullCalendarModule,
        
        MatSortModule,
        FormsModule,
        ReactiveFormsModule
    ], imports: [CommonModule,
        NgxBootstrapModule,
        CountUpModule,
        NgApexchartsModule,
        NgCircleProgressModule.forRoot({
            "radius": 40,
            "space": -10,
            "outerStrokeWidth": 10,
            "innerStrokeWidth": 10,
            "animationDuration": 1000,
            "clockwise": false,
            "startFromZero": false,
            "lazy": false,
            "outerStrokeLinecap": "square",
            "showSubtitle": false,
            "showTitle": false,
            "showUnits": false,
            "showBackground": false
        }),
        SlickCarouselModule,
        materialModule,
        NgxEditorModule,
        FullCalendarModule,
        MatSortModule,
        FormsModule,
        ReactiveFormsModule], providers: [
        DataService,
        provideHttpClient(withInterceptorsFromDi()),
    ] })
export class SharedModule { }

import { Injectable } from '@angular/core';
import { routes } from '../routes/routes';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { apiResultFormat } from '../models/models';


@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  public getDoctorsList(): Observable<apiResultFormat> {
    return this.http.get<apiResultFormat>('assets/json/doctors-list.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getPatientsList(): Observable<apiResultFormat> {
    return this.http.get<apiResultFormat>('assets/json/doctors-list.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getStaffList(): Observable<apiResultFormat> {
    return this.http.get<apiResultFormat>('assets/json/staff-list.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getAppointmentList(): Observable<apiResultFormat> {
    return this.http.get<apiResultFormat>('assets/json/appointment-list.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getStaffHoliday(): Observable<apiResultFormat> {
    return this.http.get<apiResultFormat>('assets/json/staff-holiday.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getSchedule(): Observable<apiResultFormat> {
    return this.http.get<apiResultFormat>('assets/json/schedule.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getInvoices(): Observable<apiResultFormat> {
    return this.http.get<apiResultFormat>('assets/json/invoices.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getPayments(): Observable<apiResultFormat> {
    return this.http.get<apiResultFormat>('assets/json/payments.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getExpenses(): Observable<apiResultFormat> {
    return this.http.get<apiResultFormat>('assets/json/expenses.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getTaxes(): Observable<apiResultFormat> {
    return this.http.get<apiResultFormat>('assets/json/taxes.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getProvidentFund(): Observable<apiResultFormat> {
    return this.http.get<apiResultFormat>('assets/json/provident-fund.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getDepartmentList(): Observable<apiResultFormat> {
    return this.http.get<apiResultFormat>('assets/json/department-list.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getSalary(): Observable<apiResultFormat> {
    return this.http.get<apiResultFormat>('assets/json/salary.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getAssetsList(): Observable<apiResultFormat> {
    return this.http.get<apiResultFormat>('assets/json/assets-list.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getExpenseReports(): Observable<apiResultFormat> {
    return this.http.get<apiResultFormat>('assets/json/expense-reports.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getInvoiceReports(): Observable<apiResultFormat> {
    return this.http.get<apiResultFormat>('assets/json/invoice-reports.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getAllInvoice(): Observable<apiResultFormat> {
    return this.http.get<apiResultFormat>('assets/json/all-invoice.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getPatientDashboard(): Observable<apiResultFormat> {
    return this.http.get<apiResultFormat>('assets/json/patient-dashboard.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getInvoicesPaid(): Observable<apiResultFormat> {
    return this.http.get<apiResultFormat>('assets/json/invoices-paid.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getInvoicesOverdue(): Observable<apiResultFormat> {
    return this.http.get<apiResultFormat>('assets/json/invoices-overdue.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getInvoicesDraft(): Observable<apiResultFormat> {
    return this.http.get<apiResultFormat>('assets/json/invoices-draft.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getInvoicesCancelled(): Observable<apiResultFormat> {
    return this.http.get<apiResultFormat>('assets/json/invoices-cancelled.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getInvoicesRecurring(): Observable<apiResultFormat> {
    return this.http.get<apiResultFormat>('assets/json/invoices-recurring.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getStaffLeave(): Observable<apiResultFormat> {
    return this.http.get<apiResultFormat>('assets/json/staff-leave.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getEvents() {
    return this.http.get<apiResultFormat>('assets/json/scheduleevents.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public getDataTables() {
    return this.http.get<apiResultFormat>('assets/json/data-tables.json').pipe(
      map((res: apiResultFormat) => {
        return res;
      })
    );
  }
  public sideBar = [
    {
      tittle: 'Main',
      showAsTab: false,
      separateRoute: false,
      menu: [
        {
          menuValue: 'Dashboard',
          hasSubRoute: true,
          showSubRoute: false,
          base: 'dashboard',
          route:'dashboard',
          img: 'assets/img/icons/menu-icon-01.svg',
          subMenus: [
            {
              menuValue: 'Admin Dashboard',
              route: routes.adminDashboard,
              base: routes.adminDashboard,
            },
            {
              menuValue: 'Doctor Dashboard',
              route: routes.doctorDashboard,
              base: routes.doctorDashboard,
            },
            {
              menuValue: 'Patient Dashboard',
              route: routes.patientDashboard,
              base: routes.patientDashboard,
            },
          ],
        },
        {
          menuValue: 'Doctors',
          hasSubRoute: true,
          showSubRoute: false,
          base: 'doctor',
          img: 'assets/img/icons/menu-icon-02.svg',
          subMenus: [
            {
              menuValue: 'Doctor List',
              route: routes.doctorsList,
              base: routes.doctorsList,
            },
            {
              menuValue: 'Add Doctor',
              route: routes.addDoctor,
              base: routes.addDoctor,
            },
            {
              menuValue: 'Edit Doctor',
              route: routes.editDoctor,
              base: routes.editDoctor,
            },
            {
              menuValue: 'Doctor Profile',
              route: routes.doctorProfile,
              base: routes.doctorProfile,
            },
          ],
        },
        {
          menuValue: 'Patients',
          hasSubRoute: true,
          showSubRoute: false,
          base: 'patient',
          img: 'assets/img/icons/menu-icon-03.svg',
          subMenus: [
            {
              menuValue: 'Patients List',
              route: routes.patientsList,
              base: routes.patientsList,
            },
            {
              menuValue: 'Add Patients',
              route: routes.addPatient,
              base: routes.addPatient,
            },
            {
              menuValue: 'Edit Patients',
              route: routes.editPatient,
              base: routes.editPatient,
            },
            {
              menuValue: 'Patients Profile',
              route: routes.patientProfile,
              base: routes.patientProfile,
            },
          ],
        },
        {
          menuValue: 'Staff',
          hasSubRoute: true,
          showSubRoute: false,
          base: 'staff',
          img: 'assets/img/icons/menu-icon-08.svg',
          subMenus: [
            {
              menuValue: 'Staff List',
              route: routes.staffList,
              base: routes.staffList,
            },
            {
              menuValue: 'Add Staff',
              route: routes.addStaff,
              base: routes.addStaff,
            },
            {
              menuValue: 'Staff Profile',
              route: routes.staffProfile,
              base: routes.staffProfile,
            },
            {
              menuValue: 'Leaves',
              route: routes.staffLeave,
              base: routes.staffLeave,
            },
            {
              menuValue: 'Holidays',
              route: routes.staffHoliday,
              base: routes.staffHoliday,
            },
            {
              menuValue: 'Attendance',
              route: routes.staffAttendance,
              base: routes.staffAttendance,
            },
          ],
        },
        {
          menuValue: 'Appointments',
          hasSubRoute: true,
          showSubRoute: false,
          base: 'appointments',
          img: 'assets/img/icons/menu-icon-04.svg',
          subMenus: [
            {
              menuValue: 'Appointment List',
              route: routes.appointmentList,
              base: routes.appointmentList,
            },
            {
              menuValue: 'Book Appointment',
              route: routes.addAppointment,
              base: routes.addAppointment,
            },
            {
              menuValue: 'Edit Appointment',
              route: routes.editAppointment,
              base: routes.editAppointment,
            },
          ],
        },
        {
          menuValue: 'Doctor Schedule',
          hasSubRoute: true,
          showSubRoute: false,
          base: 'doctor-schedule',
          img: 'assets/img/icons/menu-icon-05.svg',
          subMenus: [
            {
              menuValue: 'Schedule List',
              route: routes.schedule,
              base: routes.schedule,
            },
            {
              menuValue: 'Book Appointment',
              route: routes.addSchedule,
              base: routes.addSchedule,
            },
            {
              menuValue: 'Edit Appointment',
              route: routes.editSchedule,
              base: routes.editSchedule,
            },
          ],
        },
        {
          menuValue: 'Departments',
          hasSubRoute: true,
          showSubRoute: false,
          base: 'departments',
          img: 'assets/img/icons/menu-icon-06.svg',
          subMenus: [
            {
              menuValue: 'Department List',
              route: routes.departmentList,
              base: routes.departmentList,
            },
            {
              menuValue: 'Add Department',
              route: routes.addDepartment,
              base: routes.addDepartment,
            },
            {
              menuValue: 'Edit Department',
              route: routes.editDepartment,
              base: routes.editDepartment,
            },
          ],
        },
        {
          menuValue: 'Accounts',
          hasSubRoute: true,
          showSubRoute: false,
          base: 'accounts',
          img: 'assets/img/icons/menu-icon-07.svg',
          subMenus: [
            {
              menuValue: 'Invoices',
              route: routes.invoices,
              base: routes.invoices,
            },
            {
              menuValue: 'Payments',
              route: routes.payments,
              base: routes.payments,
            },
            {
              menuValue: 'Expenses',
              route: routes.expenses,
              base: routes.expenses,
            },
            {
              menuValue: 'Taxes',
              route: routes.taxes,
              base: routes.taxes,
            },
            {
              menuValue: 'Provident Fund',
              route: routes.providentFund,
              base: routes.providentFund,
            },
          ],
        },
        {
          menuValue: 'Payroll',
          hasSubRoute: true,
          showSubRoute: false,
          base: 'payroll',
          img: 'assets/img/icons/menu-icon-09.svg',
          subMenus: [
            {
              menuValue: 'Employee Salary',
              route: routes.salary,
              base: routes.salary,
            },
            {
              menuValue: 'Payslip',
              route: routes.salaryView,
              base: routes.salaryView,
            },
          ],
        },
        {
          menuValue: 'Chat',
          route: routes.chat,
          hasSubRoute: false,
          showSubRoute: false,
          base: 'chat',
          img: 'assets/img/icons/menu-icon-10.svg',
          subMenus: [],
        },
        {
          menuValue: 'Call',
          hasSubRoute: true,
          showSubRoute: false,
          base: 'calls',
          img: 'assets/img/icons/menu-icon-11.svg',
          subMenus: [
            {
              menuValue: 'Voice Call',
              route: routes.voiceCall,
              base: routes.voiceCall,
            },
            {
              menuValue: 'Video Call',
              route: routes.videoCall,
              base: routes.videoCall,
            },
            {
              menuValue: 'Incoming Call',
              route: routes.incomingCall,
              base: routes.incomingCall,
            },
          ],
        },
        {
          menuValue: 'Email',
          hasSubRoute: true,
          showSubRoute: false,
          base: 'email',
          img: 'assets/img/icons/menu-icon-12.svg',
          subMenus: [
            {
              menuValue: 'Compose Mail',
              route: routes.compose,
              base: routes.compose,
            },
            {
              menuValue: 'Inbox',
              route: routes.inbox,
              base: routes.inbox,
            },
            {
              menuValue: 'Mail View',
              route: routes.mailView,
              base: routes.mailView,
            },
          ],
        },
        {
          menuValue: 'Blog',
          hasSubRoute: true,
          showSubRoute: false,
          base: 'blogs',
          img: 'assets/img/icons/menu-icon-13.svg',
          subMenus: [
            {
              menuValue: 'Blog',
              route: routes.blog,
              base: routes.blog,
            },
            {
              menuValue: 'Blog View',
              route: routes.blogDetails,
              base: routes.blogDetails,
            },
            {
              menuValue: 'Add Blog',
              route: routes.addBlog,
              base: routes.addBlog,
            },
            {
              menuValue: 'Edit Blog',
              route: routes.editBlog,
              base: routes.editBlog,
            },
          ],
        },
        {
          menuValue: 'Assets',
          route: routes.assetsList,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'fa-cube',
          faIcon: true,
          base: 'assets',
          subMenus: [],
        },
        {
          menuValue: 'activities',
          route: routes.activities,
          hasSubRoute: false,
          showSubRoute: false,
          img: 'assets/img/icons/menu-icon-14.svg',
          base: 'activities',
          subMenus: [],
        },
        {
          menuValue: 'Reports',
          hasSubRoute: true,
          showSubRoute: false,
          base: 'reports',
          img: 'assets/img/icons/menu-icon-02.svg',
          subMenus: [
            {
              menuValue: 'Expense Report',
              route: routes.expenseReports,
              base: routes.expenseReports,
            },
            {
              menuValue: 'Invoice Report',
              route: routes.invoiceReports,
              base: routes.invoiceReports,
            },
          ],
        },
        {
          menuValue: 'Invoice',
          hasSubRoute: true,
          showSubRoute: false,
          base: 'invoice',
          img: 'assets/img/icons/menu-icon-15.svg',
          subMenus: [
            {
              menuValue: 'Invoices List',
              route: routes.allInvoice,
              base: routes.allInvoice,
            },
            {
              menuValue: 'Invoice Grid',
              route: routes.invoicesGrid,
              base: routes.invoicesGrid,
            },
            {
              menuValue: 'Add Invoices',
              route: routes.addInvoice,
              base: routes.addInvoice,
            },
            {
              menuValue: 'Edit Invoices',
              route: routes.editInvoices,
              base: routes.editInvoices,
            },
            {
              menuValue: 'Invoices Details',
              route: routes.viewInvoice,
              base: routes.viewInvoice,
            },
            {
              menuValue: 'Invoices Settings',
              route: routes.invoicesSettings,
              base: routes.invoicesSettings,
            },
          ],
        },
        {
          menuValue: 'Settings',
          route: routes.settings,
          hasSubRoute: false,
          showSubRoute: false,
          img: 'assets/img/icons/menu-icon-16.svg',
          base: 'settings',
          subMenus: [],
        },
      ],
    },
    {
      tittle: 'UI Elements',
      showAsTab: false,
      separateRoute: false,
      menu: [
        {
          menuValue: 'Components',
          hasSubRoute: true,
          showSubRoute: false,
          base: 'components',
          img: 'assets/img/icons/menu-icon-02.svg',
          subMenus: [
            {
              menuValue: 'UI Kit',
              route: routes.uikit,
              base: routes.uikit,
            },
            {
              menuValue: 'Typography',
              route: routes.typography,
              base: routes.typography,
            },
            {
              menuValue: 'Tabs',
              route: routes.tabs,
              base: routes.tabs,
            },
          ],
        },
        {
          menuValue: 'Forms',
          hasSubRoute: true,
          showSubRoute: false,
          base: 'forms',
          icon: 'fa-edit',
          faIcon: true,
          subMenus: [
            {
              menuValue: 'Basic Inputs',
              route: routes.formBasicInputs,
              base: routes.formBasicInputs,
            },
            {
              menuValue: 'Input Groups',
              route: routes.formInputGroups,
              base: routes.formInputGroups,
            },
            {
              menuValue: 'Horizontal Form',
              route: routes.formHorizontal,
              base: routes.formHorizontal,
            },
            {
              menuValue: 'Vertical Form',
              route: routes.formVertical,
              base: routes.formVertical,
            },
          ],
        },
        {
          menuValue: 'Tables',
          hasSubRoute: true,
          showSubRoute: false,
          base: 'tables',
          icon: 'fa-table',
          faIcon: true,
          subMenus: [
            {
              menuValue: 'Basic Tables',
              route: routes.tablesBasic,
              base: routes.tablesBasic,
            },
            {
              menuValue: 'Data Table',
              route: routes.tablesDataTables,
              base: routes.tablesDataTables,
            },
          ],
        },
        {
          menuValue: 'Calendar',
          route: routes.calendar,
          hasSubRoute: false,
          showSubRoute: false,
          icon: 'fa-calendar',
          faIcon: true,
          base: 'calendar',
          subMenus: [],
        },
      ],
    },
    {
      tittle: 'Extras',
      showAsTab: false,
      separateRoute: false,
      menu: [
        {
          menuValue: 'Pages',
          hasSubRoute: true,
          showSubRoute: false,
          base: 'gallery',
          base2: 'profile',
          icon: 'fa-columns',
          faIcon: true,
          subMenus: [
            {
              menuValue: 'Login',
              route: routes.login,
              base: routes.login,
            },
            {
              menuValue: 'Register',
              route: routes.register,
              base: routes.register,
            },
            {
              menuValue: 'Forgot Password',
              route: routes.forgotPassword,
              base: routes.forgotPassword,
            },
            {
              menuValue: 'Change Password',
              route: routes.changePassword,
              base: routes.changePassword,
            },
            {
              menuValue: 'Lock Screen',
              route: routes.lockScreen,
              base: routes.lockScreen,
            },
            {
              menuValue: 'Profile',
              route: routes.profile,
              base: routes.profile,
            },
            {
              menuValue: 'Gallery',
              route: routes.gallery,
              base: routes.gallery,
            },
            {
              menuValue: '404 Error',
              route: routes.error404,
              base: routes.error404,
            },
            {
              menuValue: '500 Error',
              route: routes.error500,
              base: routes.error500,
            },
          ],
        },
        
      ],
    },
  ];
  public carousel1 = [
    {
      quantity: '68',
      units: 'kg',
    },
    {
      quantity: '70',
      units: 'kg',
    },
    {
      quantity: '72',
      units: 'kg',
    },
    {
      quantity: '74',
      units: 'kg',
    },
    {
      quantity: '76',
      units: 'kg',
    },
  ];
  public carousel2 = [
    {
      quantity: '160',
      units: 'cm',
    },
    {
      quantity: '162',
      units: 'cm',
    },
    {
      quantity: '164',
      units: 'cm',
    },
    {
      quantity: '166',
      units: 'cm',
    },
    {
      quantity: '168',
      units: 'cm',
    },
  ];
  public socialLinks = [
    {
      icon: 'facebook',
      placeholder: 'https://www.facebook.com'
    },
    {
      icon: 'twitter',
      placeholder: 'https://www.twitter.com'
    },
    {
      icon: 'youtube',
      placeholder: 'https://www.youtube.com'
    },
    {
      icon: 'linkedin',
      placeholder: 'https://www.linkedin.com'
    }
  ];
  public upcomingAppointments = [
    {
      "no" : "R00001",
      "patientName" : "Andrea Lalema",
      "doctor" : "Dr.Jenny Smith",
      "date" : "12.05.2022 at",
      "time" : "7.00 PM",
      "disease" : "Fracture",
      "img" : "assets/img/profiles/avatar-03.jpg"
  },
  {
      "no" : "R00002",
      "patientName" : "Cristina Groves",
      "doctor" : "Dr.Angelica Ramos",
      "date" : "13.05.2022 at",
      "time" : "7.00 PM",
      "disease" : "Fever",
      "img" : "assets/img/profiles/avatar-05.jpg"
  },
  {
      "no" : "R00003",
      "patientName" : "Bernardo",
      "doctor" : "Dr.Martin Doe",
      "date" : "14.05.2022 at",
      "time" : "7.00 PM",
      "disease" : "Fracture",
      "img" : "assets/img/profiles/avatar-04.jpg"
  },
  {
      "no" : "R00004",
      "patientName" : "Galaviz Lalema",
      "doctor" : "Dr.Martin Doe",
      "date" : "15.05.2022 at",
      "time" : "7.00 PM",
      "disease" : "Fracture",
      "img" : "assets/img/profiles/avatar-03.jpg"
  },
  {
      "no" : "R00005",
      "patientName" : "Dr.William Jerk",
      "doctor" : "Dr.Angelica Ramos",
      "date" : "16.05.2022 at",
      "time" : "7.00 PM",
      "disease" : "Fever",
      "img" : "assets/img/profiles/avatar-02.jpg"
  }
  ];
  public recentPatients = [
    {
      "no" : "R00001",
      "patientName" : "Andrea Lalema",
      "age" : "21",
      "date" : "12.05.2022 at",
      "dateOfBirth" : "07 January 2002",
      "diagnosis" : "Heart attack",
      "img" : "assets/img/profiles/avatar-02.jpg",
      "triage" : "Non Urgent"
  },
  {
      "no" : "R00002",
      "patientName" : "Mark Hay Smith",
      "age" : "23",
      "date" : "13.05.2022 at",
      "dateOfBirth" : "06 January 2002",
      "diagnosis" : "Jaundice",
      "img" : "assets/img/profiles/avatar-03.jpg",
      "triage" : "Emergency"
  },
  {
      "no" : "R00003",
      "patientName" : "Cristina Groves",
      "age" : "25",
      "date" : "14.05.2022 at",
      "dateOfBirth" : "10 January 2002",
      "diagnosis" : "Malaria",
      "img" : "assets/img/profiles/avatar-04.jpg",
      "triage" : "Out Patient"
  },
  {
      "no" : "R00004",
      "patientName" : "Galaviz Lalema",
      "age" : "21",
      "date" : "15.05.2022 at",
      "dateOfBirth" : "09 January 2002",
      "diagnosis" : "Typhoid",
      "img" : "assets/img/profiles/avatar-05.jpg",
      "triage" : "Urgent"
  }
  ];
  public patientProfile = [
    {
      date : "29/09/2022",
      doctor : "Dr.Jenny Smith",
      treatment : "Check up",
      charges : "$ 60"
    },
    {
      date : "19/09/2022",
      doctor : "Andrea Lalema",
      treatment : "	Blood Test",
      charges : "$ 50"
    },
    {
      date : "20/09/2022",
      doctor : "Dr.William Stephin",
      treatment : "Blood Pressure",
      charges : "$ 30"
    }
  ];
  public blogs = [
    {
      img1: "assets/img/blog/blog-1.jpg",
      img2: "assets/img/profiles/avatar-01.jpg",
      heading5: "Diabetes",
      count1: "58",
      count2: "500",
      date: "05 Sep 2022",
      heading4: "Jenifer Robinson",
      name: "M.B.B.S, Diabetologist",
      heading3: "Simple Changes That Lowered My Mom's Blood Pressure",
      paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
      msg: "Read more in 8 Minutes"
    },
    {
      img1: "assets/img/blog/blog-2.jpg",
      img2: "assets/img/profiles/avatar-02.jpg",
      heading5: "Safety",
      count1: "18",
      count2: "5k",
      date: "05 Sep 2022",
      heading4: "Mark hay smith",
      name: "M.B.B.S, Neurologist",
      heading3: "Vaccines Are Close - But Right Now We Need to Hunker Down",
      paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
      msg: "Read more in 2 Minutes"
    },
    {
      img1: "assets/img/blog/blog-3.jpg",
      img2: "assets/img/profiles/avatar-03.jpg",
      heading5: "Dermotology",
      count1: "28",
      count2: "2.5k",
      date: "05 Sep 2022",
      heading4: "Denise Stevens",
      name: "M.B.B.S, Dermotologist",
      heading3: "Hair Loss On One Side of Head – Causes & Treatments",
      paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
      msg: "Read more in 3 Minutes"
    },
    {
      img1: "assets/img/blog/blog-4.jpg",
      img2: "assets/img/profiles/avatar-05.jpg",
      heading5: "Ophthalmology",
      count1: "48",
      count2: "600",
      date: "05 Sep 2022",
      heading4: "Laura Williams",
      name: "M.B.B.S, Ophthalmologist",
      heading3: "Eye Care Routine To Get Rid Of Under Eye Circles And Puffiness",
      paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
      msg: "Read more in 5 Minutes"
    },
    {
      img1: "assets/img/blog/blog-5.jpg",
      img2: "assets/img/profiles/avatar-06.jpg",
      heading5: "Dentist",
      count1: "48",
      count2: "600",
      date: "05 Sep 2022",
      heading4: "Linda Carpenter",
      name: "M.B.B.S, Dentist",
      heading3: "5 Facts About Teeth Whitening You Should Know",
      paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
      msg: "Read more in 3 Minutes"
    },
    {
      img1: "assets/img/blog/blog-6.jpg",
      img2: "assets/img/profiles/avatar-04.jpg",
      heading5: "Gynecologist",
      count1: "18",
      count2: "300",
      date: "05 Sep 2022",
      heading4: "Mark hay smith",
      name: "M.B.B.S, Gynecologist",
      heading3: "Sciatica: Symptoms, Causes & Treatments",
      paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
      msg: "Read more in 10 Minutes"
    }
  ];
  public invoicesGrid = [
    {
      invoiceNumber: "IN093439#@09",
      name: "Barbara Moore",
      img: "assets/img/profiles/avatar-04.jpg",
      amount: "Amount",
      amounts: "$1,54,220",
      text: "Due Date",
      dueDate: "23 Mar 2022",
      status: "Paid",
    },
    {
      invoiceNumber: "IN093439#@10",
      name: "Karlene Chaidez",
      img: "assets/img/profiles/avatar-06.jpg",
      amount: "Amount",
      amounts: "$1,222",
      text: "Due Date",
      dueDate: "18 Mar 2022",
      status: "Overdue",
      overDue: "Overdue 14 days"
    },
    {
      invoiceNumber: "IN093439#@11",
      name: "Russell Copeland",
      img: "assets/img/profiles/avatar-08.jpg",
      amount: "Amount",
      amounts: "$3,470",
      text: "Due Date",
      dueDate: "10 Mar 2022",
      status: "Cancelled",
    },
    {
      invoiceNumber: "IN093439#@12",
      name: "Joseph Collins",
      img: "assets/img/profiles/avatar-10.jpg",
      amount: "Amount",
      amounts: "$8,265",
      text: "Due Date",
      dueDate: "30 Mar 2022",
      status: "Sent",
    },
    {
      invoiceNumber: "IN093439#@13",
      name: "Jennifer Floyd",
      img: "assets/img/profiles/avatar-11.jpg",
      amount: "Amount",
      amounts: "$5,200",
      text: "Due Date",
      dueDate: "20 Mar 2022",
      status: "Cancelled",
    },
    {
      invoiceNumber: "IN093439#@14",
      name: "Leatha Bailey",
      img: "assets/img/profiles/avatar-09.jpg",
      amount: "Amount",
      amounts: "$480",
      text: "Due Date",
      dueDate: "15 Mar 2022",
      status: "Sent",
    },
    {
      invoiceNumber: "IN093439#@15",
      name: "Alex Campbell",
      img: "assets/img/profiles/avatar-12.jpg",
      amount: "Amount",
      amounts: "$1,999",
      text: "Due Date",
      dueDate: "08 Mar 2022",
      status: "Overdue",
      overDue: "Overdue 10 days"
    },
    {
      invoiceNumber: "IN093439#@16",
      name: "Marie Canales",
      img: "assets/img/profiles/avatar-03.jpg",
      amount: "Amount",
      amounts: "$2,700",
      text: "Due Date",
      dueDate: "18 Mar 2022",
      status: "Paid",
    },
  ]
}

export class routes {

  private static Url = '';

  public static get baseUrl(): string {
    return this.Url;
  }
  public static get changePassword2(): string {
    return this.baseUrl + '/change-password2';
  }
  public static get forgotPassword(): string {
    return this.baseUrl + '/forgot-password';
  }
  public static get lockScreen(): string {
    return this.baseUrl + '/lock-screen';
  }
  public static get login(): string {
    return this.baseUrl + '/login';
  }
  public static get register(): string {
    return this.baseUrl + '/register';
  }
  public static get addPayment(): string {
    return this.baseUrl + '/accounts/add-payment';
  }
  public static get expenses(): string {
    return this.baseUrl + '/accounts/expenses';
  }
  public static get addExpense(): string {
    return this.baseUrl + '/accounts/add-expense';
  }
  public static get editExpense(): string {
    return this.baseUrl + '/accounts/edit-expense';
  }
  public static get invoices(): string {
    return this.baseUrl + '/accounts/invoices';
  }
  public static get invoiceView(): string {
    return this.baseUrl + '/accounts/invoice-view';
  }
  public static get payments(): string {
    return this.baseUrl + '/accounts/payments';
  }
  public static get editPayment(): string {
    return this.baseUrl + '/accounts/edit-payment';
  }
  public static get providentFund(): string {
    return this.baseUrl + '/accounts/provident-fund';
  }
  public static get addProvidentFund(): string {
    return this.baseUrl + '/accounts/add-provident-fund';
  }
  public static get editProvidentFund(): string {
    return this.baseUrl + '/accounts/edit-provident-fund';
  }
  public static get taxes(): string {
    return this.baseUrl + '/accounts/taxes';
  }
  public static get addTax(): string {
    return this.baseUrl + '/accounts/add-tax';
  }
  public static get editTax(): string {
    return this.baseUrl + '/accounts/edit-tax';
  }
  public static get activities(): string {
    return this.baseUrl + '/activities';
  }
  public static get addAppointment(): string {
    return this.baseUrl + '/appointments/add-appointment';
  }
  public static get appointmentList(): string {
    return this.baseUrl + '/appointments/appointment-list';
  }
  public static get editAppointment(): string {
    return this.baseUrl + '/appointments/edit-appointment';
  }
  public static get addAsset(): string {
    return this.baseUrl + '/assets/add-asset';
  }
  public static get assetsList(): string {
    return this.baseUrl + '/assets/assets-list';
  }
  public static get editAsset(): string {
    return this.baseUrl + '/assets/edit-asset';
  }
  public static get blankPage(): string {
    return this.baseUrl + '/blank-page';
  }
  public static get addBlog(): string {
    return this.baseUrl + '/blogs/add-blog';
  }
  public static get blog(): string {
    return this.baseUrl + '/blogs/blog';
  }
  public static get blogDetails(): string {
    return this.baseUrl + '/blogs/blog-details';
  }
  public static get editBlog(): string {
    return this.baseUrl + '/blogs/edit-blog';
  }
  public static get calendar(): string {
    return this.baseUrl + '/calendar';
  }
  public static get incomingCall(): string {
    return this.baseUrl + '/calls/incoming-call';
  }
  public static get videoCall(): string {
    return this.baseUrl + '/calls/video-call';
  }
  public static get voiceCall(): string {
    return this.baseUrl + '/calls/voice-call';
  }
  public static get chat(): string {
    return this.baseUrl + '/chat';
  }
  public static get tabs(): string {
    return this.baseUrl + '/components/tabs';
  }
  public static get typography(): string {
    return this.baseUrl + '/components/typography';
  }
  public static get uikit(): string {
    return this.baseUrl + '/components/uikit';
  }
  public static get adminDashboard(): string {
    return this.baseUrl + '/dashboard/admin-dashboard';
  }
  public static get doctorDashboard(): string {
    return this.baseUrl + '/dashboard/doctor-dashboard';
  }
  public static get patientDashboard(): string {
    return this.baseUrl + '/dashboard/patient-dashboard';
  }
  public static get addDepartment(): string {
    return this.baseUrl + '/departments/add-department';
  }
  public static get departmentList(): string {
    return this.baseUrl + '/departments/department-list';
  }
  public static get editDepartment(): string {
    return this.baseUrl + '/departments/edit-department';
  }
  public static get addDoctor(): string {
    return this.baseUrl + '/doctor/add-doctor';
  }
  public static get doctorProfile(): string {
    return this.baseUrl + '/doctor/doctor-profile';
  }
  public static get doctorSetting(): string {
    return this.baseUrl + '/doctor/doctor-setting';
  }
  public static get doctorsList(): string {
    return this.baseUrl + '/doctor/doctors-list';
  }
  public static get editDoctor(): string {
    return this.baseUrl + '/doctor/edit-doctor';
  }
  public static get addSchedule(): string {
    return this.baseUrl + '/doctor-schedule/add-schedule';
  }
  public static get editSchedule(): string {
    return this.baseUrl + '/doctor-schedule/edit-schedule';
  }
  public static get schedule(): string {
    return this.baseUrl + '/doctor-schedule/schedule';
  }
  public static get email(): string {
    return this.baseUrl + '/email';
  }
  public static get compose(): string {
    return this.baseUrl + '/email/compose';
  }
  public static get confirmMail(): string {
    return this.baseUrl + '/email/confirm-mail';
  }
  public static get inbox(): string {
    return this.baseUrl + '/email/inbox';
  }
  public static get mailView(): string {
    return this.baseUrl + '/email/mail-view';
  }
  public static get forms(): string {
    return this.baseUrl + '/forms';
  }
  public static get formBasicInputs(): string {
    return this.baseUrl + '/forms/form-basic-inputs';
  }
  public static get formHorizontal(): string {
    return this.baseUrl + '/forms/form-horizontal';
  }
  public static get formInputGroups(): string {
    return this.baseUrl + '/forms/form-input-groups';
  }
  public static get formVertical(): string {
    return this.baseUrl + '/forms/form-vertical';
  }
  public static get gallery(): string {
    return this.baseUrl + '/gallery';
  }
  public static get addInvoice(): string {
    return this.baseUrl + '/invoice/add-invoice';
  }
  public static get createInvoice(): string {
    return this.baseUrl + '/invoice/create-invoice';
  }
  public static get editInvoice(): string {
    return this.baseUrl + '/invoice/edit-invoice';
  }
  public static get editInvoices(): string {
    return this.baseUrl + '/invoice/edit-invoices';
  }
  public static get invoicesGrid(): string {
    return this.baseUrl + '/invoice/invoices-grid';
  }
  public static get allInvoice(): string {
    return this.baseUrl + '/invoice/all-invoice';
  }
  public static get invoicesCancelled(): string {
    return this.baseUrl + '/invoice/invoices-cancelled';
  }
  public static get invoicesDraft(): string {
    return this.baseUrl + '/invoice/invoices-draft';
  }
  public static get invoicesOverdue(): string {
    return this.baseUrl + '/invoice/invoices-overdue';
  }
  public static get invoicesPaid(): string {
    return this.baseUrl + '/invoice/invoices-paid';
  }
  public static get invoicesRecurring(): string {
    return this.baseUrl + '/invoice/invoices-recurring';
  }
  public static get invoicesSettings(): string {
    return this.baseUrl + '/invoice/invoices-settings';
  }
  public static get taxSettings(): string {
    return this.baseUrl + '/invoice/tax-settings';
  }
  public static get viewInvoice(): string {
    return this.baseUrl + '/invoice/view-invoice';
  }
  public static get addPatient(): string {
    return this.baseUrl + '/patient/add-patient';
  }
  public static get editPatient(): string {
    return this.baseUrl + '/patient/edit-patient';
  }
  public static get patientProfile(): string {
    return this.baseUrl + '/patient/patient-profile';
  }
  public static get patientSetting(): string {
    return this.baseUrl + '/patient/patient-setting';
  }
  public static get patientsList(): string {
    return this.baseUrl + '/patient/patients-list';
  }
  public static get addSalary(): string {
    return this.baseUrl + '/payroll/add-salary';
  }
  public static get editSalary(): string {
    return this.baseUrl + '/payroll/edit-salary';
  }
  public static get salary(): string {
    return this.baseUrl + '/payroll/salary';
  }
  public static get salaryView(): string {
    return this.baseUrl + '/payroll/salary-view';
  }
  public static get profile(): string {
    return this.baseUrl + '/profile';
  }
  public static get editProfile(): string {
    return this.baseUrl + '/edit-profile';
  }
  public static get expenseReports(): string {
    return this.baseUrl + '/reports/expense-reports';
  }
  public static get invoiceReports(): string {
    return this.baseUrl + '/reports/invoice-reports';
  }
  public static get setting(): string {
    return this.baseUrl + '/setting';
  }
  public static get settings(): string {
    return this.baseUrl + '/settings/general-settings';
  }
  public static get bankSettings(): string {
    return this.baseUrl + '/settings/bank-settings';
  }
  public static get changePassword(): string {
    return this.baseUrl + '/settings/change-password';
  }
  public static get emailSettings(): string {
    return this.baseUrl + '/settings/email-settings';
  }
  public static get localizationDetails(): string {
    return this.baseUrl + '/settings/localization-details';
  }
  public static get othersSettings(): string {
    return this.baseUrl + '/settings/others-settings';
  }
  public static get paymentSettings(): string {
    return this.baseUrl + '/settings/payment-settings';
  }
  public static get seoSettings(): string {
    return this.baseUrl + '/settings/seo-settings';
  }
  public static get socialLinks(): string {
    return this.baseUrl + '/settings/social-links';
  }
  public static get socialSettings(): string {
    return this.baseUrl + '/settings/social-settings';
  }
  public static get themeSettings(): string {
    return this.baseUrl + '/settings/theme-settings';
  }
  public static get addLeave(): string {
    return this.baseUrl + '/staff/add-leave';
  }
  public static get addStaff(): string {
    return this.baseUrl + '/staff/add-staff';
  }
  public static get editLeave(): string {
    return this.baseUrl + '/staff/edit-leave';
  }
  public static get editStaff(): string {
    return this.baseUrl + '/staff/edit-staff';
  }
  public static get staffAttendance(): string {
    return this.baseUrl + '/staff/staff-attendance';
  }
  public static get staffHoliday(): string {
    return this.baseUrl + '/staff/staff-holiday';
  }
  public static get staffLeave(): string {
    return this.baseUrl + '/staff/staff-leave';
  }
  public static get staffList(): string {
    return this.baseUrl + '/staff/staff-list';
  }
  public static get staffProfile(): string {
    return this.baseUrl + '/staff/staff-profile';
  }
  public static get staffSetting(): string {
    return this.baseUrl + '/staff/staff-setting';
  }
  public static get tablesBasic(): string {
    return this.baseUrl + '/tables/tables-basic';
  }
  public static get tablesDataTables(): string {
    return this.baseUrl + '/tables/tables-datatables';
  }
  public static get error404(): string {
    return this.baseUrl + '/error/error404';
  }
  public static get error500(): string {
    return this.baseUrl + '/error/error500';
  }
}

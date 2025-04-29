export interface pageSelection {
  skip: number;
  limit: number;
}
export interface apiResultFormat {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: Array<any>;
  totalData: number;
}
export interface expenses {
  item: string;
  purchaseFrom: string;
  purchaseBy: string;
  paidBy: string;
  date: number;
  amount: string;
  status: string;
  img: string;
}
export interface staffholidays {
  title: string;
  holidayDate: number;
  day: string;
  description: string;
}
export interface staffleave {
  employeeName: string;
  leaveType: string;
  from: number;
  to: number;
  noOfDays: number | string;
  reason: string;
  status: string;
  img: string;
}
export interface invoices {
  invoiceNumber: string;
  patient: string;
  createdDate: number;
  dueDate: number;
  amount: number;
  status: string;
  img: string;
}
export interface invoicereport {
  invoiceNumber: string;
  client: string;
  createdDate: number;
  dueDate: number;
  amount: string;
  status: string;
  img: string;
}
export interface invoicescancelled {
  invoiceId: string;
  category: string;
  createdOn: string | number;
  invoiceTo: string;
  amount: string;
  cancelledOn: string | number;
  status: string | number;
  img: string;
}
export interface invoicedraft {
  createdOn: string | number;
  invoiceTo: string;
  amount: string;
  img: string;
}
export interface invoiceoverdue {
  invoiceId: string;
  category: string;
  createdOn: string | number;
  invoiceTo: string;
  amount: string | number;
  lastDate: string | number;
  status: string | number;
  img: string;
}
export interface invoicespaid {
  invoiceNumber: string | number;
  category: string;
  createdOn: string | number;
  invoiceTo: string;
  amount: string;
  paidOn: string | number;
  status: string;
  img: string;
}
export interface invoicerecurring {
  invoiceNumber: string;
  category: string;
  createdOn: string | number;
  invoiceTo: string;
  amount: string;
  lastInvoice: string | number;
  nextInvoice: string | number;
  frequency: string | number;
  status: string;
  img: string;
}
export interface doctorlist {
  name: string;
  department: string;
  specialization: string;
  degree: string;
  mobile: string;
  email: string;
  joiningDate: number;
  img: string;
}
export interface schedule {
  doctorName: string;
  department: string;
  availableDays: string;
  availableTime: string | number;
  status: string;
  img: string;
}
export interface providentFund {
  name: string;
  designation: string;
  providentFundType: string;
  employeeShare: string;
  organizationShare: string;
  status: string;
  img: string;
}
export interface taxes {
  taxName: string;
  taxPercentage: string;
  status: string;
  sno: number;
}
export interface appointmentList {
  name: string;
  consultingDoctor: string;
  treatment: string;
  degree: string;
  mobile: string;
  email: string;
  date: number;
  time: number;
  img: string;
}
export interface assetsList {
  assetId: string;
  assetUser: string;
  assetName: string;
  purchaseDate: number;
  warrenty: string | number;
  warrentyEnd: number;
  amount: string;
  status: string;
  img: string;
}
export interface salary {
  employeeId: string;
  employeeName: string;
  email: string;
  joiningDate: number;
  role: string;
  salary: string;
  status: string;
  img: string;
}
export interface exponsesreport {
  item: string;
  purchaseFrom: string;
  purchaseBy: string;
  paidBy: string;
  date: number;
  amount: string;
  status: string;
  img: string;
}
export interface patientDashboard {
  doctorName: string;
  diagnosis: string;
  date: number;
  img: string;
  status: string;
}
export interface allInvoice {
  invoiceId: string;
  category: string;
  createdOn: string | number;
  invoiceTo: string;
  amount: string;
  dueDate: string | number;
  status: string;
  img: string;
}
export interface staffList {
  name: string;
  department: string;
  specialization: string;
  degree: string;
  mobile: string;
  email: string;
  joiningDate: number;
  img: string;
}
export interface patientsList {
  name: string;
  department: string;
  specialization: string;
  degree: string;
  mobile: string;
  email: string;
  joiningDate: number;
  img: string;
}
export interface datatable {
  name: string;
  position: string;
  office: string;
  age: number;
  startDate: number;
  salary: number;
}
export interface payments {
  invoiceNumber: string;
  patient: string;
  paymentType: string;
  paidDate: number;
  paidAmount: string;
  status: string;
  img: string;
}
export interface departmentList {
  department: string;
  departmentHead: string;
  description: string;
  date: number;
  status: string;
  img: string;
}
export interface datatables {
  name: string;
  position: string;
  office: string;
  age: number;
  startDate: number;
  salary: string;
}
export interface blogs {
  img1: string;
  img2: string;
  heading5: string;
  count1: string;
  count2: string;
  date: number | string;
  heading4: string;
  name: string;
  heading3: string;
  paragraph: string;
  msg: string;
}
export interface recentPatients {
  no: string;
  patientName: string;
  age: number | string;
  date: string | number;
  dateOfBirth: string | number;
  diagnosis: string;
  img: string;
  triage: string;
}
export interface upcomingAppointments {
  no: string;
  patientName: string;
  doctor: string;
  date: string | number;
  time: string | number;
  disease: string;
  img: string;
}
export interface socialLinks {
  icon: string;
  placeholder: string;
}
export interface patientProfile {
  date: number | string;
  doctor: string;
  treatment: string;
  charges: string;
}
export interface invoicesGrid {
  invoiceNumber: string;
  name: string;
  img: string;
  amount: string;
  amounts: string | number;
  text: string;
  dueDate: string | number;
  status: string;
}
export interface SubMenu {
  menuValue: string;
  route: string;
  base: string;
 
}
export interface MenuItem {
  menuValue: string;
  hasSubRoute: boolean;
  showSubRoute: boolean;
  base: string;
  route?: string;
  img?: string;
  icon?: string;
  faIcon?: boolean;
  subMenus: SubMenu[];
  
}

export interface SideBarData {
  tittle: string;
  showAsTab: boolean;
  separateRoute: boolean;
  menu: MenuItem[];
} 
  


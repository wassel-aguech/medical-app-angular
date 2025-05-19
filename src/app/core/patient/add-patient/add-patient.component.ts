import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Patient } from 'src/app/shared/models/patient';
import { routes } from 'src/app/shared/routes/routes';
import { PatientService } from 'src/app/shared/services/patient.service';
interface data {
  value: string ;
}
@Component({
    selector: 'app-add-patient',
    templateUrl: './add-patient.component.html',
    styleUrls: ['./add-patient.component.scss'],
    standalone: false
})
export class AddPatientComponent {
  public routes = routes;
  public selectedValue! : string  ;
  selectedList1: data[] = [
    {value: 'Select  Department'},
    {value: 'Orthopedics'},
    {value: 'Radiology'},
    {value: 'Dentist'},
  ];
  selectedList2: data[] = [
    {value: 'Select City'},
    {value: 'Alaska'},
    {value: 'Los Angeles'},
  ];
  selectedList3: data[] = [
    {value: 'Select Country'},
    {value: 'Usa'},
    {value: 'Uk'},
    {value: 'Italy'},
  ];
  selectedList4: data[] = [
    {value: 'Select State'},
    {value: 'Alaska'},
    {value: 'California'},
  ];

      patientForm       : FormGroup
      listpatient       : Patient[] = []
      patient           : Patient = new Patient
      viewModelpatient  : Patient = new Patient
      image!: File;
      imgUrl: string | ArrayBuffer = 'assets/img/imgg.png'




  constructor(private fb : FormBuilder , private patientservice : PatientService ,
     private toastr: ToastrService , private router: Router) {

    this.patientForm = new FormGroup({
      firstName       : new FormControl('', Validators.required),
      lastName        : new FormControl('', Validators.required),
      password        : new FormControl('', Validators.required),
      confirmPassword : new FormControl('', Validators.required),
      adress          : new FormControl('', Validators.required),
      email           : new FormControl('', Validators.required),
      phone           : new FormControl('', Validators.required),
      specialite      : new FormControl('', Validators.required),
      image           : new FormControl('', Validators.required),
      status          : new FormControl('', Validators.required),
      etat            : new FormControl('', Validators.required),
      cin             : new FormControl('', Validators.required),


    });
  }


  ngOnInit(): void {
  }


  addPatient(){

    this.patient.firstName       = this.patientForm.value.firstName
    this.patient.lastName        = this.patientForm.value.lastName
    this.patient.password        = this.patientForm.value.password
    this.patient.confirmPassword = this.patientForm.value.confirmPassword
    this.patient.image           = this.patientForm.value.image
    this.patient.email           = this.patientForm.value.email
    this.patient.adress          = this.patientForm.value.adress
    this.patient.phone           = this.patientForm.value.phone
    this.patient.cin             = this.patientForm.value.cin

    console.log(" info patient " , this.patient)

    this.patientservice.addPatient(this.patient).subscribe(
      (data : any)=>{
        console.log("data patient" , data)


        this.patientservice.uploadPatientImage(data.id, this.image).subscribe(
          val =>  {} , error => { alert('oups')} , () => {

          });


        this.toastr.success('patient ajouté avec succès', 'Succès')

        this.router.navigate(['patient/patient-list']);


      },(error)=>{
        console.log("error insertion patient")
      }
    )
  }


    onFileInputImage(files: FileList | null): void {
      // alert("1" + JSON.stringify(files))
      if (files) {
        //  alert("2" + JSON.stringify(files))
        this.image = files.item(0) as File;
        if (this.image) {
          const fileReader = new FileReader();
          fileReader.readAsDataURL(this.image);
          fileReader.onload = (event) => {
            if (fileReader.result) {
              this.imgUrl = fileReader.result;
            }
          };
        }
      }
    }

    changeSourceimage(event: any) {
      event.target.src = "assets/img/img.png";
    }
















gotoPatientList() {
    this.router.navigate(['patient/patient-list']);

}



















}

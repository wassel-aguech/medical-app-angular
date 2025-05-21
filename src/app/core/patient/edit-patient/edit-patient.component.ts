import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Patient } from 'src/app/shared/models/patient';
import { routes } from 'src/app/shared/routes/routes';
import { PatientService } from 'src/app/shared/services/patient.service';
interface data {
  value: string ;
}
@Component({
    selector: 'app-edit-patient',
    templateUrl: './edit-patient.component.html',
    styleUrls: ['./edit-patient.component.scss'],
    standalone: false
})
export class EditPatientComponent  implements OnInit{
  public routes = routes;
  public deleteIcon  = true;
  public selectedValue! : string  ;
  date = new FormControl(new Date());



 patientForm!       : FormGroup
  listPatient       : Patient[] = []
  Patient           : Patient = new Patient
  viewModelPatient  : Patient = new Patient
  image!: File;
  imgUrl: string | ArrayBuffer = 'assets/img/imgg.png'
  id:any


  constructor( private fb : FormBuilder , private Patientservice : PatientService ,
               private toastr: ToastrService , private router: Router ,
               private route: ActivatedRoute,
               private patientservice : PatientService
              ) {

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


   });
 }

ngOnInit(): void {
    // const id = this.route.snapshot.paramMap.get('id');

    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      this.loadPatient(+this.id);
    }

   }



  loadPatient(id: number): void {
    this.Patientservice.getPatientByid(id).subscribe({
      next: (Patient) => {
        console.log('Patient reçu:', Patient);
        this.patientForm.patchValue(Patient);
      },
      error: (err) => {
        console.error('Erreur chargement Patient', err);
      }
    });
  }




  updatePatient(): void {


    const updatePatient = {
      ...this.patientForm.value,
      id: this.id
    };
      console.log("info Patient to update " , updatePatient)

      this.Patientservice.updatePatient(updatePatient).subscribe({
        next: (response) => {
          this.toastr.info('Patient updated avec succès', 'Succès')
          this.router.navigate(['patient/patient-list']);

      },
      error: (error) => {
        this.toastr.error('erreur lors de la mise à jour du Patient', 'Erreur')

      }
    });

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
    this.router.navigate(['doctor/doctors-list']);

}















































































  deleteIconFunc(){
    this.deleteIcon = !this.deleteIcon
  }
  selectedList1: data[] = [
    {value: 'Select  Department'},
    {value: 'Orthopedics'},
    {value: 'Radiology'},
    {value: 'Dentist'},
  ];
  selectedList2: data[] = [
    {value: 'Select City'},
    {value: 'Alaska'},
    {value: 'California'},
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
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Medecin } from 'src/app/shared/models/medecin';
import { routes } from 'src/app/shared/routes/routes';
import { MedecinService } from 'src/app/shared/services/medecin.service';
import { PatientService } from 'src/app/shared/services/patient.service';
interface data {
  value: string ;
}
@Component({
    selector: 'app-edit-doctor',
    templateUrl: './edit-doctor.component.html',
    styleUrls: ['./edit-doctor.component.scss'],
    standalone: false
})
export class EditDoctorComponent  implements OnInit{
  public routes = routes;
  public deleteIcon = true;
  public selectedValue !: string ;

  medecinForm!       : FormGroup
  listMedecin       : Medecin[] = []
  medecin           : Medecin = new Medecin
  viewModelMedecin  : Medecin = new Medecin
  image!: File;
  imgUrl: string | ArrayBuffer = 'assets/img/imgg.png'
  id:any


  constructor( private fb : FormBuilder , private medecinservice : MedecinService ,
               private toastr: ToastrService , private router: Router ,
               private route: ActivatedRoute,
               private patientservice : PatientService
              ) {

   this.medecinForm = new FormGroup({
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

    this.id = this.route.snapshot.params['id'];
    if (this.id) {
      this.loadMedecin(+this.id);
    }
  }


  loadMedecin(id: number): void {
    this.medecinservice.getMedecinByid(id).subscribe({
      next: (medecin) => {
        console.log('Medecin reçu:', medecin);
        this.medecinForm.patchValue(medecin);
      },
      error: (err) => {
        console.error('Erreur chargement medecin', err);
      }
    });
  }




  updateMedecin(): void {


    const updateMedecin = {
      ...this.medecinForm.value,
      id: this.id
    };
      console.log("info medecin to update " , updateMedecin)

      this.medecinservice.updateMedecin(updateMedecin).subscribe({
        next: (response) => {
          this.toastr.info('Medecin updated avec succès', 'Succès')
          this.router.navigate(['doctor/doctors-list']);

      },
      error: (error) => {
        this.toastr.error('erreur lors de la mise à jour du medecin', 'Erreur')

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




  gotoDoctorsList() {
    this.router.navigate(['doctor/doctors-list']);

}
}

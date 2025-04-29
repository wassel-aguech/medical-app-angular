import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Medecin } from 'src/app/shared/models/medecin';
import { routes } from 'src/app/shared/routes/routes';
import { MedecinService } from 'src/app/shared/services/medecin.service';
interface data {
  value: string ;
}
@Component({
    selector: 'app-add-doctor',
    templateUrl: './add-doctor.component.html',
    styleUrls: ['./add-doctor.component.scss'],
    standalone: false
})
export class AddDoctorComponent implements OnInit {

  public routes = routes;
  public selectedValue !: string ;

  selectedList1: data[] = [
    {value: 'Select Department'},
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

    medecinForm       : FormGroup
    listMedecin       : Medecin[] = []
    medecin           : Medecin = new Medecin
    viewModelMedecin  : Medecin = new Medecin
    image!: File;
    imgUrl: string | ArrayBuffer = 'assets/img/imgg.png'


  constructor(private fb : FormBuilder , private medecinservice : MedecinService ,
     private toastr: ToastrService , private router: Router) {

    this.medecinForm = new FormGroup({
      firstName       : new FormControl('', Validators.required),
      lastName        : new FormControl('', Validators.required),
      password        : new FormControl('', Validators.required),
      confirmPassword : new FormControl('', Validators.required),
      address         : new FormControl('', Validators.required),
      email           : new FormControl('', Validators.required),
      phone           : new FormControl('', Validators.required),
      specialite      : new FormControl('', Validators.required),
      image           : new FormControl('', Validators.required),
      status          : new FormControl('', Validators.required),


    });
  }


  ngOnInit(): void {
  }


  addMedecin(){

    this.medecin.firstName  = this.medecinForm.value.firstName
    this.medecin.lastName   = this.medecinForm.value.lastName
    this.medecin.password   = this.medecinForm.value.password
    this.medecin.confirmPassword = this.medecinForm.value.confirmPassword
    this.medecin.image     = this.medecinForm.value.image
    this.medecin.email      = this.medecinForm.value.email
    this.medecin.address     = this.medecinForm.value.adress
    this.medecin.phone      = this.medecinForm.value.phone
    this.medecin.specialite = this.medecinForm.value.specialite

    console.log(" info medecin " , this.medecin)

    this.medecinservice.addMedecin(this.medecin).subscribe(
      (data : any)=>{
        console.log("data medecin" , data)

        this.toastr.success('Medecin ajouté avec succès', 'Succès')

        this.router.navigate(['doctor/doctors-list']);


      },(error)=>{
        console.log("error insertion medecin")
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

































}

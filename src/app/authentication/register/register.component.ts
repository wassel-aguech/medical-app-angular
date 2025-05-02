import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Patient } from 'src/app/shared/models/patient';
import { routes } from 'src/app/shared/routes/routes';
import { AuthService } from 'src/app/shared/services/auth.service';
import { PatientService } from 'src/app/shared/services/patient.service';
import { ToastrService } from 'ngx-toastr';


@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss'],
    standalone: false
})
export class RegisterComponent {
  public routes = routes;
  public CustomControler!: number | string | boolean ;
  public passwordClass  = false;
  public confirmPasswordClass  = false
  public isValidConfirmPassword = false;



    patientForm : FormGroup
    registersPatient : Patient = new Patient

     image!: File;
     imgUrl: string | ArrayBuffer = 'assets/img/imgg.png'


  constructor(private router: Router,
     private authservice:AuthService,
      private patientService : PatientService,
      private toastr : ToastrService,

      ) {

    this.patientForm = new FormGroup({
      firstName : new FormControl ('',Validators.required),
      lastName : new FormControl ('',Validators.required),
      email : new FormControl ('',[Validators.required , Validators.email]),
      password : new FormControl ('',[Validators.required ,Validators.minLength(3)]),
      confirmPassword : new FormControl ('',[Validators.required ,Validators.minLength(3)]),
      sexe : new FormControl ('',Validators.required),
      adress : new FormControl ('',[Validators.required,Validators.minLength(3)]),
      phone : new FormControl ('',[Validators.required,Validators.minLength(3)]),
      image : new FormControl ('',[Validators.required]),



      });
    }
    get firstName() {
      return this.patientForm.get('firstName');
    }
    get lastName() {
      return this.patientForm.get('lastName');
    }
    get email() {
      return this.patientForm.get('email');
    }
    get password() {
      return this.patientForm.get('password');
    }

    get phone() {
      return this.patientForm.get('phone');
    }






  register(): void {

    this.registersPatient.firstName        = this.patientForm.value.firstName;
    this.registersPatient.lastName         = this.patientForm.value.lastName;
    this.registersPatient.email            = this.patientForm.value.email;
    this.registersPatient.phone            = this.patientForm.value.phone;
    this.registersPatient.password         = this.patientForm.value.password;
    this.registersPatient.confirmPassword  = this.patientForm.value.confirmPassword;
    this.registersPatient.adress          = this.patientForm.value.adress;
    this.registersPatient.sexe             = this.patientForm.value.sexe;
    this.registersPatient.image            = this.patientForm.value.image;


    this.authservice.registerPation(this.registersPatient).subscribe({

      next: (response) => {
        console.log(" SUCCESFULLY REGISTRATION  😎")

        console.log("  id patient" ,response)




        this.patientService.uploadPatientImage(response.id, this.image).subscribe(
          val =>  {} , error => { alert('oups')} , () => {

          });

        this.toastr.success("user registred  avec success ")


        this.router.navigate(['/login']);
      },
      error: (error) => {
        console.log( " FILED REGISTRATION !!!!! 😥")

        alert("user error regitred tray again")


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


}

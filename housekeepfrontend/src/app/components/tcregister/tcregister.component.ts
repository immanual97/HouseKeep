import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TechnicianService } from 'src/app/services/technician.service';

@Component({
  selector: 'app-tcregister',
  templateUrl: './tcregister.component.html',
  styleUrls: ['./tcregister.component.css']
})
export class TcregisterComponent implements OnInit {

  constructor(private technService:TechnicianService,private router:Router) { }
  fname="";
  lname="";
  email="";
  password="";
  password2="";
  service=0;
  status=0;
  overallrating=10;


  ngOnInit(): void {
  }


  technicianregister(){
    if(this.password==this.password2){
    var val={
      fname:this.fname,
      lname:this.lname,
      email:this.email,
      password:this.password,
      service:this.service,
      status:this.status,
      overallrating:this.overallrating,
    }
    this.technService.RegisterTechnician(val).subscribe(
      response=>{
        if (response.toString()=="Added successfully")
        {
          alert(response.toString());
          this.router.navigate(['/tclogin']);
        }
        else
        alert(response.toString());
      }
    )
  }
  else{
    alert("Password mismatch");
  }
  }
}

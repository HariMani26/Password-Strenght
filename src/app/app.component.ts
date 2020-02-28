import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Passwordstrength';
  passwordform:FormGroup
  passwordIsValid
  constructor(
  
   private fb:FormBuilder

  )
{
 
}
  ngOnInit()
  {
    this.passwordform = this.fb.group({
      password: ['', Validators.required],
  });

}
passwordValid(event) {
  this.passwordIsValid = event;
}
}

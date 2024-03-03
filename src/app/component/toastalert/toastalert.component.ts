import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {MatCardModule} from '@angular/material/card'
import {MatButtonModule} from '@angular/material/button'

@Component({
  selector: 'app-toastalert',
  standalone: true,
  imports: [MatCardModule,MatButtonModule],
  templateUrl: './toastalert.component.html',
  styleUrl: './toastalert.component.css'
})
export class ToastalertComponent {
 constructor(private toastr:ToastrService){

 }

  showsuccess(){
    this.toastr.success('Saved successfully.','Success');
  }
  showerror(){
    this.toastr.error('Saved successfully.','Failed');
  }
  showwarning(){
    this.toastr.warning('Not matched.','Warning');
  }
  showinfo(){
    this.toastr.info('just information','Info');
  }

}

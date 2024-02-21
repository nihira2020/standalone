import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MasterService } from './service/master.service';
import { NgxMaskDirective } from 'ngx-mask';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,NgxMaskDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'standalone';

  constructor(private service:MasterService){

  }
  ngOnInit(): void {
     this.service.Getall().subscribe(item=>{
      console.log(item);
     })
  }
}

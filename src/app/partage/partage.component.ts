import { Component, OnInit,Input } from '@angular/core';
import {Subscription} from 'rxjs';
import {publicationsService} from '../services/publications.service'
@Component({
  selector: 'app-partage',
  templateUrl: './partage.component.html',
  styleUrls: ['./partage.component.scss']
})
export class PartageComponent implements OnInit {


  @Input() ll:string;
  appareils:any[];
  nbComments:any[];
  domaines:any[];
  publicationSubscription:Subscription;
  constructor(private pub:publicationsService){}
  ngOnInit():void
  {
    this.getPost();
    this.getDomaines();
    
  }
  getPost()
  {
      this.pub.getPost().subscribe(
        (publications:any[])=>{
          this.appareils=publications['publications']['data'];
          this.nbComments=publications['nbComments'];
          //this.test.emitAppareilSubject();
         console.log(publications);
        },(error)=>{
          console.log(error);
        }
      )
  }
  recherche()
  {
     this.pub.recherche(this.ll).subscribe(
       (publications:any[])=>{
         console.log(publications);
          this.appareils=publications['publications']['data'];
          this.nbComments=publications['nbComments'];
       }
     )
  }
  getDomaines()
  {
      this.pub.getDomaines().subscribe(
        (domaines:any[])=>{
          this.domaines=domaines;
          //this.test.emitAppareilSubject();
         //console.log(appareils);
        },(error)=>{
          console.log(error);
        }
      )
  }

}

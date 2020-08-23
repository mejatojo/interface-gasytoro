import { HttpClient } from '@angular/common/http';
import { Subject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
@Injectable()

export class publicationsService{
    publication:any[];
    testS=new Subject<any[]>();
    constructor(private httpClient:HttpClient){}
    emitAppareilSubject() {
       // this.testS.next(this.publication.slice());
      }
    getPost():Observable<any[]>
    {
        return this.httpClient
        .get<any[]>('http://localhost:8000/api/allPublication');
    }
    getDomaines()
    {
        return this.httpClient
        .get<any[]>('http://localhost:8000/api/domaines');
    }
    recherche(texte:string)
    {
        if(texte)
        {
            return this.httpClient
                .get<any[]>('http://localhost:8000/api/rechercheallPublication/'+texte);
        }
        if(!texte)
        {
            return this.httpClient
            .get<any[]>('http://localhost:8000/api/allPublication');
        }
        
    }
}




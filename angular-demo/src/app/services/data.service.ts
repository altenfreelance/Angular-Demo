import { BadInputError } from './../common/bad-input-error';
import { NotFoundError } from './../common/not-found-error';
import { AppError } from './../common/app-error';

import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';

import {Observable} from 'rxjs'
import { catchError } from 'rxjs/operators';


// import 'rxjs/add/observable/throw';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private url:string, private http: HttpClient) { }

  getAll(){
    return this.http.get(this.url, {responseType: 'json'}).pipe(
      catchError(this.handleError)
    );
  }

  create(resource){
    return this.http.post(this.url, resource, {responseType: 'json'}).pipe(
      catchError(this.handleError)
    );
  }

  update(resource){
    return this.http.patch(this.url, resource, {responseType: 'json'}).pipe(
      catchError(this.handleError)
    );
  }

  delete(id){
    return this.http.delete(this.url, {responseType: 'json', params: id}).pipe(
      catchError(this.handleError)
    );
  }

  private handleError (error: Response){
    console.log(error);
    if (error.status === 400)
      return Observable.throw(new BadInputError(error.json()));
  
    if (error.status === 404)
      return Observable.throw(new NotFoundError());
    
    return Observable.throw(new AppError(error));
  }
}
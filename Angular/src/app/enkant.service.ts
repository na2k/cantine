import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {throwError as observableThrowError,  Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { plat } from './plat';
import { User } from './user';
import { Days } from './days';

import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EnkantService {

  constructor(private http:HttpClient) { }

      
    // ** Read  beers
    getPlats (): Observable<plat[]> {
      return this.http.get<plat[]>('https://aston-test-2866c.firebaseio.com/plats.json')
        .pipe(
          tap(data => {
            data
          }),
          catchError(this.handleError('getPlats', []))
        );
    }

        //** Read one beer */
    getPlat(key: string): Observable<plat[]>{
      console.log('https://aston-test-2866c.firebaseio.com/plats/'+key+'.json')
      return this.http.get<plat[]>('https://aston-test-2866c.firebaseio.com/plats/'+key+'.json')
      .pipe(
        tap(data => JSON.stringify(data)),
        catchError(this.handleError('getPlat', []))
      );
    }


    deletePlats(key: string): Observable<plat>{
      let url = `https://aston-test-2866c.firebaseio.com/plats/`+key+'.json';
      return this.http.delete<plat>(url)
        .pipe(
          tap(data=>data),
          catchError(this.handleError<plat>('deleteplats'))
        );
    }

    getdays (): Observable<Days[]> {
      return this.http.get<Days[]>('https://aston-test-2866c.firebaseio.com/day.json')
        .pipe(
          tap(data => {
            data
          }),
          catchError(this.handleError('getdays', []))
        );
    }
//---------------------------------------

      getUsers(): Observable<User[]> 
      {
        return this.http.get<User[]>('https://aston-test-2866c.firebaseio.com/users.json')
        .pipe(
          tap(data => {
            data
          })
          ,
          catchError(this.handleError('getUser', []))
        );
      }

        //** Read one beer */
      getUser(key: string): Observable<User[]>{
      console.log('https://aston-test-2866c.firebaseio.com/users/'+key+'.json')
      return this.http.get<User[]>('https://aston-test-2866c.firebaseio.com/users/'+key+'.json')
      .pipe(
        tap(data => JSON.stringify(data)),
        catchError(this.handleError('getUser', []))
      );
    }
    addUser(User: User): Observable<User> {
      let url = `https://aston-test-2866c.firebaseio.com/users.json`;
      return this.http.post<User>(url, User, {responseType: 'json'}).pipe(
        tap((product: User) => console.log('User added')),
        catchError(this.handleError<User>('addUser'))
      );
}
//---------------------------------------



   /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return (error);
    };
  }

}

@Injectable()
export class DataSharingService {
    public UpdateString: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
}
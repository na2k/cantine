import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {throwError as observableThrowError,  Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { Plat } from './Plat';
import { User } from './user';


import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EnkantService {

  constructor(private http:HttpClient) { }

 //--------------------------------------- [ Partie PLAT ]   // Forte chance que cette partie soit changé entierement pour l'api
    // ** Read  beers
    getPlats (): Observable<Plat[]> {
      return this.http.get<Plat[]>('https://aston-test-2866c.firebaseio.com/plats.json')
        .pipe(
          tap(data => {
            data
          }),
          catchError(this.handleError('getPlats', []))
        );
    }

        //** Read one beer */
    getPlat(key: string): Observable<Plat[]>{
      console.log('https://aston-test-2866c.firebaseio.com/plats/'+key+'.json')
      return this.http.get<Plat[]>('https://aston-test-2866c.firebaseio.com/plats/'+key+'.json')
      .pipe(
        tap(data => JSON.stringify(data)),
        catchError(this.handleError('getPlat', []))
      );
    }


    deletePlats(key: string): Observable<Plat>{
      let url = `https://aston-test-2866c.firebaseio.com/plats/`+key+'.json';
      return this.http.delete<Plat>(url)
        .pipe(
          tap(data=>data),
          catchError(this.handleError<Plat>('deleteplats'))
        );
    }

//--------------------------------------- [ Partie USER ]  // Forte chance que cette partie soit changé entierement pour l'api

      //* Récupere tout les utilisateurs */
      getUsers(): Observable<User[]> 
      {
        return this.http.get<User[]>('https://aston-test-2866c.firebaseio.com/user.json')
        .pipe(
          tap(data => {
            data
          })
          ,
          catchError(this.handleError('getUser', []))
        );
      }

      //* Récupere un utilisateur */
      getUser(key: string): Observable<User[]>
      {
      console.log('https://aston-test-2866c.firebaseio.com/user/'+key+'.json')
      return this.http.get<User[]>('https://aston-test-2866c.firebaseio.com/user/'+key+'.json')
      .pipe(
        tap(data => JSON.stringify(data)),
        catchError(this.handleError('getUser', []))
      );
      }

      //* Ajout d'utilisateur  */
      addUser(User: User): Observable<User>
      {
        let url = `https://aston-test-2866c.firebaseio.com/user.json`;
        return this.http.post<User>(url, User, {responseType: 'json'}).pipe(
          tap((product: User) => console.log('Utilisaeur ajouté')),
          catchError(this.handleError<User>('addUser'))
        );
      }

      //* Edit un utilisateur */
      editUser(user: User, key: string): Observable<User> 
      {
        const url = `https://aston-test-2866c.firebaseio.com/user/`+key+'.json';
        return this.http.put<User>(url, user, {responseType: 'json'}).pipe(
          tap((product: User) => console.log('Profile sauvegardé')),
          catchError(this.handleError<User>('editUser'))
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
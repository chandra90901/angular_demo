
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom, map, mergeMap, Observable, of, switchMap, take, tap } from 'rxjs';
import { User } from '../model/users';
@Injectable({
  providedIn: 'root'
})
export class DemoService {
  private apiUrl = 'https://dummyjson.com/users';


  constructor(private http: HttpClient) { }

  getData(): Observable<User[]> {
    return this.http.get<{ users: User[] }>(this.apiUrl).pipe(
      map(response =>
        response.users.map((user: any) => ({
          ...user,
          firstName: user.firstName.toUpperCase(),
        }))
      )
    );
  }

  // getFilterData(): Observable<User[]> {
  //   return this.http.get<{ users: User[] }>(this.apiUrl).pipe(
  //     map(response => response.users || []),
  //     map(users => users.filter((user: any) => Number(user.age) > 30))
  //   );
  // }

  getFilterData(keyword: string): Observable<User[]> {
    return this.http.get<{ users: User[] }>(this.apiUrl).pipe(
      map(response => response.users || []),
      map(users => users.filter(user => {
        const fullName = `${user.firstName} ${user.lastName}`.toLowerCase();
        return fullName.includes(keyword.toLowerCase());
      }))
    );
  }

  getTap(): Observable<User[]> {
    return this.http.get<{ users: User[] }>(this.apiUrl).pipe(
      tap(() => console.log('HTTP call made')),
      map(res => res.users)
    );
  }

  getmergeMapUsers(): Observable<User[]> {
    const ids = [1, 2, 3, 4];
    return of(...ids).pipe(
      mergeMap(id => this.http.get<User[]>(`${this.apiUrl}/${id}`))
    );
  }

  searchSwitchUser(keyword: string): Observable<User[]> {
    return this.http.get<{ users: User[] }>(`${this.apiUrl}/search?q=${keyword}`).pipe(
      map(res => res.users)
    );
  }

  debounceTimesearch(keyword: string): Observable<User[]> {
    return this.http.get<{ users: User[] }>(`${this.apiUrl}/search?q=${keyword}`).pipe(
      map(response => response.users)
    );
  }


  gettakeOnce(): Observable<User[]> {
    return this.http.get<{ users: User[] }>(this.apiUrl).pipe(
      map(response => response.users),
      take(1)
    );
  }

  async getDataPromise(): Promise<User[]> {
    try {
      return await firstValueFrom(this.http.get<User[]>(this.apiUrl));
    } catch (error) {
      console.error('Promise Error:', error);
      throw error;
    }
  }
}

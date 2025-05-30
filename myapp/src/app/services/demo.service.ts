
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom, from, map, mergeMap, Observable, of, switchMap, take, tap, toArray } from 'rxjs';
import { User } from '../model/users';
interface ApiResponse {
  users: User[];
}

@Injectable({
  providedIn: 'root'
})
export class DemoService {
  private apiUrl = 'https://dummyjson.com/users';

  constructor(private http: HttpClient) { }

  getData(): Observable<User[]> {
    return this.http.get<{ users: User[] }>(this.apiUrl).pipe(
      map(response => response.users)
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
      map(response => {
        return (response.users || []).filter(user => {
          const fullName = `${user.firstName} ${user.lastName}`.toLowerCase();
          return fullName.includes(keyword.toLowerCase());
        });
      })
    )
  }

  getTap(): Observable<User[]> {
    return this.http.get<{ users: User[] }>(this.apiUrl).pipe(
      tap(() => console.log('HTTP call made')),
      map(res => res.users)
    );
  }

  getmergeMapUsers(): Observable<User[]> {
    const ids = [1, 2, 3, 4, 5];
    return from(ids).pipe(
      mergeMap(id => this.http.get<User>(`${this.apiUrl}/${id}`)),
      toArray()
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


  async getDataPromise(): Promise<ApiResponse> {
    return await firstValueFrom(this.http.get<ApiResponse>(this.apiUrl));
  }
}

import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {environment} from "../../environments/environment";

@Injectable()
export class DashboardService {

  constructor(private http: HttpClient) {}

  getContractTasks(): Observable<string> {
    return this.http.get(environment.server + '/dashboard/contractTasks', {responseType: 'text', withCredentials: true});
  }
}

import {Observable} from "rxjs/Observable";

export class DashboardWidget {
  cols: number;
  rows: number;
  x: number;
  y: number;

  initCallback: (item: DashboardWidget) => void;
  observable: Observable<string>;
  content: any;
}

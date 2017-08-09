import {Component, OnInit} from '@angular/core';
import {GridsterConfig} from "angular-gridster2";
import {DashboardService} from "./dashboard.service";
import {DashboardWidget} from "./dashboard-widget";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [DashboardService]
})
export class DashboardComponent implements OnInit {

  static eventStop(item, scope) {
    console.info('eventStop', item, scope);
  }

  static itemChange(item, scope) {
    console.info('itemChanged', item);
  }

  static itemResize(item, scope) {
    console.info('itemResized', item, scope);
  }

  static itemInit(item: DashboardWidget) {
    console.info('itemInitialized...', item);

    item.observable.subscribe(response =>
      item.content = response === null ? "Failed to retrieve server data" : response
    );
  }

  emptyCellClick(event, item) {
    console.info('empty cell click', event, item);
    this.dashboard.push(item);
  }

  private options: GridsterConfig;
  private dashboard: Array<Object>;
  private temp: string;

  constructor(private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.options = {
      gridType: 'fit',
      compactType: 'none',
      itemChangeCallback: DashboardComponent.itemChange,
      itemResizeCallback: DashboardComponent.itemResize,
      // itemInitCallback: DashboardComponent.itemInit,
      margin: 5,
      outerMargin: true,
      mobileBreakpoint: 640,
      minCols: 1,
      maxCols: 100,
      minRows: 1,
      maxRows: 100,
      maxItemCols: 100,
      minItemCols: 1,
      maxItemRows: 100,
      minItemRows: 1,
      maxItemArea: 2500,
      minItemArea: 1,
      defaultItemCols: 1,
      defaultItemRows: 1,
      fixedColWidth: 105,
      fixedRowHeight: 105,
      enableEmptyCellClick: false,
      enableEmptyCellDrop: false,
      enableEmptyCellDrag: false,
      emptyCellClickCallback: this.emptyCellClick.bind(this),
      emptyCellDropCallback: this.emptyCellClick.bind(this),
      emptyCellDragCallback: this.emptyCellClick.bind(this),
      emptyCellDragMaxCols: 50,
      emptyCellDragMaxRows: 50,
      draggable: {
        enabled: true,
        stop: DashboardComponent.eventStop
      },
      resizable: {
        enabled: true,
        stop: DashboardComponent.eventStop
      },
      swap: false,
      pushItems: true,
      pushResizeItems: false,
      displayGrid: 'onDrag&Resize',
      disableWindowResize: false
    };

    const widget: DashboardWidget = {cols: 2, rows: 2, y: 0, x: 0, initCallback: DashboardComponent.itemInit, observable: this.dashboardService.getContractTasks(), content: null};
    this.temp = '<a href="https://www.google.com" target="_blank">Link to Google with pipe</a>';

    this.dashboard = [
      {cols: 2, rows: 2, y: 0, x: 2, content: this.temp},
      {cols: 2, rows: 2, y: 0, x: 4, content: "C"},
      {cols: 2, rows: 2, y: 2, x: 0, content: "D"}
    ];
    this.dashboard.push(widget);
  }
}

// {cols: undefined, rows: undefined, y: 1, x: 0},
// {cols: 1, rows: 1, y: undefined, x: undefined, label: 'undefined'},
// {cols: 2, rows: 2, y: 1, x: 5, minItemRows: 2, minItemCols: 2, label: 'Min rows & cols = 2'},
// {cols: 2, rows: 2, y: 2, x: 0, maxItemRows: 2, maxItemCols: 2, label: 'Max rows & cols = 2'},
// {cols: 2, rows: 1, y: 2, x: 2, dragEnabled: true, resizeEnabled: true, label: 'Drag&Resize Enabled'},
// {cols: 1, rows: 1, y: 2, x: 4, dragEnabled: false, resizeEnabled: false, label: 'Drag&Resize Disabled'},
// {cols: 1, rows: 1, y: 0, x: 6, initCallback: DashboardComponent.itemInit}

// this.http.get<JsonResponse>('/api/items').subscribe(data => {
//   // data is now an instance of type ItemsResponse, so you can do this:
//   this.results = data.results;
// });

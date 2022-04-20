import { Component } from '@angular/core';

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'table-basic-example',
  styleUrls: ['table-basic-example.css'],
  templateUrl: 'table-basic-example.html',
})
export class TableBasicExample {
  name = 'Pack Man IE';
  grid_Rows: number = 4;
  grid_Columns: number = 4;

  StartRow: number = 0;
  StartColumn: number = 0;
  Direction = 'NORTH';

  showOutput: boolean = false;
  clickMove() {
    this.showOutput = false;
    console.log(this.Direction, this.StartColumn);
    if (this.Direction == 'NORTH' && this.StartColumn < this.grid_Columns) {
      this.StartColumn = this.StartColumn + 1;
    } else if (this.Direction == 'SOUTH' && this.StartColumn > 0) {
      this.StartColumn = this.StartColumn - 1;
    } else if (this.Direction == 'WEST' && this.StartRow > 0) {
      this.StartRow = this.StartRow - 1;
    } else if (this.Direction == 'EAST' && this.StartRow < this.grid_Rows) {
      this.StartRow = this.StartRow + 1;
    }
  }

  clickLeft() {
    this.showOutput = false;
    if (this.Direction == 'NORTH') {
      this.Direction = 'WEST';
    } else if (this.Direction == 'SOUTH') {
      this.Direction = 'EAST';
    } else if (this.Direction == 'WEST') {
      this.Direction = 'SOUTH';
    } else if (this.Direction == 'EAST') {
      this.Direction = 'NORTH';
    }
  }

  clickRight() {
    this.showOutput = false;

    if (this.Direction == 'NORTH') {
      this.Direction = 'EAST';
    } else if (this.Direction == 'SOUTH') {
      this.Direction = 'WEST';
    } else if (this.Direction == 'WEST') {
      this.Direction = 'NORTH';
    } else if (this.Direction == 'EAST') {
      this.Direction = 'SOUTH';
    }
  }

  clickReport() {
    console.log(this.StartRow, this.StartColumn, this.Direction);
    this.showOutput = true;
  }
  clickPlace() {
    this.showOutput = false;

    this.StartRow = 0;
    this.StartColumn = 0;
    this.Direction = 'NORTH';
  }
}

/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */

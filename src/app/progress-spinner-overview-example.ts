import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

/**
 * @title Basic progress-spinner
 */
@Component({
  selector: 'progress-spinner-overview-example',
  templateUrl: 'progress-spinner-overview-example.html',
})
export class ProgressSpinnerOverviewExample {
  formTeste = new FormGroup({
    cpf: new FormControl('12345678909'),
  });

  cpfControl = this.formTeste.get('cpf') as FormControl;
}

/**  Copyright 2023 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://angular.io/license */

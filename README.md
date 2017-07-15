# Provenir Code Challenge

## Running Locally

### Installing dependencies

```sh
npm install
```
This will install all runtime dependencies.

NOTE: An mdl library used needed to be revised for proper functionality.
File location: ../node_modules/@angular2-mdl-ext/popover/popover.js
File revision: Line 29
Function revised: MDLPopoverComponent.prototype.ngOnDestroy

```sh
MdlPopoverComponent.prototype.ngOnDestroy = function () {
    // Added second argument 'this.hide' to removeEventListener to cancel browser error on deletion
    this.elementRef.nativeElement.removeEventListener('hide', this.hide);
};
```

## Development server

Run `ng serve -o` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


## Further help

This project/boilerplate was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.2.1.

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

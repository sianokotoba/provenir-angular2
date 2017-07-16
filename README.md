# Provenir Code Challenge

## Running Locally

### Installing dependencies

```sh
npm install
```
This will install all runtime dependencies.

NOTE: An mdl library used needed to be revised for proper functionality.
- File location: ../node_modules/@angular2-mdl-ext/popover/popover.js
- File revision: Line 29
- Function revised: MDLPopoverComponent.prototype.ngOnDestroy

Revised coded is as follows:

```sh
// Replace in file, starting line 29
MdlPopoverComponent.prototype.ngOnDestroy = function () {
    // Added second argument 'this.hide' to removeEventListener to cancel browser error on deletion
    this.elementRef.nativeElement.removeEventListener('hide', this.hide);
};
```

## Development server

For a dev server, run the following:
```sh
ng serve
```

Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


## Functionality

### Navbar & Layout
- Navbar and layout is dictated by the app.component
- The app.component loads all other components (Form, Table, Dashboard)
- OnInit, the app.component loads the coffee.service to populate the data which is passed to all other components (localStorage is also checked and used)

### Form
- All inputs/sections in the form is required
- Submission can only be done when all sections are filled
- Review page is generated after submission
- Continuous submissions are possible

### Table
- Table outputs all existing coffee data
- Each coffee is editable and can also be deleted
- Expandable drawer created for editing and deleting options

### Dashboard
- Updates according to coffee data added from Form or edited/deleted from the Table
- Flexbox created and used for responsive adjustments

### Extras
- Service created for mock API and API calls
- utils.ts created for re-usability and modularity


## Further help

This project/boilerplate was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.2.1.

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

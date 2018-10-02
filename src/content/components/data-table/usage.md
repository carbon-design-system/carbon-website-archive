---
label: Component
title: Data Table
tabs: ['Code', 'Usage', 'Style']
---

## Basic Data Table

The Data Table component is designed in a way for additional functionality to be added on to fit your team's needs.

The basic Data Table is shipped with a base style, which includes:

- Borders
- No zebra striping, row dividers instead.
- No Pagination, Search, Table toolbar, or multi-select

![basic data table](images/data-table-usage-1.png)

_Basic Data Table_

## Additonal functionality

The following can be added to the Data Table to increase its functionality.

### Pagination

Pagination divides table data into separate pages. Pagination is accompanied by an option that enables the user to change the number of items per page. See the [Pagination](/components/Pagination) component for further guidelines.

![data table with pagination](images/data-table-usage-2.png)

_Data Table with various Pagination methods_

### Search

Search returns results based on matches. It is used to locate and display a set of results. Search functionality within a table follows [Small search](/components/search) conventions. Search should be open by default, and live below the table title.

![data table with search](images/data-table-usage-3.png)
_Search on Data Tables_

### Sorting

Improve table usability by making data sortable. Clickable headers enable users to sort table data up or down. The specific attribute being sorted is accompanied by a caret icon. The caret will only appear on the column headers once that particular column is being sorted. You can see a demo of this on Carbon's [Codepen.](https://codepen.io/tjegan/pen/PjjyVN)

### Table toolbar

The table toolbar is reserved for global table actions such as table settings, complex filter, export, or editing table data. Additional options can be added if you have an icon to support that function. Icons should be 16x16 px (glyphs). We recommend using no more than 5 icons within the table toolbar.

![Table toolbar](images/data-table-usage-6.png)

_Table toolbar: Table settings_

### Multi-select / Batch action

Batch actions are functions that may be performed on multiple items within a table. Once the user selects more than one row from the table, the **batch action bar** appears at the top of the table, presenting the user with actions they can take. To exit or escape "batch action mode," the user can cancel out or deselect the items.

![Batch action mode](images/data-table-usage-7.png)
_Batch action mode on Data Tables_

### Inline actions

Inline actions are functions that may be performed on a specific table item. Each row is accompanied by an [Overflow menu](/components/overflow-menu) that contains actions related specifically to that table row.

![Inline action on Data Table](images/data-table-usage-8.png)
_Inline actions on Data Tables_

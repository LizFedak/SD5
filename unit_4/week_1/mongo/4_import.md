# Import Database
### Importing Data
```bash
> mongoimport --db test --collection students --drop --file ~/Downloads/students.json
2016-06-14T22:06:44.869-0600  connected to: localhost
2016-06-14T22:06:44.870-0600  dropping: test.students
2016-06-14T22:06:44.925-0600  imported 200 documents
```
* `mongoimport` statement breakdown
  * `--db <database>`, `-d <database>`
    * specifies the name of the database to import the file into
  * `--collection <collection>`, `-c <collection>`
    * specifies the collection to import
  * `--drop`
    * drop the collection before importing the data into it
  * `--file <filename>`
    * specify the file to import
  
### Exporting Data
```bash
> mongoexport --db test --collection students --out ~/Desktop/export.json
2016-06-14T22:12:47.746-0600  connected to: localhost
2016-06-14T22:12:47.874-0600  exported 200 records
```
  
* `mongoexport` statement breakdown
  * `--db <database>`, `-d <database>`
    * specifies the name of the database to export the file from
  * `--collection <collection>`, `-c <collection>`
    * specifies the collection to export
  * `--out <filename>`
    * specify the path to the file to export
  
#### Continue to [documents](5_document.md)
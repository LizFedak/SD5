## AWS EC2 MySQL
### Install and start MySQL on your EC2 instance, load database from dump file.

#### SSH Into Your Server
* SSH into your server (substitute your own _.pem_ filename and your own instance's Public IP):

  ```bash
  ssh -i ~/.ssh/aws.pem ec2-user@11.22.33.44
  ```

* You should now be SSH'd into your server instance with a shell prompt - something like [_ec2-user@ip-172-31-28-199 ~]_

Install MySQL; in your SSH'd Terminal window:

  * Install the MySQL packages:

    ```bash
    sudo yum -y install mysql mysql-server
    ```
  * Configure MySQL for table and database name compatibility:
    ```bash
    sudo vi /etc/my.cnf
    ```
    In _/etc/my.cnf_ add a new line right below the `[mysqld]` line (in vi, `o` to open a line, then start typing):
    `lower_case_table_names=1`
    
    Save and quit (in vi, _`Esc`_ to exit input mode, then `:wq`)

  * Configure MySQL to start at system boot:
    ```bash
    sudo chkconfig mysqld on
    ```
    
  * Start the MySQL now:
    ```bash
    sudo service mysqld start
    ```

  * Set the root password for mysql:
    ```bash
    mysqladmin -u root password aNewPassword
    ```

#### But wait, what about my app's MySQL database?!
For this example, let's suppose your app's database is name _myappdb_
* In a **local** Terminal window, create dump of your app's MySQL database:

    ```bash
    mysqldump -u root myappdb > ~/myappdbDump.sql
    ```
* Upload the dump file to your EC2 instance:

    ```bash
    scp -i ~/.ssh/aws.pem  ~/myappdbDump.sql  ec2-user@11.22.33.44:/~
    ```
    * Exit the local Terminal window.
* In your SSH'd window, run **mysql** to create your app's database and load the database dump file:
    ```bash
    mysql -u root -p
    ```

    ```sql
    mysql> create database myappdb;
    mysql> use myappdb;
    mysql> source ~/myappdbDump.sql;  /*lots of stuff scrolling by, hopefully no errors.*/
    mysql> exit;
    ```

### Next Steps
* Users and privileges for mysql databases.

### Resources
* [Tutorial: Installing a LAMP Web Server on Amazon Linux][install-LAMP]
* [Connecting to Your Linux Instance Using SSH][connect-SSH]


[install-LAMP]: https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/install-LAMP.html
[connect-SSH]: https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AccessingInstancesLinux.html

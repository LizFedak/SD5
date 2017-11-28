###MAMP

MySQL, the open-source client-server RDBMS (Relational Database Management System), serves as the back end of the vast majority of RDBMS-backed web applications.  Combined with the Apache web server and the "P-languages" - Perl, Python, PHP - it is at the heart of the "AMP" solution stacks on which so many web applications are based:

* LAMP: Linux/Apache/MySQL/Perl,PHP,Python
* MAMP: Mac/Apache/MySQL/Perl,PHP,Python
* WAMP: Windows/Apache/MySQL/Perl,PHP,Python

You can install MySQL on your system as a stand-alone package, but instead we'll install the full AMP stack.  Among other things this will give us additional administrative tools and features including phpMyAdmin, a web-based DB admin tool.

####MAMP Installation
Installation is simple.  For Mac:
* Download MAMP from https://www.mamp.info/en/
* Run the package installer, accepting all the defaults.

####MAMP Configuration:
* The installer actually includes two products, the free MAMP and the commercial MAMP PRO.  You don't need MAMP PRO but it's there anyway in the hopes you'll pay for its license.  Ignore MAMP PRO.  You will only use MAMP.
* A couple of configuration changes you'll want to make - run the MAMP console (Crtl-Space, MAMP) and click Preferences.
  * Under "When starting MAMP":
    * *UN*-check "Check for MAMP PRO"
    * Check "Start servers" and "Open WebStart page"
  * Under "When quitting MAMP"
    * *UN*-check "Stop servers"
  * In the "Ports" tab:
    * Click "*Set Web & MySQL ports to 80 & 3306*"
  * Click "Stop Servers" then "Start Servers"
* We'll be running the _mysql_ command from the command line, so we'll add its location to our terminal shell PATH.  In a text editor, open the file `~/.bash_profile` and add the following line to the end:

  ```bash
  PATH=$PATH:/Applications/MAMP/Library/bin
  ```
  * Open a new terminal window and run the command `mysql --version` to confirm the path is correct.  If you see *mysql: command not found* you'll need to fix your `~/.bash_profile`

####MySQL Configuration
One last thing: you'll be designing and creating project databases locally on your MAC system, then exporting and loading them into MySQL on a Linux server.  To assure that table and database names are compatible between these two different operating systems we'll set a MySQL configuration variable.
* Open a terminal window and run `sudo edit /etc/my.cnf`
* In the file _/etc/my.cnf_ add the following:
  ```bash
  [mysqld]
  lower_case_table_names=1
  ```

* Save and close _/etc/my.cnf_
* In the MAMP console, click "Stop Servers" then "Start Servers".




# Mongo Install

### Walkthrough
**Step 1**: Download, unzip, and move Mongo  
  
* Open a browser and navigate to the MongoDB downloads page
  * [https://www.mongodb.org/downloads#production][mongo]
* Download the latest stable release by pressing the big green 'Download (tgz)' button
  * **NOTE**: You do not need to fill out the form on the next page
* Unzip the file
* Move mong to `/usr/local/mongodb`  
```bash
sudo mv mongodb-osx-x86_64-3.2.4.tgz
```
**NOTE**: *Your version may be different*  
  
**Step 2**: Create db directory, set permissions
* Mongo stores your Mongo databases in a directory (`/data/db`) by default, thus, we need to create that directory.  
```bash
> sudo mkdir /data/db
```
* Now we need to set permissions on the `db` directory to ensure that the Mongo server can access it. We will set permissions for our user to access the directory. If you are not sure what your username is, you can check by using the `whoami` command:  
```bash
> whoami
UserName
> sudo chown username /data/db
```  
  
**Step 3**: Add Mongo to $PATH
* In order to use mongo from command line, we need to add its location to our $PATH
* Open your `.bash_profile`
```bash
> vi ~/.bash_profile
```
* Add the following two exports:  
```bash
export MONGO_PATH=/usr/local/mongodb
export PATH=$PATH:$MONGO_PATH/bin
```
* Save and exit vi (`:wq`)   
  
**Step 4**: Test it
* Quit your terminal and reopen it
* Check the MongoDB version with:  
```bash
> mongo -version
MongoDB shell version: 3.2.4
```  
* If you got a version back, everything is configured correctly.  
  
  
  
  
  
  
### --> [Continue to start creating your first Mongo Database](3_shell.md)


[mongo]:https://www.mongodb.com/download-center?jmp=nav#community

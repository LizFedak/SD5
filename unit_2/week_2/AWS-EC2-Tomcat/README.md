## AWS EC2 Tomcat
To run Java Web applications on your server you need a server.  We'll use Tomcat.  We'll want the most current Java platform so we'll upload and install the latest JDK.

#### SSH Into Your Server
```bash
    ssh -i ~/.ssh/aws.pem ec2-user@12.34.56.78
```

* You should now be SSH'd into your server instance with a shell prompt - something like [_ec2-user@ip-172-31-28-199 ~]_

#### Configure Your Server
1. Upload and install the current JDK on your server:
    * Copy the JDK8 Linux RPM package from the server where it's been staged.
    ```bash
    wget http://skilldistillery.com/downloads/jdk-8u77-linux-x64.rpm
    ```

    * Wait for the upload to finish, then install the RPM:
    ```bash
    sudo yum -y install jdk-8u77-linux-x64.rpm
    ```

2. Install Tomcat 8 on your server:
    * Run:
    ```bash
     sudo yum -y install tomcat8
   ```
    * Configure Tomcat 8 to start at system boot:
    ```bash
    sudo chkconfig tomcat8 on
    ```
    * Start Tomcat 8 now:
    ```bash
    sudo service tomcat8 start
    ```

3. Configure groups and permissions:
    * Make your account a member of the _tomcat_ group.
    ```bash
    sudo usermod -a -G tomcat ec2-user
    ```
    * Set permissions on the Tomcat webapps/ folder.
    * Make your account a member of the _tomcat_ group.
    ```bash
    sudo chmod g+ws /var/lib/tomcat8/webapps/
    ```

Your Amazon EC2 instance is now ready to host your Java Web Apps.

### Upload and Deploy your App
#### Export your app as a WAR (_.war_) file
* Open your project in Eclipse
* Right-click on the project file
    * Click **Export** | **WAR File**, or **Export** | **Export...** and under the **Web** category, select **WAR file**
    * Enter a name for the export file, using the extension *_.war_*
       *  For these examples, let's say you named it _MyApp.war_. 
    * Set the destination for the output
    * Click **Finish**  

#### Upload and deploy your WAR file
* In a **local** Terminal window, _cd_ to where you saved _MyApp.war_.
* Upload the WAR file to your EC2 instance (your keypair name, your Public IP, etc.):
    ```bash
    scp -i ~/.ssh/aws.pem MyApp.war ec2-user@11.22.33.44:/var/lib/tomcat8/webapps/
    ```
   
    * Exit the local Terminal window.
* Moment Of Truth: Test your app by browsing to: http://12.34.56.78:8080/MyApp
   * Substiture your instance's Public IP, of course.  Do we really need to keep saying that?  Oh, and your actual app name.
* SUCCESS!!

#### Troubleshooting
* If the deployment didn't go as planned, you have a 400/500 error or just see a white screen...
    * try reviewing the catalina logs from the server:
```bash
sudo su -
cd /var/log/tomcat8
cat catalina.out
```
* Check if tomcat is running
```bash
ps -ef | grep tomcat
# Should see the full java/tomcat command line
lsof -i TCP:8080
# should see a response if tomcat is running
```
* Check that your java version is as expected
```bash
java -version
```
* Make sure your server's Security Group has a rule allowing inbound traffic for port 8080.

### Optional Next Steps
* Install additional tomcat8 packages:
  * tomcat8-webapps: The ROOT and examples web applications for Apache Tomcat.
  * tomcat8-admin-webapps: The host-manager and manager web applications for Apache Tomcat.
  * tomcat8-docs-webapp: The docs web application for Apache Tomcat.

### Resources
* [Connecting to Your Linux Instance Using SSH](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AccessingInstancesLinux.html)
* [Apache Tomcat](http://tomcat.apache.org/)



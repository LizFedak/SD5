### Install Apache HTTPD Web Server on Amazon EC2 Instance
You're going to install the industry-standard Apache HTTPD web server on your instance, configure and start it, configure file system permissions to allow seamless deployment of content, and publish a demonstration page to it.

Why?
* Allow a straightforward way to deploy and host the static HTML/CSS/JavaScript content you'll develop during this program and after.
* Practice organizing and deploying site content.
* Provide a standard, well-supported platform should you want to investigate working with other server-side languages like PHP or Perl.
* Provide a standard, well-supported platform should you want to investigate working with a CMS like WordPress, Joomla, or Magento.

#### Log into your Amazon EC2 instance:
```
ssh -i ~/.ssh/aws.pem ec2-user@12.34.56.78
```

#### Install the **httpd24** package and turn on the server:
```
sudo yum -y install httpd24
sudo chkconfig httpd on
sudo service httpd start
```

#### Configure groups and permissions
* Create a group for web files and make your account a member
```
sudo groupadd www
sudo usermod -a -G www ec2-user
sudo usermod -a -G www apache
```

* Set up ownership and permissions for web files.  Web files will deploy under Apache's DocumentRoot, */var/www/html/*
```
sudo chown -R root:www /var/www
sudo chmod 2775 /var/www
find /var/www -type d -exec sudo chmod 2775 {} \;
find /var/www -type f -exec sudo chmod 0664 {} \;
```

* Copy current site files to server:
```
cd ~/SD/mySite
scp -rp -i ~/.ssh/aws.pem * ec2-user@12.34.56.78:/var/www/html/
```

* Check out your site in your browser: *```http://12.34.56.78/```*
   * Woot! You've published your site!

#### Deploying content to your server
There are any number of ways to push your content out to your site as you continue development:
* Using **scp**: As shown above.  Copies all files regardless of whether they've been modified locally.
```
cd mySite
scp -rp -i ~/.ssh/aws.pem * ec2-user@12.34.56.78:/var/www/html/
```
  * You can copy only the file(s) you've just modified, making sure to specify the correct destination:
```
  scp -rp -i ~/.ssh/aws.pem projects.html ec2-user@12.34.56.78:/var/www/html/
  scp -rp -i ~/.ssh/aws.pem css/projects.css ec2-user@12.34.56.78:/var/www/html/css/
```

* Using **rsync**.  The rsync command is designed for copying files only if they differ from the destination, and is very efficient:
```
cd mySite
rsync -avz --exclude=".*/" -e "ssh -i ~/.ssh/aws.pem" . ec2-user@12.34.56.78:/var/www/html/
```

* Using FTP.  This will involve installing and configuring an FTP server on your remote host, and then using either the standard command-line **ftp** client locally, or installing a graphical FTP interface like FileZilla.

* Using Git.  If you set up your server's DocumentRoot as a remote Git repo, you can use **git push origin *remoterepo*** to move modified files up.

### Resources
* [Tutorial: Installing a LAMP Web Server on Amazon Linux][install-LAMP]
* [Connecting to Your Linux Instance Using SSH][connect-SSH]


[install-LAMP]: https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/install-LAMP.html
[connect-SSH]: https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/AccessingInstancesLinux.html

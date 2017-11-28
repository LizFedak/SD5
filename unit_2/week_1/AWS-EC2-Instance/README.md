## AWS EC2 Instance
It's time to become part of the World Wide Web!

There are many ways to host a web site.  One very easy and inexpensive solution is to set up a host on the Amazon Web Services virtual machine (VM) leasing service, which they call *Elastic Compute Cloud* or *EC2*. On this service anyone can quickly set up a fully running server (or *EC2 Instance*) of any scale, from a single-CPU "nano" machine with .5GB of memory and minimal bandwidth, to a 32-CPU enterprise-class system with hundreds of gigs of RAM and massive network bandwidth.  Amazon provides a variety of preconfigured operating system images, and hosts a rich marketplace of third-party system images.

At the lower end, some instance types are "Free-Tier Eligible", meaning you pay nothing to run your instance for the first year.  After the first year payment is by the running hour (a penny or two per hour), maybe $6-7/month, and total network usage. (See [EC2 Instance Pricing])

Once you've set up and configured your EC2 instance, you can easily spin up duplicates of it, say for development and testing.

Amazon provides your EC2 instance with a public IP address.  This public IP is assigned at launch, so if you stop and start your instance it will be assigned a new public IP (which you can see in the _Instance Description_ after startup.)  Amazon allows you to obtain a static IP address (*Elastic IP*) you can assign to your instance.  You could then register your own domain name, and configure a DNS hostname that goes to your server's public IP.

Let's get started!

### Create your Amazon AWS Account
First you'll need to create an AWS account.  You'll need to provide a payment method even though for now you'll be using a Free-Tier instance.
[Sign In or Create an AWS Account]

### Create and configure your EC2 instance
#### Create an AWS EC2 server instance
* Login and navigate to your [Amazon AWS Console](https://aws.amazon.com)
* Under _Compute_ choose 'EC2 Virtual Servers in the Cloud' to go to your 'EC2 Dashboard'
* Select **Launch Instance** (big blue button)
* Select _Amazon Linux AMI 2015.09.1 (HVM), SSD Volume Type - ami-f0091d91_ (should be the first one)
* Make sure that _General purpose t2.micro (free tier eligible)_ is selected in _2. Choose Instance Type_
* Go to step 6 '6. Configure Security Group'
    * **Add Rule** -> _SSH_ -> _Anywhere_ (this is there by default)
    * **Add Rule** -> _HTTP_ -> _Anywhere_
    * **Add Rule** -> _Custom TCP Rule_ -> _Port Range_: **8080** -> Anywhere
    * **Add Rule** -> _MySQL / Aurora_ -> _Anywhere_
    * Note that **Add Rule** -> _All Traffic_ -> _Anywhere_ would open all ports, which might be OK during development
* Select **Review and Launch** (disregard the 'Improve your instances' security.' warning)
* Select **Launch**
* From the drop down, _Create a new Key Pair_
    * Name it something you'll recognize - e.g., _aws_
    * Select **Download Key Pair**, note where the file _aws.pem_ is downloaded: you will need this to log in to your server!
       * In a local Terminal window, _cd_ to the location your _.pem_ file was downloaded.
       * Create a _.ssh_ folder under your home directory:
      ```bash
      mkdir ~/.ssh/
      ```
         * If this directory already existed, no problem.
       * Move the file to your home directory:
      ```bash
      mv aws.pem  ~/.ssh/aws.pem
      ```
         * Note: Some browsers, when you download the PEM file, may name it "aws.pem.txt";  if this happened, rename the file as you move it:
         ```bash
         mv aws.pem.txt  ~/.ssh/aws.pem
         ```

       * _cd_ to your home directory:
      ```bash
      cd
      ```
       * Make the file readable only by your local login account - SSH (see below) requires this:
      ```bash
      chmod 400 ~/.ssh/aws.pem
      ```
       (if you used a different filename, substitute it here.)
    * Select **Launch Instance**
* Scroll to bottom of page, select **View Instances**
* While your instance is spooling, edit the _Name_ field to give it the instance a useful name (note that this is NOT the hostname for the instance, just a label to help you organize all your EC2 instances). 

#### Allocate a Static IP and Associate It With Your Instance
* In _EC2 Dashboard_ go to _NETWORK & SECURITY_ | _Elastic IPs_
* Click _Allocate New Address_
* Select _Use EIP in VPC_
* Click _Yes, Allocate_
* With your new IP selected, go to _Actions_ and choose _Associate Address_
* Click in the _Instance_ field and select your instance.
* Click _Associate_

#### SSH Into Your Server
* In _EC2 Dashboard_ go to _Instances_
* Select your instance, and click **Connect** button
* In the _Connect To Your Instance_ dialog, you will see an example of how to log into your instance's IP address via SSH, using your downloaded keypair file.
  * Write down your instance's _Public IP_ for future reference - you will need it!
  * Write down the entire example command above as well - soon you will have it memorized!
* SSH into your server (substitute your own _.pem_ filename and your own instance's Public IP):
```bash
    ssh -i ~/.ssh/aws.pem ec2-user@12.34.56.78
```
   * When prompted to accept your instance's Host Key, enter _yes_ (you must type the whole word _yes_)

* You should now be SSH'd into your server instance with a shell prompt - something like [_ec2-user@ip-172-31-28-199 ~]_

### Next Steps
* Change Termination Protection.
* Put your keypair file somewhere safe.
* Register a domain name, and configure a hostname (like "www") in it that points to your server IP.

### Resources
* [Getting Started on AWS]
* [Sign In or Create an AWS Account]


[Getting Started on AWS]: https://aws.amazon.com/getting-started/
[Sign In or Create an AWS Account]: https://portal.aws.amazon.com/gp/aws/developer/registration/index.html
[EC2 Instance Pricing]: http://aws.amazon.com/ec2/pricing/

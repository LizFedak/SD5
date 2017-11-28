### Overview
* bcrypt is a password hashing function used in a variety of languages
  
* bcrypt relies on a number of salt rounds (the total number of which is decided by the implementer) to encrypt secure information. A salt is a generated cipher, the number of salt rounds indicated are exponential iterations of the salting process. e.g. 10 salt rounds corresponds to 2e10 iterations of key derivation.
  
* The hashed password is then concatenated with the salt and some meta information to form the encrypted password.
  
* The resulting encryption is difficult to crack and extremely time consuming to brute force. Even at 10 salt rounds you will have 1,024 iterations of encryption (which should take ~150 ms to complete). This will increase the bits of entropy (i.e. strength) of your password by ~10 bits. This means that if you have a base password of 24 bits (eg three characters), you would increase it's protection by 10 bits (in reality bits of entropy are calculated by the number of possibilities the characters in your password represents, so a 3 character password is weaker...but lets continue). 
  
* A 13 character password (of any combination) will produce a 104 bit password (with at least 80 bits of entropy). Hashing an 80 bit password with 10 salt rounds will produce approximately 90 bits of entropy. Combined with the salt output which bcrypt concatenates, the total encryption will be in the 192-bit range. For reference, a password with 40 bits of entropy would take approximately 17 minutes to crack with current technology, a password with 44 bits of entropy would take about 30 minutes...etc. Thus it's not really the complexity of the password you use, but the length.
  
![password strength xkcd](password_strength.png)
  
#### Continue to [2 - Encrypt Passwords](2_encryptpassword.md)

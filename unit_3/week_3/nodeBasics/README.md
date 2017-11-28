## Node.js

### Overview
Node is the server side platform we will be using in conjunction with our javascript apps. Described in its own words as:

> Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight  and efficient. Node.js' package ecosystem, npm, is the largest ecosystem of open source libraries in the world.

### Installing
You should have both node and npm installed in your computer already. Run ``npm -v`` and ``node -v`` to check the versions of node and npm on your computer, if either of these does not yield a result, make sure to install the software [here][nodeDownload].

### What is npm?
In addition to the basic functionality of node.js, there are many useful open source packages that you can include in your applications. npm is the package manager used with node. You could reasonably assume that npm then stands for "Node Package Manager", you would however, be incorrect. In reality it doesn't stand for anything all. Check out https://www.npmjs.com and see how the acronym changes each time you load the page. We will be using npms ``npm install`` functionality to bring in packages to our node applications.

### Getting Started
Creating a node project is as simple as creating a folder in your local file system. In terminal use the ``mkdir myFirstNode`` command to create a folder named my firstFirstNode. Navigate into this folder then run ``npm init``. This command will walk you through the basics of setting up the ``package.json`` file. This file should exist in the root directory of any node project we build. It will help us manage the dependencies we inject into out project via the ``npm install`` command that we will discuss soon.

### Hello world
[Node Hello World](../labs/nodeHelloWorld.md)


[npm]: https://www.npmjs.com/
[nodeDownload]: https://nodejs.org/en/download/

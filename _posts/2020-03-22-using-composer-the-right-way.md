---
layout: post
title: Using Composer the Right way
subtitle: If you are a PHP developer then you must be using Composer for Dependency
  management then most of the time (just like almost every programmers) you must be
  doing composer install or composer update and then composer dumpautoload even on
  the Production Server (I was doing the same mistake).
date: 2020-03-22 18:30:00 +0000
author: Akshay Khale
header-img: "/uploads/composer.png"

---
If you are not a PHP developer and have no idea about [composer](https://getcomposer.org/) then you can skip this article.

If you are a PHP developer then you must be using [Composer](https://getcomposer.org/) for Dependency management then most of the time (just like almost every programmer) you must be doing `composer install` or `composer update` and then `composer dumpautoload` even on the Production Server (I was doing the same mistake).

By default `composer install` will install all the packages listed in the _composer.json_ file and it is recommended to skip dev packages on Production Server.

so, here I am listing some useful composer commands which will help you to install only the required packages with proper auto-loading.

1. Instead of `composer dumpautoload` use `composer dumpautoload -o` or `composer du -o` : `composer dumpautoload -o` will take more time that `composer dumpautoload` but after the command, the file autoloading will be faster due to PSR-0/4 autoloading to class-map.
2. Instead of `composer install` use `composer install --no-dev --optimize-autoloader`: Composer by default installs all the packages from composer.json and `--no-dev` will prevent it from doing so. `--optimize-autoload` will optimize autoloader for after autoloading (as mentioned in point 1) post-installation.
3. `composer install` recommendation for build scripts: If you are using a CI system then here is the recommended `composer install` command for build scripts: `composer install --no-ansi --no-dev --no-interation --no-progress --no-scripts --optimize autoloader`, what is does a. Skip Dev dependencies ( `--no-dev`) b. Optimize autoloader ( `--optimize-autoload` ) c. Stop installation scripts (might cause issue during the build but completely dependent on your business logic)( `--no-scripts` ) d. It will not print progress and will work without generating o/p or asking for any i/p ( `--no-progress` `--no-interaction` and `--no-ansi` )

You can read more about the composer CLI and all the options provided by the composer over here: [https://getcomposer.org/doc/03-cli.md](https://getcomposer.org/doc/03-cli.md "https://getcomposer.org/doc/03-cli.md")

References:

[https://stackoverflow.com/questions/21721495/how-to-deploy-correctly-when-using-composers-develop-production-switch](https://stackoverflow.com/questions/21721495/how-to-deploy-correctly-when-using-composers-develop-production-switch "https://stackoverflow.com/questions/21721495/how-to-deploy-correctly-when-using-composers-develop-production-switch")

[https://getcomposer.org/doc/03-cli.md](https://getcomposer.org/doc/03-cli.md "https://getcomposer.org/doc/03-cli.md")
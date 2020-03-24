---
layout: post
title: Composer Package Development tips and tricks
subtitle: If you are not a PHP Developer and do not care what composer is then you
  can skip this article and read some other interesting article on my blog.
date: 2020-03-23 18:30:00 +0000
author: Akshay Khale
header-img: "/uploads/composer-1.png"

---
If you are a PHP developer and do active PHP Development then there are a lot of chances that you would want to develop a Package and use it in your application.

This is a very short article (rather a tip) which will help you with package development.

If you have your package ready, with PSR-4 Autoloading and you do not want to publish it on [Packagist](https://packagist.org/) or simply want to test it on your development environment then simply you can use the **composer repositories** option.

Just add the following code in your composer.json file where you want to use the package.

    "require": {
        ....
        "<vendor-name>/<package-name>": "dev-master",
        ....
    },
    "repositories": [
        {
            "type": "vcs",
            "url": "git@github.com:<vendor-name>/<repository-name>.git"
        }
    ],

It will auto-pull the Package from Github (or any other VCS) and set it up for you to start with your development (provided you have repository access).

***

I was following the same and it worked flawlessly multiple developers were working on the Package and it worked like magic but then there was another catch, I wanted to avoid pushing on git and wanted to test the package in an application. composer to the rescue, the composer allows local path in the repository like this:

    "require": {
        ....
        "<vendor-name>/<package-name>": "dev-master",
        ....
    },
    "repositories": [
        {
            "type": "path",
            "url": "/Users/user/package"
        }
    ],

It worked but the problem was before pushing the code, I had to make changes from VCS to Path in the calling application’s composer file. which was a pain, I tried searching options for commenting in composer.json file or some other options where I can keep the local and production environment together. The internet spoke the truth, No, there is no way to comment in composer.json file. but I found a work-around on [StackOverflow](https://stackoverflow.com/questions/34807269/different-composer-json-files-for-production-and-staging-development).

Apparently, you can have multiple composer.json files in your PHP application and you can mention it run-time, which one to use for installing packages.

you can do:

> composer install // or composer update

which will install the packages from the composer.json file and you can do

> COMPOSER=composer-local.json composer install // or composer update

which will load the packages from the composer-local.json file.

Hope these tricks will be useful for you.

Thank you for reading.

Happy coding!!!

Originally published on Medium: [https://medium.com/@TheAkshayKhale/composer-package-development-tricks-and-tips-89f2208426eb](https://medium.com/@TheAkshayKhale/composer-package-development-tricks-and-tips-89f2208426eb "https://medium.com/@TheAkshayKhale/composer-package-development-tricks-and-tips-89f2208426eb")
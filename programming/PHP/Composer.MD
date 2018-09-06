## What is Composer ?
Composer is a dependency management tool in PHP

Suppose:

1. You have a project that depends on a number of libraries.
1. Some of those libraries depend on other libraries.

Composer:

1.  Enables you to declare the libraries you depend on.
1.  Finds out which versions of which packages can and need to be installed, and installs them (meaning it downloads them into your project).

## Setup in the project
To start using Composer in your project ,  all you need is a ```composer.json``` file.
## composer.json content
The first (and often only) thing you specify in composer.json is the __require__ key.<br>
You are simply telling Composer which packages your project depends on.
```
{
    "require": {
        "monolog/monolog": "1.0.*"
    }
}
```
As you see,it maps the package name to its version.<br>
The required packages will be downloaded to the project directory <br>
from the packaglist online repository: https://packagist.org/

## Getting Dependencies
To install the defined dependencies for your project,<br>
based on what is specified in composer.json file, run the install command.

```php composer.phar install ```

running the above command will download dependencies into the project<br>
it will also creates or updates a file named ``` composer.lock ``` file  into your project<br>
to maintain the proper version of dependencies among diffrent programmers of the project,
so the ``` composer.lock ``` file  should be commited into the version control.

## To update dependencies to their latest version :
```
php composer.phar update
```

## AutoLoading

Whenever I use a class, I go and load it, so my application doesn’t have to load all classes each request,<br>
this is called “Autoloading”. 

## How to autoload the PSR-4 way?
PSR-4 is the newest standard of autoloading in PHP, and it compels us to use namespaces.
__steps__
__a. Put the classes that we want to autoload in a dedicated directory,  For example:__
```
your-website/
  src/
    Db.php
    Page.php
    User.php
```
__b. Give the classes a namespace:__
```php
<?php
namespace Acme;

class Page {
    public function __construct()
    {
        echo "hello, i am a page.";
    }
}
```

We give the same namespace Acme to all of the classes in the src/ directory.

__c. Point the namespace to the src/ directory in the composer.json file. for example:__
```json
{
  "autoload": {
    "psr-4": {
      "Acme\\":"src/"
    }
  }
}
```

We use the psr-4 key.
The namespace Acme points to the src/ directory.
The namespace has to end with \\. For example, "Acme\\".
You can replace the generic Acme with the name of your brand or website.

__d. Update the Composer autoloader:__
```
$ composer dumpautoload -o
```

__e. Import the namespace to your scripts. The scripts need to import the namespace as well as the autoloader, e.g., index.php:__
```php
<?php 
require "vendor/autoload.php";

use Acme\Db;
use Acme\User;
use Acme\Page;
 
$page1 = new Page();
```

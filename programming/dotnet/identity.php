<html>
<head> 
	<meta charset="UTF-8" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	<link rel="stylesheet" href="/nhab/assets/css/blocks.css">	
	<script src='/nhab/assets/js/blocks.js'></script>
</head>
<body>
<button onclick="toggleAll(this);" >-</button>
<h2>Resources</h2>
<div>
<a href='https://docs.microsoft.com/en-us/learn/modules/secure-aspnet-core-identity/'>.net core identity</a>
<a href='https://docs.microsoft.com/en-us/learn/modules/secure-aspnet-core-identity/'>.Net core identity</a>
<a href='https://www.youtube.com/watch?v=9rGeTjoKsb8'>identitiy core basic</a>
<a href='https://docs.microsoft.com/en-us/aspnet/core/security/authentication/identity-custom-storage-providers?view=aspnetcore-6.0'>basics</a>
<a href="https://docs.identityserver.io/en/latest/quickstarts/6_aspnet_identity.html">Using</a>
<a href="https://docs.microsoft.com/en-us/aspnet/identity/overview/getting-started/introduction-to-aspnet-identity">doc</a>
<a href="https://docs.microsoft.com/en-us/aspnet/core/security/?view=aspnetcore-6.0">Microsoft</a>
<a href="https://docs.microsoft.com/en-us/aspnet/core/security/authentication/identity?view=aspnetcore-6.0&tabs=visual-studio">identity in msdocs</a>

</div>
<h2>
    <input type="button" value="-"
			class="toggleButton"  onclick="toggle(this)" />
            Parts</h2>
<div>
There are the following six important pieces of the ASP.NET Identity system:

User
Role
User Manager
Role Manager
Authentication Manager
Entity Framework DBContext

<b>User</b>

A user of the system is represented by the user object where a user object contains the basic authentication of a user by a user ID and word. 
The basic authentication is captured by <strong>IdentityUser</strong> class. 
The IdentityUser class can be inherited from custom class that can be used to capture profile information.

<b>Role</b>

A Role object represents a user role where the <strong>IdentityRole</strong> class provides this basic role. 
To add more of a description to the role, create a custom class that should be inherited from the IdentityRole class.

<b>User Manager</b>

A User Manager is a class that allows you to manage users. 
Several tasks can be done using the User Manager class such as creating or removing a user account, changing words, or adding and removing users to a role and for this purposes ASP.NET Identity comes with the <strong>UserManager</strong> class.

<b>Role Manager</b>

A Role Manager is a class that allows us to manage roles. 
The role manager is responsible for creating or removing a role and checking whether a role exists in the system. 
This can be done using a role manager and for this purpose the <strong>RoleManager</strong> class is used.

<b>Authentication Manager</b>

All the classes stated above deal with users and roles respectively and they don't do any authentication by themselves. 
Signing in and signing out is the responsibility of the Authentication Manager. 
Similar to Forms Authentication, the local user account uses cookie-based authentication. 
The authentication manager is represented by the <strong>IAuthenticationManager</strong> interface.

<b>Entity Framework DBContext</b>

The database table schema is not rigidly fixed as in the case of the ASP.NET membership system in ASP.NET Identity.
Based on the user and role objects the Entity Framework Code first approach is used to generate the table schema which means a separate column is created in the database for each piece of user profile. 
In the App_Data folder all the preceding tables are created by default in a separate database but we can also use our own database for storing this information by specifying the database. 
To accomplish this you can create a custom DbContext class that inherits from the <strong>IdentityDbContext</strong> base class.

<h2> What is Authentication</h2>
<div>
Authentication is the process of verifying the identity of an individual. 

It is about determining who the user is.

For Example, Companies Provide ID Card to Employees on joining. 

An Employee needs to present or scan their ID at the entrance to enter the workplace. 

The ID uniquely identifies the employee, without which the entry is denied.

Similarly, in a web application, we need to create the users in the system. 

We need to assign a Unique ID (like user name or email) and a secret (Password). 

The user must enter the ID & password at the login screen. 

Only if he presents the valid credentials, he authenticated and allowed.

There are many ways to handle Authentication in web applications. For Example:
1.    Cookie-Based authentication
1.    Token-Based authentication
1.    Third-party access(OAuth, API-token)
1.    OpenId
1.    SAML
</div>
    
<h2>What is Authorization</h2>
<div>
Authorization determines what the user allowed to do.

For Example, the Employee does not have access to everything inside the workplace. 

He can enter only those departments for which he has authorization. 

For Example, the Server Room access is only for IT Personnel. Only finance people can access financial related information.

Similarly, when a user is logged in he is authenticated. But he may not have authority to browse the Admin Area. 

Only the users with Admin Rights (or Claims) can access the Admin Area.
</div>
<h2>What are the claims?</h2>
<div>The identity of the user consists of a set of properties like Unique Id, Name, Email Id, Email Verified, etc and these properties are called claims.

 A claim set is a list of properties that belongs to the user. Claims contain information about the user that can be used to build a flexible authorization model. 

 These claims get assigned to the user when a new user is created using the register link. A claim is typically like a key-value pair.

 The Authorization Module uses the Claims to check whether the user has the rights to access the resources.
</div>
<h2> ClaimsIdentity</h2>
<div>
The ClaimsIdentity is a collection of Claims.

For Example take your driving license. It has claims like FirstName, LastName, DateOfBirth etc. 

Hence the driving license is the ClaimsIdentity.
</div>
<h2>ClaimsPrincipal</h2>
<div>
ClaimsPrincipal contains a collection of ClaimsIdentity. 

You can think of the ClaimsPrincipal (or Principal or Identity) as the user of your app.

A User can have more than one ClaimsIdentity. 

For Example, both driving license & Passport.

A driving license is a ClaimsIdentity with claims like FirstName, LastName, DateOfBirth & DLNo, etc 

Passport is another ClaimsIdentity with claims like FirstName, LastName, Address, PassportNo, etc.

Both identifies the same user or ClaimsPrincipal.

The HttpContext object also exposes the ClaimsPrincipal as the User property.

It is the Authentication Middleware that populates the User Property.

 Remember we register the Authentication Middleware in the Middleware pipeline using the UseAuthentication() Method
</div>
<h2>Authentication Basics</h2> 
<div>
The ASP.NET Code uses the Authentication Handlers to handle the Authentication.

# Authentication Handlers
A Authentication Handler is responsible for Authenticate a user ( Using the AuthenticateAsync() method ).

If the User is unauthenticated, redirect the user to the login page (Challenge the current request using the ChallengeAsync() method)

If User is Authenticated, but not authorized then Forbid the Current Request (Using the ForbidAsync() method)

An Authentication Handler must implement the interface IAuthenticationHandler. 

The Interface consists of three methods.
<pre><code>
AuthenticateAsync(), ChallengeAsync(), & ForbidAsync()
</code></pre>
We register the authentication handler using the using the AddAuthentication extension method.

The following example, adds both Cookie Authentication & JwtBearer Authentication handler in the ConfigureServices method of the startup class

startup.cs
<pre><code>
public void ConfigureServices(IServiceCollection services)
{
   ...
 
   services.AddAuthentication()
      .AddJwtBearer()
      .AddCookie();
 
   ..
   ..
}
</code></pre>

The AuthenticateAsync() method of the Authentication Handlers is responsible for constructing the ClaimsPrincipal from the Request and return it to the Authentication Middleware. 

The Authentication middleware then sets the HttpContext.User Property with the ClaimsPrincipal

For Example, AuthenticateAsync() method of the cookie authentication handler must read the cookies from the current request, construct the ClaimsPrincipal, and return it. 

Similarly, the JWT bearer handler must deserialize and validate the JWT bearer token, construct the ClaimsPrincipal and return it.
</div>
# Authentication Scheme
Each Authentication handler that we register using the AddAuthentication method becomes a new Authentication Scheme

A Authentication scheme consists of A unique Name, which identifies the Authentication scheme

# Authentication Handler
Options for configuring that specific instance of the handler

In the example, we have registered two authentication schemes.

But neither, we have given them any name nor configured any of their options.

```
services.AddAuthentication()
      .AddJwtBearer()
      .AddCookie();
```
Each of those Authentication handlers comes with their own defaults. 

The Cookie Authentication handler defines all its defaults in the CookieAuthenticationDefaults class. 

Similarly, the JwtBearer uses the JwtBearerDefaults class

The Default name for Cookie Authentication is “Cookies” (CookieAuthenticationDefaults.AuthenticationScheme) and for JwtBearer Authentication handler uses the “Bearer”.(JwtBearerDefaults.AuthenticationScheme)

The following code is the same as the one above.
```
services.AddAuthentication()
    .AddJwtBearer("Bearer")
    .AddCookie("Cookies");
```
You can also define a particular handler more than once. 

The Example below defines the Cookie Authentication twice but gives both of them different names. 

Hence now we have three Authentication schemes
```
services.AddAuthentication()
    .AddJwtBearer("Bearer")
    .AddCookie("Cookies")
    .AddCookie("Cookies2")
```
# Default Authentication scheme
When we use more than one Authentication Schemes, we also need to configure one of them as default authentication.
We do that by providing the Authentication scheme name as the first argument to the AddAuthentication method

The following example, sets the Cookies2 as the default Authentication scheme.
```
services.AddAuthentication("Cookies2")
    .AddJwtBearer("Bearer")
    .AddCookie("Cookies")
    .AddCookie("Cookies2")
``` 
This code sets the “Cookies” as the default Authentication scheme.
```
services.AddAuthentication(CookieAuthenticationDefaults.AuthenticationScheme)
    .AddJwtBearer("Bearer")
    .AddCookie("Cookies")
    .AddCookie("Cookies2")
``` 

# Authentication Handler Options
Each Authentication handler comes with options, which you can configure to fine tune the Authentication Handler

Configuring the Cookie Authentication Handler.
```
services.AddAuthentication(CookieAuthenticationDefaults.AuthenticationScheme)
    .AddCookie("Cookies", options =>
    {
        options.LoginPath = "/Account/Login";
        options.LogoutPath = "/Account/Logout";
        options.AccessDeniedPath = "/Account/AccessDenied";
        options.ReturnUrlParameter = "ReturnUrl";
    });
``` 
Configuring the JWT bearer Authentication Handler
```
services.AddAuthentication(x =>
    .AddJwtBearer(x =>
    {
        x.RequireHttpsMetadata = true;
        x.SaveToken = true;
        x.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuer = true,
            ValidIssuer = jwtTokenConfig.Issuer,
            ValidateAudience = true,
            ValidAudience = jwtTokenConfig.Audience,
            ValidateIssuerSigningKey = true,
            RequireExpirationTime = false,
            ValidateLifetime = true,
            ClockSkew = TimeSpan.Zero,
            IssuerSigningKey = new SymmetricSecurityKey(Encoding.ASCII.GetBytes(jwtTokenConfig.Secret))
        };
    });       
 ```
# Authentication Middleware
UseAuthentication() registers the Authentication Middleware.

The main purpose of the Authentication Middleware is to update the HttpContext.User Property with the ClaimsPrincipal. 

To do that, it uses the default Authentication Handler and invokes the AuthenticateAsync() method.

 As mentioned earlier, The AuthenticateAsync() method of the Authentication Handler must return the ClaimsPrincipal.

We place the Authentication Middleware after EndPoint Routing. Hence it knows which controller action method is handling the request.

It must come before Authorization Middleware ( UseAuthorization()) & End Point Middleware (UseEndPoints()).

All middleware’s which appear after the UseAuthentication() in the middleware pipeline can check whether the user is authenticated by inspecting the HttpContext.User Property

startup.cs
```
    app.UseRouting();
 
    app.UseAuthentication();
    app.UseAuthorization();
 
    app.UseEndpoints(endpoints =>
    {
        endpoints.MapRazorPages();
    });
``` 
# Unauthenticated Request
When a request arrives from a user who is unauthenticated to a page that is protected.

The Request reaches the Authentication Middleware.
The Authentication Middleware checks to see if a proper credential present in the request. It will use the default authentication handler to do that.
 It could be a Cookies handler/ Jwt handler. Since it does not find any credential, it will set the User Property to an anonymous user.
Authorization Middleware (UseAuthorization()) checks to see if the destination page needs Authorization.

If No then the user is allowed to visit the Page

If Yes it invokes the ChallengeAsync() on the Authentication Handler.

It redirects the user to Login Page
# Signing In
User Presents the Id & Password in the Login Form and clicks on the Login button

The Request hits the sign-in endpoint after going through the Authentication & Authorization Middlewares.

 Hence the sign-in endpoint must have Allowanonymous decorator else request will never reach it.

Users id & password is validated against the database

If the Cookie Authentication handler is used Creates a ClaimsPrincipal of the user with the claims of the User
Use the HttpContext.SignInAsync to creates an encrypted cookie and adds it to the current response.

The Response is returned to the Browser

The Browser stores the cookie

If the JWT Bearer Authentication handler is used Creates a JWT Token of the user with the claims of the User

JWT Token is sent to the user as a response

The Users reads the token and stores it in Local storage, session storage, or even in cookies

The user is now authenticated
# Authenticating the Subsequent Requests
The user makes a request to protect the page.

If you are using cookie authentication, then you do not have to do anything. 

The Browser will automatically include the cookie with every request.

But in the case of the JWT token, you need to include the token in Authorization header.

The Request reaches the Authentication Middleware.

 It will use the default Authenticate handler to read the cookie / JWT Token and constructs the ClaimsIdentity and updates the HttpContext.
 
User property with it The Authorization Middleware sees that the user is authenticated by inspecting the HttpContext.User property and allows access to it.
</div>
</body>
</html>
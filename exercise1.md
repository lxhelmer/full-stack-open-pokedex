ython based ci/cd pipeline

In python there are few very popular tools and practices for project management. Dependencies are often handled by plain python virtual environments or proj
ect dependency management systems like poetry. These are the go-to way of adding and managing that dependencies that the project uses are installed and how 
they are executed. Plain python virtual environments work well, but are quite limited in functionality. Dedicated dependency managers can help by providing 
a level of abstraction which can be utilized by CI/CD pipelines.

For testing there are again the simple built in way which is pythons unittest and the more extended way of Pytest. Unittest provides the basic functionality
 for testing, but is again limited in functionality. Pytest is more advanced and provides better integration with pipelines. These two testing frameworks pr
ovide mainly unit testing capabilities. There are also multitude of frameworks for different kinds of testing. These include for example Robot framework for
 Acceptance testing and Selenium based frameworks for Web-Integration testing. 

Pylint provides the standard PEP 8 style guide based linting, but doesn't fix the errors. For automatic fixes there are many additional tools with varying f
unctionality. These tools can work also as linters or just as code formatters working based on some set of rules. In CI/CD environment it could be helpful i
f at least the simplest linting errors like errors stemming from empty space or unnecessary lines could be fixed automatically.

Python often doesn't require building in the traditional sense but it can be helpful if there is some sort of build sequence still in place. This could mean
 something as simple as rebuilding the execution environment and re-loading the required dependencies. This could avoid some problems with unclean run envir
onments causing problems. 

There are alternative pipeline tools which allow selfhosting like Gitea and ArgoCD but the ease of use and availability of Github Actions is just super hard
 to beat.



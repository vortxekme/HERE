The banking system has authorized users who are associated with one specific branch (operator, cashier-operator, manager, branch manager, etc.).
Only two types of operations are allowed: issuing a loan and opening a deposit. Banking products are used by both individuals and legal entities.
The operator must be able to perform registration, editing and deletion operations on the client, as well as fill out a loan/deposit application,
while the branch manager can view information on all clients in the branch context (he cannot see loans/deposits issued from other branches and 
clients related to it).

Create a web service for the directory of individuals with the following functions:
Add a natural person
Edit a natural person
Add/delete obligations for a natural person
Delete a natural person
Get full information about a natural person via identifier (including dependents)

Consider the following validations for the natural person model:
Unique identifier (automatically generated, positive integer)
First name (minimum 2, maximum 50 characters)
Last name (minimum 2, maximum 50 characters)
Gender (identifier from the directory, allowed values: female, male)
Personal number (required 11 digits)
Date of birth (date, minimum 18 years, maximum 60-65 (should not be of retirement age, 65 years for men, 60 years for women))
Country (identifier from the directory)
City(identifier from the directory)
Phone number(text, min 4 max 50 characters)
Email(text, email validation)
Guarantor:
Relationship type(identifier from the directory, allowed values: mother, father, spouse, acquaintance, relative, other)
Guarantor identifier of the individual

When developing a web service, pay attention to the following issues:
Validation and error management should be taken into account when performing all operations.
Data should be stored in the database ms sql
Use the ef code first approach.
crud operations in the appropriate action methods. Use different types as return values ​​of action methods and explain them in the form of comments.
It is preferable to use the repository and unit of work patterns.
request/response data format - json


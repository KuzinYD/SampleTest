# Login Form Manual Test Cases

**Environment Setup**

- Url
- Endpoint
- Credentials
- Headers

**Test Case 1 [Positive]: Send POST /login returns OK**

Description: Endpoint /login should return 200 OK.

Steps:

- send POST /login with valid token in header

Expected Result: Response should be 200 OK.

Actual Result:

**Test Case 2 [Positive]: Valid Email and Password (Bearer Token Generation)**

Description: User should be able to login with valid credentials and receive a Bearer token.

Steps:

- Input: email = "user@example.com", password = "password123"
- Action: Press the Login button.

Expected Result: "Login successful" message appears and a Bearer token is generated and visible in the browser console.

Actual Result:

**Test Case 3 [Positive]: Special Characters in Email**

Description: Login should succeed with valid email containing special characters (if system allows special characters in email by design during registration).

Steps:

- Input: email = "user+test@example.com", password = "password123"
- Action: Press the Login button.

Expected Result: "Login successful" message appears and Bearer token is generated in the console.

Actual Result:

**Test Case 4 [Positive]: Email With Subdomain**

Description: Login should succeed with a valid email address that includes a subdomain.

Steps:

- Input: email = "user@mail.example.com", password = "password123"
- Action: Press the Login button.

Expected Result: "Login successful" message appears and Bearer token is generated in the console.

Actual Result:

**Test Case 5 [Positive]: Password With Special Characters**

Description: Login should succeed with a valid password that contains special characters.

Steps:

- Input: email = "user@example.com", password = "P@ssw0rd!#%"
- Action: Press the Login button.

Expected Result: "Login successful" message appears and Bearer token is generated in the console.

Actual Result:

**Test Case 6 [Positive]: Case Insensitive Email**

Description: Login should succeed if the email is entered in a different case (if the system is case-insensitive for email).

Steps:

- Input: email = "USER@EXAMPLE.COM", password = "password123"
- Action: Press the Login button.

Expected Result: "Login successful" message appears and Bearer token is generated in the console.

Actual Result:

**Test Case 7 [Negative]: Missing Authorization Header**

Description: Endpoint POST /login should return 401 Unauthorized when Authorization header is missing.

Steps:

Send POST /login without the Authorization header.
Expected Result: Response should be 401 Unauthorized or appropriate error message. No Bearer token should be generated.

Actual Result:

**Test Case 8 [Negative]: Invalid Email and Password (No Token on Failure)**

Description: Login should not be perfromed and Token not be generated with invalid credentials. Error is shown.

Steps:

- Input: email = "nouser@example.com", password = "wrongpass"
- Action: Press the Login button.

Expected Result: Error message for invalid credentials. No Bearer token should be generated in the console.

Actual Result:

**Test Case 9 [Negative]: Invalid Email Format**

Description: Login should not be performed with invalid email format.

Steps:

- Input: email = "userexample.com", password = "password123"
- Action: Press the Login button.

Expected Result: Error message for invalid email format. No Bearer token should be generated in the console.

Actual Result:

**Test Case 10 [Negative]: Password Less Than 8 Characters**

Description: Login should not be performed if the password is less than 8 characters.

Steps:

- Input: email = "user@example.com", password = "pass12"
- Action: Press the Login button.

Expected Result: Error message for password length saying that the entered password is less than 8 characters. No Bearer token should be generated in the console.

Actual Result:

Note: I added this test case because it is mentioned in assigmnet, but I think that this validation is not neccessary in login flow - if the credentials are invalid just show login error message. Characters and length validation should be performed during registration of new user.

**Test Case 11 [Negative]: Both Fields Empty**

Description: Login should not be performed if both fields are empty.

Steps:

- Input: email = "", password = ""
- Action: Press the Login button.

Expected Result: Error messages for both fields required. No Bearer token should be generated in the console.

Actual Result:

**Test Case 12 [Negative]: Email Field Empty**

Description: Login should not be performed if the email field is empty.

Steps:

- Input: email = "", password = "password123"
- Action: Press the Login button.

Expected Result: Error message for email required. No Bearer token should be generated in the console.

Actual Result:

**Test Case 13 [Negative]: Password Field Empty**

Description: Login should not be performed if the password field is empty.

Steps:

- Input: email = "user@example.com", password = ""
- Action: Press the Login button.

Expected Result: Error message for password required. No Bearer token should be generated in the console.

Actual Result:

**Test Case 14 [Negative]: PPassword With Spaces**

Description: Login should not succeed if password has space or TAB.

Steps:

- Input: email = "user@example.com ", password = " passw ord123"
- Action: Press the Login button.

Expected Result: Error message for invalid email format. No Bearer token should be generated in the console.

Actual Result:

**Test Case 15 [Negative]: SQL Injection Attempt**

Description: Login should not be performed if password contains SQL injection attempt.

Steps:

- Input: email = "user@example.com", password = "' OR '1'='1'"
- Action: Press the Login button.

Expected Result: Error message for invalid credentials. No Bearer token should be generated in the console.

Actual Result:

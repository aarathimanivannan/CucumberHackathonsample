Feature: Open Cart.com Application TestCases (End to End validation)

#/*Sangeetha */
Scenario Outline:  TC001 Register Account  

Given user should open link
Then click on accountand enter credentials "<SheetName>" and <RowNumber>
And click on submit
Examples:
|SheetName|RowNumber|
|CreateAccount|0|
 
#/*Vijay */
Scenario Outline: TC002 Register Account Failure 
 
Given User should nagivate to url
Then User Register account should fail "<SheetName>" and "<RowNumber>"
And Click on submit button
Examples:
|SheetName|RowNumber|
|Negativereg|0|
   
   
#/*Archana*/
Scenario Outline: TC003 & TC004 Testing Login Funcationality & Verify the Title
  
Given Navigate to Cart URL
When Home page validation
Then User click on My account and Login 
And User fill the Login form from given sheetname "<SheetName>" and rownumber <RowNumber>
Then User should be logged in successfully  
Examples:
|SheetName|RowNumber|
|login|1|  
   
#/*Sangeetha */  
Scenario Outline: TC005  IMAC Add to cart (Tab)

Given user should login to application 
Then enters credentials "<SheetName>" and <RowNumber>
And click on login
Then user mouseover to desktop and select mac
Examples:
|SheetName|RowNumber|
|login|0|

#/*Archana*/
Scenario Outline: TC006 Order Placement with guest checkout
  
Given Navigate to Cart URL
And select a product and Add to cart
Then checkout with Guest details from given sheetname "<SheetName>" and rownumber <RowNumber> 
Examples:
|SheetName|RowNumber|
|GuestDetails|0|

#/*Sangeetha */ 
Scenario Outline: TC007 Order Placement with Register Account

Given user enters urls
Then user mouseover to laptop and select HP LP3065
And user changes delivery date
Then user Adds to cart and check out
And click on register account
Then enter manadatory fileds  "<SheetName>" and <RowNumber>
And user enters delivery methods
Then user confirms order and take screenshot
Examples:
|SheetName|RowNumber|
|PaymentReg|0|

#/*Vijay */
Scenario Outline: TC008 Edit Account and lastname
 
Given User login to url
Then User enter credentials "<SheetName>" and "<RowNumber>"
And User needs to click login button
Then User able edit the Existing login account 
Examples:
|SheetName|RowNumber|
|login|2|

#/*Archana*/
Scenario Outline: TC009 Upload file validation

Given Navigate to Cart URL
Then User click on My account and Login 
And User fill the Login form from given sheetname "<SheetName>" and rownumber <RowNumber>
Then Select a product from component and add to cart
And Fill all the details and upload the file   
Examples:
|SheetName|RowNumber|
|login|1|


#/*Sangeetha */ 
Scenario Outline: TC010 Product Availabilty
Given user should login to application 
Then enters credentials "<SheetName>" and <RowNumber>
And click on login
And user search for item and add to cart
Examples:
|SheetName|RowNumber|
|login|0|

#/*Archana*/
Scenario Outline: TC011 Remove Product
  
Given Navigate to Cart URL
Then User click on My account and Login 
And User fill the Login form from given sheetname "<SheetName>" and rownumber <RowNumber>
Then User should be logged in successfully
And select a product and Add to cart
Then View Cart and RemoveProduct  
Examples:
|SheetName|RowNumber|
|login|3|

#/*Sangeetha */ 
Scenario Outline: TC012 Apply Coupon Code

Given user should login to application 
Then enters credentials "<SheetName>" and <RowNumber>
And click on login
Then user mouseover to laptop and select HP LP3065
And user changes delivery date
Then user Adds to cart and add coupon apply
Examples:
|SheetName|RowNumber|
|login|0|

#/*Vijay */
Scenario Outline: TC013 Coupon code

Given User login to url
Then User enter credentials "<SheetName>" and "<RowNumber>"
And User needs to click login button
Then User apply empty coupon code
Examples:
|SheetName|RowNumber|
|login|2|
    
#/*Sangeetha */ 
Scenario Outline: TC014 Estimate Shipping & Taxes

Given user should login to application 
Then enters credentials "<SheetName>" and <RowNumber>
And click on login
Then user mouseover to laptop and select HP LP3065
Then user Adds to cart
Then user going to shopping cart and estimate taxes
And enter details and click quote
Then flat shipping and scrrenshot
And billing details and continue
Then return to home page
Examples:
|SheetName|RowNumber|
|login|4|   

#/*Archana*/
Scenario Outline: TC015 Wish list 
 
Given Navigate to Cart URL
Then User click on My account and Login 
And User fill the Login form from given sheetname "<SheetName>" and rownumber <RowNumber>
Then Select a product and add to wishlist   
Examples:
|SheetName|RowNumber|
|login|1|

#/*Archana*/
Scenario Outline: TC016 Order history/Product return
  
Given Navigate to Cart URL
Then User click on My account and Login 
And User fill the Login form from given sheetname "<SheetName>" and rownumber <RowNumber>
Then User should be logged in successfully
And Navigate to order History and return the product  
Examples:
|SheetName|RowNumber|
|login|1|



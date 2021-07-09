package opencartStepDefintion;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.util.List;
import java.util.Map;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import org.apache.commons.io.FileUtils;
import org.apache.poi.xssf.usermodel.XSSFSheet;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebDriverException;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;
import org.testng.Reporter;
import org.testng.annotations.AfterTest;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import opencartDataFactory.OpencartDataFactory;
import opencartDataProvider.OpencartConfigReader;
import opencartPages.OpencartCreateAccount;
import opencartPages.OpencartLoginPage;
import opencartPages.OpencartViewCart;
import opencartPages.OrderHistoryPage;
import opencartPages.OpenCartEditLastname;
import opencartPages.OpenCartLoginAccount;
import opencartPages.OpenCartNegativeRegistration;
import opencartPages.OpenCartPaymentRegistration;
import opencartPages.OpenCartProduct;
import opencartUtils.OpencartExcelReader;



public class OpencartStepsTest {
	
	WebDriver driver;
	
	OpencartConfigReader configfile;
	Properties prop;
	OpencartDataFactory DriverFactory;
	OpencartLoginPage log;
    OpenCartProduct selproduct;
    OpencartViewCart mycart;
    OrderHistoryPage orderReturn;
    
    
	@Before(order = 0)
    public void getProperty() {
		configfile = new OpencartConfigReader();
        prop = configfile.init_prop();
    }

 

    @Before(order = 1)
    public void launchBrowser() {
        String browserName = prop.getProperty("browser");
        DriverFactory = new OpencartDataFactory();
        driver = DriverFactory.init_driver(browserName);
        
    }
    
	//SANGEETHA
    
	@Given("^user should open link$")
	public void user_should_open_link() throws Throwable {
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        driver.manage().deleteAllCookies();
        
       
        driver.get(prop.getProperty("url"));
	}

	@Then("^click on accountand enter credentials \"([^\"]*)\" and (\\d+)$")
	public void click_on_accountand_enter_credentials_and(String SheetName, int RowNumber) throws Throwable {
		driver.findElement(By.xpath(prop.getProperty("MyAccount_button_xpath"))).click();
		driver.findElement(By.xpath(prop.getProperty("Register_button_xpath"))).click();
		OpencartExcelReader reader=new OpencartExcelReader();
		OpencartCreateAccount create=new OpencartCreateAccount(driver);
		List<Map<String,String>> testData =reader.getData("C:\\Users\\Sangeetha S K\\git\\Opencart.com_Hackathon_TeamF\\OpenCart.com\\ExcelTestdata\\opencartlogin.xlsx", SheetName);
		String firstname =testData.get(RowNumber).get("FirstName");
		String lastname =testData.get(RowNumber).get("LastName");
		String emailaddress =testData.get(RowNumber).get("EmailAddress");
		String telephone =testData.get(RowNumber).get("Telephone");
		String password =testData.get(RowNumber).get("Password");
		String confirmpassword =testData.get(RowNumber).get("ConfirmPassword");

		create.fillCreateaccountForm(firstname, lastname, emailaddress, telephone, password, confirmpassword);
	}

	@And("^click on submit$")
	public void click_on_submit() throws Throwable {
	   OpencartCreateAccount click=new OpencartCreateAccount(driver);
	   click.ClickSubmit();
	}

	@Given("^user should login to application$")
	public void user_should_login_to_application() throws Throwable {
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        driver.manage().deleteAllCookies();
        
       
       driver.get(prop.getProperty("url"));
	}

	@Then("^enters credentials \"([^\"]*)\" and (\\d+)$")
	public void enters_credentials_and(String SheetName, int RowNumber) throws Throwable {
		driver.findElement(By.xpath(prop.getProperty("MyAccount_button_xpath"))).click();
		driver.findElement(By.xpath(prop.getProperty("home_login_button_xpath"))).click();
		OpencartExcelReader reader=new OpencartExcelReader();
		OpenCartLoginAccount login=new OpenCartLoginAccount(driver);
		List<Map<String,String>> testData =reader.getData("C:\\Users\\Sangeetha S K\\git\\Opencart.com_Hackathon_TeamF\\OpenCart.com\\ExcelTestdata\\opencartlogin.xlsx", SheetName);
		String Username =testData.get(RowNumber).get("EmailUsername");
		String loginpassword =testData.get(RowNumber).get("Password");
		
		login.Enterlogindetails(Username, loginpassword);
		
	}

	@And("^click on login$")
	public void click_on_login() throws Throwable {
		OpenCartLoginAccount loginbutton=new OpenCartLoginAccount(driver);
		loginbutton.ClickLogin();
	}

	
	@Then("^user mouseover to desktop and select mac$")
	public void user_mouseover_to_desktop_and_select_mac() throws Throwable {
	WebElement ele=  driver.findElement(By.xpath(prop.getProperty("Mouseover_desktop_xpath")));
	Actions act =new Actions( driver);
	act.moveToElement(ele).perform();
	 driver.findElement(By.xpath(prop.getProperty("Mouseover_desktop_xpath"))).click();
	 driver.findElement(By.xpath(prop.getProperty("Mac_select_xpath"))).click();
	 JavascriptExecutor jsscriprt = (JavascriptExecutor)  driver;
	 jsscriprt.executeScript("window.scrollBy(5,300)");
     driver.findElement(By.xpath(prop.getProperty("Imac_product_xpath"))).click();
     JavascriptExecutor js = (JavascriptExecutor)  driver;
     js.executeScript("window.scrollBy(5,500)");
     driver.findElement(By.xpath(prop.getProperty("Mac_add_to_cart_xpath"))).click();
    Thread.sleep(1000);
    File scr = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
    File dest = new File("screenshots/"+"product added successfully.screenshot"+ ".png");
    FileUtils.copyFile(scr, dest);
	}
        
	@And("^user search for item and add to cart$")
	public void user_search_for_item_and_add_to_cart() throws Throwable {
		driver.findElement(By.xpath(prop.getProperty("search_iteam_xpath"))).sendKeys("iphone");
		driver.findElement(By.xpath(prop.getProperty("search_ion_xpath"))).click();
		JavascriptExecutor js = (JavascriptExecutor)  driver;
	     js.executeScript("window.scrollBy(5,500)");
	     driver.findElement(By.xpath(prop.getProperty("select_iphone_xpath"))).click();
	     WebElement Quantity = driver.findElement(By.xpath(prop.getProperty("enter_quantity_xpath")));
	     Quantity.clear();
	     driver.findElement(By.xpath(prop.getProperty("enter_quantity_xpath"))).sendKeys("2");
	     driver.findElement(By.xpath(prop.getProperty("Mac_add_to_cart_xpath"))).click();
	     driver.findElement(By.xpath(prop.getProperty("click_cart_items"))).click();
	     driver.findElement(By.xpath(prop.getProperty("checkout_cart_xpath"))).click();
	     Thread.sleep(1000);
	     File scr = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
	     File dest = new File("screenshots/"+"product not available.screenshot"+ ".png");
	     FileUtils.copyFile(scr, dest);
	     
	}
	@And("^user search for item add to cart$")
	public void user_search_for_item_add_to_cart() throws Throwable {
		driver.findElement(By.xpath(prop.getProperty("search_iteam_xpath"))).sendKeys("iphone");
		driver.findElement(By.xpath(prop.getProperty("search_ion_xpath"))).click();
		JavascriptExecutor js = (JavascriptExecutor)  driver;
	     js.executeScript("window.scrollBy(5,500)");
	     driver.findElement(By.xpath(prop.getProperty("select_iphone_xpath"))).click();
	     
	     driver.findElement(By.xpath(prop.getProperty("Mac_add_to_cart_xpath"))).click();
	}
	@Given("^user enters urls$")
	public void user_enters_urls() throws Throwable {
		driver.get(prop.getProperty("url"));
	}

	@Then("^user mouseover to laptop and select HP LP(\\d+)$")
	public void user_mouseover_to_laptop_and_select_HP_LP(int arg1) throws Throwable {
		WebDriverWait wait = new WebDriverWait(driver,60);
	     wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(prop.getProperty(("laptop_notebook_xpath")))));
		driver.findElement(By.xpath(prop.getProperty("laptop_notebook_xpath"))).click();
		driver.findElement(By.xpath(prop.getProperty("showall_lap_note_xpath"))).click();
		JavascriptExecutor js = (JavascriptExecutor)  driver;
	     js.executeScript("window.scrollBy(5,500)");
	     driver.findElement(By.xpath(prop.getProperty("HpLp3065_xpath"))).click();
	     
	     
	}

	@Then("^user changes delivery date$")
	public void user_changes_delivery_date() throws Throwable {
		JavascriptExecutor down = (JavascriptExecutor)  driver;
	     down.executeScript("window.scrollBy(5,500)");
	     WebElement Quantity = driver.findElement(By.xpath(prop.getProperty("delivery_date_xpath")));
	     Quantity.clear();
	     driver.findElement(By.xpath(prop.getProperty("delivery_date_xpath"))).sendKeys("2020-04-20");
	       
	}

	@Then("^user Adds to cart and check out$")
	public void user_Adds_to_cart_and_check_out() throws Throwable {
		driver.findElement(By.xpath(prop.getProperty("add_to_cart_xpath"))).click();
		driver.findElement(By.xpath(prop.getProperty("click_cart_items"))).click();
		WebDriverWait wait = new WebDriverWait(driver,60);
	     wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(prop.getProperty(("shopping_cart_xpath")))));

		driver.findElement(By.xpath(prop.getProperty("shopping_cart_xpath"))).click();
		
	     wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(prop.getProperty(("checkout_button_xpath")))));
		JavascriptExecutor drop = (JavascriptExecutor)  driver;
		drop.executeScript("window.scrollBy(5,500)");
	    driver.findElement(By.xpath(prop.getProperty("checkout_button_xpath"))).click();
		
	}

	@Then("^user Adds to cart$")
	public void user_Adds_to_cart() throws Throwable {
		driver.findElement(By.xpath(prop.getProperty("add_to_cart_xpath"))).click();
	}
	@Then("^click on register account$")
	public void click_on_register_account() throws Throwable {
		JavascriptExecutor down = (JavascriptExecutor)  driver;
	     down.executeScript("window.scrollBy(5,250)");
	     WebDriverWait wait = new WebDriverWait(driver,60);
	     wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(prop.getProperty(("click_continue_xpath")))));
		driver.findElement(By.xpath(prop.getProperty("click_continue_xpath"))).click();
			
	    
	}

	@Then("^enter manadatory fileds  \"([^\"]*)\" and (\\d+)$")
	public void enter_manadatory_fileds_and(String SheetName, int RowNumber) throws Throwable {
		OpencartExcelReader reader=new OpencartExcelReader();
		OpenCartPaymentRegistration paymentreg=new OpenCartPaymentRegistration(driver);
		List<Map<String,String>> testData =reader.getData("C:\\Users\\Sangeetha S K\\git\\Opencart.com_Hackathon_TeamF\\OpenCart.com\\ExcelTestdata\\opencartlogin.xlsx", SheetName);
		String Firstname =testData.get(RowNumber).get("Firstname");
		String Lastname =testData.get(RowNumber).get("Lastname");
		String emailadd =testData.get(RowNumber).get("emailaddress");
		String telephone =testData.get(RowNumber).get("telephone");
		String password =testData.get(RowNumber).get("password");
		String confirmpassword =testData.get(RowNumber).get("confirmpassword");
		String company =testData.get(RowNumber).get("company");
		String address =testData.get(RowNumber).get("address1");
		String city =testData.get(RowNumber).get("city");
		String postcode =testData.get(RowNumber).get("postcode");
	
		paymentreg.fillpaymentregistration(Firstname, Lastname, emailadd, telephone, password, confirmpassword, company, address, city, postcode);
		
		Select drpCountry = new Select(driver.findElement(By.xpath(prop.getProperty("payment_reg_country_xpath"))));
		drpCountry.selectByVisibleText("India");
		
		Select paymentCountry = new Select(driver.findElement(By.xpath(prop.getProperty("payment_reg_paymentzone_xpath"))));
		
	
		paymentCountry.selectByVisibleText("Goa");
		
		paymentreg.Clickcontinue();
		
	}

	@Then("^user enters delivery methods$")
	public void user_enters_delivery_methods() throws Throwable {
		
		
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		WebDriverWait wait = new WebDriverWait(driver,20);
	 wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(prop.getProperty("continue_shipping_xpath"))));
	 
	 driver.findElement(By.xpath(prop.getProperty("continue_shipping_xpath"))).click();
	}

	@Then("^user confirms order and take screenshot$")
	public void user_confirms_order_and_take_screenshot() throws Throwable {
		WebDriverWait wait = new WebDriverWait(driver,20);
		 wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(prop.getProperty("continue_shippingmethod_xpath"))));
		driver.findElement(By.xpath(prop.getProperty("continue_shippingmethod_xpath"))).click();
		WebDriverWait time = new WebDriverWait(driver,20);
		time.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(prop.getProperty("check_cashondev_xpath"))));
		driver.findElement(By.xpath(prop.getProperty("check_cashondev_xpath"))).click();
		driver.findElement(By.xpath(prop.getProperty("continue_method_xpath"))).click();
		
		time.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(prop.getProperty("check_cashondev_xpath"))));
		driver.findElement(By.xpath(prop.getProperty("confirm_button_xpath"))).click();
		Thread.sleep(1000);
		File scr = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
	     File dest = new File("screenshots/"+"confirmorder.screenshot"+ ".png");
	     FileUtils.copyFile(scr, dest);
	     
	}
	@Then("^user Adds to cart and add coupon apply$")
	public void user_Adds_to_cart_and_add_coupon_apply() throws Throwable {
		driver.findElement(By.xpath(prop.getProperty("add_to_cart_xpath"))).click();
		WebDriverWait wait = new WebDriverWait(driver,40);
		 wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(prop.getProperty("shopping_cart_xpath"))));
		driver.findElement(By.xpath(prop.getProperty("shopping_cart_xpath"))).click();
		JavascriptExecutor down = (JavascriptExecutor)  driver;
	     down.executeScript("window.scrollBy(5,250)");
		driver.findElement(By.xpath(prop.getProperty("coupon_xpath"))).click();
		
		 wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(prop.getProperty("enter_coupon_xpath"))));
		driver.findElement(By.xpath(prop.getProperty("enter_coupon_xpath"))).sendKeys("ASHR1014");
		
		driver.findElement(By.xpath(prop.getProperty("apply_coupon_xpath"))).click();
		Thread.sleep(1000);
		
		File scr = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
	     File dest = new File("screenshots/"+"applycouponerror.screenshot"+ ".png");
	     FileUtils.copyFile(scr, dest);
	}
	
	@Then("^user going to shopping cart and estimate taxes$")
	public void user_going_to_shopping_cart_and_estimate_taxes() throws Throwable {
		driver.findElement(By.xpath(prop.getProperty("shopping_cart_xpath"))).click();
		JavascriptExecutor down = (JavascriptExecutor)  driver;
	     down.executeScript("window.scrollBy(5,250)");
	     driver.findElement(By.xpath(prop.getProperty("estimate_order_xpath"))).click();
	     
	}

	@And("^enter details and click quote$")
	public void enter_details_and_click_quote() throws Throwable {
	   
		JavascriptExecutor drop = (JavascriptExecutor)  driver;
		drop.executeScript("window.scrollBy(5,500)");
		WebDriverWait wait = new WebDriverWait(driver,20);
		 wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(prop.getProperty("estimate_country_xpath"))));
		Select drpCountry = new Select(driver.findElement(By.xpath(prop.getProperty("estimate_country_xpath"))));
		drpCountry.selectByVisibleText("India");
		Select paymentCountry = new Select(driver.findElement(By.xpath(prop.getProperty("estimate_state_xpath"))));
			paymentCountry.selectByVisibleText("Goa");
			 driver.findElement(By.xpath(prop.getProperty("estimate_postcode_xpath"))).sendKeys("518134");
			 
			 wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(prop.getProperty("estimate_country_xpath"))));
			 driver.findElement(By.xpath(prop.getProperty("estimate_getquote_xpath"))).click();
			 
			
	}

	@Then("^flat shipping and scrrenshot$")
	public void flat_shipping_and_scrrenshot() throws Throwable {
	    
		driver.findElement(By.name("shipping_method")).click();
		driver.findElement(By.id("button-shipping")).click();
		
		Thread.sleep(1000);
		File scr = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
	     File dest = new File("screenshots/"+"flatshipping.screenshot"+ ".png");
	     FileUtils.copyFile(scr, dest);
	     WebDriverWait checkout = new WebDriverWait(driver,60);
	     checkout.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(prop.getProperty(("checkout_button_xpath")))));
		JavascriptExecutor drop = (JavascriptExecutor)  driver;
		drop.executeScript("window.scrollBy(5,500)");
	    driver.findElement(By.xpath(prop.getProperty("checkout_button_xpath"))).click();

	}

	@And("^billing details and continue$")
	public void billing_details_and_continue() throws Throwable {
		WebDriverWait ship = new WebDriverWait(driver,60);
				ship.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(prop.getProperty("continue_payment_xpath"))));
				driver.findElement(By.xpath(prop.getProperty("continue_payment_xpath"))).click();
				
				driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
				WebDriverWait wait = new WebDriverWait(driver,20);
			 wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(prop.getProperty("continue_shipping_xpath"))));
			 
			 driver.findElement(By.xpath(prop.getProperty("continue_shipping_xpath"))).click();
			 driver.findElement(By.xpath(prop.getProperty("flat_comment_xpath"))).sendKeys("Confirm");
			 
			 
			 wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(prop.getProperty("continue_shippingmethod_xpath"))));
			driver.findElement(By.xpath(prop.getProperty("continue_shippingmethod_xpath"))).click();
			WebDriverWait time = new WebDriverWait(driver,20);
			time.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(prop.getProperty("check_cashondev_xpath"))));
			driver.findElement(By.xpath(prop.getProperty("check_cashondev_xpath"))).click();
			driver.findElement(By.xpath(prop.getProperty("continue_method_xpath"))).click();
			
			wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath(prop.getProperty("check_cashondev_xpath"))));
			driver.findElement(By.xpath(prop.getProperty("confirm_button_xpath"))).click();
			Thread.sleep(1000);
	    
	}

	@Then("^return to home page$")
	public void return_to_home_page() throws Throwable {
	   
		driver.findElement(By.xpath(prop.getProperty("last_contine_button_xpath"))).click();
	}
	
	//ARCHANA
	@Given("^Navigate to Cart URL$")
	public void navigate_to_Cart_URL() throws Throwable {
		String url = prop.getProperty("url");
		driver.get(url);
		driver.manage().window().maximize();
	}
	@When("^Home page validation$")
    public void home_page_validation() throws Throwable {
       
        String ExpectedTitle = "Your Store";
        String ActualTitle = driver.getTitle();
        Assert.assertEquals(ActualTitle, ExpectedTitle);
        Reporter.log(ActualTitle);
    
    }

	
	@Then("^User click on My account and Login$")
	public void user_click_on_My_account_and_Login() throws Throwable {
		
	    log = new OpencartLoginPage(driver);
	    log.clickLogin();
		
	}

	@Then("^User fill the Login form from given sheetname \"(.*?)\" and rownumber (\\d+)$")
	public void user_fill_the_Login_form_from_given_sheetname_and_rownumber(String sheetName, int rowNumber) throws Throwable {
		OpencartExcelReader reader = new OpencartExcelReader();
		List<Map<String,String>> testData = reader.getData("C:\\Users\\Sangeetha S K\\git\\Opencart.com_Hackathon_TeamF\\OpenCart.com\\ExcelTestdata\\opencartlogin.xlsx", sheetName);
		
		String emailid = testData.get(rowNumber).get("EmailUsername");
		String password = testData.get(rowNumber).get("Password");
		
	  log = new OpencartLoginPage(driver);
		log.login(emailid, password);
		Thread.sleep(2000);
	}

	@Then("^User should be logged in successfully$")
	public void user_should_be_logged_in_successfully() throws Throwable {
		
		String ExpTitle = "My Account";
		String ActTitle = driver.getTitle();
		Assert.assertEquals(ActTitle, ExpTitle);
		Reporter.log(ActTitle);
	    
	}

   @Then("^select a product and Add to cart$")
   public void select_a_laptop_and_Add_to_cart() throws Throwable {
	   
	   OpenCartProduct selproduct = new OpenCartProduct(driver);
	   selproduct.selectProduct();
	   selproduct.AddToCart();
	   
	   
    }
   
   @Then("^View Cart and RemoveProduct$")
   public void view_Cart_and_RemoveProduct() throws Throwable {
	   OpencartViewCart mycart = new OpencartViewCart(driver);
	   mycart.RemoveItemAndContinue();
   }
   
   @Then("^checkout with Guest details from given sheetname \"([^\"]*)\" and rownumber (\\d+)$")
   public void checkout_with_Guest_details_from_given_sheetname_and_rownumber(String sheetName, int rowNumber) throws Throwable {
	   
	   OpencartExcelReader reader = new OpencartExcelReader();
		List<Map<String,String>> testData = 
				reader.getData("C:\\Users\\Sangeetha S K\\git\\Opencart.com_Hackathon_TeamF\\OpenCart.com\\ExcelTestdata\\opencartlogin.xlsx", sheetName);
		
		mycart = new OpencartViewCart(driver);
		
		String fstName = testData.get(rowNumber).get("FirstName");
		String lstname = testData.get(rowNumber).get("LastName");
		String email = testData.get(rowNumber).get("Email");
		String phn = testData.get(rowNumber).get("Telephone");
		String company = testData.get(rowNumber).get("Company");
		String add1 = testData.get(rowNumber).get("Address1");
		String add2 = testData.get(rowNumber).get("Address2");
		String city = testData.get(rowNumber).get("city");
		String postal = testData.get(rowNumber).get("postalcode");
		
		mycart.GuestcheckOut();
		mycart.BillingDetails(fstName, lstname, email, phn, company, add1, add2, city, postal);
		mycart.confirmOrder();

   }
   
   @Then("^Navigate to order History and return the product$")
   public void navigate_to_order_History_and_return_the_product() throws Throwable {
       
	  orderReturn = new OrderHistoryPage(driver);
	  orderReturn.ViewOrderHistory();
	  orderReturn.ReturnProduct();
   }
   
   @Then("^Select a product and add to wishlist$")
   public void select_a_product_and_add_to_wishlist() throws Throwable {
	   
	   selproduct = new OpenCartProduct(driver);
	   selproduct.selectProductToWishlist();
       
   }
   
   @Then("^Select a product from component and add to cart$")
   public void select_a_product_from_component_and_add_to_cart() throws Throwable {
	   selproduct = new OpenCartProduct(driver);
	   selproduct.SelectProductfromCompenent();
     
   }

   @Then("^Fill all the details and upload the file$")
   public void fill_all_the_details_and_upload_the_file() throws Throwable {
	   selproduct = new OpenCartProduct(driver);
	   selproduct.FillProductDetails();
   }
   
   //VIJAY
   
   @Given("^User should nagivate to url$")
   public void User_should_nagivate_to_url() throws Throwable {
   	
   	
   	//Open link from excelsheet through  OpencartExcelReader
   	driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
       driver.manage().deleteAllCookies();
       
      
       driver.get(prop.getProperty("url"));
   }

   
   @Then("^User Register account should fail \"([^\"]*)\" and \"([^\"]*)\"$")
   public void user_Register_account_should_fail_and(String SheetName, int RowNumber) throws Throwable {
	    driver.findElement(By.xpath(prop.getProperty("Myaccount_xpath"))).click();
	    driver.findElement(By.xpath(prop.getProperty("Register_xpath"))).click();
	    OpencartExcelReader reader=new OpencartExcelReader();
	    OpenCartNegativeRegistration create=new OpenCartNegativeRegistration(driver);
       List<Map<String,String>> testData =reader.getData("C:\\Users\\Sangeetha S K\\git\\Opencart.com_Hackathon_TeamF\\OpenCart.com\\ExcelTestdata\\opencartlogin.xlsx", SheetName);
       String firstname =testData.get(RowNumber).get("Firstname");
       String lastname =testData.get(RowNumber).get("Lastname");
       String emailaddress =testData.get(RowNumber).get("Email");
       String telephonenumber =testData.get(RowNumber).get("Telephone");
       String createpassword =testData.get(RowNumber).get("Password");
       String confirmpassword =testData.get(RowNumber).get("PasswordConfirm");
      
      create.fillCreateaccountform(firstname, lastname, emailaddress, telephonenumber, createpassword, confirmpassword);
	    
      
	    
	}
   
   @And("^Click on submit button$")
   public void Click_on_submit_button() throws Throwable {
   	OpenCartNegativeRegistration click=new OpenCartNegativeRegistration(driver);
   	click.ClickSubmit();
   	
       Thread.sleep(2000);
   	String error = driver.findElement(By.className("text-danger")).getText();
       System.out.println(error);
   }
   
   @Given("^User login to url$")
   public void User_login_to_url() throws Throwable {
   	
	   driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
       driver.manage().deleteAllCookies();
       
      
       driver.get(prop.getProperty("url"));
       
   }

   @Then("^User enter credentials \"([^\"]*)\" and \"([^\"]*)\"$")
   public void user_enter_credentials_and(String SheetName, int RowNumber) throws Throwable {
		driver.findElement(By.xpath(prop.getProperty("MyAccount_xpath"))).click();
		driver.findElement(By.xpath(prop.getProperty("Login_xpath"))).click();
		OpencartExcelReader reader=new OpencartExcelReader();
	    OpenCartEditLastname account = new OpenCartEditLastname(driver);
       List<Map<String,String>> test =reader.getData("C:\\Users\\Sangeetha S K\\git\\Opencart.com_Hackathon_TeamF\\OpenCart.com\\ExcelTestdata\\opencartlogin.xlsx", SheetName);
       String Emailaddress =test.get(RowNumber).get("EmailUsername");
       String Createpassword =test.get(RowNumber).get("Password");
       
       account.Enterlogin(Emailaddress, Createpassword);
   }

   @And("^User needs to click login button$")
   public void User_needs_to_click_login_button() throws Throwable {
   	OpenCartEditLastname login=new OpenCartEditLastname(driver);
   	login.Clicklogin();
       	 
   }


	@Then("^User able edit the Existing login account$")
	public void user_able_edit_the_Existing_login_account() throws Throwable {
		WebElement ele=  driver.findElement(By.xpath(prop.getProperty("Edit_xpath")));
	    Actions act =new Actions( driver);
	    act.moveToElement(ele).perform();
	    driver.findElement(By.xpath(prop.getProperty("Edit_xpath"))).click();
	    WebElement Quantity = driver.findElement(By.xpath(prop.getProperty("lastName_xpath")));
       Quantity.clear();
       driver.findElement(By.xpath(prop.getProperty("lastName_xpath"))).sendKeys("A");
	    driver.findElement(By.xpath(prop.getProperty("continue_xpath"))).click();
	    driver.findElement(By.xpath(prop.getProperty("myaccount_xpath"))).click();
	    driver.findElement(By.xpath(prop.getProperty("Logout_xpath"))).click();
	    driver.findElement(By.xpath(prop.getProperty("conTinue_xpath"))).click();
	
	}

	@Then("^User apply empty coupon code$")
	public void user_apply_empty_coupon_code() throws Throwable {
		driver.findElement(By.xpath(prop.getProperty("Desktop_xpath"))).click();
		driver.findElement(By.xpath(prop.getProperty("Mac_xpath"))).click();
		driver.findElement(By.xpath(prop.getProperty("Addtocart_xpath"))).click();
		WebElement ele=  driver.findElement(By.xpath(prop.getProperty("Shoppingcart_xpath")));
	    Actions act =new Actions( driver);
	    act.moveToElement(ele).perform();
	    driver.findElement(By.xpath(prop.getProperty("Shoppingcart_xpath"))).click();
		driver.findElement(By.xpath(prop.getProperty("Couponcode_xpath"))).click();
		driver.findElement(By.xpath(prop.getProperty("Apply_xpath"))).click();
		
		Thread.sleep(2000);
		File scr = ((TakesScreenshot) driver).getScreenshotAs(OutputType.FILE);
	     File dest = new File("screenshots/"+"couponnoavailable.screenshot"+ ".png");
	     FileUtils.copyFile(scr, dest);
		
	}


@After(order = 0)
public void quitBrowser() {
	driver.quit();
}

@After(order = 1)
public void embedScreenshot(Scenario scenario) throws Exception {
    if (scenario.isFailed()) {
        try {
            byte[] screenshot = ((TakesScreenshot) driver).getScreenshotAs(OutputType.BYTES);
            String testName = scenario.getName();
            scenario.embed(screenshot, "image/png");
            scenario.write(testName);
        } catch (WebDriverException wde) {
           System.err.println(wde.getMessage());
        } catch (ClassCastException cce) {
            cce.printStackTrace();}
        }
    }
}


   

	
	




	

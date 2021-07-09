package opencartPages;
import org.openqa.selenium.WebDriver;

import opencartDataProvider.OpencartConfigReader;

import java.util.Properties;

import org.openqa.selenium.By;

public class OpencartCreateAccount {
	
   WebDriver driver;
   Properties prop;
   OpencartConfigReader configfile;
   
  

	public OpencartCreateAccount(WebDriver driver) {
		this.driver=driver;
	}
	 
			
	public void fillCreateaccountForm(String FirstName, String LastName,String EmailAddress, String Telephone,String Password, String ConfirmPassword) {
		configfile = new OpencartConfigReader();
	       prop = configfile.init_prop();
	   
		  driver.findElement(By.xpath(prop.getProperty("First_name_xpath"))).sendKeys(FirstName);
		  driver.findElement(By.xpath(prop.getProperty("Last_name_xpath"))).sendKeys(LastName);
		  driver.findElement(By.xpath(prop.getProperty("Email_id_xpath"))).sendKeys(EmailAddress);
		  driver.findElement(By.xpath(prop.getProperty("Telephone_number_xpath"))).sendKeys(Telephone);
		  driver.findElement(By.xpath(prop.getProperty("Create_Password_xpath"))).sendKeys(Password);
		  driver.findElement(By.xpath(prop.getProperty("Confirm_password_xpath"))).sendKeys(ConfirmPassword);
	}
	

	public void ClickSubmit() {
		configfile = new OpencartConfigReader();
	       prop = configfile.init_prop();
		//driver.findElement(By.xpath(prop.getProperty("No_Radiobutton_xpath"))).click();
		driver.findElement(By.xpath(prop.getProperty("check_box_xpath"))).click();
		driver.findElement(By.xpath(prop.getProperty("Click_continue_xpath"))).click();
	}
}




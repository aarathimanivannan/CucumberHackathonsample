$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Opencart.feature");
formatter.feature({
  "line": 1,
  "name": "Open Cart.com Application TestCases (End to End validation)",
  "description": "",
  "id": "open-cart.com-application-testcases-(end-to-end-validation)",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 3,
      "value": "#/*Sangeetha */"
    }
  ],
  "line": 4,
  "name": "TC001 Register Account",
  "description": "",
  "id": "open-cart.com-application-testcases-(end-to-end-validation);tc001-register-account",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "user should open link",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "click on accountand enter credentials \"\u003cSheetName\u003e\" and \u003cRowNumber\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "click on submit",
  "keyword": "And "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "open-cart.com-application-testcases-(end-to-end-validation);tc001-register-account;",
  "rows": [
    {
      "cells": [
        "SheetName",
        "RowNumber"
      ],
      "line": 10,
      "id": "open-cart.com-application-testcases-(end-to-end-validation);tc001-register-account;;1"
    },
    {
      "cells": [
        "CreateAccount",
        "0"
      ],
      "line": 11,
      "id": "open-cart.com-application-testcases-(end-to-end-validation);tc001-register-account;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 5049800,
  "status": "passed"
});
formatter.before({
  "duration": 8548981400,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "TC001 Register Account",
  "description": "",
  "id": "open-cart.com-application-testcases-(end-to-end-validation);tc001-register-account;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 6,
  "name": "user should open link",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "click on accountand enter credentials \"CreateAccount\" and 0",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "click on submit",
  "keyword": "And "
});
formatter.match({
  "location": "OpencartStepsTest.user_should_open_link()"
});
formatter.result({
  "duration": 5007516100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CreateAccount",
      "offset": 39
    },
    {
      "val": "0",
      "offset": 58
    }
  ],
  "location": "OpencartStepsTest.click_on_accountand_enter_credentials_and(String,int)"
});
formatter.result({
  "duration": 8509176100,
  "status": "passed"
});
formatter.match({
  "location": "OpencartStepsTest.click_on_submit()"
});
formatter.result({
  "duration": 2250107800,
  "status": "passed"
});
formatter.after({
  "duration": 158400,
  "status": "passed"
});
formatter.after({
  "duration": 2358339700,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 13,
      "value": "#/*Vijay */"
    }
  ],
  "line": 14,
  "name": "TC002 Register Account Failure",
  "description": "",
  "id": "open-cart.com-application-testcases-(end-to-end-validation);tc002-register-account-failure",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "User should nagivate to url",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "User Register account should fail \"\u003cSheetName\u003e\" and \"\u003cRowNumber\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "Click on submit button",
  "keyword": "And "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "open-cart.com-application-testcases-(end-to-end-validation);tc002-register-account-failure;",
  "rows": [
    {
      "cells": [
        "SheetName",
        "RowNumber"
      ],
      "line": 20,
      "id": "open-cart.com-application-testcases-(end-to-end-validation);tc002-register-account-failure;;1"
    },
    {
      "cells": [
        "Negativereg",
        "0"
      ],
      "line": 21,
      "id": "open-cart.com-application-testcases-(end-to-end-validation);tc002-register-account-failure;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2657400,
  "status": "passed"
});
formatter.before({
  "duration": 4392991200,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "TC002 Register Account Failure",
  "description": "",
  "id": "open-cart.com-application-testcases-(end-to-end-validation);tc002-register-account-failure;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 16,
  "name": "User should nagivate to url",
  "keyword": "Given "
});
formatter.step({
  "line": 17,
  "name": "User Register account should fail \"Negativereg\" and \"0\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "Click on submit button",
  "keyword": "And "
});
formatter.match({
  "location": "OpencartStepsTest.User_should_nagivate_to_url()"
});
formatter.result({
  "duration": 5734349400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Negativereg",
      "offset": 35
    },
    {
      "val": "0",
      "offset": 53
    }
  ],
  "location": "OpencartStepsTest.user_Register_account_should_fail_and(String,int)"
});
formatter.result({
  "duration": 6510066800,
  "status": "passed"
});
formatter.match({
  "location": "OpencartStepsTest.Click_on_submit_button()"
});
formatter.result({
  "duration": 4176739300,
  "status": "passed"
});
formatter.after({
  "duration": 38600,
  "status": "passed"
});
formatter.after({
  "duration": 2447631700,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 24,
      "value": "#/*Archana*/"
    }
  ],
  "line": 25,
  "name": "TC003 \u0026 TC004 Testing Login Funcationality \u0026 Verify the Title",
  "description": "",
  "id": "open-cart.com-application-testcases-(end-to-end-validation);tc003-\u0026-tc004-testing-login-funcationality-\u0026-verify-the-title",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 27,
  "name": "Navigate to Cart URL",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "Home page validation",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "User click on My account and Login",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "User fill the Login form from given sheetname \"\u003cSheetName\u003e\" and rownumber \u003cRowNumber\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "User should be logged in successfully",
  "keyword": "Then "
});
formatter.examples({
  "line": 32,
  "name": "",
  "description": "",
  "id": "open-cart.com-application-testcases-(end-to-end-validation);tc003-\u0026-tc004-testing-login-funcationality-\u0026-verify-the-title;",
  "rows": [
    {
      "cells": [
        "SheetName",
        "RowNumber"
      ],
      "line": 33,
      "id": "open-cart.com-application-testcases-(end-to-end-validation);tc003-\u0026-tc004-testing-login-funcationality-\u0026-verify-the-title;;1"
    },
    {
      "cells": [
        "login",
        "1"
      ],
      "line": 34,
      "id": "open-cart.com-application-testcases-(end-to-end-validation);tc003-\u0026-tc004-testing-login-funcationality-\u0026-verify-the-title;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 974100,
  "status": "passed"
});
formatter.before({
  "duration": 4563651500,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "TC003 \u0026 TC004 Testing Login Funcationality \u0026 Verify the Title",
  "description": "",
  "id": "open-cart.com-application-testcases-(end-to-end-validation);tc003-\u0026-tc004-testing-login-funcationality-\u0026-verify-the-title;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 27,
  "name": "Navigate to Cart URL",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "Home page validation",
  "keyword": "When "
});
formatter.step({
  "line": 29,
  "name": "User click on My account and Login",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "User fill the Login form from given sheetname \"login\" and rownumber 1",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "User should be logged in successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "OpencartStepsTest.navigate_to_Cart_URL()"
});
formatter.result({
  "duration": 4609931900,
  "status": "passed"
});
formatter.match({
  "location": "OpencartStepsTest.home_page_validation()"
});
formatter.result({
  "duration": 25467500,
  "status": "passed"
});
formatter.match({
  "location": "OpencartStepsTest.user_click_on_My_account_and_Login()"
});
formatter.result({
  "duration": 4621743500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "login",
      "offset": 47
    },
    {
      "val": "1",
      "offset": 68
    }
  ],
  "location": "OpencartStepsTest.user_fill_the_Login_form_from_given_sheetname_and_rownumber(String,int)"
});
formatter.result({
  "duration": 7201944700,
  "status": "passed"
});
formatter.match({
  "location": "OpencartStepsTest.user_should_be_logged_in_successfully()"
});
formatter.result({
  "duration": 17020800,
  "status": "passed"
});
formatter.after({
  "duration": 39000,
  "status": "passed"
});
formatter.after({
  "duration": 3126241300,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 36,
      "value": "#/*Sangeetha */"
    }
  ],
  "line": 37,
  "name": "TC005  IMAC Add to cart (Tab)",
  "description": "",
  "id": "open-cart.com-application-testcases-(end-to-end-validation);tc005--imac-add-to-cart-(tab)",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 39,
  "name": "user should login to application",
  "keyword": "Given "
});
formatter.step({
  "line": 40,
  "name": "enters credentials \"\u003cSheetName\u003e\" and \u003cRowNumber\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "click on login",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "user mouseover to desktop and select mac",
  "keyword": "Then "
});
formatter.examples({
  "line": 43,
  "name": "",
  "description": "",
  "id": "open-cart.com-application-testcases-(end-to-end-validation);tc005--imac-add-to-cart-(tab);",
  "rows": [
    {
      "cells": [
        "SheetName",
        "RowNumber"
      ],
      "line": 44,
      "id": "open-cart.com-application-testcases-(end-to-end-validation);tc005--imac-add-to-cart-(tab);;1"
    },
    {
      "cells": [
        "login",
        "0"
      ],
      "line": 45,
      "id": "open-cart.com-application-testcases-(end-to-end-validation);tc005--imac-add-to-cart-(tab);;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 707200,
  "status": "passed"
});
formatter.before({
  "duration": 4160823400,
  "status": "passed"
});
formatter.scenario({
  "line": 45,
  "name": "TC005  IMAC Add to cart (Tab)",
  "description": "",
  "id": "open-cart.com-application-testcases-(end-to-end-validation);tc005--imac-add-to-cart-(tab);;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 39,
  "name": "user should login to application",
  "keyword": "Given "
});
formatter.step({
  "line": 40,
  "name": "enters credentials \"login\" and 0",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 41,
  "name": "click on login",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "user mouseover to desktop and select mac",
  "keyword": "Then "
});
formatter.match({
  "location": "OpencartStepsTest.user_should_login_to_application()"
});
formatter.result({
  "duration": 5994995000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "login",
      "offset": 20
    },
    {
      "val": "0",
      "offset": 31
    }
  ],
  "location": "OpencartStepsTest.enters_credentials_and(String,int)"
});
formatter.result({
  "duration": 4172422300,
  "status": "passed"
});
formatter.match({
  "location": "OpencartStepsTest.click_on_login()"
});
formatter.result({
  "duration": 2737150400,
  "status": "passed"
});
formatter.match({
  "location": "OpencartStepsTest.user_mouseover_to_desktop_and_select_mac()"
});
formatter.result({
  "duration": 12211617400,
  "status": "passed"
});
formatter.after({
  "duration": 34900,
  "status": "passed"
});
formatter.after({
  "duration": 3094445600,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 47,
      "value": "#/*Archana*/"
    }
  ],
  "line": 48,
  "name": "TC006 Order Placement with guest checkout",
  "description": "",
  "id": "open-cart.com-application-testcases-(end-to-end-validation);tc006-order-placement-with-guest-checkout",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 50,
  "name": "Navigate to Cart URL",
  "keyword": "Given "
});
formatter.step({
  "line": 51,
  "name": "select a product and Add to cart",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "checkout with Guest details from given sheetname \"\u003cSheetName\u003e\" and rownumber \u003cRowNumber\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 53,
  "name": "",
  "description": "",
  "id": "open-cart.com-application-testcases-(end-to-end-validation);tc006-order-placement-with-guest-checkout;",
  "rows": [
    {
      "cells": [
        "SheetName",
        "RowNumber"
      ],
      "line": 54,
      "id": "open-cart.com-application-testcases-(end-to-end-validation);tc006-order-placement-with-guest-checkout;;1"
    },
    {
      "cells": [
        "GuestDetails",
        "0"
      ],
      "line": 55,
      "id": "open-cart.com-application-testcases-(end-to-end-validation);tc006-order-placement-with-guest-checkout;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 676400,
  "status": "passed"
});
formatter.before({
  "duration": 4981939400,
  "status": "passed"
});
formatter.scenario({
  "line": 55,
  "name": "TC006 Order Placement with guest checkout",
  "description": "",
  "id": "open-cart.com-application-testcases-(end-to-end-validation);tc006-order-placement-with-guest-checkout;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 50,
  "name": "Navigate to Cart URL",
  "keyword": "Given "
});
formatter.step({
  "line": 51,
  "name": "select a product and Add to cart",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "checkout with Guest details from given sheetname \"GuestDetails\" and rownumber 0",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "OpencartStepsTest.navigate_to_Cart_URL()"
});
formatter.result({
  "duration": 4853365400,
  "status": "passed"
});
formatter.match({
  "location": "OpencartStepsTest.select_a_laptop_and_Add_to_cart()"
});
formatter.result({
  "duration": 19097708500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "GuestDetails",
      "offset": 50
    },
    {
      "val": "0",
      "offset": 78
    }
  ],
  "location": "OpencartStepsTest.checkout_with_Guest_details_from_given_sheetname_and_rownumber(String,int)"
});
formatter.result({
  "duration": 29085543400,
  "status": "passed"
});
formatter.after({
  "duration": 45400,
  "status": "passed"
});
formatter.after({
  "duration": 2077858600,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 57,
      "value": "#/*Sangeetha */"
    }
  ],
  "line": 58,
  "name": "TC007 Order Placement with Register Account",
  "description": "",
  "id": "open-cart.com-application-testcases-(end-to-end-validation);tc007-order-placement-with-register-account",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 60,
  "name": "user enters urls",
  "keyword": "Given "
});
formatter.step({
  "line": 61,
  "name": "user mouseover to laptop and select HP LP3065",
  "keyword": "Then "
});
formatter.step({
  "line": 62,
  "name": "user changes delivery date",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "user Adds to cart and check out",
  "keyword": "Then "
});
formatter.step({
  "line": 64,
  "name": "click on register account",
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "enter manadatory fileds  \"\u003cSheetName\u003e\" and \u003cRowNumber\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 66,
  "name": "user enters delivery methods",
  "keyword": "And "
});
formatter.step({
  "line": 67,
  "name": "user confirms order and take screenshot",
  "keyword": "Then "
});
formatter.examples({
  "line": 68,
  "name": "",
  "description": "",
  "id": "open-cart.com-application-testcases-(end-to-end-validation);tc007-order-placement-with-register-account;",
  "rows": [
    {
      "cells": [
        "SheetName",
        "RowNumber"
      ],
      "line": 69,
      "id": "open-cart.com-application-testcases-(end-to-end-validation);tc007-order-placement-with-register-account;;1"
    },
    {
      "cells": [
        "PaymentReg",
        "0"
      ],
      "line": 70,
      "id": "open-cart.com-application-testcases-(end-to-end-validation);tc007-order-placement-with-register-account;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 711400,
  "status": "passed"
});
formatter.before({
  "duration": 4733797200,
  "status": "passed"
});
formatter.scenario({
  "line": 70,
  "name": "TC007 Order Placement with Register Account",
  "description": "",
  "id": "open-cart.com-application-testcases-(end-to-end-validation);tc007-order-placement-with-register-account;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 60,
  "name": "user enters urls",
  "keyword": "Given "
});
formatter.step({
  "line": 61,
  "name": "user mouseover to laptop and select HP LP3065",
  "keyword": "Then "
});
formatter.step({
  "line": 62,
  "name": "user changes delivery date",
  "keyword": "And "
});
formatter.step({
  "line": 63,
  "name": "user Adds to cart and check out",
  "keyword": "Then "
});
formatter.step({
  "line": 64,
  "name": "click on register account",
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "enter manadatory fileds  \"PaymentReg\" and 0",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 66,
  "name": "user enters delivery methods",
  "keyword": "And "
});
formatter.step({
  "line": 67,
  "name": "user confirms order and take screenshot",
  "keyword": "Then "
});
formatter.match({
  "location": "OpencartStepsTest.user_enters_urls()"
});
formatter.result({
  "duration": 4938425300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3065",
      "offset": 41
    }
  ],
  "location": "OpencartStepsTest.user_mouseover_to_laptop_and_select_HP_LP(int)"
});
formatter.result({
  "duration": 8572178500,
  "status": "passed"
});
formatter.match({
  "location": "OpencartStepsTest.user_changes_delivery_date()"
});
formatter.result({
  "duration": 2462536300,
  "status": "passed"
});
formatter.match({
  "location": "OpencartStepsTest.user_Adds_to_cart_and_check_out()"
});
formatter.result({
  "duration": 5090457000,
  "status": "passed"
});
formatter.match({
  "location": "OpencartStepsTest.click_on_register_account()"
});
formatter.result({
  "duration": 1721660600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "PaymentReg",
      "offset": 26
    },
    {
      "val": "0",
      "offset": 42
    }
  ],
  "location": "OpencartStepsTest.enter_manadatory_fileds_and(String,int)"
});
formatter.result({
  "duration": 9875266200,
  "status": "passed"
});
formatter.match({
  "location": "OpencartStepsTest.user_enters_delivery_methods()"
});
formatter.result({
  "duration": 3365536100,
  "status": "passed"
});
formatter.match({
  "location": "OpencartStepsTest.user_confirms_order_and_take_screenshot()"
});
formatter.result({
  "duration": 10664822300,
  "status": "passed"
});
formatter.after({
  "duration": 65800,
  "status": "passed"
});
formatter.after({
  "duration": 2100073500,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 72,
      "value": "#/*Vijay */"
    }
  ],
  "line": 73,
  "name": "TC008 Edit Account and lastname",
  "description": "",
  "id": "open-cart.com-application-testcases-(end-to-end-validation);tc008-edit-account-and-lastname",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 75,
  "name": "User login to url",
  "keyword": "Given "
});
formatter.step({
  "line": 76,
  "name": "User enter credentials \"\u003cSheetName\u003e\" and \"\u003cRowNumber\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 77,
  "name": "User needs to click login button",
  "keyword": "And "
});
formatter.step({
  "line": 78,
  "name": "User able edit the Existing login account",
  "keyword": "Then "
});
formatter.examples({
  "line": 79,
  "name": "",
  "description": "",
  "id": "open-cart.com-application-testcases-(end-to-end-validation);tc008-edit-account-and-lastname;",
  "rows": [
    {
      "cells": [
        "SheetName",
        "RowNumber"
      ],
      "line": 80,
      "id": "open-cart.com-application-testcases-(end-to-end-validation);tc008-edit-account-and-lastname;;1"
    },
    {
      "cells": [
        "login",
        "2"
      ],
      "line": 81,
      "id": "open-cart.com-application-testcases-(end-to-end-validation);tc008-edit-account-and-lastname;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 676500,
  "status": "passed"
});
formatter.before({
  "duration": 4400896400,
  "status": "passed"
});
formatter.scenario({
  "line": 81,
  "name": "TC008 Edit Account and lastname",
  "description": "",
  "id": "open-cart.com-application-testcases-(end-to-end-validation);tc008-edit-account-and-lastname;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 75,
  "name": "User login to url",
  "keyword": "Given "
});
formatter.step({
  "line": 76,
  "name": "User enter credentials \"login\" and \"2\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 77,
  "name": "User needs to click login button",
  "keyword": "And "
});
formatter.step({
  "line": 78,
  "name": "User able edit the Existing login account",
  "keyword": "Then "
});
formatter.match({
  "location": "OpencartStepsTest.User_login_to_url()"
});
formatter.result({
  "duration": 5080994100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "login",
      "offset": 24
    },
    {
      "val": "2",
      "offset": 36
    }
  ],
  "location": "OpencartStepsTest.user_enter_credentials_and(String,int)"
});
formatter.result({
  "duration": 4151111200,
  "status": "passed"
});
formatter.match({
  "location": "OpencartStepsTest.User_needs_to_click_login_button()"
});
formatter.result({
  "duration": 2764080100,
  "status": "passed"
});
formatter.match({
  "location": "OpencartStepsTest.user_able_edit_the_Existing_login_account()"
});
formatter.result({
  "duration": 10460463000,
  "status": "passed"
});
formatter.after({
  "duration": 31500,
  "status": "passed"
});
formatter.after({
  "duration": 3053631300,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 83,
      "value": "#/*Archana*/"
    }
  ],
  "line": 84,
  "name": "TC009 Upload file validation",
  "description": "",
  "id": "open-cart.com-application-testcases-(end-to-end-validation);tc009-upload-file-validation",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 86,
  "name": "Navigate to Cart URL",
  "keyword": "Given "
});
formatter.step({
  "line": 87,
  "name": "User click on My account and Login",
  "keyword": "Then "
});
formatter.step({
  "line": 88,
  "name": "User fill the Login form from given sheetname \"\u003cSheetName\u003e\" and rownumber \u003cRowNumber\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 89,
  "name": "Select a product from component and add to cart",
  "keyword": "Then "
});
formatter.step({
  "line": 90,
  "name": "Fill all the details and upload the file",
  "keyword": "And "
});
formatter.examples({
  "line": 91,
  "name": "",
  "description": "",
  "id": "open-cart.com-application-testcases-(end-to-end-validation);tc009-upload-file-validation;",
  "rows": [
    {
      "cells": [
        "SheetName",
        "RowNumber"
      ],
      "line": 92,
      "id": "open-cart.com-application-testcases-(end-to-end-validation);tc009-upload-file-validation;;1"
    },
    {
      "cells": [
        "login",
        "1"
      ],
      "line": 93,
      "id": "open-cart.com-application-testcases-(end-to-end-validation);tc009-upload-file-validation;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 687500,
  "status": "passed"
});
formatter.before({
  "duration": 4244571700,
  "status": "passed"
});
formatter.scenario({
  "line": 93,
  "name": "TC009 Upload file validation",
  "description": "",
  "id": "open-cart.com-application-testcases-(end-to-end-validation);tc009-upload-file-validation;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 86,
  "name": "Navigate to Cart URL",
  "keyword": "Given "
});
formatter.step({
  "line": 87,
  "name": "User click on My account and Login",
  "keyword": "Then "
});
formatter.step({
  "line": 88,
  "name": "User fill the Login form from given sheetname \"login\" and rownumber 1",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 89,
  "name": "Select a product from component and add to cart",
  "keyword": "Then "
});
formatter.step({
  "line": 90,
  "name": "Fill all the details and upload the file",
  "keyword": "And "
});
formatter.match({
  "location": "OpencartStepsTest.navigate_to_Cart_URL()"
});
formatter.result({
  "duration": 4531404800,
  "status": "passed"
});
formatter.match({
  "location": "OpencartStepsTest.user_click_on_My_account_and_Login()"
});
formatter.result({
  "duration": 4565032700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "login",
      "offset": 47
    },
    {
      "val": "1",
      "offset": 68
    }
  ],
  "location": "OpencartStepsTest.user_fill_the_Login_form_from_given_sheetname_and_rownumber(String,int)"
});
formatter.result({
  "duration": 7318634400,
  "status": "passed"
});
formatter.match({
  "location": "OpencartStepsTest.select_a_product_from_component_and_add_to_cart()"
});
formatter.result({
  "duration": 7904149000,
  "status": "passed"
});
formatter.match({
  "location": "OpencartStepsTest.fill_all_the_details_and_upload_the_file()"
});
formatter.result({
  "duration": 7300627600,
  "status": "passed"
});
formatter.after({
  "duration": 44800,
  "status": "passed"
});
formatter.after({
  "duration": 2485983100,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 96,
      "value": "#/*Sangeetha */"
    }
  ],
  "line": 97,
  "name": "TC010 Product Availabilty",
  "description": "",
  "id": "open-cart.com-application-testcases-(end-to-end-validation);tc010-product-availabilty",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 98,
  "name": "user should login to application",
  "keyword": "Given "
});
formatter.step({
  "line": 99,
  "name": "enters credentials \"\u003cSheetName\u003e\" and \u003cRowNumber\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 100,
  "name": "click on login",
  "keyword": "And "
});
formatter.step({
  "line": 101,
  "name": "user search for item and add to cart",
  "keyword": "And "
});
formatter.examples({
  "line": 102,
  "name": "",
  "description": "",
  "id": "open-cart.com-application-testcases-(end-to-end-validation);tc010-product-availabilty;",
  "rows": [
    {
      "cells": [
        "SheetName",
        "RowNumber"
      ],
      "line": 103,
      "id": "open-cart.com-application-testcases-(end-to-end-validation);tc010-product-availabilty;;1"
    },
    {
      "cells": [
        "login",
        "0"
      ],
      "line": 104,
      "id": "open-cart.com-application-testcases-(end-to-end-validation);tc010-product-availabilty;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 752700,
  "status": "passed"
});
formatter.before({
  "duration": 3924843100,
  "status": "passed"
});
formatter.scenario({
  "line": 104,
  "name": "TC010 Product Availabilty",
  "description": "",
  "id": "open-cart.com-application-testcases-(end-to-end-validation);tc010-product-availabilty;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 98,
  "name": "user should login to application",
  "keyword": "Given "
});
formatter.step({
  "line": 99,
  "name": "enters credentials \"login\" and 0",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 100,
  "name": "click on login",
  "keyword": "And "
});
formatter.step({
  "line": 101,
  "name": "user search for item and add to cart",
  "keyword": "And "
});
formatter.match({
  "location": "OpencartStepsTest.user_should_login_to_application()"
});
formatter.result({
  "duration": 4541651600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "login",
      "offset": 20
    },
    {
      "val": "0",
      "offset": 31
    }
  ],
  "location": "OpencartStepsTest.enters_credentials_and(String,int)"
});
formatter.result({
  "duration": 4974741600,
  "status": "passed"
});
formatter.match({
  "location": "OpencartStepsTest.click_on_login()"
});
formatter.result({
  "duration": 2756594700,
  "status": "passed"
});
formatter.match({
  "location": "OpencartStepsTest.user_search_for_item_and_add_to_cart()"
});
formatter.result({
  "duration": 15671077500,
  "status": "passed"
});
formatter.after({
  "duration": 42900,
  "status": "passed"
});
formatter.after({
  "duration": 1945619100,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 106,
      "value": "#/*Archana*/"
    }
  ],
  "line": 107,
  "name": "TC011 Remove Product",
  "description": "",
  "id": "open-cart.com-application-testcases-(end-to-end-validation);tc011-remove-product",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 109,
  "name": "Navigate to Cart URL",
  "keyword": "Given "
});
formatter.step({
  "line": 110,
  "name": "User click on My account and Login",
  "keyword": "Then "
});
formatter.step({
  "line": 111,
  "name": "User fill the Login form from given sheetname \"\u003cSheetName\u003e\" and rownumber \u003cRowNumber\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 112,
  "name": "User should be logged in successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 113,
  "name": "select a product and Add to cart",
  "keyword": "And "
});
formatter.step({
  "line": 114,
  "name": "View Cart and RemoveProduct",
  "keyword": "Then "
});
formatter.examples({
  "line": 115,
  "name": "",
  "description": "",
  "id": "open-cart.com-application-testcases-(end-to-end-validation);tc011-remove-product;",
  "rows": [
    {
      "cells": [
        "SheetName",
        "RowNumber"
      ],
      "line": 116,
      "id": "open-cart.com-application-testcases-(end-to-end-validation);tc011-remove-product;;1"
    },
    {
      "cells": [
        "login",
        "3"
      ],
      "line": 117,
      "id": "open-cart.com-application-testcases-(end-to-end-validation);tc011-remove-product;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 696800,
  "status": "passed"
});
formatter.before({
  "duration": 4146463600,
  "status": "passed"
});
formatter.scenario({
  "line": 117,
  "name": "TC011 Remove Product",
  "description": "",
  "id": "open-cart.com-application-testcases-(end-to-end-validation);tc011-remove-product;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 109,
  "name": "Navigate to Cart URL",
  "keyword": "Given "
});
formatter.step({
  "line": 110,
  "name": "User click on My account and Login",
  "keyword": "Then "
});
formatter.step({
  "line": 111,
  "name": "User fill the Login form from given sheetname \"login\" and rownumber 3",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 112,
  "name": "User should be logged in successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 113,
  "name": "select a product and Add to cart",
  "keyword": "And "
});
formatter.step({
  "line": 114,
  "name": "View Cart and RemoveProduct",
  "keyword": "Then "
});
formatter.match({
  "location": "OpencartStepsTest.navigate_to_Cart_URL()"
});
formatter.result({
  "duration": 6819480000,
  "status": "passed"
});
formatter.match({
  "location": "OpencartStepsTest.user_click_on_My_account_and_Login()"
});
formatter.result({
  "duration": 4409849300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "login",
      "offset": 47
    },
    {
      "val": "3",
      "offset": 68
    }
  ],
  "location": "OpencartStepsTest.user_fill_the_Login_form_from_given_sheetname_and_rownumber(String,int)"
});
formatter.result({
  "duration": 7329108200,
  "status": "passed"
});
formatter.match({
  "location": "OpencartStepsTest.user_should_be_logged_in_successfully()"
});
formatter.result({
  "duration": 24783300,
  "status": "passed"
});
formatter.match({
  "location": "OpencartStepsTest.select_a_laptop_and_Add_to_cart()"
});
formatter.result({
  "duration": 17118482000,
  "status": "passed"
});
formatter.match({
  "location": "OpencartStepsTest.view_Cart_and_RemoveProduct()"
});
formatter.result({
  "duration": 8753792500,
  "status": "passed"
});
formatter.after({
  "duration": 37000,
  "status": "passed"
});
formatter.after({
  "duration": 2067322800,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 119,
      "value": "#/*Sangeetha */"
    }
  ],
  "line": 120,
  "name": "TC012 Apply Coupon Code",
  "description": "",
  "id": "open-cart.com-application-testcases-(end-to-end-validation);tc012-apply-coupon-code",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 122,
  "name": "user should login to application",
  "keyword": "Given "
});
formatter.step({
  "line": 123,
  "name": "enters credentials \"\u003cSheetName\u003e\" and \u003cRowNumber\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 124,
  "name": "click on login",
  "keyword": "And "
});
formatter.step({
  "line": 125,
  "name": "user mouseover to laptop and select HP LP3065",
  "keyword": "Then "
});
formatter.step({
  "line": 126,
  "name": "user changes delivery date",
  "keyword": "And "
});
formatter.step({
  "line": 127,
  "name": "user Adds to cart and add coupon apply",
  "keyword": "Then "
});
formatter.examples({
  "line": 128,
  "name": "",
  "description": "",
  "id": "open-cart.com-application-testcases-(end-to-end-validation);tc012-apply-coupon-code;",
  "rows": [
    {
      "cells": [
        "SheetName",
        "RowNumber"
      ],
      "line": 129,
      "id": "open-cart.com-application-testcases-(end-to-end-validation);tc012-apply-coupon-code;;1"
    },
    {
      "cells": [
        "login",
        "0"
      ],
      "line": 130,
      "id": "open-cart.com-application-testcases-(end-to-end-validation);tc012-apply-coupon-code;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 717500,
  "status": "passed"
});
formatter.before({
  "duration": 4482512200,
  "status": "passed"
});
formatter.scenario({
  "line": 130,
  "name": "TC012 Apply Coupon Code",
  "description": "",
  "id": "open-cart.com-application-testcases-(end-to-end-validation);tc012-apply-coupon-code;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 122,
  "name": "user should login to application",
  "keyword": "Given "
});
formatter.step({
  "line": 123,
  "name": "enters credentials \"login\" and 0",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 124,
  "name": "click on login",
  "keyword": "And "
});
formatter.step({
  "line": 125,
  "name": "user mouseover to laptop and select HP LP3065",
  "keyword": "Then "
});
formatter.step({
  "line": 126,
  "name": "user changes delivery date",
  "keyword": "And "
});
formatter.step({
  "line": 127,
  "name": "user Adds to cart and add coupon apply",
  "keyword": "Then "
});
formatter.match({
  "location": "OpencartStepsTest.user_should_login_to_application()"
});
formatter.result({
  "duration": 6066988100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "login",
      "offset": 20
    },
    {
      "val": "0",
      "offset": 31
    }
  ],
  "location": "OpencartStepsTest.enters_credentials_and(String,int)"
});
formatter.result({
  "duration": 4893699600,
  "status": "passed"
});
formatter.match({
  "location": "OpencartStepsTest.click_on_login()"
});
formatter.result({
  "duration": 2900899300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3065",
      "offset": 41
    }
  ],
  "location": "OpencartStepsTest.user_mouseover_to_laptop_and_select_HP_LP(int)"
});
formatter.result({
  "duration": 9001063700,
  "status": "passed"
});
formatter.match({
  "location": "OpencartStepsTest.user_changes_delivery_date()"
});
formatter.result({
  "duration": 1997796500,
  "status": "passed"
});
formatter.match({
  "location": "OpencartStepsTest.user_Adds_to_cart_and_add_coupon_apply()"
});
formatter.result({
  "duration": 8849864400,
  "status": "passed"
});
formatter.after({
  "duration": 48000,
  "status": "passed"
});
formatter.after({
  "duration": 2933037500,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 132,
      "value": "#/*Vijay */"
    }
  ],
  "line": 133,
  "name": "TC013 Coupon code",
  "description": "",
  "id": "open-cart.com-application-testcases-(end-to-end-validation);tc013-coupon-code",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 135,
  "name": "User login to url",
  "keyword": "Given "
});
formatter.step({
  "line": 136,
  "name": "User enter credentials \"\u003cSheetName\u003e\" and \"\u003cRowNumber\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 137,
  "name": "User needs to click login button",
  "keyword": "And "
});
formatter.step({
  "line": 138,
  "name": "User apply empty coupon code",
  "keyword": "Then "
});
formatter.examples({
  "line": 139,
  "name": "",
  "description": "",
  "id": "open-cart.com-application-testcases-(end-to-end-validation);tc013-coupon-code;",
  "rows": [
    {
      "cells": [
        "SheetName",
        "RowNumber"
      ],
      "line": 140,
      "id": "open-cart.com-application-testcases-(end-to-end-validation);tc013-coupon-code;;1"
    },
    {
      "cells": [
        "login",
        "2"
      ],
      "line": 141,
      "id": "open-cart.com-application-testcases-(end-to-end-validation);tc013-coupon-code;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 630400,
  "status": "passed"
});
formatter.before({
  "duration": 4300591500,
  "status": "passed"
});
formatter.scenario({
  "line": 141,
  "name": "TC013 Coupon code",
  "description": "",
  "id": "open-cart.com-application-testcases-(end-to-end-validation);tc013-coupon-code;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 135,
  "name": "User login to url",
  "keyword": "Given "
});
formatter.step({
  "line": 136,
  "name": "User enter credentials \"login\" and \"2\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 137,
  "name": "User needs to click login button",
  "keyword": "And "
});
formatter.step({
  "line": 138,
  "name": "User apply empty coupon code",
  "keyword": "Then "
});
formatter.match({
  "location": "OpencartStepsTest.User_login_to_url()"
});
formatter.result({
  "duration": 6212023400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "login",
      "offset": 24
    },
    {
      "val": "2",
      "offset": 36
    }
  ],
  "location": "OpencartStepsTest.user_enter_credentials_and(String,int)"
});
formatter.result({
  "duration": 3647026000,
  "status": "passed"
});
formatter.match({
  "location": "OpencartStepsTest.User_needs_to_click_login_button()"
});
formatter.result({
  "duration": 2734820300,
  "status": "passed"
});
formatter.match({
  "location": "OpencartStepsTest.user_apply_empty_coupon_code()"
});
formatter.result({
  "duration": 8791301100,
  "status": "passed"
});
formatter.after({
  "duration": 662800,
  "status": "passed"
});
formatter.after({
  "duration": 4431271700,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 143,
      "value": "#/*Sangeetha */"
    }
  ],
  "line": 144,
  "name": "TC014 Estimate Shipping \u0026 Taxes",
  "description": "",
  "id": "open-cart.com-application-testcases-(end-to-end-validation);tc014-estimate-shipping-\u0026-taxes",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 146,
  "name": "user should login to application",
  "keyword": "Given "
});
formatter.step({
  "line": 147,
  "name": "enters credentials \"\u003cSheetName\u003e\" and \u003cRowNumber\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 148,
  "name": "click on login",
  "keyword": "And "
});
formatter.step({
  "line": 149,
  "name": "user mouseover to laptop and select HP LP3065",
  "keyword": "Then "
});
formatter.step({
  "line": 150,
  "name": "user Adds to cart",
  "keyword": "Then "
});
formatter.step({
  "line": 151,
  "name": "user going to shopping cart and estimate taxes",
  "keyword": "Then "
});
formatter.step({
  "line": 152,
  "name": "enter details and click quote",
  "keyword": "And "
});
formatter.step({
  "line": 153,
  "name": "flat shipping and scrrenshot",
  "keyword": "Then "
});
formatter.step({
  "line": 154,
  "name": "billing details and continue",
  "keyword": "And "
});
formatter.step({
  "line": 155,
  "name": "return to home page",
  "keyword": "Then "
});
formatter.examples({
  "line": 156,
  "name": "",
  "description": "",
  "id": "open-cart.com-application-testcases-(end-to-end-validation);tc014-estimate-shipping-\u0026-taxes;",
  "rows": [
    {
      "cells": [
        "SheetName",
        "RowNumber"
      ],
      "line": 157,
      "id": "open-cart.com-application-testcases-(end-to-end-validation);tc014-estimate-shipping-\u0026-taxes;;1"
    },
    {
      "cells": [
        "login",
        "4"
      ],
      "line": 158,
      "id": "open-cart.com-application-testcases-(end-to-end-validation);tc014-estimate-shipping-\u0026-taxes;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 475700,
  "status": "passed"
});
formatter.before({
  "duration": 5028344100,
  "status": "passed"
});
formatter.scenario({
  "line": 158,
  "name": "TC014 Estimate Shipping \u0026 Taxes",
  "description": "",
  "id": "open-cart.com-application-testcases-(end-to-end-validation);tc014-estimate-shipping-\u0026-taxes;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 146,
  "name": "user should login to application",
  "keyword": "Given "
});
formatter.step({
  "line": 147,
  "name": "enters credentials \"login\" and 4",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 148,
  "name": "click on login",
  "keyword": "And "
});
formatter.step({
  "line": 149,
  "name": "user mouseover to laptop and select HP LP3065",
  "keyword": "Then "
});
formatter.step({
  "line": 150,
  "name": "user Adds to cart",
  "keyword": "Then "
});
formatter.step({
  "line": 151,
  "name": "user going to shopping cart and estimate taxes",
  "keyword": "Then "
});
formatter.step({
  "line": 152,
  "name": "enter details and click quote",
  "keyword": "And "
});
formatter.step({
  "line": 153,
  "name": "flat shipping and scrrenshot",
  "keyword": "Then "
});
formatter.step({
  "line": 154,
  "name": "billing details and continue",
  "keyword": "And "
});
formatter.step({
  "line": 155,
  "name": "return to home page",
  "keyword": "Then "
});
formatter.match({
  "location": "OpencartStepsTest.user_should_login_to_application()"
});
formatter.result({
  "duration": 4669619600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "login",
      "offset": 20
    },
    {
      "val": "4",
      "offset": 31
    }
  ],
  "location": "OpencartStepsTest.enters_credentials_and(String,int)"
});
formatter.result({
  "duration": 3914222300,
  "status": "passed"
});
formatter.match({
  "location": "OpencartStepsTest.click_on_login()"
});
formatter.result({
  "duration": 2735732900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3065",
      "offset": 41
    }
  ],
  "location": "OpencartStepsTest.user_mouseover_to_laptop_and_select_HP_LP(int)"
});
formatter.result({
  "duration": 18610577400,
  "status": "passed"
});
formatter.match({
  "location": "OpencartStepsTest.user_Adds_to_cart()"
});
formatter.result({
  "duration": 2726225600,
  "status": "passed"
});
formatter.match({
  "location": "OpencartStepsTest.user_going_to_shopping_cart_and_estimate_taxes()"
});
formatter.result({
  "duration": 2457599100,
  "status": "passed"
});
formatter.match({
  "location": "OpencartStepsTest.enter_details_and_click_quote()"
});
formatter.result({
  "duration": 1884052200,
  "status": "passed"
});
formatter.match({
  "location": "OpencartStepsTest.flat_shipping_and_scrrenshot()"
});
formatter.result({
  "duration": 6462980400,
  "status": "passed"
});
formatter.match({
  "location": "OpencartStepsTest.billing_details_and_continue()"
});
formatter.result({
  "duration": 14322551500,
  "status": "passed"
});
formatter.match({
  "location": "OpencartStepsTest.return_to_home_page()"
});
formatter.result({
  "duration": 3816910800,
  "status": "passed"
});
formatter.after({
  "duration": 44100,
  "status": "passed"
});
formatter.after({
  "duration": 1869914900,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 160,
      "value": "#/*Archana*/"
    }
  ],
  "line": 161,
  "name": "TC015 Wish list",
  "description": "",
  "id": "open-cart.com-application-testcases-(end-to-end-validation);tc015-wish-list",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 163,
  "name": "Navigate to Cart URL",
  "keyword": "Given "
});
formatter.step({
  "line": 164,
  "name": "User click on My account and Login",
  "keyword": "Then "
});
formatter.step({
  "line": 165,
  "name": "User fill the Login form from given sheetname \"\u003cSheetName\u003e\" and rownumber \u003cRowNumber\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 166,
  "name": "Select a product and add to wishlist",
  "keyword": "Then "
});
formatter.examples({
  "line": 167,
  "name": "",
  "description": "",
  "id": "open-cart.com-application-testcases-(end-to-end-validation);tc015-wish-list;",
  "rows": [
    {
      "cells": [
        "SheetName",
        "RowNumber"
      ],
      "line": 168,
      "id": "open-cart.com-application-testcases-(end-to-end-validation);tc015-wish-list;;1"
    },
    {
      "cells": [
        "login",
        "1"
      ],
      "line": 169,
      "id": "open-cart.com-application-testcases-(end-to-end-validation);tc015-wish-list;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 894100,
  "status": "passed"
});
formatter.before({
  "duration": 4471432400,
  "status": "passed"
});
formatter.scenario({
  "line": 169,
  "name": "TC015 Wish list",
  "description": "",
  "id": "open-cart.com-application-testcases-(end-to-end-validation);tc015-wish-list;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 163,
  "name": "Navigate to Cart URL",
  "keyword": "Given "
});
formatter.step({
  "line": 164,
  "name": "User click on My account and Login",
  "keyword": "Then "
});
formatter.step({
  "line": 165,
  "name": "User fill the Login form from given sheetname \"login\" and rownumber 1",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 166,
  "name": "Select a product and add to wishlist",
  "keyword": "Then "
});
formatter.match({
  "location": "OpencartStepsTest.navigate_to_Cart_URL()"
});
formatter.result({
  "duration": 6700451400,
  "status": "passed"
});
formatter.match({
  "location": "OpencartStepsTest.user_click_on_My_account_and_Login()"
});
formatter.result({
  "duration": 4348473600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "login",
      "offset": 47
    },
    {
      "val": "1",
      "offset": 68
    }
  ],
  "location": "OpencartStepsTest.user_fill_the_Login_form_from_given_sheetname_and_rownumber(String,int)"
});
formatter.result({
  "duration": 6944154500,
  "status": "passed"
});
formatter.match({
  "location": "OpencartStepsTest.select_a_product_and_add_to_wishlist()"
});
formatter.result({
  "duration": 19905991700,
  "status": "passed"
});
formatter.after({
  "duration": 38700,
  "status": "passed"
});
formatter.after({
  "duration": 2375095400,
  "status": "passed"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 171,
      "value": "#/*Archana*/"
    }
  ],
  "line": 172,
  "name": "TC016 Order history/Product return",
  "description": "",
  "id": "open-cart.com-application-testcases-(end-to-end-validation);tc016-order-history/product-return",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 174,
  "name": "Navigate to Cart URL",
  "keyword": "Given "
});
formatter.step({
  "line": 175,
  "name": "User click on My account and Login",
  "keyword": "Then "
});
formatter.step({
  "line": 176,
  "name": "User fill the Login form from given sheetname \"\u003cSheetName\u003e\" and rownumber \u003cRowNumber\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 177,
  "name": "User should be logged in successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 178,
  "name": "Navigate to order History and return the product",
  "keyword": "And "
});
formatter.examples({
  "line": 179,
  "name": "",
  "description": "",
  "id": "open-cart.com-application-testcases-(end-to-end-validation);tc016-order-history/product-return;",
  "rows": [
    {
      "cells": [
        "SheetName",
        "RowNumber"
      ],
      "line": 180,
      "id": "open-cart.com-application-testcases-(end-to-end-validation);tc016-order-history/product-return;;1"
    },
    {
      "cells": [
        "login",
        "1"
      ],
      "line": 181,
      "id": "open-cart.com-application-testcases-(end-to-end-validation);tc016-order-history/product-return;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 638700,
  "status": "passed"
});
formatter.before({
  "duration": 4421919600,
  "status": "passed"
});
formatter.scenario({
  "line": 181,
  "name": "TC016 Order history/Product return",
  "description": "",
  "id": "open-cart.com-application-testcases-(end-to-end-validation);tc016-order-history/product-return;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 174,
  "name": "Navigate to Cart URL",
  "keyword": "Given "
});
formatter.step({
  "line": 175,
  "name": "User click on My account and Login",
  "keyword": "Then "
});
formatter.step({
  "line": 176,
  "name": "User fill the Login form from given sheetname \"login\" and rownumber 1",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 177,
  "name": "User should be logged in successfully",
  "keyword": "Then "
});
formatter.step({
  "line": 178,
  "name": "Navigate to order History and return the product",
  "keyword": "And "
});
formatter.match({
  "location": "OpencartStepsTest.navigate_to_Cart_URL()"
});
formatter.result({
  "duration": 6451769900,
  "status": "passed"
});
formatter.match({
  "location": "OpencartStepsTest.user_click_on_My_account_and_Login()"
});
formatter.result({
  "duration": 4470771300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "login",
      "offset": 47
    },
    {
      "val": "1",
      "offset": 68
    }
  ],
  "location": "OpencartStepsTest.user_fill_the_Login_form_from_given_sheetname_and_rownumber(String,int)"
});
formatter.result({
  "duration": 7320130700,
  "status": "passed"
});
formatter.match({
  "location": "OpencartStepsTest.user_should_be_logged_in_successfully()"
});
formatter.result({
  "duration": 11953500,
  "status": "passed"
});
formatter.match({
  "location": "OpencartStepsTest.navigate_to_order_History_and_return_the_product()"
});
formatter.result({
  "duration": 15141412000,
  "status": "passed"
});
formatter.after({
  "duration": 30200,
  "status": "passed"
});
formatter.after({
  "duration": 2239830400,
  "status": "passed"
});
});
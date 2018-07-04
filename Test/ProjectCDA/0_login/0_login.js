describe("User login panel", function() {
	it("User login to Requisition module", function() {
		browser.waitForAngularEnabled(false);
		
		browser.get("https://login.jomakhata.com/login/index/aHR0cHM6Ly93d3cuam9tYWtoYXRhLmNvbS8%3D");
		
		element(by.id("Username")).sendKeys("fahadbillah@yahoo.com");
		
		element(by.id("password")).sendKeys("fahadbillah@yahoo.com");
		
		element(by.id("submit_login")).click();

		element(by.css('[type="button"]')).click();
		
		
	});
});
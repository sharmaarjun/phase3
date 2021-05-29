package com.restassured;

import static org.junit.Assert.*;

import org.apache.log4j.BasicConfigurator;
import org.apache.log4j.Level;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.junit.Before;
import org.junit.Test;
import static org.hamcrest.Matchers.equalTo;
import io.restassured.RestAssured;
import io.restassured.response.ValidatableResponse;
import io.restassured.specification.RequestSpecification;

public class Phase3 {
	
	RequestSpecification request =null;
	private static Logger logger = LogManager.getLogger(Phase3.class.getName());

	@Before
	public void urisetUp() throws Exception {
		RestAssured.baseURI="https://reqres.in";
		request = RestAssured.given();
		BasicConfigurator.configure();
		logger.setLevel(Level.INFO);
	}

	@Test
	public void getApi() {
		logger.info(request.get("/api/users/2").getBody().asPrettyString());
	}
	
	@Test
	public void getApiWithParams() {
		String responseGet = request
								.queryParam("page", 2)
								.get("/api/users/")
								.getBody()
								.asPrettyString();
		logger.info("\n \n ----- --- ------ GET API WITH PARAMS ----- --- ------ \n \n");
		logger.info(responseGet);
	}
	
	@Test
	public void postApi() {
		String data = "{\r\n" + 
				"    \"name\": \"morpheus\",\r\n" + 
				"    \"job\": \"leader\"\r\n" + 
				"}";
		ValidatableResponse responsePost = request.given()
								.body(data)
								.when()
								.post("/api/users/")
								.then().log().body()
								.and().assertThat().body("id", equalTo("477"));
								
								
		logger.info("\n \n ----- --- ------ POST API ----- --- ------ \n \n");
		logger.info(responsePost);
								
								
	}

}

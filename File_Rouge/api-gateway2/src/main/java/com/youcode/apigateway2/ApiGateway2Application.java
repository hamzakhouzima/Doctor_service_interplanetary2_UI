package com.youcode.apigateway2;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.security.config.annotation.web.reactive.EnableWebFluxSecurity;

//@SpringBootApplication
@SpringBootApplication(exclude = { DataSourceAutoConfiguration.class })
//@EnableWebFluxSecurity
public class ApiGateway2Application {

	public static void main(String[] args) {
		SpringApplication.run(ApiGateway2Application.class, args);
	}

}

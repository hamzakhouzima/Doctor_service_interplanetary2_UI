package com.youcode.apigateway2.config;


import io.jsonwebtoken.security.Keys;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpMethod;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.reactive.EnableWebFluxSecurity;
import org.springframework.security.config.web.server.ServerHttpSecurity;
import org.springframework.security.oauth2.jwt.NimbusReactiveJwtDecoder;
import org.springframework.security.oauth2.jwt.ReactiveJwtDecoder;
import org.springframework.security.web.server.SecurityWebFilterChain;

import javax.crypto.SecretKey;
//
@Configuration
@EnableWebFluxSecurity
public class SecurityConfig {

    @Bean
    public SecurityWebFilterChain springSecurityFilterChain(ServerHttpSecurity http) {

        http.cors()
                .and()
                .authorizeExchange(exchange -> exchange
                .pathMatchers("/eureka/**").permitAll()
                        //this line is added to resolve the cors issue (mo3dilla dyal lcors)
                        .pathMatchers(HttpMethod.OPTIONS, "/api/interplanetary2/**").permitAll() // allow OPTIONS for this endpoint
                        .anyExchange().authenticated())
// allow all requests to /eureka/**
//                .anyExchange().authenticated())
//                .csrf(AbstractMethodConfigurer::disable)
        .oauth2ResourceServer(ServerHttpSecurity.OAuth2ResourceServerSpec::jwt);

        return http.build();
    }
}


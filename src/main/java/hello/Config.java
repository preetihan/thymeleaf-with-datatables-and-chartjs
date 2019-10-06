package hello;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
@EnableWebMvc
public class Config implements WebMvcConfigurer {

    @Override
    public void addResourceHandlers(ResourceHandlerRegistry registry) {

        registry.addResourceHandler(
                "/webjars/**",
                "/images/**",
                "/static/css/**",
                "/fonts/**",
                "/icon/**",
                "/static/javascript/**",
                "/static/DataTables/**")
                .addResourceLocations(
                        "classpath:/META-INF/resources/webjars/",
                        "classpath:/META-INF/resources/**",
                        "classpath:/static/images/",
                        "classpath:/static/css/",
                        "classpath:/static/fonts/",
                        "classpath:/static/icon/",
                        "classpath:/static/javascript/",
                        "classpath:/static/DataTables/");


    }
}
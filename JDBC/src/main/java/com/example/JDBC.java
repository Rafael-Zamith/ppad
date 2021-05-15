package com.example;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import com.example.Resources.avaliacaoResources;
import io.dropwizard.Application;
import io.dropwizard.Configuration;
import io.dropwizard.db.DataSourceFactory;
import io.dropwizard.jdbi3.JdbiFactory;
import io.dropwizard.migrations.MigrationsBundle;
import io.dropwizard.setup.Bootstrap;
import io.dropwizard.setup.Environment;
import org.eclipse.jetty.servlets.CrossOriginFilter;
import org.jdbi.v3.core.Jdbi;

import javax.servlet.DispatcherType;
import javax.servlet.FilterRegistration;

import com.example.DAO.loginDAO;
import com.example.DAO.avaliacDAO;
import com.example.Resources.loginResources;

import java.util.EnumSet;


public class JDBC extends Application <LoginServiceConfiguration>{

	public static void main(String [] args) throws SQLException{

	try{
		(new JDBC()).run(args);
	}
	catch (Exception ex){
		ex.printStackTrace();
	}
}

public String getName(){
	return "Dataservice";
}

public void initialize (final Bootstrap<LoginServiceConfiguration> bootstrap){
	bootstrap.addBundle(new MigrationsBundle<LoginServiceConfiguration>() {
		@Override
		public void run(LoginServiceConfiguration productServiceConfiguration, Environment environment) throws Exception {
		}

		@Override
		public DataSourceFactory getDataSourceFactory(LoginServiceConfiguration configuration) {
			return configuration.getDataSourceFactory();
		}

		@Override
		public String name() {
			return "db";
		}
	});
}

  @Override
  public void run(final LoginServiceConfiguration configuration, final Environment environment){
	  final JdbiFactory factory = new JdbiFactory();
	  final Jdbi jdbi = factory.build(environment, configuration.getDataSourceFactory(), "db");
	  loginDAO loginDAO = jdbi.onDemand(loginDAO.class);
	  avaliacDAO avaliacDAO = jdbi.onDemand(avaliacDAO.class);


	  loginResources loginResources = new loginResources(loginDAO);
	  avaliacaoResources avaliacaoResources = new avaliacaoResources(avaliacDAO);
	  environment.jersey().register(loginResources);
	  environment.jersey().register(avaliacaoResources);

	  // Enable CORS headers
	  final FilterRegistration.Dynamic cors =
			  environment.servlets().addFilter("CORS", CrossOriginFilter.class);

	  // Configure CORS parameters
	  cors.setInitParameter("allowedOrigins", "*");
	  cors.setInitParameter("allowedHeaders", "X-Requested-With,Content-Type,Accept,Origin");
	  cors.setInitParameter("allowedMethods", "OPTIONS,GET,PUT,POST,DELETE,HEAD");

	  // Add URL mapping
	  cors.addMappingForUrlPatterns(EnumSet.allOf(DispatcherType.class), true, "/*");
  }
}
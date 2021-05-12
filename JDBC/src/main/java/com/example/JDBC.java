package com.example;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;


public class JDBC {
	public static void main(String [] args) throws SQLException{
		String url = "jdbc:mysql://nasana.duckdns.org:3306/prod";//localhost mysql
		String username = "prod";//Usuario
		String password = "wC5]BXB83l";//Senha
		String query = "SELECT"; //comando mysql
	
	try{
		Class.forName("com.mysql.cj.jdbc.Driver");//checar o diver do conector
	}catch (ClassNotFoundException e) {
		e.printStackTrace();
	}
	
	try {
		Connection con = DriverManager.getConnection(url,username,password);
		Statement statement = con.createStatement();
		ResultSet result = statement.executeQuery(query);
	}
	catch (SQLException e){
		e.printStackTrace();
	}
  }
}
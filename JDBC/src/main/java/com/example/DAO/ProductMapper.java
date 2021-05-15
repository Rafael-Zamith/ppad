package com.example.DAO;

import org.jdbi.v3.core.mapper.RowMapper;
import org.jdbi.v3.core.statement.StatementContext;

import java.sql.ResultSet;
import java.sql.SQLException;

import com.example.Classes.login;

public class ProductMapper implements RowMapper <login> {
    public login map(ResultSet rs, StatementContext ctx) throws SQLException {
        return new login(
                rs.getString("username"),
                rs.getString("senha")
        );
    }
}

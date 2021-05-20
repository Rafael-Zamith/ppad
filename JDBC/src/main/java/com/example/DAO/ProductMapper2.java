package com.example.DAO;

import com.example.Classes.item;
import org.jdbi.v3.core.mapper.RowMapper;
import org.jdbi.v3.core.statement.StatementContext;

import java.sql.ResultSet;
import java.sql.SQLException;

public class ProductMapper2 implements RowMapper <item> {
    public item map(ResultSet rs, StatementContext ctx) throws SQLException {
        return new item(
                rs.getLong("id_item"),
                rs.getString("titulo"),
                rs.getString("pais"),
                rs.getInt("ano")
        );
    }
}

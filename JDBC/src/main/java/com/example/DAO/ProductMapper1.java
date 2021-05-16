package com.example.DAO;

import com.example.Classes.avaliacao;
import org.jdbi.v3.core.mapper.RowMapper;
import org.jdbi.v3.core.statement.StatementContext;

import java.sql.ResultSet;
import java.sql.SQLException;

public class ProductMapper1 implements RowMapper <avaliacao> {
    public avaliacao map(ResultSet rs, StatementContext ctx) throws SQLException {
        return new avaliacao(
                rs.getLong("id_avaliacao"),
                rs.getString("coment_author"),
                rs.getString("comentarios"),
                rs.getInt("curtidas"),
                rs.getLong("id_item")
        );
    }
}

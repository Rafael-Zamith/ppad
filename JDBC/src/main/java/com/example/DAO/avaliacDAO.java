package com.example.DAO;

import org.jdbi.v3.sqlobject.config.RegisterBeanMapper;
import org.jdbi.v3.sqlobject.config.RegisterRowMapper;
import org.jdbi.v3.sqlobject.customizer.Bind;
import org.jdbi.v3.sqlobject.customizer.BindBean;
import org.jdbi.v3.sqlobject.statement.GetGeneratedKeys;
import org.jdbi.v3.sqlobject.statement.SqlQuery;
import org.jdbi.v3.sqlobject.statement.SqlUpdate;
import java.util.List;

import com.example.Classes.avaliacao;

@RegisterRowMapper(ProductMapper1.class)
public interface avaliacDAO {
    //READ
    @SqlQuery("select * from prod.avaliacao")
    List<avaliacao> getAllAvaliacoes();

    //READ
    @SqlQuery("select * from prod.avaliacao where id = :id ")
    avaliacao findById(@Bind("id_avaliacao")int id_avalicao);

    //CREATE
    @SqlQuery("insert into prod.avaliacao (id_avaliacao, coment_author, comentarios, curtidas) values (:id_avaliacao, :coment_author, :comentarios, :curtidas")
    @GetGeneratedKeys
    long insert (@BindBean avaliacao avaliacao);
}
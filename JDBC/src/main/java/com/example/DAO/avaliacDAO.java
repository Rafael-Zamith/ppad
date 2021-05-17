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
    @SqlQuery("select * from prod.avaliacao where id_avaliacao = :id_avaliacao ")
    avaliacao findByAvaliacaoId(@Bind("id_avaliacao")long id_avaliacao);

    //CREATE
    //O drop wizard ta reclamando que ele nao da results mas ta funcionando isso que importa.
    @SqlQuery("insert into prod.avaliacao (coment_author, comentarios, curtidas, id_item) values (:coment_author, :comentarios, :curtidas, :id_item)")
    @GetGeneratedKeys
    long insert (@BindBean avaliacao avaliacao);
}
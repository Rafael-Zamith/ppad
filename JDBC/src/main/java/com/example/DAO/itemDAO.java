package com.example.DAO;

import com.example.Classes.avaliacao;
import com.example.Classes.item;
import com.example.DAO.ProductMapper2;
import org.jdbi.v3.sqlobject.config.RegisterRowMapper;
import org.jdbi.v3.sqlobject.customizer.Bind;
import org.jdbi.v3.sqlobject.customizer.BindBean;
import org.jdbi.v3.sqlobject.statement.GetGeneratedKeys;
import org.jdbi.v3.sqlobject.statement.SqlQuery;

import java.util.List;

@RegisterRowMapper(ProductMapper2.class)
public interface itemDAO {
    //READ
    @SqlQuery("select * from prod.item")
    List<item> getAllitens();

    //READ
    @SqlQuery("select * from prod.item where id_item = :id_item ")
    item findByItemId(@Bind("id_item")long id_item);

    //CREATE
    //O drop wizard ta reclamando que ele nao da results mas ta funcionando isso que importa.
    @SqlQuery("insert into prod.item (id_item, titulo, ano, pais) values (:id_item, :titulo, :ano, :pais)")
    @GetGeneratedKeys
    long insert (@BindBean item item);
}
package com.example.DAO;

import com.example.Classes.avaliacao;
import org.jdbi.v3.sqlobject.config.RegisterBeanMapper;
import org.jdbi.v3.sqlobject.config.RegisterRowMapper;
import org.jdbi.v3.sqlobject.customizer.Bind;
import org.jdbi.v3.sqlobject.customizer.BindBean;
import org.jdbi.v3.sqlobject.statement.GetGeneratedKeys;
import org.jdbi.v3.sqlobject.statement.SqlQuery;
import org.jdbi.v3.sqlobject.statement.SqlUpdate;
import java.util.List;

import com.example.Classes.login;

@RegisterRowMapper(ProductMapper.class)
public interface loginDAO {
    //READ
    @SqlQuery("select * from prod.login")
    List<login> getAllLogins();

    //READ
    @SqlQuery("select * from prod.login where username = :username ")
    login findByLoginId(@Bind("username")String username);
}

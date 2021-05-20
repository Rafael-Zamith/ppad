package com.example.Resources;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import com.example.Classes.avaliacao;
import com.example.DAO.avaliacDAO;

import java.util.List;

@Path("avaliacao")
@Produces(MediaType.APPLICATION_JSON)
public class avaliacaoResources {
    avaliacDAO avaliacDAO;

    public avaliacaoResources(avaliacDAO avaliacDAO){
        this.avaliacDAO = avaliacDAO;
    }

    @GET
    public Response getAvaliacaoIs(){
        List<avaliacao> allAvaliacao = avaliacDAO.getAllAvaliacoes();

        return Response.ok(allAvaliacao).build();
    }

    @GET
    @Path("/{id_avaliacao}")
    public Response getAvaliacaoAre(@PathParam("id_avaliacao")long id_avaliacao){
        avaliacao avaliacaoid = avaliacDAO.findByAvaliacaoId(id_avaliacao);

        if(avaliacaoid == null){

        }

        return Response.ok(avaliacaoid).build();
    }

    @POST
    public Response createAvaliacao (avaliacao avaliacao){
        if(avaliacao == null){
            throw new BadRequestException("Dados faltando");
        }

        long id_avaliacao = avaliacDAO.insert(avaliacao);
        avaliacao = avaliacDAO.findByAvaliacaoId(id_avaliacao);

        if(avaliacao == null){
            throw new WebApplicationException("Problem creating Data");
        }

        return Response.ok(avaliacao).build();
    }
}
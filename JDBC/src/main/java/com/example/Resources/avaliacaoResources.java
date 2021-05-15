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
    @Path("/{id}")
    public Response getAvaliacaoAre(@PathParam("id_avaliacao")int id_avaliacao){
        avaliacao avaliacao = avaliacDAO.findById(id_avaliacao);

        if(avaliacao == null){
            createAvaliacao(avaliacao)
        }
    }

    @POST
    public Response createAvaliacao (avaliacao avaliacao){
        int id_avaliacao = avaliacDAO.
    }
}
package com.example.Resources;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import com.example.Classes.item;
import com.example.DAO.itemDAO;

import java.util.List;

@Path("item")
@Produces(MediaType.APPLICATION_JSON)
public class itemResources {
    itemDAO itemDAO;

    public itemResources(itemDAO itemDAO){
        this.itemDAO = itemDAO;
    }

    @GET
    public Response getAvaliacaoIs(){
        List<item> allItens = itemDAO.getAllitens();

        return Response.ok(allItens).build();
    }

    @GET
    @Path("/{id_item}")
    public Response getItemAre(@PathParam("id_item")long id_item, item item){
        item itemid = itemDAO.findByItemId(id_item);

        if(itemid == null){
            long id_item1 = itemDAO.insert(item);
            item = itemDAO.findByItemId(id_item1);

            createItem(item);
            return Response.ok(item).build();
        }

        return Response.ok(itemid).build();
    }

    @POST
    public Response createItem (item item){
        if(item == null){
            throw new BadRequestException("Dados faltando");
        }

        long id_item = itemDAO.insert(item);
        item = itemDAO.findByItemId(id_item);

        if(item == null){
            throw new WebApplicationException("Problem creating Data");
        }

        return Response.ok(item).build();
    }
}
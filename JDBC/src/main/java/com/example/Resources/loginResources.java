package com.example.Resources;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import com.example.Classes.login;
import com.example.DAO.loginDAO;


import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import java.util.List;

@Path("login")
@Produces(MediaType.APPLICATION_JSON)
public class loginResources {
    loginDAO loginDAO;

    public loginResources(loginDAO loginDAO){
        this.loginDAO = loginDAO;
    }

    @GET
    public Response getloginIs(){
        List<login> alllogin = loginDAO.getAllLogins();

        return Response.ok(alllogin).build();
    }

    @GET
    @Path("/{username}")
    public Response getLoginAre(@PathParam("username")String username){
        login login = loginDAO.findByLoginId(username);

        if(login == null){
            throw new WebApplicationException("This Login does not exist", Response.Status.NOT_FOUND);
        }

        return Response.ok(login).build();
    }
}
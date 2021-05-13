package com.example.Resources;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import com.example.Classes.login;
import com.example.DAO.loginDAO;

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
        List<login> alllogin = loginDAO.getAllUsername();

        return Response.ok(alllogin).build();
    }
}
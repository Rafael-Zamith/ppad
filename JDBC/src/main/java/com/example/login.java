package com.example;

public class login {
    private String username;
    private String senha;

    public login(){};

    public login(String username, String senha){
        this.username = username;
        this.senha = senha;
    }

    public String getUsername(){
        return username;
    }

    public String getSenha(){
        return senha;
    }
}

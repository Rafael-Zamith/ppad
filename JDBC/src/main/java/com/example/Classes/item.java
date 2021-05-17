package com.example.Classes;

public class item {
    private long id_item;
    private String titulo;
    private String pais;
    private int ano;
    private avaliacao avaliacao;

    public item(){}

    public item (long id_item,String titulo, String pais, int ano){
        this.id_item = id_item;
        this.titulo = titulo;
        this.pais = pais;
        this.ano = ano;
    }

    public long getId_item() {
        return id_item;
    }

    public String getTitulo() {
        return titulo;
    }

    public String getPais() {
        return pais;
    }

    public int getAno() {
        return ano;
    }
}

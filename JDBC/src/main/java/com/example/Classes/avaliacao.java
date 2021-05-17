package com.example.Classes;

public class avaliacao {
    private long id_avaliacao;
    private String coment_author;
    private String comentarios;
    private int curtidas;
    private long id_item;

    public avaliacao(){};

    public avaliacao(String coment_author, String comentarios, int curtidas, long id_item){
        this.coment_author = coment_author;
        this.comentarios = comentarios;
        this.curtidas = curtidas;
        this.id_item = id_item;
    }

    public long getId_avaliacao() {
        return id_avaliacao;
    }

    public String getComent_author() {
        return coment_author;
    }

    public String getComentarios() {
        return comentarios;
    }

    public int getCurtidas() {
        return curtidas;
    }

    public long getId_item() {
        return id_item;
    }
}

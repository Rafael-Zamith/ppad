package com.example.Classes;

public class avaliacao {
    private int id_avaliacao;
    private String coment_author;
    private String comentarios;
    private int curtidas;

    public avaliacao(){};

    public avaliacao(int id_avaliacao, String coment_author, String comentarios, int curtidas){
        this.id_avaliacao = id_avaliacao;
        this.coment_author = coment_author;
        this.comentarios = comentarios;
        this.curtidas = curtidas;
    }

    public int getId_avaliacao() {
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
}

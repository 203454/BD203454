package com.example.BD203454.Model;

import javax.persistence.*;

@Entity
@Table(name="Medicamento")
public class Medicamento {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    @Column(name="id_Medicamento")
    private  int id_Medicamento;

    @Column(name="nombre")
    private String nombre;

    @Column(name="fecha_caducidad")
    private String fecha_caducidad;

    @Column(name="sustancia_activa")
    private String sustancia_activa;

    public Medicamento(String nombre, String fecha_caducidad, String sustancia_activa, int id_Medicamento){
        this.id_Medicamento = id_Medicamento;
        this.nombre = nombre;
        this.fecha_caducidad = fecha_caducidad;
        this.sustancia_activa = sustancia_activa;
    }

    public  Medicamento(){}

    public int getId_Medicamento() { return id_Medicamento; }

    public void setId_Medicamento(int id_Medicamento) { this.id_Medicamento = id_Medicamento; }

    public String getNombre(){
        return nombre;
    }

    public void  setNombre(){ this.nombre=nombre; }

    public  String getFecha_caducidad(){
        return  fecha_caducidad;
    }

    public void setFecha_caducidad(){
        this.fecha_caducidad=fecha_caducidad;
    }

    public String getSustancia_activa(){
        return sustancia_activa;
    }

    public  void  setSustancia_activa(){
        this.sustancia_activa=sustancia_activa;
    }
}


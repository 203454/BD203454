package com.example.tipoMedicamentoApp.model;


import javax.persistence.*;

@Entity
public class TipoMedicamento {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int tipoMedicamentoId;

    @Column(name = "nombre")
    private String nombre;

    @Column(name = "descripcion")
    private String descripcion;


    public TipoMedicamento() {
    }

    public TipoMedicamento(int tipoMedicamentoId, String nombre, String descripcion) {
        this.tipoMedicamentoId=tipoMedicamentoId;
        this.nombre=nombre;
        this.descripcion=descripcion;
    }


    public int getTipoMedicamentoId() {
        return tipoMedicamentoId;
    }

    public void setTipoMedicamentoId(int tipoMedicamentoId) {
        this.tipoMedicamentoId = tipoMedicamentoId;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }
}


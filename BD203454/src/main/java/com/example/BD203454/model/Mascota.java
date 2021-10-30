package com.example.BD203454.model;


import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;

@Entity
@Table(name = "mascota")
public class Mascota {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int mascotaId;

    @Column (name = "nombre")
    private String nombre;

    @Column (name = "tipo")
    private String tipo;

    @Column (name = "motivoIngreso")
    private String motivoIngreso;

    @Column (name="fechaIngreso")
    private String fechaIngreso;

    @JsonBackReference
    @ManyToOne (fetch = FetchType.LAZY, optional = false)
    @JoinColumn (name = "id_duenio", nullable = false)
    private  Duenio duenio;


    public Mascota(){

    }

    public Mascota(int mascotaId, String nombre, String tipo, String motivoIngreso, String fechaIngreso,Duenio duenio ){
        this.mascotaId=mascotaId;
        this.nombre=nombre;
        this.tipo=tipo;
        this.motivoIngreso=motivoIngreso;
        this.fechaIngreso=fechaIngreso;
        this.duenio=duenio;
    }

    public int getMascotaId() {
        return mascotaId;
    }

    public void setMascotaId(int mascotaId) {
        this.mascotaId = mascotaId;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getTipo() {
        return tipo;
    }

    public void setTipo(String tipo) {
        this.tipo = tipo;
    }

    public String getMotivoIngreso() {
        return motivoIngreso;
    }

    public void setMotivoIngreso(String motivoIngreso) {
        this.motivoIngreso = motivoIngreso;
    }

    public String getFechaIngreso() {
        return fechaIngreso;
    }

    public void setFechaIngreso(String fechaIngreso) {
        this.fechaIngreso = fechaIngreso;
    }

    public Duenio getDuenio() {
        return duenio;
    }

    public void setDuenio(Duenio duenio) {
        this.duenio = duenio;
    }
}

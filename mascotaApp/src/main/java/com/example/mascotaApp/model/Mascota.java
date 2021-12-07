package com.example.mascotaApp.model;

import javax.persistence.*;

@Entity
public class Mascota {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int mascotaId;

    @Column(name = "nombre")
    private String nombre;

    @Column(name = "duenioId")
    private int duenioId;

    @Column(name = "tipoId")
    private int tipoId;

    @Column(name = "fechaIngreso")
    private String fechaIngreso;

    @Column(name = "motivoIngreso")
    private String motivoIngreso;

    public Mascota() {
    }

    public Mascota(int mascotaId, String nombre, int duenioId, int tipoId, String fechaIngreso, String motivoString) {
        this.mascotaId=mascotaId;
        this.nombre=nombre;
        this.duenioId=duenioId;
        this.tipoId=tipoId;
        this.fechaIngreso=fechaIngreso;
        this.motivoIngreso=motivoString;
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

    public int getDuenioId() {
        return duenioId;
    }

    public void setDuenioId(int duenioId) {
        this.duenioId = duenioId;
    }

    public int getTipoId() {
        return tipoId;
    }

    public void setTipoId(int tipoId) {
        this.tipoId = tipoId;
    }

    public String getFechaIngreso() {
        return fechaIngreso;
    }

    public void setFechaIngreso(String fechaIngreso) {
        this.fechaIngreso = fechaIngreso;
    }

    public String getMotivoIngreso() {
        return motivoIngreso;
    }

    public void setMotivoIngreso(String motivoIngreso) {
        this.motivoIngreso = motivoIngreso;
    }
}

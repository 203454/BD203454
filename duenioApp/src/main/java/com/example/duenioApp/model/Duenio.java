package com.example.duenioApp.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Duenio {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int duenioId;

    @Column(name = "nombre")
    private String nombre;

    @Column(name = "telefono")
    private int telefono;

    @Column(name = "direccion")
    private String direccion;

    public Duenio() {
    }

    public Duenio(int duenioId, String nombre, int telefono, String direccion) {
        this.duenioId=duenioId;
        this.nombre=nombre;
        this.telefono=telefono;
        this.direccion=direccion;
    }

    public int getDuenioId() {
        return duenioId;
    }

    public void setDuenioId(int duenioId) {
        this.duenioId = duenioId;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public int getTelefono() {
        return telefono;
    }

    public void setTelefono(int telefono) {
        this.telefono = telefono;
    }

    public String getDireccion() {
        return direccion;
    }

    public void setDireccion(String direccion) {
        this.direccion = direccion;
    }
}

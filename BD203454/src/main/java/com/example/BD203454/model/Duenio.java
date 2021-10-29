package com.example.BD203454.model;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;
import java.util.Set;

@Entity
@Table(name = "duenio")
public class Duenio {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id_duenio;

    @Column(name = "nombre")
    private String nombre;

    @Column(name = "telefono")
    private int telefono;

    @Column(name = "direccion")
    private String direccion;

    @JsonBackReference
    @OneToMany(mappedBy = "duenio", fetch = FetchType.LAZY, cascade = CascadeType.DETACH, orphanRemoval = false)
    private Set<Mascota> mascotas;

    public Duenio() {

    }

    public int getId_duenio() { return id_duenio; }

    public void setId_duenio(int id_duenio) { this.id_duenio = id_duenio; }

    public String getNombre() { return nombre; }

    public void setNombre(String nombre) { this.nombre = nombre; }

    public double getTelefono() { return telefono; }

    public void setTelefono(double telefono) { this.telefono = telefono; }

    public int getDireccion() { return direccion; }

    public void setDireccion(int direccion) { this.direccion = direccion; }

    public Set<Mascota> getMascotas() { return mascotas; }

    public void setMascotas(Set<Mascota> mascotas) { this.mascotas = mascotas; }

}

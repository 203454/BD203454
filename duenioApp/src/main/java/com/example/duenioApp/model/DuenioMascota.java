package com.example.duenioApp.model;

import java.util.List;

public class DuenioMascota extends Duenio{
    private List<Mascota> mascotas;

    public DuenioMascota(){}

    public List<Mascota> getMascotas() {
        return mascotas;
    }

    public void setMascotas(List<Mascota> mascotas) {
        this.mascotas = mascotas;
    }

    public DuenioMascota(List<Mascota> mascotas) {
        this.mascotas = mascotas;
    }

    public DuenioMascota(int duenioId, String nombre, int telefono, String direccion, List<Mascota> mascotas) {
        super(duenioId, nombre, telefono,direccion);
        this.mascotas = mascotas;
    }
}

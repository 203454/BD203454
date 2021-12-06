package com.example.tipoMascotaApp.model;

import java.util.List;

public class TipoMascotaMascota extends TipoMascota {
    private List<Mascota> mascotas;

    public TipoMascotaMascota(){}

    public List<Mascota> getMascotas() {
        return mascotas;
    }

    public void setMascotas(List<Mascota> mascotas) {
        this.mascotas = mascotas;
    }

    public TipoMascotaMascota(List<Mascota> mascotas) {
        this.mascotas = mascotas;
    }

    public TipoMascotaMascota(int tipoId, String nombre, String descripcion, List<Mascota> mascotas) {
        super(tipoId, nombre, descripcion);
        this.mascotas = mascotas;
    }
}

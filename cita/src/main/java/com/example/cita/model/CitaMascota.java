package com.example.cita.model;

import java.util.List;

public class CitaMascota extends Cita{
    private List<Mascota> mascotas;

    public CitaMascota(){}

    public List<Mascota> getMascotas() {
        return mascotas;
    }

    public void setMascotas(List<Mascota> mascotas) {
        this.mascotas = mascotas;
    }

    public CitaMascota(List<Mascota> mascotas) {
        this.mascotas = mascotas;
    }

    public CitaMascota(int idCita, String hora, String fecha, int tipoServicio,int  idMascota, List<Mascota> mascotas) {
        super(idCita, hora, fecha, tipoServicio, idMascota);
        this.mascotas = mascotas;
    }
}
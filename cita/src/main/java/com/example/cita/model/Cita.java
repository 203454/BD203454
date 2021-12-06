package com.example.cita.model;


import javax.persistence.*;

@Entity
@Table(name = "cita")
public class Cita {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idCita;

    @Column(name = "hora")
    private String hora;

    @Column(name = "fecha")
    private String fecha;

    @Column(name = "tipoServicio")
    private int tipoServicio;

    @Column(name = "idMascota")
    private int idMascota;

    public int getIdMascota() {
        return idMascota;
    }

    public void setIdMascota(int idMascota) {
        this.idMascota = idMascota;
    }

    public Cita(){

    }

    public Cita(int idCita, String hora, String fecha, int tipoServicio, int  idMascota) {
        this.idCita = idCita;
        this.hora = hora;
        this.fecha = fecha;
        this.tipoServicio = tipoServicio;
        this.idMascota = idMascota;
    }

    public int getIdCita() {
        return idCita;
    }

    public void setIdCita(int idCita) {
        this.idCita = idCita;
    }

    public String getHora() {
        return hora;
    }

    public void setHora(String hora) {
        this.hora = hora;
    }

    public String getFecha() {
        return fecha;
    }

    public void setFecha(String fecha) {
        this.fecha = fecha;
    }

    public int getTipoServicio() {
        return tipoServicio;
    }

    public void setTipoServicio(int tipoServicio) {
        this.tipoServicio = tipoServicio;
    }



}

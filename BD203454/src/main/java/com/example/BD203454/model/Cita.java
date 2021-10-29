package com.example.BD203454.model;

import net.bytebuddy.dynamic.loading.InjectionClassLoader;

import javax.persistence.*;

@Entity()
@Table(name = "Cita")
public class Cita {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="id_cita")
    private int idCita;

    @Column(name="mascotaId")
    private int mascotaId;

    @Column(name="Hora")
    private String hora;

    @Column(name="Fecha")
    private String fecha;

    @Column(name="Tipo_servicio")
    private String tipoDeServicio;


    public Cita(int idCita, int mascotaId, String hora, String fecha, String tipoDeServicio) {
        this.idCita = idCita;
        this.mascotaId = mascotaId;
        this.hora = hora;
        this.fecha = fecha;
        this.tipoDeServicio = tipoDeServicio;
    }

    public Cita(){}

    public int getIdCita() {
        return idCita;
    }

    public void setIdCita(int idCita) {
        this.idCita = idCita;
    }

    public int getMascotaId() {
        return mascotaId;
    }

    public void setMascotaId(int mascotaId) {
        this.mascotaId = mascotaId;
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

    public String getTipoDeServicio() {
        return tipoDeServicio;
    }

    public void setTipoDeServicio(String tipoDeServicio) {
        this.tipoDeServicio = tipoDeServicio;
    }
}

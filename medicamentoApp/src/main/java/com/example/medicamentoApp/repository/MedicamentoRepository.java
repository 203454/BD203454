package com.example.medicamentoApp.repository;

import com.example.medicamentoApp.model.Medicamento;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface MedicamentoRepository extends CrudRepository<Medicamento,String> {




    public List<Medicamento> findAll();

    public Medicamento findByMedicamentoId(int medicamentoId);



    List <Medicamento> findAllByTipoMedicamentoId(int tipoMedicamentoId);



    Medicamento save(Medicamento mascota);

    void delete(Medicamento mascota);
}

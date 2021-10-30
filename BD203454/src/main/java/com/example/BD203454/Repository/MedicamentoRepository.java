package com.example.BD203454.Repository;

import com.example.BD203454.Model.Medicamento;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface MedicamentoRepository extends CrudRepository<Medicamento, String>{

    List<Medicamento> findAll();
    Medicamento save(Medicamento medicamento);
}

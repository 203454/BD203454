package com.example.BD203454.repository;

import com.example.BD203454.model.Medicamento;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface MedicamentoRepository extends CrudRepository<Medicamento, String>{

    List<Medicamento> findAll();
    Medicamento save(Medicamento medicamento);
}

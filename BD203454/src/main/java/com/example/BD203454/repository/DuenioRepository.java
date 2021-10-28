package com.example.BD203454.repository;

import com.example.BD203454.model.Duenio;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface DuenioRepository extends CrudRepository<Duenio, Integer>{

    List<Duenio> findAll();

    Duenio save(Duenio duenio);

}

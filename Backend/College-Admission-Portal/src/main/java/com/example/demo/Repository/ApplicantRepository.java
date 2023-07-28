package com.example.demo.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.demo.Model.Applicant;

@Repository
public interface ApplicantRepository extends JpaRepository<Applicant, Long> {
}

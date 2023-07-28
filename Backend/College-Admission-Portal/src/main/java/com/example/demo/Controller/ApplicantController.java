package com.example.demo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Model.Applicant;
import com.example.demo.Repository.ApplicantRepository;

@RestController
@RequestMapping("/applicants")
@CrossOrigin(origins = "*")
public class ApplicantController {
    @Autowired
    private ApplicantRepository applicantRepository;

    @PostMapping
    public Applicant saveApplicant(@RequestBody Applicant applicant) {
        return applicantRepository.save(applicant);
    }
    @GetMapping
    public List<Applicant> getAllApplicants() {
        return applicantRepository.findAll();
    }
}
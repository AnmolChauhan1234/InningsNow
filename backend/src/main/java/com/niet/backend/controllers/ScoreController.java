package com.niet.backend.controllers;


import com.niet.backend.services.ScoreServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ScoreController {

    @Autowired
    ScoreServiceImpl scoreServiceImpl;
}

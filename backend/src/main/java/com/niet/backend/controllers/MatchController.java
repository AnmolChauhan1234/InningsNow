package com.niet.backend.controllers;


import com.niet.backend.interfaces.MatchService;
import com.niet.backend.services.MatchServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MatchController {
    @Autowired
    MatchServiceImpl matchServiceImpl;
}

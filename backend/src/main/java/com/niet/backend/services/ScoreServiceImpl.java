package com.niet.backend.services;

import com.niet.backend.interfaces.ScoreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ScoreServiceImpl implements ScoreService {

    @Autowired
    ScoreService scoreService;
}

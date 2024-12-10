package com.niet.backend.services;

import com.niet.backend.interfaces.ScorecardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ScorecardServiceImpl implements ScorecardService {

    @Autowired
    ScorecardService scorecardService;
}


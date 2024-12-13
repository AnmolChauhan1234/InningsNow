package com.niet.backend.services;

import com.niet.backend.interfaces.MatchService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MatchServiceImpl implements MatchService {
    @Autowired
    MatchService matchService;
}

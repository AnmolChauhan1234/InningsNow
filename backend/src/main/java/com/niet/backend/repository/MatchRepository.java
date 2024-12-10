package com.niet.backend.repository;

import com.niet.backend.entitiy.Match;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MatchRepository extends JpaRepository<Match,Long> {
}

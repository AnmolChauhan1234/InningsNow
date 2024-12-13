package com.niet.backend.repository;

import com.niet.backend.entitiy.Score;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ScoreRepository extends JpaRepository<Score,Long> {
}

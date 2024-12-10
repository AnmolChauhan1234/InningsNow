package com.niet.backend.entitiy;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "score")
public class Score {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long scoreId;

    @ManyToOne
    @JoinColumn(name = "match_id")
    private Match match;

    private Long strikerId;
    private Long nonStrikerId;
    private Long bowlerId;

    private int runs;
    private int wickets;
    private int balls;
}


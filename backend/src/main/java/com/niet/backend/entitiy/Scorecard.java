package com.niet.backend.entitiy;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "scorecard")
public class Scorecard {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long scorecardId;

    @ManyToOne
    @JoinColumn(name = "match_id")
    private Match match;

    private Long playerId;
    private String playerName;
    private int runs;
    private int ballsFaced;
    private int ballsBowled;
    private int fours;
    private int sixes;
    private int wicketsTaken;

    private boolean isStriker;
    private boolean isNonStriker;
    private boolean isCurrBowler;
}


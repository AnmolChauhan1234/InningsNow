package com.niet.backend.entitiy;
import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;
import java.time.LocalTime;

@Data
@Entity
@Table(name = "match")
public class Match {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long matchId;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    private String team1Name;
    private String team2Name;
    private int totalOvers;
    private LocalDate matchDate;
    private LocalTime matchTime;
    private String venue;
    private String bowlType;
    private String matchFormat;
    private String pitchType;
    private String toss;
    private String tossWinner;
    private String tossDecision;
}


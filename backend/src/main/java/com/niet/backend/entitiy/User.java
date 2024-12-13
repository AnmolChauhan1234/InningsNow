package com.niet.backend.entitiy;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "user")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String email;
    private String phoneNo;

    @OneToMany
    @JoinColumn(name = "match_id")
    private Match match;
}


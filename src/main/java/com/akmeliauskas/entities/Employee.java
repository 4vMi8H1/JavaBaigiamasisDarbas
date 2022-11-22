package com.akmeliauskas.entities;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;

@Entity
@Table(name = "employees")
public class Employee {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false)
    private Long id;

    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(nullable = false)
    private Long empId;

    @Column(nullable = false, length = 5000)
    private int numberOfPoints;

    @ManyToOne
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JoinColumn(name = "users_id", referencedColumnName = "id", nullable = false)
    private User users;

    public Employee() {
    }

    public Employee(Long empId, int numberOfPoints, User users) {
        this.empId = empId;
        this.numberOfPoints = numberOfPoints;
        this.users = users;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getEmpId() {
        return empId;
    }

    public void setEmpId(Long empId) {
        this.empId = empId;
    }

    public int getNumberOfPoints() {
        return numberOfPoints;
    }

    public void setNumberOfPoints(int numberOfPoints) {
        this.numberOfPoints = numberOfPoints;
    }

    public User getUsers() {
        return users;
    }

    public void setUsers(User users) {
        this.users = users;
    }
}

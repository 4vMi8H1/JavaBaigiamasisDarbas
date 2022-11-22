package com.akmeliauskas.controllers;

import com.akmeliauskas.entities.Employee;
import com.akmeliauskas.services.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin
@RestController
public class EmployeeController {

    @Autowired
    private EmployeeService employeeService;

    @PostMapping("/addEmployee")
    public Employee addEmployee(@RequestBody Employee employee) {
        return employeeService.createEmployee(employee);
    }

    @GetMapping("/Employees")
    public List<Employee> getAllEmployee() {
        return employeeService.getEmployees();
    }
}

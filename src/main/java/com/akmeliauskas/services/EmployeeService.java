package com.akmeliauskas.services;

import com.akmeliauskas.dao.EmployeeRepository;
import com.akmeliauskas.entities.Employee;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployeeService {

    @Autowired
    private EmployeeRepository employeeRepository;

    public Employee createEmployee(Employee employee){
        return employeeRepository.save(employee);
    }

    public List<Employee> getEmployees() {
        return employeeRepository.findAll();
    }

    // update -> nereikia, nes padaręs, kad būtų vieno vartotojo daug įvertinimo įrašų -> kiekvienam darbuotojui daug ivertinimu, kad ir nuo vieno vartotojo
    // delete (yra sukurta user) -> nereikia, nes išsitrins automatiškai kai bus ištintas user'is (dėl sukurtų ryšių tarp lentų)
}

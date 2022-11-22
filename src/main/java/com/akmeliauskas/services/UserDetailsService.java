package com.akmeliauskas.services;

import com.akmeliauskas.dao.UserDetailsRepository;
import com.akmeliauskas.dao.UserRepository;
import com.akmeliauskas.entities.UserDetails;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

import java.util.List;

@Service
public class UserDetailsService {

    @Autowired
    private UserDetailsRepository userDetailsRepository;

    @Autowired
    private UserRepository usersRepository;

    public UserDetails createUserDetails(UserDetails userDetails){
        String regexNameAndLastName = "[a-zA-Z]+";
        String regexReplace = "[\\W0-9]+";

        String nameCheckUp = userDetails.getName().toString();
        String lastNameCheckUp = userDetails.getLastName().toString();
        String myDateTimeString = getMyDateTime();

        if (!nameCheckUp.matches(regexNameAndLastName)) {
            userDetails.setName(regexReplaseMethod(nameCheckUp, regexReplace,
                    "NumatytasVardas", myDateTimeString));
        }

        if (!lastNameCheckUp.matches(regexNameAndLastName)) {
            userDetails.setLastName(regexReplaseMethod(lastNameCheckUp, regexReplace,
                    "NumatytaPavarde", myDateTimeString));
        }

        usersRepository.save(userDetails.getUsers());
        return userDetailsRepository.save(userDetails);
    }

    public UserDetails getUserDetailsById(Long id) {
        return userDetailsRepository.findById(id).orElse(null);
    }

    public List<UserDetails> getUsersDetails() {
        return userDetailsRepository.findAll();
    }

    // update -> nereikia, nes šios lentos user'io atributai neturi atsinaujinti
    // delete (yra sukurta user) -> nereikia, nes išsitrins automatiškai kai bus ištintas user'is (dėl sukurtų ryšių tarp lentų)

    public String regexReplaseMethod(String txtCheckUp, String regexReplace,
                                     String nameUserName, String userDateTimeId) {
        txtCheckUp = txtCheckUp.replaceAll(regexReplace, "");
        if (txtCheckUp.isEmpty()) {
            txtCheckUp = nameUserName + "__"  + userDateTimeId;
        }
        return txtCheckUp;
    }

    public String getMyDateTime() {
        LocalDateTime myDateObj = LocalDateTime.now();
        DateTimeFormatter myFormatObj = DateTimeFormatter.ofPattern("yyyyMMdd_HHmmss");
        String formattedDate = myDateObj.format(myFormatObj);
        return formattedDate;
    }
}

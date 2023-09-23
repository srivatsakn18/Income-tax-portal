package com.income.tax.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;

@RestController
@RequestMapping(value="/dashboard")
@CrossOrigin(origins = "http://localhost:4200")
public class Dashboard {

    @GetMapping(value = "")
    public ResponseEntity test()
    {
        HashMap<String, String> test = new HashMap<String, String>();
        test.put("msg", "Hello World");
        return new ResponseEntity(test, HttpStatus.OK);
    }

}

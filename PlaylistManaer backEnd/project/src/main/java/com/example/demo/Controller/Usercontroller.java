package com.example.demo.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Entity.PlayList;
import com.example.demo.Entity.User;
import com.example.demo.Repository.PlayListRepo;
import com.example.demo.Repository.Userrepo;
@CrossOrigin
@RestController
public class Usercontroller {
	@Autowired
	public Userrepo play1;
	@PostMapping("/postplay1")
	public ResponseEntity<String> saveDet(@RequestBody User k2) {
		try {
		play1.save(k2);
		return  ResponseEntity.ok("Data Added");
		}
		catch(Exception ex) {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("ERROR"+ex.getMessage());
		}
	}
	@GetMapping("/getuser")
	public List<User> getDetails() {
		return play1.findAll();
	}
}

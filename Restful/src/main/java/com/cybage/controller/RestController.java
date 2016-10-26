package com.cybage.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.util.UriComponentsBuilder;

import com.cybage.model.Category;
import com.cybage.model.User;
import com.cybage.service.HomeService;

@org.springframework.web.bind.annotation.RestController
@RequestMapping("/home")
public class RestController 
{
	@Autowired
	HomeService service;
	
	public RestController() {
		System.out.println("rest controller");
	}
	
	
	@RequestMapping(value = "/home")
	public String homepgae()
	{
		System.out.println("in Show Home");
		return "homepage";
	}
	
	@RequestMapping(value = "/list/categories", method = RequestMethod.GET)
	 public ResponseEntity<List<Category>> listAllCatgories() 
		{
			System.out.println("List cat function");
	        List<Category> cList = service.getCategories();
	        for (Category cat : cList) {
				System.out.println(cat);
			}
	        if(cList.isEmpty()){
	            return new ResponseEntity<List<Category>>(HttpStatus.NO_CONTENT);//You many decide to return HttpStatus.NOT_FOUND
	        }
	        return new ResponseEntity<List<Category>>(cList, HttpStatus.OK);
	    }
	
	

	@RequestMapping(value = "/list/user", method = RequestMethod.GET)
    public ResponseEntity<List<User>> listAllUsers() 
	{
		System.out.println("List cat function");
        List<User> uList = service.getUser();
        for (User cat : uList) {
			System.out.println(cat);
		}
        if(uList.isEmpty()){
            return new ResponseEntity<List<User>>(HttpStatus.NO_CONTENT);//You many decide to return HttpStatus.NOT_FOUND
        }
        return new ResponseEntity<List<User>>(uList, HttpStatus.OK);
    }
	
	
	
	@RequestMapping(value = "/newCategory", method = RequestMethod.POST)
    public ResponseEntity<Void> createUser(@RequestBody Category category,UriComponentsBuilder ucBuilder) {
        System.out.println("Creating Category " + category.getCategoryName());

        service.saveCategory(category);
 
        HttpHeaders headers = new HttpHeaders();
        return new ResponseEntity<Void>(headers, HttpStatus.CREATED);
    }
 
}

package com.cybage.service;

import java.util.List;

import com.cybage.model.Category;
import com.cybage.model.User;


public interface HomeService 
{
	
	List<Category> getCategories();
	List<User> getUser();
	Integer saveCategory(Category category);
}

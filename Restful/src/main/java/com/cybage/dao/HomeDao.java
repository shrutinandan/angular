package com.cybage.dao;

import java.util.List;

import com.cybage.model.Category;
import com.cybage.model.User;


public interface HomeDao
{
	
	List<Category> getCategories();
	List<User> getUser();
	Integer saveCategory(Category category);
}

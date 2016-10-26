package com.cybage.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cybage.dao.HomeDao;
import com.cybage.model.Category;
import com.cybage.model.User;


@Service
public class HomeServiceImpl implements HomeService 
{
	@Autowired
	HomeDao dao;
	
	public HomeServiceImpl() {
		System.out.println("Service");
	}
	
	

	@Override
	public List<Category> getCategories() 
	{
		return dao.getCategories();
	}

	@Override
	public Integer saveCategory(Category category)
	{		
		return dao.saveCategory(category);
	}



	@Override
	public List<User> getUser() {
		return dao.getUser();
	}

}

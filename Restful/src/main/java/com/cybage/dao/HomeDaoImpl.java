package com.cybage.dao;

import java.util.List;

import javax.transaction.Transactional;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.cybage.model.Category;
import com.cybage.model.User;


@Repository
@Transactional
public class HomeDaoImpl implements HomeDao
{
	@Autowired
	private SessionFactory factory;	
	
	public HomeDaoImpl() {
		System.out.println("Dao");
	}



	@Override
	public List<Category> getCategories() 
	{
		return factory.getCurrentSession().createQuery("SELECT r from Category r").list();
	}

	@Override
	public Integer saveCategory(Category category) 
	{
		Integer id=(Integer) factory.getCurrentSession().save(category);
		return id;
		
	}



	@Override
	public List<User> getUser() {
		return factory.getCurrentSession().createQuery("SELECT r from User r").list();
	}

}

package com.wts.river.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.wts.river.bean.TodoItem;
import com.wts.river.mapper.TodosMapper;
import com.wts.river.service.ex.DataNotFoundException;

@Service
public class TodosService {

	@Autowired
	private TodosMapper todosMapper;
	
	public Integer addTodo(TodoItem todoItem) {
		Integer affectedRows = todosMapper.insert(todoItem);
		return affectedRows;
	}
	
	public List<TodoItem> findAll(Integer uid) {
		return todosMapper.findAll(uid);
	}
	
	public TodoItem findOne(Integer uid, String id) {
		return todosMapper.findOne(uid, id);
	}
	
	public Integer deleteItem(Integer uid, String id) {
		Integer affectedRows = todosMapper.delete(uid, id);
		if(affectedRows != 1) {
			throw new DataNotFoundException("Data already deleted!");
		}
		return affectedRows;
	}

	public Integer updateStatus(Integer uid, String id, Integer isCompleted) {
		Integer affectedRows = todosMapper.update(uid, id, isCompleted);
		return affectedRows;
	}
}

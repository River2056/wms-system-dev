package com.wts.river.service;

import java.util.List;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.wts.river.bean.TodoItem;

@RunWith(SpringRunner.class)
@SpringBootTest
public class TodosServiceTestCase {

	@Autowired
	private TodosService todosService;
	
	@Test
	public void testInsert() {
		TodoItem todo = new TodoItem();
		todo.setUid(1);
		todo.setTitle("Finish todo list functionality...");
		todo.setIsCompleted(0);
		Integer affectedRows = todosService.addTodo(todo);
		System.out.println("Done inserting! affectedRows: " + affectedRows);
	}
	
	@Test
	public void testFindAll() {
		Integer uid = 1;
		List<TodoItem> todoList = todosService.findAll(uid);
		System.out.println(todoList);
	}
	
	@Test
	public void testDelete() {
		Integer uid = 1; String id = "1";
		Integer affectedRows = todosService.deleteItem(uid, id);
		System.out.println("Done deleting! affectedRows: " + affectedRows);
	}
	
	@Test
	public void testUpdate() {
		Integer uid = 1; String id = "1"; Integer isCompleted = 1;
		Integer affectedRows = todosService.updateStatus(uid, id, isCompleted);
		System.out.println("Done updating! affectedRows: " + affectedRows);
	}
}

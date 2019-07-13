package com.wts.river.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.wts.river.bean.ResponseResult;
import com.wts.river.bean.TodoItem;
import com.wts.river.service.TodosService;

@RestController
@RequestMapping("/todos")
public class TodosController {
	public static final int SUCCESS = 1;
	
	@Autowired
	private TodosService todosService;

	@PostMapping("/add.do")
	public ResponseResult<TodoItem> handleAdd(String id, Integer uid, String title, Integer isCompleted) {
		TodoItem newTodo = new TodoItem();
		newTodo.setId(id);
		newTodo.setUid(uid);
		newTodo.setTitle(title);
		newTodo.setIsCompleted(isCompleted);
		Integer affectedRows = todosService.addTodo(newTodo);
		return new ResponseResult<TodoItem>(SUCCESS, newTodo);
	}
	
	@GetMapping("/list.do")
	public ResponseResult<List<TodoItem>> handleList() {
		return new ResponseResult<List<TodoItem>>(todosService.findAll(1));
	}
	
	@GetMapping("/delete.do")
	public ResponseResult<Void> handleDelete(@RequestParam("id") String id) {
		Integer uid = 1;
		todosService.deleteItem(uid, id);
		return new ResponseResult<Void>(SUCCESS);
	}
	
	@GetMapping("/update.do")
	public ResponseResult<TodoItem> handleUpdate(String id, Integer isCompleted) {
		Integer uid = 1;
		todosService.updateStatus(uid, id, isCompleted);
		return new ResponseResult<TodoItem>(SUCCESS, todosService.findOne(uid, id));
	}
	
}

package com.wts.river.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Options;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import com.wts.river.bean.TodoItem;

@Mapper
public interface TodosMapper {

	@Insert("INSERT INTO wms_todos (id, uid, title, is_completed) VALUES (#{id}, #{uid}, #{title}, #{isCompleted})")
	//@Options(useGeneratedKeys = true, keyProperty = "id")
	Integer insert(TodoItem todoItem);
	
	@Select("SELECT id, uid, title, is_completed AS isCompleted FROM wms_todos WHERE uid = #{uid} ORDER BY id DESC")
	List<TodoItem> findAll(Integer uid);
	
	@Select("SELECT id, uid, title, is_completed AS isCompleted FROM wms_todos WHERE uid = #{uid} AND id = #{id}")
	TodoItem findOne(
			@Param("uid") Integer uid, 
			@Param("id") String id);
	
	@Delete("DELETE FROM wms_todos WHERE uid = #{uid} AND id = #{id}")
	Integer delete(
			@Param("uid") Integer uid, 
			@Param("id") String id);
	
	@Update("UPDATE wms_todos SET is_completed = #{isCompleted} WHERE uid = #{uid} AND id = #{id}")
	Integer update(
			@Param("uid") Integer uid, 
			@Param("id") String id, 
			@Param("isCompleted") Integer isCompleted);
}

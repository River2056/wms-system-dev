package com.wts.river.bean;

import java.io.Serializable;

public class TodoItem implements Serializable {

	private static final long serialVersionUID = -1832869889654075437L;
	
	private String id;
	private Integer uid;
	private String title;
	private Integer isCompleted;

	public TodoItem() {
		super();
	}

	public TodoItem(String id, Integer uid, String title, Integer isCompleted) {
		super();
		this.id = id;
		this.uid = uid;
		this.title = title;
		this.isCompleted = isCompleted;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public Integer getUid() {
		return uid;
	}

	public void setUid(Integer uid) {
		this.uid = uid;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public Integer getIsCompleted() {
		return isCompleted;
	}

	public void setIsCompleted(Integer isCompleted) {
		this.isCompleted = isCompleted;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((id == null) ? 0 : id.hashCode());
		result = prime * result + ((isCompleted == null) ? 0 : isCompleted.hashCode());
		result = prime * result + ((title == null) ? 0 : title.hashCode());
		result = prime * result + ((uid == null) ? 0 : uid.hashCode());
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		TodoItem other = (TodoItem) obj;
		if (id == null) {
			if (other.id != null)
				return false;
		} else if (!id.equals(other.id))
			return false;
		if (isCompleted == null) {
			if (other.isCompleted != null)
				return false;
		} else if (!isCompleted.equals(other.isCompleted))
			return false;
		if (title == null) {
			if (other.title != null)
				return false;
		} else if (!title.equals(other.title))
			return false;
		if (uid == null) {
			if (other.uid != null)
				return false;
		} else if (!uid.equals(other.uid))
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "TodoItem [id=" + id + ", uid=" + uid + ", title=" + title + ", isCompleted=" + isCompleted + "]";
	}

}

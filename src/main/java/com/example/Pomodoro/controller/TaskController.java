package com.example.Pomodoro.controller;

import com.example.Pomodoro.model.TaskEntity;
import com.example.Pomodoro.repository.TaskRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class TaskController {

    private final TaskRepository taskRepository;

    public TaskController(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

    @GetMapping(value = "/task/all")
    public ResponseEntity<List<TaskEntity>> getAllTasks() {
        return ResponseEntity.ok(taskRepository.findAll());
    }


    @PostMapping(value = "/task/add")
    public ResponseEntity<TaskEntity> saveTask(@RequestBody TaskEntity taskEntity) {
        return ResponseEntity.ok(taskRepository.save(taskEntity));
    }
}

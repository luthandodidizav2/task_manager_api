
export interface Task {
  id: string;
  projectId: string;
  title: string;
  description?: string | null;
//   status: TaskStatus;
//   priority: TaskPriority;
  dueDate?: Date | null;
  assigneeId?: string | null;
  createdAt: Date;
  updatedAt: Date;
}

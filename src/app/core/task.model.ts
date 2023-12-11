export interface Task{
    id: string;
    title: string;
}

export interface Column{
    title: string;
    tasks: Task[];
}
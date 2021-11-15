---
- terminalのcommand
prisma format



---

npm run prisma-repl(motive ない)

relation ：id 同士の結びつき

# example using prisma-repl

```
 await db.task.findMany({select: {title: true}})
[ { title: 'child1' }, { title: 'parent' }, { title: 'child2' } ]

> await db.task.findMany({where: {title: 'parent'}, select: {title: true}})
[ { title: 'parent' } ]

> await db.task.findMany({include: {subTasks: true, parentTask: true}})
[
  { child1 },
  { parent },
  { child2 }
]
```

# many to many

```
> tasks = await db.task.findMany({include: {labelsOnTasks: {include: {label: true}}}})
[
  {
    title: 'child1',
    parentTaskId: 'ckw0pftq50318otvbgehk91yj',
    labelsOnTasks: [ [Object] ]
  },
  {
    title: 'parent',
    labelsOnTasks: [ [Object], [Object], [Object] ]
  },
  {
    title: 'child2',
    parentTaskId: 'ckw0pftq50318otvbgehk91yj',
    labelsOnTasks: [ [Object] ]
  }
]

> tasks[0].labelsOnTasks
[
  {
    taskId: 'ckw0pfidm0295otvbsbkxigk2',
    labelId: 'ckw0r6vjt005864vbnfhnzykx',
    label: {
      id: 'ckw0r6vjt005864vbnfhnzykx',
      createdAt: 2021-11-15T14:19:47.129Z,
      updatedAt: 2021-11-15T14:19:42.168Z,
      name: 'first',
      color: null
    }
  }
]

taskも出したかったら
> tasks = await db.task.findMany({include: {labelsOnTasks: {include: {label: true, task: true}}}})
```

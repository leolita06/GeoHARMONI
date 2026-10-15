import Dexie from 'dexie';
export const db=new Dexie('GeoPlannerDB');
db.version(1).stores({students:'++id,name,className,groupName,createdAt',simulations:'++id,studentId,status,updatedAt',mapTiles:'++id,simulationId,[simulationId+row+column]',decisions:'++id,simulationId,tileId,createdAt',reflections:'++id,simulationId,questionId,updatedAt',settings:'++id,key'});

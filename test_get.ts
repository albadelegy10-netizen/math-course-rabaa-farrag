import { lessonService } from './lessonService';
const run = async () => {
    const lessons = await lessonService.getAllLessons();
    const est12026 = lessons.find(l => l.id === 'est1_2026_march');
    console.log(est12026);
}
run();

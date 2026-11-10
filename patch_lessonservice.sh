sed -i 's/lessonCache\[lesson.id\] = { ...current, ...cleanUndefined(lesson) };/lessonCache[lesson.id] = { ...current, ...cleanUndefined(metadata) } as any;/g' lessonService.ts
